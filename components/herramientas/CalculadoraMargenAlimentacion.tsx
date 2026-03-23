'use client'

import { useState } from 'react'

interface Producto {
  nombre: string
  precioCompra: string
  precioVenta: string
  mermaEstimada: string
}

const VACIO: Producto = { nombre: '', precioCompra: '', precioVenta: '', mermaEstimada: '' }

function clasificarMargen(margenReal: number): 'alto' | 'medio' | 'bajo' | 'negativo' {
  if (margenReal >= 30) return 'alto'
  if (margenReal >= 15) return 'medio'
  if (margenReal >= 0) return 'bajo'
  return 'negativo'
}

const ETIQUETAS: Record<string, string> = {
  alto: '⭐ Margen saludable',
  medio: '✓ Margen aceptable',
  bajo: '⚠ Margen bajo',
  negativo: '✗ Pérdidas reales',
}
const COLORES: Record<string, string> = {
  alto: 'bg-green-50 border-green-200 text-green-800',
  medio: 'bg-blue-50 border-blue-200 text-blue-800',
  bajo: 'bg-amber-50 border-amber-200 text-amber-800',
  negativo: 'bg-red-50 border-red-200 text-red-800',
}

const EJEMPLOS: Producto[] = [
  { nombre: 'Fresas (kg)', precioCompra: '2.80', precioVenta: '3.90', mermaEstimada: '18' },
  { nombre: 'Mango (kg)', precioCompra: '1.60', precioVenta: '2.50', mermaEstimada: '12' },
  { nombre: 'Naranjas (kg)', precioCompra: '0.45', precioVenta: '1.10', mermaEstimada: '4' },
  { nombre: 'Tomates (kg)', precioCompra: '0.90', precioVenta: '1.80', mermaEstimada: '10' },
  { nombre: 'Espinacas (kg)', precioCompra: '1.20', precioVenta: '2.20', mermaEstimada: '22' },
]

export default function CalculadoraMargenAlimentacion() {
  const [productos, setProductos] = useState<Producto[]>([
    { ...VACIO }, { ...VACIO }, { ...VACIO },
  ])
  const [mostrarEjemplos, setMostrarEjemplos] = useState(false)

  function update(i: number, field: keyof Producto, val: string) {
    setProductos((prev) => prev.map((p, idx) => idx === i ? { ...p, [field]: val } : p))
  }
  function addRow() { setProductos((prev) => [...prev, { ...VACIO }]) }
  function removeRow(i: number) {
    if (productos.length > 2) setProductos((prev) => prev.filter((_, idx) => idx !== i))
  }
  function cargarEjemplos() {
    setProductos(EJEMPLOS.map((e) => ({ ...e })))
    setMostrarEjemplos(false)
  }

  const filas = productos.map((p) => {
    const compra = parseFloat(p.precioCompra.replace(',', '.')) || 0
    const venta = parseFloat(p.precioVenta.replace(',', '.')) || 0
    const merma = parseFloat(p.mermaEstimada.replace(',', '.')) || 0

    // Margen teórico (sin merma)
    const margenTeorico = venta > 0 ? ((venta - compra) / venta) * 100 : 0

    // Margen real: sobre 100 kg comprados, se vende (100 - merma%) al precio completo
    // Coste total: 100 * compra
    // Ingresos reales: (100 - merma) * venta
    const unidadesVendidas = 100 - merma
    const ingresosReales = unidadesVendidas * venta
    const costeTotal = 100 * compra
    const margenReal = ingresosReales > 0 ? ((ingresosReales - costeTotal) / ingresosReales) * 100 : 0
    const diferencia = margenReal - margenTeorico

    // Impacto económico de reducir merma a la mitad (por cada 100 unidades)
    const mermaReducida = merma / 2
    const ingresosConMermaReducida = (100 - mermaReducida) * venta
    const margenConMermaReducida = ingresosConMermaReducida > 0
      ? ((ingresosConMermaReducida - costeTotal) / ingresosConMermaReducida) * 100
      : 0
    const mejoraMargen = margenConMermaReducida - margenReal

    const clase = compra > 0 && venta > 0 ? clasificarMargen(margenReal) : null
    return { ...p, compra, venta, merma, margenTeorico, margenReal, diferencia, mejoraMargen, clase }
  })

  const hayDatos = filas.some((f) => f.compra > 0 && f.venta > 0)

  return (
    <div className="space-y-8">

      {/* Tabla de productos */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-black text-gray-900 text-lg">Tus productos</h3>
          <button
            onClick={() => setMostrarEjemplos(!mostrarEjemplos)}
            className="text-xs font-bold text-emerald-600 hover:text-emerald-800 underline"
          >
            Cargar ejemplos
          </button>
        </div>
        {mostrarEjemplos && (
          <div className="mb-4 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p className="text-sm text-gray-700 mb-3">¿Quieres ver cómo funciona con datos de ejemplo de una frutería?</p>
            <button
              onClick={cargarEjemplos}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-4 py-2 rounded-lg transition-colors"
            >
              Sí, cargar ejemplos
            </button>
          </div>
        )}

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-4">
          <p className="text-xs text-gray-600 leading-relaxed">
            <strong>Merma estimada (%):</strong> Porcentaje del producto comprado que no vendes al precio normal (se tira, se estropea o se vende a precio reducido). Si no lo has medido, empieza por 10-15% y ajusta con datos reales.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-2 pr-3 font-black text-gray-700 text-xs uppercase tracking-widest">Producto</th>
                <th className="text-right py-2 px-2 font-black text-gray-700 text-xs uppercase tracking-widest">Precio compra (€/kg)</th>
                <th className="text-right py-2 px-2 font-black text-gray-700 text-xs uppercase tracking-widest">Precio venta (€/kg)</th>
                <th className="text-right py-2 px-2 font-black text-gray-700 text-xs uppercase tracking-widest">Merma (%)</th>
                <th className="py-2 pl-2 w-8"></th>
              </tr>
            </thead>
            <tbody>
              {productos.map((p, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-2 pr-3">
                    <input
                      type="text"
                      value={p.nombre}
                      onChange={(e) => update(i, 'nombre', e.target.value)}
                      placeholder={`Producto ${i + 1}`}
                      className="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300"
                    />
                  </td>
                  <td className="py-2 px-2">
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={p.precioCompra}
                      onChange={(e) => update(i, 'precioCompra', e.target.value)}
                      placeholder="0.00"
                      className="w-28 border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-right font-mono focus:outline-none focus:ring-2 focus:ring-emerald-300"
                    />
                  </td>
                  <td className="py-2 px-2">
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={p.precioVenta}
                      onChange={(e) => update(i, 'precioVenta', e.target.value)}
                      placeholder="0.00"
                      className="w-28 border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-right font-mono focus:outline-none focus:ring-2 focus:ring-emerald-300"
                    />
                  </td>
                  <td className="py-2 px-2">
                    <input
                      type="number"
                      min="0"
                      max="99"
                      value={p.mermaEstimada}
                      onChange={(e) => update(i, 'mermaEstimada', e.target.value)}
                      placeholder="10"
                      className="w-20 border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-right font-mono focus:outline-none focus:ring-2 focus:ring-emerald-300"
                    />
                  </td>
                  <td className="py-2 pl-2">
                    <button
                      onClick={() => removeRow(i)}
                      disabled={productos.length <= 2}
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
          className="mt-3 text-sm font-bold text-emerald-600 hover:text-emerald-800 transition-colors"
        >
          + Añadir producto
        </button>
      </div>

      {/* Resultados */}
      {hayDatos && (
        <div>
          <h3 className="font-black text-gray-900 text-lg mb-4">Análisis de margen real</h3>
          <div className="space-y-3">
            {filas.filter((f) => f.compra > 0 && f.venta > 0).map((f, i) => (
              <div
                key={i}
                className={`border rounded-xl p-4 ${f.clase ? COLORES[f.clase] : 'bg-gray-50 border-gray-200'}`}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <p className="font-black text-gray-900 text-base">{f.nombre || `Producto ${i + 1}`}</p>
                    {f.clase && (
                      <p className={`text-xs font-black mt-0.5 ${
                        f.clase === 'alto' ? 'text-green-700' :
                        f.clase === 'medio' ? 'text-blue-700' :
                        f.clase === 'bajo' ? 'text-amber-700' : 'text-red-700'
                      }`}>
                        {ETIQUETAS[f.clase]}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-5 flex-wrap text-right">
                    <div>
                      <p className="text-xs text-gray-500">Margen teórico</p>
                      <p className="font-black text-gray-500">{f.margenTeorico.toFixed(1)}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Margen real</p>
                      <p className={`font-black ${f.margenReal >= 15 ? 'text-gray-900' : 'text-red-700'}`}>{f.margenReal.toFixed(1)}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Diferencia</p>
                      <p className="font-black text-red-600">{f.diferencia.toFixed(1)} pp</p>
                    </div>
                    {f.merma > 0 && (
                      <div>
                        <p className="text-xs text-gray-500">Si reduces merma al 50%</p>
                        <p className="font-black text-emerald-700">+{f.mejoraMargen.toFixed(1)} pp</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">pp = puntos porcentuales de margen</p>
        </div>
      )}
    </div>
  )
}
