'use client'

import { useState } from 'react'

interface Trabajo {
  nombre: string
  precio: string
  recambios: string
  horas: string
}

const VACIO: Trabajo = { nombre: '', precio: '', recambios: '', horas: '' }

function clasificar(margenHora: number): 'excelente' | 'bueno' | 'revisar' | 'bajo' {
  if (margenHora >= 40) return 'excelente'
  if (margenHora >= 25) return 'bueno'
  if (margenHora >= 12) return 'revisar'
  return 'bajo'
}

const ETIQUETAS: Record<string, string> = {
  excelente: '⭐ Excelente',
  bueno: '✓ Rentable',
  revisar: '⚠ Revisar precio',
  bajo: '✗ Bajo margen',
}
const COLORES: Record<string, string> = {
  excelente: 'bg-green-50 border-green-200 text-green-800',
  bueno: 'bg-blue-50 border-blue-200 text-blue-800',
  revisar: 'bg-amber-50 border-amber-200 text-amber-800',
  bajo: 'bg-red-50 border-red-200 text-red-800',
}

const EJEMPLOS: Trabajo[] = [
  { nombre: 'Cambio de aceite', precio: '45', recambios: '18', horas: '0.5' },
  { nombre: 'Pastillas de freno (eje)', precio: '130', recambios: '45', horas: '1.5' },
  { nombre: 'Sustitución embrague', precio: '350', recambios: '130', horas: '4' },
  { nombre: 'Correa de distribución', precio: '420', recambios: '140', horas: '5' },
  { nombre: 'Diagnóstico eléctrico', precio: '80', recambios: '0', horas: '1' },
]

export default function CalculadoraRentabilidadTaller() {
  const [trabajos, setTrabajos] = useState<Trabajo[]>([
    { ...VACIO }, { ...VACIO }, { ...VACIO }, { ...VACIO },
  ])
  const [tarifaHora, setTarifaHora] = useState('55')
  const [mostrarEjemplos, setMostrarEjemplos] = useState(false)

  function update(i: number, field: keyof Trabajo, val: string) {
    setTrabajos((prev) => prev.map((t, idx) => idx === i ? { ...t, [field]: val } : t))
  }
  function addRow() { setTrabajos((prev) => [...prev, { ...VACIO }]) }
  function removeRow(i: number) {
    if (trabajos.length > 2) setTrabajos((prev) => prev.filter((_, idx) => idx !== i))
  }
  function cargarEjemplos() {
    setTrabajos(EJEMPLOS.map((e) => ({ ...e })))
    setMostrarEjemplos(false)
  }

  const tarifaH = parseFloat(tarifaHora.replace(',', '.')) || 55

  const filas = trabajos.map((t) => {
    const precio = parseFloat(t.precio.replace(',', '.')) || 0
    const recambios = parseFloat(t.recambios.replace(',', '.')) || 0
    const horas = parseFloat(t.horas.replace(',', '.')) || 0
    const costeManoObra = horas * tarifaH * 0.35 // aprox coste salarial = 35% tarifa
    const margenBruto = precio - recambios - costeManoObra
    const margenHora = horas > 0 ? margenBruto / horas : 0
    const margenPct = precio > 0 ? (margenBruto / precio) * 100 : 0
    return { ...t, precio, recambios, horas, costeManoObra, margenBruto, margenHora, margenPct, clase: margenHora > 0 ? clasificar(margenHora) : null }
  })

  const hayDatos = filas.some((f) => f.precio > 0 && f.horas > 0)
  const totalFila = {
    precio: filas.reduce((s, f) => s + f.precio, 0),
    recambios: filas.reduce((s, f) => s + f.recambios, 0),
    margenBruto: filas.reduce((s, f) => s + f.margenBruto, 0),
  }

  const mejorTrabajo = hayDatos ? [...filas].filter(f => f.margenHora > 0).sort((a, b) => b.margenHora - a.margenHora)[0] : null
  const peorTrabajo = hayDatos ? [...filas].filter(f => f.margenHora > 0).sort((a, b) => a.margenHora - b.margenHora)[0] : null

  return (
    <div className="my-8 rounded-2xl border border-orange-200 bg-white overflow-hidden">
      <div className="bg-orange-600 px-6 py-4">
        <h3 className="text-lg font-black text-white">Calculadora de rentabilidad por trabajo</h3>
        <p className="text-sm text-orange-100 mt-1">¿Qué margen real deja cada tipo de intervención en tu taller?</p>
      </div>

      {/* Config tarifa hora */}
      <div className="px-6 pt-5 pb-3 bg-orange-50 border-b border-orange-100 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-orange-700 mb-1">Tarifa hora mano de obra</label>
            <div className="relative w-28">
              <input
                type="number" min="0" placeholder="55"
                value={tarifaHora}
                onChange={(e) => setTarifaHora(e.target.value)}
                className="w-full rounded-lg border border-orange-200 bg-white px-3 py-2 pr-7 text-sm focus:border-orange-400 focus:outline-none"
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">€/h</span>
            </div>
          </div>
          <p className="text-xs text-orange-600 max-w-xs leading-snug">
            Lo que cobras al cliente por hora de mano de obra (sin recambios).
          </p>
        </div>
        <button
          onClick={() => setMostrarEjemplos(!mostrarEjemplos)}
          className="text-xs font-bold text-orange-600 hover:text-orange-800 underline"
        >
          {mostrarEjemplos ? 'Ocultar ejemplos' : 'Ver con ejemplos →'}
        </button>
      </div>

      {mostrarEjemplos && (
        <div className="px-6 py-3 bg-amber-50 border-b border-amber-100">
          <p className="text-xs text-amber-700 mb-2 font-bold">Cargar datos de ejemplo para ver cómo funciona:</p>
          <button onClick={cargarEjemplos} className="text-xs bg-amber-600 hover:bg-amber-700 text-white font-bold px-3 py-1.5 rounded-lg transition-colors">
            Cargar ejemplos
          </button>
        </div>
      )}

      {/* Cabecera */}
      <div className="grid grid-cols-12 gap-2 px-6 pt-4 pb-2 text-xs font-black uppercase tracking-widest text-gray-400">
        <div className="col-span-3">Tipo de trabajo</div>
        <div className="col-span-2">Precio cobrado</div>
        <div className="col-span-2">Recambios</div>
        <div className="col-span-1">Horas</div>
        <div className="col-span-2">Margen/hora</div>
        <div className="col-span-2">Clasificación</div>
      </div>

      <div className="px-4 space-y-2 pb-4">
        {filas.map((fila, i) => (
          <div key={i} className="grid grid-cols-12 gap-2 items-center">
            <div className="col-span-3">
              <input
                type="text" placeholder={`Trabajo ${i + 1}`}
                value={fila.nombre}
                onChange={(e) => update(i, 'nombre', e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-2 py-2 text-sm placeholder-gray-300 focus:border-orange-400 focus:outline-none"
              />
            </div>
            <div className="col-span-2">
              <div className="relative">
                <input type="number" min="0" placeholder="120"
                  value={fila.precio}
                  onChange={(e) => update(i, 'precio', e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-2 py-2 pr-5 text-sm placeholder-gray-300 focus:border-orange-400 focus:outline-none"
                />
                <span className="absolute right-1.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs">€</span>
              </div>
            </div>
            <div className="col-span-2">
              <div className="relative">
                <input type="number" min="0" placeholder="40"
                  value={fila.recambios}
                  onChange={(e) => update(i, 'recambios', e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-2 py-2 pr-5 text-sm placeholder-gray-300 focus:border-orange-400 focus:outline-none"
                />
                <span className="absolute right-1.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs">€</span>
              </div>
            </div>
            <div className="col-span-1">
              <input type="number" min="0" step="0.5" placeholder="2"
                value={fila.horas}
                onChange={(e) => update(i, 'horas', e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-2 py-2 text-sm placeholder-gray-300 focus:border-orange-400 focus:outline-none"
              />
            </div>
            <div className="col-span-2 text-sm font-black">
              {fila.margenHora > 0 ? (
                <div>
                  <span className={fila.margenHora < 15 ? 'text-red-600' : 'text-gray-800'}>
                    {fila.margenHora.toFixed(0)}€/h
                  </span>
                  <span className="block text-xs font-normal text-gray-400">{fila.margenPct.toFixed(0)}% margen</span>
                </div>
              ) : <span className="text-gray-300">—</span>}
            </div>
            <div className="col-span-2 flex items-center gap-1">
              {fila.clase ? (
                <span className={`text-xs font-black px-1.5 py-0.5 rounded border leading-tight ${COLORES[fila.clase]}`}>
                  {ETIQUETAS[fila.clase]}
                </span>
              ) : <span className="text-xs text-gray-300">—</span>}
              {trabajos.length > 2 && (
                <button onClick={() => removeRow(i)} className="ml-1 text-gray-300 hover:text-red-400 shrink-0" aria-label="Eliminar">×</button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 pb-4">
        <button onClick={addRow} className="text-sm font-bold text-orange-600 hover:text-orange-800 transition-colors">
          + Añadir tipo de trabajo
        </button>
      </div>

      {/* Resumen */}
      {hayDatos && (
        <div className="mx-4 mb-6 rounded-xl border border-gray-200 bg-gray-50 p-5 space-y-4">
          <p className="text-xs font-black uppercase tracking-widest text-gray-400">Resumen del análisis</p>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-center">
              <p className="text-xl font-black text-gray-900">
                {totalFila.precio > 0 ? ((totalFila.margenBruto / totalFila.precio) * 100).toFixed(0) : 0}%
              </p>
              <p className="text-xs text-gray-500 mt-1">Margen bruto medio</p>
            </div>
            {mejorTrabajo && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                <p className="text-xl font-black text-green-700">{mejorTrabajo.margenHora.toFixed(0)}€/h</p>
                <p className="text-xs text-green-600 mt-1 truncate font-bold">{mejorTrabajo.nombre || 'Mejor trabajo'}</p>
                <p className="text-xs text-gray-500">Mayor margen/hora</p>
              </div>
            )}
            {peorTrabajo && peorTrabajo !== mejorTrabajo && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                <p className="text-xl font-black text-red-700">{peorTrabajo.margenHora.toFixed(0)}€/h</p>
                <p className="text-xs text-red-600 mt-1 truncate font-bold">{peorTrabajo.nombre || 'Peor trabajo'}</p>
                <p className="text-xs text-gray-500">Menor margen/hora</p>
              </div>
            )}
          </div>
          {filas.some(f => f.clase === 'bajo' || f.clase === 'revisar') && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-xs font-black text-amber-700 mb-1">
                {filas.filter(f => f.clase === 'bajo' || f.clase === 'revisar').length} trabajo(s) con margen insuficiente
              </p>
              <p className="text-xs text-amber-600">
                Revisa el precio cobrado o el tiempo estimado. Un trabajo con margen bajo ocupa hueco en el taller que podría ir a algo más rentable.
              </p>
            </div>
          )}
        </div>
      )}

      <div className="px-6 pb-5 text-xs text-gray-400 leading-relaxed">
        El margen/hora se calcula restando el coste de recambios y el coste estimado de mano de obra directa (35% de la tarifa hora) al precio cobrado, dividido entre las horas reales. No incluye costes fijos del taller.
      </div>
    </div>
  )
}
