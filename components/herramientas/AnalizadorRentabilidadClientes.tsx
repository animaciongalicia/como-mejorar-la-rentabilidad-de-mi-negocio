'use client'

import { useState } from 'react'

interface Cliente {
  nombre: string
  facturado: string
  horas: string
}

const VACIO: Cliente = { nombre: '', facturado: '', horas: '' }

function clasificar(eurHora: number): 'excelente' | 'bueno' | 'revisar' | 'problematico' {
  if (eurHora >= 80) return 'excelente'
  if (eurHora >= 50) return 'bueno'
  if (eurHora >= 30) return 'revisar'
  return 'problematico'
}

const ETIQUETAS: Record<string, string> = {
  excelente: '⭐ Excelente',
  bueno: '✓ Bueno',
  revisar: '⚠ Revisar',
  problematico: '✗ Problemático',
}
const COLORES: Record<string, string> = {
  excelente: 'bg-green-50 border-green-200 text-green-800',
  bueno: 'bg-blue-50 border-blue-200 text-blue-800',
  revisar: 'bg-amber-50 border-amber-200 text-amber-800',
  problematico: 'bg-red-50 border-red-200 text-red-800',
}

export default function AnalizadorRentabilidadClientes() {
  const [clientes, setClientes] = useState<Cliente[]>([
    { ...VACIO }, { ...VACIO }, { ...VACIO }, { ...VACIO },
  ])
  const [tarifaMinima, setTarifaMinima] = useState('')

  function update(i: number, field: keyof Cliente, val: string) {
    setClientes((prev) => prev.map((c, idx) => idx === i ? { ...c, [field]: val } : c))
  }
  function addRow() { setClientes((prev) => [...prev, { ...VACIO }]) }
  function removeRow(i: number) {
    if (clientes.length > 2) setClientes((prev) => prev.filter((_, idx) => idx !== i))
  }

  const filas = clientes.map((c) => {
    const f = parseFloat(c.facturado.replace(',', '.')) || 0
    const h = parseFloat(c.horas.replace(',', '.')) || 0
    const eurHora = h > 0 ? f / h : 0
    return { ...c, f, h, eurHora, clase: eurHora > 0 ? clasificar(eurHora) : null }
  })

  const totalFacturado = filas.reduce((s, f) => s + f.f, 0)
  const totalHoras = filas.reduce((s, f) => s + f.h, 0)
  const eurHoraGlobal = totalHoras > 0 ? totalFacturado / totalHoras : 0

  const hayDatos = filas.some((f) => f.f > 0 && f.h > 0)
  const problematicos = filas.filter((f) => f.clase === 'problematico' || f.clase === 'revisar')
  const tarifaMinimaNum = parseFloat(tarifaMinima.replace(',', '.')) || 0
  const horasPorDebajo = tarifaMinimaNum > 0 ? filas.filter((f) => f.eurHora > 0 && f.eurHora < tarifaMinimaNum) : []

  return (
    <div className="my-8 rounded-2xl border border-indigo-200 bg-white overflow-hidden">
      <div className="bg-indigo-600 px-6 py-4">
        <h3 className="text-lg font-black text-white">Analizador de rentabilidad por cliente</h3>
        <p className="text-sm text-indigo-100 mt-1">¿Cuánto ganas realmente por hora con cada cliente?</p>
      </div>

      {/* Tarifa mínima opcional */}
      <div className="px-6 pt-5 pb-3 bg-indigo-50 border-b border-indigo-100 flex flex-wrap items-center gap-4">
        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-indigo-600 mb-1">
            Tu tarifa mínima (opcional)
          </label>
          <div className="relative w-36">
            <input
              type="number"
              min="0"
              placeholder="50"
              value={tarifaMinima}
              onChange={(e) => setTarifaMinima(e.target.value)}
              className="w-full rounded-lg border border-indigo-200 bg-white px-3 py-2 pr-7 text-sm focus:border-indigo-400 focus:outline-none"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">€/h</span>
          </div>
        </div>
        <p className="text-xs text-indigo-500 leading-snug max-w-xs">
          Ponla para identificar qué clientes están por debajo de tu umbral de rentabilidad.
        </p>
      </div>

      {/* Cabecera tabla */}
      <div className="grid grid-cols-12 gap-2 px-6 pt-4 pb-2 text-xs font-black uppercase tracking-widest text-gray-400">
        <div className="col-span-4">Cliente</div>
        <div className="col-span-2">Facturado/mes</div>
        <div className="col-span-2">Horas reales</div>
        <div className="col-span-2">€/hora real</div>
        <div className="col-span-2">Clasificación</div>
      </div>

      <div className="px-4 space-y-2 pb-4">
        {filas.map((fila, i) => (
          <div key={i} className="grid grid-cols-12 gap-2 items-center">
            <div className="col-span-4">
              <input
                type="text"
                placeholder={`Cliente ${i + 1}`}
                value={fila.nombre}
                onChange={(e) => update(i, 'nombre', e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm placeholder-gray-300 focus:border-indigo-400 focus:outline-none"
              />
            </div>
            <div className="col-span-2">
              <div className="relative">
                <input
                  type="number" min="0" placeholder="800"
                  value={fila.facturado}
                  onChange={(e) => update(i, 'facturado', e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-2 py-2 pr-5 text-sm placeholder-gray-300 focus:border-indigo-400 focus:outline-none"
                />
                <span className="absolute right-1.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs">€</span>
              </div>
            </div>
            <div className="col-span-2">
              <div className="relative">
                <input
                  type="number" min="0" placeholder="10"
                  value={fila.horas}
                  onChange={(e) => update(i, 'horas', e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-2 py-2 pr-5 text-sm placeholder-gray-300 focus:border-indigo-400 focus:outline-none"
                />
                <span className="absolute right-1.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs">h</span>
              </div>
            </div>
            <div className="col-span-2 text-sm font-black">
              {fila.eurHora > 0 ? (
                <span className={tarifaMinimaNum > 0 && fila.eurHora < tarifaMinimaNum ? 'text-red-600' : 'text-gray-800'}>
                  {fila.eurHora.toFixed(0)}€/h
                </span>
              ) : <span className="text-gray-300">—</span>}
            </div>
            <div className="col-span-2 flex items-center gap-1">
              {fila.clase ? (
                <span className={`text-xs font-black px-1.5 py-0.5 rounded border ${COLORES[fila.clase]}`}>
                  {ETIQUETAS[fila.clase]}
                </span>
              ) : <span className="text-xs text-gray-300">—</span>}
              {clientes.length > 2 && (
                <button onClick={() => removeRow(i)} className="ml-1 text-gray-300 hover:text-red-400" aria-label="Eliminar">×</button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 pb-4">
        <button onClick={addRow} className="text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors">
          + Añadir cliente
        </button>
      </div>

      {/* Resumen */}
      {hayDatos && (
        <div className="mx-4 mb-6 rounded-xl border border-gray-200 bg-gray-50 p-5 space-y-4">
          <p className="text-xs font-black uppercase tracking-widest text-gray-400">Resumen global</p>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center">
              <p className="text-xl font-black text-gray-900">{eurHoraGlobal.toFixed(0)}€/h</p>
              <p className="text-xs text-gray-500 mt-1">€/hora media real</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center">
              <p className="text-xl font-black text-gray-900">{totalHoras.toFixed(0)}h</p>
              <p className="text-xs text-gray-500 mt-1">Horas totales/mes</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center">
              <p className="text-xl font-black text-gray-900">
                {totalFacturado.toLocaleString('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}
              </p>
              <p className="text-xs text-gray-500 mt-1">Facturado/mes</p>
            </div>
          </div>

          {problematicos.length > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-xs font-black text-amber-700 mb-1">
                {problematicos.length} cliente{problematicos.length > 1 ? 's' : ''} por debajo de 50€/hora real
              </p>
              <p className="text-xs text-amber-600">
                Consumen {problematicos.reduce((s, f) => s + f.h, 0).toFixed(0)}h al mes y generan solo{' '}
                {problematicos.reduce((s, f) => s + f.f, 0).toLocaleString('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}.
                {' '}Revisa el alcance del servicio o renegocia la tarifa.
              </p>
            </div>
          )}

          {horasPorDebajo.length > 0 && tarifaMinimaNum > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-xs font-black text-red-700 mb-1">
                {horasPorDebajo.length} cliente{horasPorDebajo.length > 1 ? 's' : ''} por debajo de tu tarifa mínima ({tarifaMinimaNum}€/h)
              </p>
              <p className="text-xs text-red-600">
                Estás trabajando por debajo de tu umbral de rentabilidad. Cada hora con ellos tiene coste negativo para tu negocio.
              </p>
            </div>
          )}
        </div>
      )}

      <div className="px-6 pb-5 text-xs text-gray-400 leading-relaxed">
        <strong className="text-gray-500">Horas reales</strong> = todas las horas que dedicas al cliente, incluyendo reuniones, correcciones, comunicación y gestión, no solo las &ldquo;facturas&rdquo;. Esa es la cifra honesta.
      </div>
    </div>
  )
}
