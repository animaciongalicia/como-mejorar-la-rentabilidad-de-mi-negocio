'use client'

import { useState } from 'react'

interface NewsletterFormProps {
  variant: 'inline' | 'banner' | 'sidebar'
  leadMagnet?: string
  pilar?: string
}

export default function NewsletterForm({ variant, leadMagnet, pilar }: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: `newsletter-form-${variant}`,
          leadMagnet: leadMagnet || null,
          pilar: pilar || null,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.message || 'Algo salió mal. Inténtalo de nuevo.')
      } else {
        setSuccess(true)
        setEmail('')
      }
    } catch {
      setError('Error de conexión. Inténtalo de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  if (variant === 'inline') {
    return (
      <section
        className="bg-teal-50 border border-teal-100 rounded-2xl p-8 my-10"
        data-source={`newsletter-inline${pilar ? `-${pilar}` : ''}`}
      >
        {success ? (
          <div className="text-center">
            <div className="text-4xl mb-3">✉️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              ¡Ya estás dentro!
            </h3>
            <p className="text-gray-600">
              Revisa tu bandeja de entrada. Recibirás estrategias reales cada semana.
            </p>
            {leadMagnet && (
              <p className="text-sm text-teal-700 mt-2 font-medium">
                Tu recurso &quot;{leadMagnet}&quot; llegará en el primer email.
              </p>
            )}
          </div>
        ) : (
          <>
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
              Recibe estrategias reales cada semana
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Sin humo, sin teoría vacía. Solo acciones que puedes aplicar hoy mismo en tu negocio.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="hidden" name="lead_magnet" value={leadMagnet || ''} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-teal-600 hover:bg-teal-700 disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 whitespace-nowrap"
              >
                {loading ? 'Enviando...' : 'Quiero recibirlas'}
              </button>
            </form>
            {error && (
              <p className="text-red-600 text-sm text-center mt-3">{error}</p>
            )}
            <p className="text-xs text-gray-400 text-center mt-3">
              Sin spam. Puedes darte de baja cuando quieras.
            </p>
          </>
        )}
      </section>
    )
  }

  if (variant === 'banner') {
    if (success) return null

    return (
      <div
        className="fixed bottom-0 left-0 right-0 z-50 bg-teal-700 text-white shadow-lg"
        data-source={`newsletter-banner${pilar ? `-${pilar}` : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3">
            <input type="hidden" name="lead_magnet" value={leadMagnet || ''} />
            <p className="text-sm font-medium shrink-0">
              Estrategias de rentabilidad cada semana →
            </p>
            <div className="flex flex-1 gap-2 w-full sm:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="flex-1 px-3 py-2 rounded-md text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white min-w-0"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-white text-teal-700 hover:bg-teal-50 disabled:opacity-60 font-semibold px-4 py-2 rounded-md text-sm transition-colors duration-200 whitespace-nowrap"
              >
                {loading ? '...' : 'Suscribirme'}
              </button>
            </div>
            {error && <p className="text-red-200 text-xs">{error}</p>}
          </form>
        </div>
      </div>
    )
  }

  // sidebar variant
  return (
    <div
      className="bg-teal-50 border border-teal-200 rounded-xl p-5"
      data-source={`newsletter-sidebar${pilar ? `-${pilar}` : ''}`}
    >
      {success ? (
        <div className="text-center">
          <p className="font-semibold text-gray-900 mb-1">¡Apuntado!</p>
          <p className="text-sm text-gray-600">Revisa tu bandeja de entrada.</p>
        </div>
      ) : (
        <>
          <h4 className="font-bold text-gray-900 mb-1 text-sm">
            Estrategias reales, cada semana
          </h4>
          <p className="text-xs text-gray-600 mb-3">
            Para dueños de negocios físicos que quieren resultados reales.
          </p>
          <form onSubmit={handleSubmit} className="space-y-2">
            <input type="hidden" name="lead_magnet" value={leadMagnet || ''} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-600 hover:bg-teal-700 disabled:opacity-60 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors duration-200"
            >
              {loading ? 'Enviando...' : 'Quiero recibirlas'}
            </button>
          </form>
          {error && <p className="text-red-600 text-xs mt-2">{error}</p>}
          <p className="text-xs text-gray-400 mt-2">Sin spam. Baja cuando quieras.</p>
        </>
      )}
    </div>
  )
}
