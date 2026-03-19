import { NextRequest, NextResponse } from 'next/server'
import { writeFileSync, readFileSync, existsSync } from 'fs'
import { join } from 'path'

// POST /api/subscribe
// Accepts: { email, source?, leadMagnet?, pilar? }
//
// Current implementation: logs to console + saves to /tmp/subscribers.json (dev mode)
//
// TODO: Integration points:
//   - ActiveCampaign: POST to process.env.ACTIVECAMPAIGN_BASE_URL/api/3/contacts
//     with api-key header, tag by pilar/source for segmentation
//   - Google Sheets: Use Google Sheets API or Make.com to append row
//   - Supabase: Insert into subscribers table with pilar/source/leadMagnet columns
//     await supabase.from('subscribers').insert({ email, source, pilar, lead_magnet, created_at })
//   - Make.com webhook: POST to MAKE_WEBHOOK_SUBSCRIBE_URL with full payload

interface SubscribeBody {
  email: string
  source?: string
  leadMagnet?: string
  pilar?: string
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  try {
    const body: SubscribeBody = await request.json()
    const { email, source, leadMagnet, pilar } = body

    // Validate email
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: 'Por favor introduce un email válido.' },
        { status: 400, headers: corsHeaders }
      )
    }

    const subscriber = {
      email: email.toLowerCase().trim(),
      source: source || 'unknown',
      leadMagnet: leadMagnet || null,
      pilar: pilar || null,
      subscribedAt: new Date().toISOString(),
    }

    // Log subscription
    console.log('[Subscribe] New subscriber:', subscriber)

    // Dev mode: save to /tmp/subscribers.json
    try {
      const filePath = join('/tmp', 'focorentabilismo-subscribers.json')
      let subscribers: typeof subscriber[] = []

      if (existsSync(filePath)) {
        const raw = readFileSync(filePath, 'utf-8')
        subscribers = JSON.parse(raw)
      }

      // Avoid duplicates in dev storage
      const alreadyExists = subscribers.some((s) => s.email === subscriber.email)
      if (!alreadyExists) {
        subscribers.push(subscriber)
        writeFileSync(filePath, JSON.stringify(subscribers, null, 2))
        console.log('[Subscribe] Saved to /tmp. Total subscribers:', subscribers.length)
      } else {
        console.log('[Subscribe] Email already in list (dev):', subscriber.email)
      }
    } catch (fileError) {
      // File save failure is non-critical in dev
      console.warn('[Subscribe] Could not save to /tmp:', fileError)
    }

    // TODO: ActiveCampaign integration
    // const acRes = await fetch(`${process.env.ACTIVECAMPAIGN_BASE_URL}/api/3/contacts`, {
    //   method: 'POST',
    //   headers: { 'Api-Token': process.env.ACTIVECAMPAIGN_API_KEY!, 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ contact: { email, fieldValues: [{ field: 'PILAR', value: pilar }] } }),
    // })

    // TODO: Supabase integration
    // const { error } = await supabase.from('subscribers').insert(subscriber)

    // TODO: Make.com webhook
    // await fetch(process.env.MAKE_WEBHOOK_SUBSCRIBE_URL!, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(subscriber),
    // })

    return NextResponse.json(
      {
        success: true,
        message: '¡Genial! Ya estás suscrito. Revisa tu bandeja de entrada.',
      },
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

// Handle CORS preflight
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  )
}
