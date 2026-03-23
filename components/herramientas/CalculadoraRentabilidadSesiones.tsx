'use client'

import { useState } from 'react'

interface Servicio {
  nombre: string
  precio: string
  duracion: string
  materialDirecto: string
}

const VACIO: Servicio = { nombre: '', precio: '', duracion: '', materialDirecto: '' }

function clasificar(brechaEuroPorHora: number): 'ok' | 'revisar' | 'urgente' {
  if (brechaEuroPorHora >= 0) return 'ok'
  if (brechaEuroPorHora >= -15) return 'revisar'
  return 'urgente'
}

const ETIQUETAS: Record<string, string> = {
  ok: '✓ Precio correcto',
  revisar: '⚠ Revisar precio',
  urgente: '✗ Precio insuficiente',
}
const COLORES: Record<string, string> = {
  ok: 'bg-green-50 border-green-200 text-green-800',
  revisar: 'bg-amber-50 border-amber-200 text-amber-800',
  urgente: 'bg-red-50 border-red-200 text-red-800',
}

const EJEMPLOS: Servicio[] = [
  { nombre: 'Fisioterapia', precio: '50', duracion: '45', materialDirecto: '2' },
  { nombre: 'Osteopatía', precio: '60', duracion: '60', materialDirecto: '1' },
  { nombre: 'Masaje relajante', precio: '45', duracion: '60', materialDirecto: '3' },
  { nombre: 'Tratamiento facial', precio: '48', duracion: '90', materialDirecto: '5' },
  { nombre: 'Drenaje linfático', precio: '55', duracion: '60', materialDirecto: '2' },
]

export default function CalculadoraRentabilidadSesiones() {
  const [servicios, setServicios] = useState<Servicio[]>([
    { ...VACIO }, { ...VACIO }, { ...VACIO },
  ])
  const [costosFijos, setCostosFijos] = useState('7000')
  const [horasMes, setHorasMes] = useState('180')
  const [margenObjetivo, setMargenObjetivo] = useState('25')
  const [mostrarEjemplos, setMostrarEjemplos] = useState(false)

  function update(i: number, field: keyof Servicio, val: string) {
    setServicios((prev) => prev.map((s, idx) => idx === i ? { ...s, [field]: val } : s))
  }
  function addRow() { setServicios((prev) => [...prev, { ...VACIO }]) }
  function removeRow(i: number) {
    if (servicios.length > 2) setServicios((prev) => prev.filter((_, idx) => idx !== i))
  }
  function cargarEjemplos() {
    setServicios(EJEMPLOS.map((e) => ({ ...e })))
    setMostrarEjemplos(false)
  }

  const cf = parseFloat(costosFijos.replace(',', '.')) || 7000
  const hm = parseFloat(horasMes.replace(',', '.')) || 180
  const mo = parseFloat(margenObjetivo.replace(',', '.')) || 25
  const costePorHora = hm > 0 ? cf / hm : 0

  const filas = servicios.map((s) => {
    const precio = parseFloat(s.precio.replace(',', '.')) || 0
    const durMin = parseFloat(s.duracion.replace(',', '.')) || 0
    const material = parseFloat(s.materialDirecto.replace(',', '.')) || 0
    const durHoras = durMin / 60

    const costeSala = costePorHora * durHoras
    const costeTotal = costeSala + material
    const precioMinimo = mo > 0 ? costeTotal / (1 - mo / 100) : costeTotal
    const margenEuroHora = durHoras > 0 ? (precio - costeTotal) / durHoras : 0
    const margenPct = precio > 0 ? ((precio - costeTotal) / precio) * 100 : 0
    const brecha = precio - precioMinimo
    const clase = precio > 0 && durMin > 0 ? clasificar(brecha) : null

    return { ...s, precio, durMin, durHoras, material, costeSala, costeTotal, precioMinimo, margenEuroHora, margenPct, brecha, clase }
  })

  const hayDatos = filas.some((f) => f.precio > 0 && f.durMin > 0)

  return (
    <div className="space-y-8">

      {/* Costes fijos del centro */}
      <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
        <h3 className="font-black text-gray-900 text-lg mb-5">1. Costes fijos de tu centro</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-1.5">
              Costes fijos totales (€/mes)
            </label>
            <p className="text-xs text-gray-500 mb-2">Alquiler + nóminas + suministros + seguros + material</p>
            <input
              type="number"
              min="0"
              value={costosFijos}
              onChange={(e) => setCostosFijos(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="7000"
            />
          </div>
          <div>
            <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-1.5">
              Horas de sala al mes
            </label>
            <p className="text-xs text-gray-500 mb-2">Total horas que las salas están operativas al mes</p>
            <input
              type="number"
              min="1"
              value={horasMes}
              onChange={(e) => setHorasMes(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="180"
            />
          </div>
          <div>
            <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-1.5">
              Margen objetivo (%)
            </label>
            <p className="text-xs text-gray-500 mb-2">Porcentaje de beneficio sobre precio de venta</p>
            <input
              type="number"
              min="0"
              max="80"
              value={margenObjetivo}
              onChange={(e) => setMargenObjetivo(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="25"
            />
          </div>
        </div>
        {costePorHora > 0 && (
          <div className="mt-4 bg-white border border-teal-200 rounded-xl px-4 py-3 inline-block">
            <span className="text-xs text-gray-500">Coste por hora de sala: </span>
            <span className="font-black text-teal-700 text-lg">{costePorHora.toFixed(2)} €/hora</span>
          </div>
        )}
      </div>

      {/* Servicios */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-black text-gray-900 text-lg">2. Tus servicios</h3>
          <button
            onClick={() => setMostrarEjemplos(!mostrarEjemplos)}
            className="text-xs font-bold text-teal-600 hover:text-teal-800 underline"
          >
            Cargar ejemplos
          </button>
        </div>
        {mostrarEjemplos && (
          <div className="mb-4 bg-teal-50 border border-teal-200 rounded-xl p-4">
            <p className="text-sm text-gray-700 mb-3">¿Quieres ver cómo funciona con datos de ejemplo de un centro de bienestar?</p>
            <button
              onClick={cargarEjemplos}
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm px-4 py-2 rounded-lg transition-colors"
            >
              Sí, cargar ejemplos
            </button>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-2 pr-3 font-black text-gray-700 text-xs uppercase tracking-widest">Servicio</th>
                <th className="text-right py-2 px-2 font-black text-gray-700 text-xs uppercase tracking-widest">Precio (€)</th>
                <th className="text-right py-2 px-2 font-black text-gray-700 text-xs uppercase tracking-widest">Duración (min)</th>
                <th className="text-right py-2 px-2 font-black text-gray-700 text-xs uppercase tracking-widest">Material (€)</th>
                <th className="py-2 pl-2 w-8"></th>
              </tr>
            </thead>
            <tbody>
              {servicios.map((s, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-2 pr-3">
                    <input
                      type="text"
                      value={s.nombre}
                      onChange={(e) => update(i, 'nombre', e.target.value)}
                      placeholder={`Servicio ${i + 1}`}
                      className="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
                    />
                  </td>
                  <td className="py-2 px-2">
                    <input
                      type="number"
                      min="0"
                      value={s.precio}
                      onChange={(e) => update(i, 'precio', e.target.value)}
                      placeholder="0"
                      className="w-24 border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-right font-mono focus:outline-none focus:ring-2 focus:ring-teal-300"
                    />
                  </td>
                  <td className="py-2 px-2">
                    <input
                      type="number"
                      min="0"
                      value={s.duracion}
                      onChange={(e) => update(i, 'duracion', e.target.value)}
                      placeholder="45"
                      className="w-24 border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-right font-mono focus:outline-none focus:ring-2 focus:ring-teal-300"
                    />
                  </td>
                  <td className="py-2 px-2">
                    <input
                      type="number"
                      min="0"
                      value={s.materialDirecto}
                      onChange={(e) => update(i, 'materialDirecto', e.target.value)}
                      placeholder="0"
                      className="w-24 border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-right font-mono focus:outline-none focus:ring-2 focus:ring-teal-300"
                    />
                  </td>
                  <td className="py-2 pl-2">
                    <button
                      onClick={() => removeRow(i)}
                      disabled={servicios.length <= 2}
                      className="text-gray-300 hover:text-red-400 disabled:opacity-30 transition-colors text-lg leading-none"
                    >
                      ×
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          onClick={addRow}
          className="mt-3 text-sm font-bold text-teal-600 hover:text-teal-800 transition-colors"
        >
          + Añadir servicio
        </button>
      </div>

      {/* Resultados */}
      {hayDatos && (
        <div>
          <h3 className="font-black text-gray-900 text-lg mb-4">3. Análisis de rentabilidad</h3>
          <div className="space-y-3">
            {filas.filter((f) => f.precio > 0 && f.durMin > 0).map((f, i) => (
              <div
                key={i}
                className={`border rounded-xl p-4 ${f.clase ? COLORES[f.clase] : 'bg-gray-50 border-gray-200'}`}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <p className="font-black text-gray-900 text-base">{f.nombre || `Servicio ${i + 1}`}</p>
                    {f.clase && (
                      <p className={`text-xs font-black mt-0.5 ${f.clase === 'ok' ? 'text-green-700' : f.clase === 'revisar' ? 'text-amber-700' : 'text-red-700'}`}>
                        {ETIQUETAS[f.clase]}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-6 flex-wrap text-right">
                    <div>
                      <p className="text-xs text-gray-500">Precio mínimo</p>
                      <p className="font-black text-gray-900">{f.precioMinimo.toFixed(2)} €</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Precio actual</p>
                      <p className="font-black text-gray-900">{f.precio.toFixed(2)} €</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Diferencia</p>
                      <p className={`font-black ${f.brecha >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                        {f.brecha >= 0 ? '+' : ''}{f.brecha.toFixed(2)} €
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">€/hora real</p>
                      <p className="font-black text-gray-900">{f.margenEuroHora.toFixed(0)} €</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
