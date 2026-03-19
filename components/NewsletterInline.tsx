'use client'

import { useState } from 'react'

export default function NewsletterInline() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'home-sidebar' }),
      })
      setStatus(res.ok ? 'ok' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-gray-900 text-white rounded-xl p-6">
      <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Sin humo</p>
      <h3 className="font-black text-lg leading-tight mb-2">Un artículo útil cada semana.</h3>
      <p className="text-gray-400 text-sm mb-4">Solo negocios físicos. Solo lo que funciona. Sin spam.</p>

      {status === 'ok' ? (
        <p className="text-teal-400 font-semibold text-sm">Suscrito. Revisa tu bandeja de entrada.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="tu@email.com"
            className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-teal-400"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-teal-500 hover:bg-teal-400 disabled:opacity-60 text-white font-bold py-2.5 rounded-lg text-sm transition-colors"
          >
            {status === 'loading' ? 'Enviando...' : 'Suscribirme gratis'}
          </button>
          {status === 'error' && (
            <p className="text-red-400 text-xs">Error. Inténtalo de nuevo.</p>
          )}
        </form>
      )}
    </div>
  )
}
