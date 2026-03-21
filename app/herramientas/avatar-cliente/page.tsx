import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL } from '@/lib/seo'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'Define tu Cliente Ideal (Avatar) — Herramienta Gratuita | Foco Rentabilismo',
  description: 'Herramienta gratuita para definir el perfil de tu cliente ideal. Descubre a quién le vendes de verdad, qué le duele y cómo comunicarte con él para vender más.',
  alternates: { canonical: `${BASE_URL}/herramientas/avatar-cliente/` },
}

export default function AvatarClientePage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Cabecera */}
      <div className="border-b-2 border-orange-500 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Link href="/herramientas/" className="text-xs font-bold text-orange-600 uppercase tracking-widest hover:text-orange-800 transition-colors">
            ← Todas las herramientas
          </Link>
          <div className="mt-4 flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-orange-600 bg-white border border-orange-200 px-2 py-0.5 rounded">Herramienta</span>
            <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded">Gratuita</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Define tu Cliente Ideal
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Construye el perfil exacto de a quién le vendes. Para venderle mejor, comunicarte mejor
            y dejar de perder tiempo con clientes que no encajan.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:gap-12" style={{ gridTemplateColumns: '1fr 260px' }}>

          {/* Columna principal */}
          <div className="space-y-12">

            {/* Por qué importa */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-6 pb-2 border-b-4 border-orange-500 inline-block">
                Por qué importa saber a quién le vendes
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Muchos negocios intentan venderle a todo el mundo. Y el resultado es que no
                le venden bien a nadie. Los mensajes son genéricos, los productos o servicios
                no resuelven bien ningún problema concreto, y el cliente no siente que esa
                oferta es para él.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cuando tienes claro quién es tu cliente ideal — qué le duele, qué le da miedo,
                qué valora, cómo toma decisiones — todo cambia. Tus mensajes conectan.
                Tu oferta encaja. Y cerrar ventas cuesta mucho menos.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Esta herramienta te ayuda a construir ese perfil. No es un ejercicio teórico
                de marketing — es un proceso práctico que termina con un documento que puedes
                usar mañana mismo para mejorar cómo comunicas y cómo vendes.
              </p>
            </section>

            {/* Qué consigues */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-6 pb-2 border-b-4 border-orange-500 inline-block">
                Qué consigues al definir tu avatar
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    titulo: 'Perfil demográfico y situacional',
                    desc: 'Edad, situación laboral, tipo de negocio, tamaño, zona geográfica. El contexto en el que tu cliente toma decisiones.',
                  },
                  {
                    titulo: 'Sus problemas y dolores reales',
                    desc: 'Qué le preocupa de verdad. Qué le quita el sueño. Qué problema busca resolver cuando llega a ti.',
                  },
                  {
                    titulo: 'Sus objeciones de compra',
                    desc: 'Por qué no compra aunque tenga la necesidad. Qué frenos mentales o prácticos le impiden tomar la decisión.',
                  },
                  {
                    titulo: 'Su lenguaje y expresiones',
                    desc: 'Cómo describe su problema en sus propias palabras. El lenguaje que tienes que usar para que sienta que le estás hablando a él.',
                  },
                  {
                    titulo: 'Sus criterios de decisión',
                    desc: 'Qué valora más cuando elige proveedor: ¿precio, confianza, experiencia, rapidez, resultados? Cómo jerarquiza.',
                  },
                  {
                    titulo: 'Mensajes que conectan con él',
                    desc: 'Los argumentos y frases concretas que resuenan con su situación y le hacen sentir que entiendes su problema.',
                  },
                ].map((item) => (
                  <div key={item.titulo} className="border border-orange-100 bg-orange-50 rounded-xl p-5">
                    <p className="font-black text-gray-900 mb-1 text-sm">→ {item.titulo}</p>
                    <p className="text-sm text-gray-600 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Cómo funciona */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-6 pb-2 border-b-4 border-orange-500 inline-block">
                Cómo funciona
              </h2>
              <ol className="space-y-6">
                {[
                  {
                    n: '01',
                    titulo: 'Describes tu negocio y tu oferta actual',
                    desc: 'Qué vendes, a quién crees que le vendes ahora mismo y cuál es el resultado que le genera a tu cliente. No hace falta que sea perfecto — se va afinando.',
                  },
                  {
                    n: '02',
                    titulo: 'Respondes preguntas sobre tus mejores clientes',
                    desc: 'Quiénes son los clientes con los que mejor te ha ido, qué tienen en común, por qué vinieron a ti y cómo tomaron la decisión de contratarte.',
                  },
                  {
                    n: '03',
                    titulo: 'La herramienta construye el perfil',
                    desc: 'A partir de tus respuestas genera el perfil completo del avatar: demografía, dolores, objeciones, lenguaje y criterios de decisión.',
                  },
                  {
                    n: '04',
                    titulo: 'Recibes los mensajes de venta adaptados',
                    desc: 'No solo el perfil. También los argumentos y frases concretas que puedes usar en tu web, en tus presupuestos y en tus conversaciones de venta.',
                  },
                ].map((paso) => (
                  <li key={paso.n} className="flex gap-5">
                    <span className="shrink-0 text-3xl font-black text-orange-200 leading-none">{paso.n}</span>
                    <div>
                      <p className="font-black text-gray-900 mb-1">{paso.titulo}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{paso.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* Cuándo usarla */}
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-6 pb-2 border-b-4 border-orange-500 inline-block">
                Cuándo tiene más sentido usarla
              </h2>
              <div className="space-y-3">
                {[
                  'Si tus mensajes de venta no conectan y no sabes por qué',
                  'Si captas clientes pero no los que realmente quieres o los que más te rentabilizan',
                  'Si vas a cambiar o mejorar tu oferta y quieres asegurarte de que encaja',
                  'Si estás rediseñando tu web, tus presupuestos o tu forma de presentarte',
                  'Si tienes sensación de que vendes a todo el mundo y no estás diferenciado',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 text-orange-500 font-black">✓</span>
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-orange-500 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-black text-white mb-3">
                Define tu cliente ideal ahora — gratis
              </h2>
              <p className="text-orange-100 mb-6 leading-relaxed max-w-lg mx-auto">
                15-20 minutos. Sin registro. Sin coste. Terminas con un perfil completo
                y mensajes de venta listos para usar.
              </p>
              <a
                href="https://avatar-rentabilismo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-orange-600 font-black px-8 py-3.5 rounded-xl text-base hover:bg-orange-50 transition-colors"
              >
                Ir a avatar-rentabilismo.com →
              </a>
              <p className="text-xs text-orange-200 mt-4">Gratis · Sin registro · Resultado inmediato</p>
            </section>

            {/* Otras herramientas */}
            <section>
              <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2 mb-6">
                Otras herramientas gratuitas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/herramientas/diagnostico-negocio/" className="group block border border-gray-200 hover:border-orange-400 rounded-xl p-5 transition-all hover:shadow-md">
                  <p className="font-black text-gray-900 group-hover:text-orange-700 mb-1">Diagnóstico de negocio</p>
                  <p className="text-sm text-gray-500">Detecta qué está fallando y por dónde empezar a mejorar.</p>
                  <p className="text-xs font-bold text-orange-600 mt-3 group-hover:underline">Ver herramienta →</p>
                </Link>
                <Link href="/herramientas/analiza-tu-idea/" className="group block border border-gray-200 hover:border-orange-400 rounded-xl p-5 transition-all hover:shadow-md">
                  <p className="font-black text-gray-900 group-hover:text-orange-700 mb-1">Analiza tu idea de negocio</p>
                  <p className="text-sm text-gray-500">Valida si tu idea tiene sentido económico antes de invertir.</p>
                  <p className="text-xs font-bold text-orange-600 mt-3 group-hover:underline">Ver herramienta →</p>
                </Link>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-gray-50 border border-dashed border-gray-300 rounded-2xl flex items-center justify-center h-64">
                <p className="text-xs text-gray-400 text-center px-4">Espacio publicitario</p>
              </div>
              <Sidebar />
            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}
