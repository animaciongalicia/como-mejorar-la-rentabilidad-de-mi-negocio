import { NextRequest, NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/posts'
import { BASE_URL } from '@/lib/seo'

// POST /api/send-digest
// Sends the weekly digest email with posts published in the last 7 days.
//
// Usage:
//   - Trigger from Make.com every Monday at 09:00 (HTTP module → POST this URL)
//   - Or Vercel Cron (vercel.json) — see bottom of this file
//   - Protected by DIGEST_SECRET to avoid unauthorized sends
//
// Required env vars:
//   BREVO_API_KEY       — same as subscribe route
//   BREVO_LIST_ID       — same as subscribe route (sends to full list)
//   BREVO_SENDER_EMAIL  — e.g. hola@focorentabilismo.com
//   BREVO_SENDER_NAME   — e.g. Foco Rentabilismo
//   DIGEST_SECRET       — any random string, used as Bearer token

const BREVO_API_URL = 'https://api.brevo.com/v3'

function getPostsFromLastDays(days: number) {
  const cutoff = new Date()
  cutoff.setDate(cutoff.getDate() - days)
  return getAllPosts().filter((p) => {
    const postDate = new Date(p.date)
    return postDate >= cutoff && (!p.tipo || p.tipo === 'articulo' || p.tipo === 'caso-practico')
  })
}

function buildDigestHtml(posts: ReturnType<typeof getAllPosts>): string {
  const postRows = posts
    .map(
      (p) => `
    <tr>
      <td style="padding:16px 0;border-bottom:1px solid #e5e7eb;">
        <p style="margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#9ca3af;font-weight:700;">
          ${p.categoria.replace(/-/g, ' ')}
        </p>
        <a href="${BASE_URL}/blog/${p.slug}/" style="font-size:17px;font-weight:900;color:#111827;text-decoration:none;line-height:1.3;">
          ${p.title}
        </a>
        <p style="margin:6px 0 8px;font-size:14px;color:#6b7280;line-height:1.5;">
          ${p.description || ''}
        </p>
        <a href="${BASE_URL}/blog/${p.slug}/" style="font-size:13px;font-weight:700;color:#0d9488;text-decoration:none;">
          Leer artículo →
        </a>
      </td>
    </tr>`
    )
    .join('')

  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#111827;padding:24px 32px;">
            <p style="margin:0;font-size:11px;text-transform:uppercase;letter-spacing:2px;color:#9ca3af;font-weight:700;">
              Newsletter semanal
            </p>
            <h1 style="margin:4px 0 0;font-size:22px;font-weight:900;color:#ffffff;line-height:1.2;">
              Foco Rentabilismo
            </h1>
          </td>
        </tr>

        <!-- Intro -->
        <tr>
          <td style="padding:24px 32px 8px;">
            <p style="margin:0;font-size:15px;color:#374151;line-height:1.6;">
              Esto es lo que se publicó esta semana. Sin relleno. Solo lo que te sirve.
            </p>
          </td>
        </tr>

        <!-- Posts -->
        <tr>
          <td style="padding:8px 32px 24px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${postRows}
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f3f4f6;padding:20px 32px;border-top:1px solid #e5e7eb;">
            <p style="margin:0;font-size:12px;color:#9ca3af;line-height:1.5;">
              Recibes esto porque te suscribiste en focorentabilismo.com.<br>
              <a href="${BASE_URL}" style="color:#0d9488;">Ver todos los artículos</a>
              &nbsp;·&nbsp;
              <a href="{{unsubscribe}}" style="color:#9ca3af;">Darse de baja</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

export async function POST(request: NextRequest) {
  // Auth check
  const authHeader = request.headers.get('authorization')
  const secret = process.env.DIGEST_SECRET
  if (secret && authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const apiKey = process.env.BREVO_API_KEY
  const listId = process.env.BREVO_LIST_ID ? parseInt(process.env.BREVO_LIST_ID) : null
  const senderEmail = process.env.BREVO_SENDER_EMAIL || 'hola@focorentabilismo.com'
  const senderName = process.env.BREVO_SENDER_NAME || 'Foco Rentabilismo'

  if (!apiKey || !listId) {
    return NextResponse.json({ error: 'Missing BREVO_API_KEY or BREVO_LIST_ID' }, { status: 500 })
  }

  // Get posts from last 7 days
  const recentPosts = getPostsFromLastDays(7)

  if (recentPosts.length === 0) {
    return NextResponse.json({ success: true, message: 'No new posts this week. Digest not sent.' })
  }

  const subject =
    recentPosts.length === 1
      ? `Nuevo artículo: ${recentPosts[0].title}`
      : `${recentPosts.length} artículos nuevos esta semana — Foco Rentabilismo`

  const htmlContent = buildDigestHtml(recentPosts)

  // Create and send campaign via Brevo
  const campaignPayload = {
    name: `Digest semanal — ${new Date().toISOString().split('T')[0]}`,
    subject,
    sender: { name: senderName, email: senderEmail },
    type: 'classic',
    htmlContent,
    recipients: { listIds: [listId] },
    // scheduledAt: omitted → sends immediately
  }

  const createRes = await fetch(`${BREVO_API_URL}/emailCampaigns`, {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(campaignPayload),
  })

  if (!createRes.ok) {
    const err = await createRes.json().catch(() => ({}))
    console.error('[Digest] Brevo campaign creation failed:', err)
    return NextResponse.json({ error: 'Brevo error', details: err }, { status: 500 })
  }

  const campaign = await createRes.json() as { id: number }
  console.log('[Digest] Campaign created, id:', campaign.id)

  // Send campaign immediately
  const sendRes = await fetch(`${BREVO_API_URL}/emailCampaigns/${campaign.id}/sendNow`, {
    method: 'POST',
    headers: { 'api-key': apiKey, Accept: 'application/json' },
  })

  if (!sendRes.ok) {
    const err = await sendRes.json().catch(() => ({}))
    console.error('[Digest] Brevo send failed:', err)
    return NextResponse.json({ error: 'Send failed', details: err }, { status: 500 })
  }

  console.log('[Digest] Sent to list', listId, '—', recentPosts.length, 'posts')
  return NextResponse.json({
    success: true,
    postsIncluded: recentPosts.length,
    titles: recentPosts.map((p) => p.title),
  })
}

// ── Vercel Cron (alternative to Make.com) ─────────────────────────────────
// Add to vercel.json:
// {
//   "crons": [{
//     "path": "/api/send-digest",
//     "schedule": "0 9 * * 1"   ← every Monday at 09:00 UTC
//   }]
// }
// Note: Vercel Cron uses GET, so add a GET handler if using this approach:
export async function GET(request: NextRequest) {
  // Reuse POST logic for cron (Vercel cron sends GET)
  return POST(request)
}
