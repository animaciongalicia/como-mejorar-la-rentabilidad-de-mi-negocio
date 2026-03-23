'use client'

import { useState } from 'react'

interface Plato {
  nombre: string
  precio: string
  coste: string
}

const PLATO_VACIO: Plato = { nombre: '', precio: '', coste: '' }

function pct(coste: number, precio: number) {
  if (!precio) return null
  return (coste / precio) * 100
}

function semaforo(fc: number | null) {
  if (fc === null) return ''
  if (fc <= 30) return 'bg-green-50 border-green-200 text-green-800'
  if (fc <= 38) return 'bg-amber-50 border-amber-200 text-amber-800'
  return 'bg-red-50 border-red-200 text-red-800'
}

function label(fc: number | null) {
  if (fc === null) return ''
  if (fc <= 30) return '✓ Bien'
  if (fc <= 38) return '⚠ Ajustado'
  return '✗ Problema'
}

export default function CalculadoraMargenCarta() {
  const [platos, setPlatos] = useState<Plato[]>([
    { ...PLATO_VACIO },
    { ...PLATO_VACIO },
    { ...PLATO_VACIO },
  ])

  function update(i: number, field: keyof Plato, val: string) {
    setPlatos((prev) => prev.map((p, idx) => idx === i ? { ...p, [field]: val } : p))
  }

  function addPlato() {
    setPlatos((prev) => [...prev, { ...PLATO_VACIO }])
  }

  function removeRow(i: number) {
    setPlatos((prev) => prev.filter((_, idx) => idx !== i))
  }

  // Calcular totales ponderados
  const filas = platos.map((p) => {
    const precio = parseFloat(p.precio.replace(',', '.'))
    const coste = parseFloat(p.coste.replace(',', '.'))
    const fc = (!isNaN(precio) && !isNaN(coste) && precio > 0) ? pct(coste, precio) : null
    return { ...p, precioN: precio, costeN: coste, fc }
  })

  const validas = filas.filter((f) => f.fc !== null)
  const fcMedia = validas.length
    ? validas.reduce((acc, f) => acc + f.fc!, 0) / validas.length
    : null

  return (
    <div className="my-8 rounded-2xl border border-teal-200 bg-white overflow-hidden">
      <div className="bg-teal-600 px-6 py-4">
        <h3 className="text-lg font-black text-white">Calculadora de food cost por plato</h3>
        <p className="text-sm text-teal-100 mt-1">Introduce precio de venta y coste de ingredientes de cada plato</p>
      </div>

      {/* Cabecera tabla */}
      <div className="grid grid-cols-12 gap-2 px-6 pt-4 pb-2 text-xs font-black uppercase tracking-widest text-gray-400">
        <div className="col-span-4">Plato</div>
        <div className="col-span-3">Precio venta</div>
        <div className="col-span-3">Coste ingredientes</div>
        <div className="col-span-2">Food cost</div>
      </div>

      <div className="px-4 space-y-2 pb-4">
        {filas.map((fila, i) => (
          <div key={i} className="grid grid-cols-12 gap-2 items-center">
            <div className="col-span-4">
              <input
                type="text"
                placeholder={`Plato ${i + 1}`}
                value={fila.nombre}
                onChange={(e) => update(i, 'nombre', e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder-gray-300 focus:border-teal-400 focus:outline-none"
              />
            </div>
            <div className="col-span-3">
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="12.00"
                  value={fila.precio}
                  onChange={(e) => update(i, 'precio', e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 pr-7 text-sm text-gray-900 placeholder-gray-300 focus:border-teal-400 focus:outline-none"
                />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">€</span>
              </div>
            </div>
            <div className="col-span-3">
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="3.50"
                  value={fila.coste}
                  onChange={(e) => update(i, 'coste', e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 pr-7 text-sm text-gray-900 placeholder-gray-300 focus:border-teal-400 focus:outline-none"
                />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">€</span>
              </div>
            </div>
            <div className="col-span-2 flex items-center gap-1">
              {fila.fc !== null ? (
                <span className={`text-xs font-black px-2 py-1 rounded border ${semaforo(fila.fc)}`}>
                  {fila.fc.toFixed(1)}% {label(fila.fc)}
                </span>
              ) : (
                <span className="text-xs text-gray-300">—</span>
              )}
              {platos.length > 1 && (
                <button
                  onClick={() => removeRow(i)}
                  className="ml-1 text-gray-300 hover:text-red-400 text-base leading-none"
                  aria-label="Eliminar fila"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 pb-4 flex items-center justify-between">
        <button
          onClick={addPlato}
          className="text-sm font-bold text-teal-600 hover:text-teal-800 transition-colors"
        >
          + Añadir plato
        </button>
        <p className="text-xs text-gray-400">Máx. recomendado: tus 8-10 platos más vendidos</p>
      </div>

      {/* Resultado */}
      {fcMedia !== null && (
        <div className={`mx-4 mb-6 rounded-xl border p-5 ${semaforo(fcMedia)}`}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-black uppercase tracking-widest">Food cost medio de tu carta</p>
            <p className="text-2xl font-black">{fcMedia.toFixed(1)}%</p>
          </div>
          <p className="text-sm leading-relaxed">
            {fcMedia <= 30 && 'Tu carta está bien calibrada. Cada euro vendido deja buen margen para cubrir costes y ganar dinero.'}
            {fcMedia > 30 && fcMedia <= 38 && 'Tu carta está en zona de ajuste. Hay platos que te están comiendo margen. Revisa los que están por encima del 35%.'}
            {fcMedia > 38 && 'Tu food cost está demasiado alto. La mayoría de lo que vendes se va en ingredientes. Hay que actuar sobre precios o costes de producto.'}
          </p>
          <div className="mt-3 pt-3 border-t border-current/20 grid grid-cols-3 gap-2 text-xs text-center">
            <div className="bg-green-100 rounded px-2 py-1.5">
              <p className="font-black">≤30%</p>
              <p className="opacity-70">Bien</p>
            </div>
            <div className="bg-amber-100 rounded px-2 py-1.5">
              <p className="font-black">31–38%</p>
              <p className="opacity-70">Ajustado</p>
            </div>
            <div className="bg-red-100 rounded px-2 py-1.5">
              <p className="font-black">&gt;38%</p>
              <p className="opacity-70">Problema</p>
            </div>
          </div>
        </div>
      )}

      <div className="px-6 pb-6 text-xs text-gray-400 leading-relaxed">
        <strong className="text-gray-500">Food cost</strong> = coste ingredientes ÷ precio de venta × 100. No incluye mano de obra ni gastos generales, solo materia prima.
      </div>
    </div>
  )
}
