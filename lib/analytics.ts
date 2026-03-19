// Analytics helpers — safe wrappers around gtag
// All functions check for window.gtag before calling to avoid errors.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

function gtag(...args: unknown[]) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag(...args)
  }
}

export function trackEvent(name: string, params?: Record<string, string | number | boolean>) {
  gtag('event', name, params)
}

export function trackLeadCapture(source: string, pilar?: string) {
  trackEvent('lead_capture', { source, pilar: pilar || 'general' })
}

export function trackCTAClick(ctaType: string, pilar?: string) {
  trackEvent('cta_click', { cta_type: ctaType, pilar: pilar || 'general' })
}

export function trackPostRead(slug: string, pilar?: string, readTimeSeconds?: number) {
  trackEvent('post_read', {
    post_slug: slug,
    pilar: pilar || 'general',
    read_time_seconds: readTimeSeconds || 0,
  })
}

export function trackDownload(fileName: string, leadMagnetType?: string) {
  trackEvent('file_download', { file_name: fileName, lead_magnet_type: leadMagnetType || 'unknown' })
}
