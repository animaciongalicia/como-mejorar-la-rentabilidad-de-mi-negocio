import { NextRequest, NextResponse } from 'next/server'

// POST /api/subscribe
// Accepts: { email, source?, leadMagnet?, pilar? }
//
// Integration: Brevo (ex-Sendinblue) — https://app.brevo.com
// Required env vars:
//   BREVO_API_KEY       — API key from Brevo dashboard → SMTP & API → API Keys
//   BREVO_LIST_ID       — ID of the list where subscribers go (number, find in Contacts → Lists)
//
// Weekly digest:
//   Option A — Brevo native: Automations → New automation → RSS Campaign
//              Feed URL: https://focorentabilismo.com/feed.xml  Frequency: weekly
//   Option B — Make.com: Watch RSS → Brevo "Create Campaign" module → Schedule send
//
// Segmentation: subscribers tagged by pilar for targeted campaigns

const BREVO_API_URL = 'https://api.brevo.com/v3'

interface SubscribeBody {
  email: string
  source?: string
  leadMagnet?: string
  pilar?: string
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export async function POST(request: NextRequest) {
  try {
    const body: SubscribeBody = await request.json()
    const { email, source, leadMagnet, pilar } = body

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: 'Por favor introduce un email válido.' },
        { status: 400, headers: corsHeaders }
      )
    }

    const cleanEmail = email.toLowerCase().trim()

    // ── Brevo integration ────────────────────────────────────────────────────
    const apiKey = process.env.BREVO_API_KEY
    const listId = process.env.BREVO_LIST_ID ? parseInt(process.env.BREVO_LIST_ID) : null

    if (apiKey && listId) {
      const attributes: Record<string, string> = { FUENTE: source || 'web' }
      if (pilar) attributes['PILAR_INTERES'] = pilar
      if (leadMagnet) attributes['LEAD_MAGNET'] = leadMagnet

      const brevoRes = await fetch(`${BREVO_API_URL}/contacts`, {
        method: 'POST',
        headers: {
          'api-key': apiKey,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: cleanEmail,
          attributes,
          listIds: [listId],
          updateEnabled: true,
        }),
      })

      if (!brevoRes.ok) {
        const err = await brevoRes.json().catch(() => ({}))
        const isDuplicate =
          brevoRes.status === 400 &&
          (err as { code?: string }).code === 'duplicate_parameter'
        if (!isDuplicate) {
          console.error('[Subscribe] Brevo error:', brevoRes.status, err)
        }
      } else {
        console.log('[Subscribe] Added to Brevo list', listId, ':', cleanEmail)
      }
    } else {
      console.log('[Subscribe] DEV — no Brevo config. Email:', cleanEmail)
      console.log('[Subscribe] Add BREVO_API_KEY and BREVO_LIST_ID to .env.local')
    }

    // ── Make.com webhook (optional parallel notification) ────────────────────
    const makeUrl = process.env.MAKE_WEBHOOK_SUBSCRIBE_URL
    if (makeUrl) {
      fetch(makeUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail, source, pilar, leadMagnet }),
      }).catch((err) => console.warn('[Subscribe] Make.com failed:', err))
    }

    return NextResponse.json(
      { success: true, message: '¡Genial! Ya estás suscrito. Revisa tu bandeja de entrada.' },
      { status: 200, headers: corsHeaders }
    )
  } catch (error) {
    console.error('[Subscribe] Error:', error)
    return NextResponse.json(
      { success: false, message: 'Error interno. Por favor inténtalo de nuevo.' },
      { status: 500, headers: corsHeaders }
    )
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders })
}
