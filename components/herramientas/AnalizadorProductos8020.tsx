'use client'

import { useState } from 'react'

interface Producto {
  nombre: string
  ventas: string
  margen: string
}

const VACIO: Producto = { nombre: '', ventas: '', margen: '' }

export default function AnalizadorProductos8020() {
  const [productos, setProductos] = useState<Producto[]>([
    { ...VACIO }, { ...VACIO }, { ...VACIO }, { ...VACIO }, { ...VACIO },
  ])

  function update(i: number, field: keyof Producto, val: string) {
    setProductos((prev) => prev.map((p, idx) => idx === i ? { ...p, [field]: val } : p))
  }

  function addRow() {
    setProductos((prev) => [...prev, { ...VACIO }])
  }

  function removeRow(i: number) {
    if (productos.length > 2) setProductos((prev) => prev.filter((_, idx) => idx !== i))
  }

  const filas = productos.map((p) => ({
    ...p,
    ventasN: parseFloat(p.ventas.replace(',', '.')) || 0,
    margenN: parseFloat(p.margen.replace(',', '.')) || 0,
  }))

  const totalVentas = filas.reduce((s, f) => s + f.ventasN, 0)

  const filasConPct = filas
    .map((f) => ({
      ...f,
      pctVentas: totalVentas > 0 ? (f.ventasN / totalVentas) * 100 : 0,
      margenTotal: (f.ventasN * f.margenN) / 100,
    }))
    .sort((a, b) => b.ventasN - a.ventasN)

  // acumulado para la regla 80/20
  let acum = 0
  const filasClasificadas = filasConPct.map((f) => {
    acum += f.pctVentas
    const zona = acum <= 80 ? 'estrella' : acum <= 95 ? 'complemento' : 'revisar'
    return { ...f, zona }
  })

  const totalMargenGenerado = filasClasificadas.reduce((s, f) => s + f.margenTotal, 0)
  const estrellasCount = filasClasificadas.filter((f) => f.zona === 'estrella').length
  const revisarCount = filasClasificadas.filter((f) => f.zona === 'revisar').length

  const zonaStyles: Record<string, string> = {
    estrella: 'bg-green-50 border-green-200 text-green-800',
    complemento: 'bg-amber-50 border-amber-200 text-amber-800',
    revisar: 'bg-red-50 border-red-200 text-red-800',
  }
  const zonaLabel: Record<string, string> = {
    estrella: '⭐ Estrella',
    complemento: '⚡ Complemento',
    revisar: '✗ Revisar',
  }

  const hayDatos = filas.some((f) => f.ventasN > 0)

  return (
    <div className="my-8 rounded-2xl border border-blue-200 bg-white overflow-hidden">
      <div className="bg-blue-600 px-6 py-4">
        <h3 className="text-lg font-black text-white">Analizador de productos — regla 80/20</h3>
        <p className="text-sm text-blue-100 mt-1">Introduce ventas mensuales y margen de cada producto o categoría</p>
      </div>

      {/* Cabecera */}
      <div className="grid grid-cols-12 gap-2 px-6 pt-4 pb-2 text-xs font-black uppercase tracking-widest text-gray-400">
        <div className="col-span-4">Producto / Categoría</div>
        <div className="col-span-3">Ventas/mes</div>
        <div className="col-span-2">Margen %</div>
        <div className="col-span-3">Clasificación</div>
      </div>

      <div className="px-4 space-y-2 pb-4">
        {filasClasificadas.map((fila, i) => (
          <div key={i} className="grid grid-cols-12 gap-2 items-center">
            <div className="col-span-4">
              <input
                type="text"
                placeholder={`Producto ${i + 1}`}
                value={fila.nombre}
                onChange={(e) => update(i, 'nombre', e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm placeholder-gray-300 focus:border-blue-400 focus:outline-none"
              />
            </div>
            <div className="col-span-3">
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  placeholder="1500"
                  value={fila.ventas}
                  onChange={(e) => update(i, 'ventas', e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 pr-7 text-sm placeholder-gray-300 focus:border-blue-400 focus:outline-none"
                />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">€</span>
              </div>
            </div>
            <div className="col-span-2">
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="40"
                  value={fila.margen}
                  onChange={(e) => update(i, 'margen', e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 pr-6 text-sm placeholder-gray-300 focus:border-blue-400 focus:outline-none"
                />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">%</span>
              </div>
            </div>
            <div className="col-span-3 flex items-center gap-1">
              {fila.ventasN > 0 ? (
                <span className={`text-xs font-black px-2 py-1 rounded border ${zonaStyles[fila.zona]}`}>
                  {zonaLabel[fila.zona]}
                </span>
              ) : (
                <span className="text-xs text-gray-300">—</span>
              )}
              {productos.length > 2 && (
                <button onClick={() => removeRow(i)} className="ml-1 text-gray-300 hover:text-red-400" aria-label="Eliminar">×</button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 pb-4">
        <button onClick={addRow} className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
          + Añadir producto
        </button>
      </div>

      {/* Resultado */}
      {hayDatos && (
        <div className="mx-4 mb-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Resumen del análisis</p>
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
              <p className="text-2xl font-black text-green-700">{estrellasCount}</p>
              <p className="text-xs text-green-600 font-bold mt-1">Productos estrella</p>
              <p className="text-xs text-gray-500 mt-1">Generan el 80% de tus ventas</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-center">
              <p className="text-2xl font-black text-amber-700">{filasClasificadas.filter(f => f.zona === 'complemento').length}</p>
              <p className="text-xs text-amber-600 font-bold mt-1">Complementos</p>
              <p className="text-xs text-gray-500 mt-1">15% adicional de ventas</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
              <p className="text-2xl font-black text-red-700">{revisarCount}</p>
              <p className="text-xs text-red-600 font-bold mt-1">A revisar</p>
              <p className="text-xs text-gray-500 mt-1">5% de ventas, ¿merecen espacio?</p>
            </div>
          </div>
          {totalMargenGenerado > 0 && (
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center">
              <p className="text-xs text-gray-500 mb-1">Margen total generado (estimado)</p>
              <p className="text-xl font-black text-gray-900">
                {totalMargenGenerado.toLocaleString('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}
                <span className="text-sm font-medium text-gray-400 ml-1">/ mes</span>
              </p>
            </div>
          )}
        </div>
      )}

      <div className="px-6 pb-5 text-xs text-gray-400 leading-relaxed">
        Los productos se ordenan automáticamente por volumen de ventas. <strong className="text-gray-500">Estrellas</strong> = primeros productos que suman el 80% de ventas. <strong className="text-gray-500">A revisar</strong> = el último 5% de ventas.
      </div>
    </div>
  )
}
