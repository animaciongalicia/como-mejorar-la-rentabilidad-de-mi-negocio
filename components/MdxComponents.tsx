// Componentes MDX personalizados para posts del blog.
// Uso en .mdx: importar no es necesario — se inyectan automáticamente via MDXRemote components prop.

import type { ReactNode } from 'react'

// Caja de aviso / resumen destacado
export function Callout({ children, tipo = 'info' }: { children: ReactNode; tipo?: 'info' | 'alerta' | 'clave' }) {
  const styles = {
    info:   'bg-teal-50 border-teal-400 text-teal-900',
    alerta: 'bg-amber-50 border-amber-400 text-amber-900',
    clave:  'bg-violet-50 border-violet-500 text-violet-900 font-medium',
  }
  return (
    <div className={`my-6 border-l-4 rounded-r-xl px-5 py-4 text-sm leading-relaxed ${styles[tipo]}`}>
      {children}
    </div>
  )
}

// Paso numerado (para listas de pasos)
export function Paso({ numero, titulo, children }: { numero: number; titulo: string; children: ReactNode }) {
  return (
    <div className="my-6 border-l-2 border-orange-300 pl-5">
      <p className="text-xs font-black text-orange-500 uppercase tracking-widest mb-1">Paso {numero}</p>
      <p className="font-bold text-gray-900 mb-2">{titulo}</p>
      <div className="text-gray-700 text-sm leading-relaxed">{children}</div>
    </div>
  )
}

// Dato / cifra destacada
export function Stat({ valor, etiqueta }: { valor: string; etiqueta: string }) {
  return (
    <div className="inline-flex flex-col items-center bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 my-2 mx-1 text-center">
      <span className="text-2xl font-black text-teal-700">{valor}</span>
      <span className="text-xs text-gray-500 mt-1 max-w-[12ch] leading-tight">{etiqueta}</span>
    </div>
  )
}
