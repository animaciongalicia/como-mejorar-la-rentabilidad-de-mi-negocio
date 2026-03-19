'use client'

import { useState } from 'react'

export default function CalculadoraBreakEven() {
  const [costesFijos, setCostesFijos] = useState('')
  const [margenBruto, setMargenBruto] = useState('')

  const cf = parseFloat(costesFijos.replace(',', '.'))
  const mb = parseFloat(margenBruto.replace(',', '.'))
  const puntoEquilibrio = cf && mb && mb > 0 && mb <= 100 ? cf / (mb / 100) : null

  return (
    <div className="my-8 rounded-2xl border border-teal-200 bg-teal-50 p-6 sm:p-8">
      <h3 className="text-xl font-black text-gray-900 mb-6">Calcula tu punto de equilibrio</h3>

      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Costes fijos mensuales (€)
          </label>
          <div className="relative">
            <input
              type="number"
              min="0"
              placeholder="Ej: 3500"
              value={costesFijos}
              onChange={(e) => setCostesFijos(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">€</span>
          </div>
          <p className="mt-1 text-xs text-gray-500">Alquiler, nóminas fijas, gestoría, suministros…</p>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Margen bruto sobre ventas (%)
          </label>
          <div className="relative">
            <input
              type="number"
              min="1"
              max="100"
              placeholder="Ej: 40"
              value={margenBruto}
              onChange={(e) => setMargenBruto(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">%</span>
          </div>
          <p className="mt-1 text-xs text-gray-500">Lo que te queda de cada euro vendido tras costes variables</p>
        </div>
      </div>

      {puntoEquilibrio !== null ? (
        <div className="rounded-xl bg-teal-600 p-6 text-white text-center">
          <p className="text-sm font-medium text-teal-100 mb-1">Tu punto de equilibrio mensual es</p>
          <p className="text-4xl font-black tracking-tight">
            {puntoEquilibrio.toLocaleString('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}
          </p>
          <p className="mt-3 text-sm text-teal-100">
            Si facturas menos de esta cifra en un mes, ese mes pierdes dinero.
          </p>
          {costesFijos && margenBruto && (
            <p className="mt-2 text-xs text-teal-200">
              {cf.toLocaleString('es-ES')} € ÷ {mb}% = {puntoEquilibrio.toLocaleString('es-ES', { maximumFractionDigits: 0 })} €
            </p>
          )}
        </div>
      ) : (
        <div className="rounded-xl bg-white border border-gray-200 p-6 text-center text-gray-400">
          <p className="text-sm">Introduce tus datos arriba para ver el resultado</p>
        </div>
      )}
    </div>
  )
}
