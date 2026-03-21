import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL, CHATGPT_AGENTES_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Agente Precios — Calcula el precio mínimo rentable de tu producto | Foco Rentabilismo',
  description:
    'Un agente de IA que calcula el precio mínimo rentable de tu producto o servicio con tus costes reales. Descubre tu margen bruto, simula escenarios y deja de cobrar de menos.',
  alternates: { canonical: `${BASE_URL}/agentes/calculadora-precios/` },
}

export default function AgentePreciosPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <div className="border-b-2 border-violet-500 bg-violet-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/agentes/"
            className="text-xs font-bold text-violet-500 uppercase tracking-widest hover:text-violet-700 transition-colors"
          >
            ← Todos los agentes
          </Link>
          <div className="mt-4 flex items-center gap-3 mb-4">
            <span className="text-xs font-bold text-violet-600 bg-white border border-violet-200 px-3 py-1 rounded-full">
              Precios
            </span>
            <span className="text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full">
              Disponible ahora
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
            Agente Precios
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Calcula el precio mínimo rentable de tu producto o servicio. Con tus costes reales,
            no con lo que cobra la competencia.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* 1. El dolor */}
        <section>
          <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">
            El problema que resuelve
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              La mayoría de dueños de negocio fijan sus precios mirando lo que cobra el de al lado.
              Sin saber si ese precio les cubre los costes. Sin saber si les deja margen real. Sin
              saber si están regalando trabajo o vendiendo con sentido.
            </p>
            <p className="text-gray-700 leading-relaxed">
              El resultado es siempre el mismo: vendes, trabajas, te cansas y al final del mes
              el dinero no aparece. Porque <strong>cobrar no es lo mismo que ganar</strong>. Entre
              lo que entra y lo que te queda hay una diferencia que muchos negocios no calculan nunca.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Y cuando alguien pide un descuento, no sabes qué responder. Porque no tienes los
              números. No sabes hasta dónde puedes bajar sin perder. No sabes qué argumentar.
              Así que o pierdes la venta o la cierras perdiendo margen que no tienes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Este agente existe para eso: <strong>darte el número exacto por debajo del cual
              pierdes dinero en cada venta</strong>, y el argumento para defender tu precio
              ante cualquier cliente que intente regatearte.
            </p>
          </div>
        </section>

        {/* 2. La solución */}
        <section>
          <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">
            Qué consigues con él
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titulo: 'Tu precio mínimo rentable',
                desc: 'El precio exacto por debajo del cual pierdes dinero en cada venta. Con tus costes reales, no con estimaciones genéricas.',
              },
              {
                titulo: 'Tu margen bruto actual',
                desc: 'Lo que realmente te queda de cada producto o servicio una vez descontados los costes directos. El número que importa.',
              },
              {
                titulo: 'Cuánto puedes bajar sin perder',
                desc: 'El límite real de descuento que puedes ofrecer sin que la venta te cueste dinero. Fundamental para negociar con seguridad.',
              },
              {
                titulo: 'Comparativa con la competencia',
                desc: 'Si cobras de menos o de más respecto al sector, y por qué eso importa o no importa según tu estructura de costes.',
              },
              {
                titulo: 'El argumento para subir precios',
                desc: 'Cómo justificarlo ante el cliente con datos reales, no con excusas. Un argumento concreto que puedes usar mañana.',
              },
              {
                titulo: 'Simulador de escenarios',
                desc: 'Qué pasa si subes un 10%, si cambias el volumen de ventas, si bajas costes de materiales. Los números antes de tomar la decisión.',
              },
            ].map((item) => (
              <div
                key={item.titulo}
                className="border border-violet-100 bg-violet-50 rounded-xl p-5"
              >
                <p className="font-black text-gray-900 mb-1 text-sm">→ {item.titulo}</p>
                <p className="text-sm text-gray-600 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Cómo funciona */}
        <section>
          <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">
            Cómo funciona
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            El Agente Precios usa un prompt estructurado que convierte a ChatGPT o Claude en
            un especialista en fijación de precios para negocios físicos. Te hace las preguntas
            correctas, procesa tus costes reales y te devuelve los números que necesitas para
            tomar decisiones con cabeza.
          </p>
          <ol className="space-y-6">
            {[
              {
                n: '01',
                titulo: 'Le das tus costes por producto o servicio',
                desc: 'Coste de materiales o mercancía, tiempo que llevas empleado en producirlo o prestarlo, y la porción de costes fijos que corresponde a esa unidad (alquiler, luz, herramientas). No hace falta que sea exacto al céntimo.',
              },
              {
                n: '02',
                titulo: 'Le dices tu precio actual y tu volumen de ventas',
                desc: 'El precio al que vendes ahora mismo —o al que quieres vender— y cuántas unidades aproximadas vendes al mes. Con eso el agente puede calcular el impacto real de cualquier cambio.',
              },
              {
                n: '03',
                titulo: 'El agente calcula tu precio mínimo y tu margen real',
                desc: 'Cruza los datos, calcula el coste total por unidad, el margen bruto actual y los precios mínimos para distintos niveles de rentabilidad. Y te compara con referencias del sector.',
              },
              {
                n: '04',
                titulo: 'Te da el precio recomendado y el argumento para defenderlo',
                desc: 'No solo el número. Te explica qué pasaría si subes un 10%, si bajas un 15% para captar más volumen, o si reduces costes. Y te da la frase concreta para responder al cliente que pide descuento.',
              },
            ].map((paso) => (
              <li key={paso.n} className="flex gap-5">
                <span className="shrink-0 text-3xl font-black text-violet-200 leading-none">{paso.n}</span>
                <div>
                  <p className="font-black text-gray-900 mb-1">{paso.titulo}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{paso.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 4. Cómo usarlo bien */}
        <section>
          <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">
            Cómo sacarle el máximo partido
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-violet-400 pl-5">
              <p className="font-bold text-gray-900 mb-1">Sé específico con los costes directos</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Cuanto más desglosados sean los costes que le des, más preciso será el cálculo.
                No es lo mismo &ldquo;me cuesta unos 20€&rdquo; que &ldquo;materiales 12€, media hora de mi tiempo
                a 25€/hora y un euro de overhead&rdquo;. El segundo te da un precio mínimo real.
              </p>
            </div>
            <div className="border-l-4 border-violet-400 pl-5">
              <p className="font-bold text-gray-900 mb-1">No olvides incluir tu tiempo como coste</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Es el error más común. Si tardas dos horas en hacer algo y no lo incluyes en el
                coste, estás trabajando gratis. Dile al agente cuánto vale tu hora —aunque te
                cueste ponerle número— y verás cómo cambia el precio mínimo.
              </p>
            </div>
            <div className="border-l-4 border-violet-400 pl-5">
              <p className="font-bold text-gray-900 mb-1">Pídele que calcule diferentes escenarios de precio</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                No te quedes con el primer resultado. Pídele: &ldquo;¿qué pasa si bajo los costes de
                materiales un 15%?&rdquo; o &ldquo;¿cómo cambia si doblo el volumen de ventas?&rdquo;
                Ver los escenarios lado a lado cambia completamente la perspectiva.
              </p>
            </div>
            <div className="border-l-4 border-violet-400 pl-5">
              <p className="font-bold text-gray-900 mb-1">Si no sabes los costes exactos, da rangos</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                No hace falta precisión quirúrgica. &ldquo;Entre 8 y 12€ de materiales&rdquo; es suficiente
                para que el agente trabaje. Te dará el precio mínimo en ambos extremos y ya
                decides tú con cuál quedarte.
              </p>
            </div>
            <div className="border-l-4 border-violet-400 pl-5">
              <p className="font-bold text-gray-900 mb-1">Pídele el argumento de venta una vez tengas el precio</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Una vez que tienes claro tu precio mínimo rentable, pídele la frase exacta para
                responder al cliente que te dice que &ldquo;es caro&rdquo; o que &ldquo;la competencia cobra menos&rdquo;.
                Tener el número detrás te da seguridad para defenderlo.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Cómo pararlo / redirigirlo */}
        <section>
          <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">
            Cómo corregirlo cuando se desvía
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A veces la IA simplifica demasiado los cálculos, ignora costes que mencionaste
            o te da una recomendación que no encaja con tu realidad. Estas frases te ayudan
            a reconducirlo sin empezar de cero:
          </p>
          <div className="space-y-3">
            {[
              {
                problema: 'Olvidaste añadir un coste',
                solucion: '"Incluye también el tiempo que tardo en X" → añade ese coste y recalcula el precio mínimo con el dato nuevo.',
              },
              {
                problema: 'Quieres simular un escenario de bajada de precio',
                solucion: '"Calcula qué pasa si bajo el precio un 15% para captar más clientes" → te dirá cuánto más volumen necesitarías para compensar.',
              },
              {
                problema: 'El margen calculado no te cuadra',
                solucion: '"No me convence ese margen, tengo más gastos indirectos, te explico..." → dale el detalle y que recalcule desde ahí.',
              },
              {
                problema: 'Vendes servicios y quieres precio por hora',
                solucion: '"Tradúcelo a precio por hora, no por proyecto" → útil cuando el cliente te pregunta cuánto cobras la hora y quieres tener el dato claro.',
              },
              {
                problema: 'Ya tienes el precio y quieres defenderlo',
                solucion: '"Ahora dime cómo le explico este precio a un cliente que me pide descuento" → te da el argumento específico para tu producto y tu estructura de costes.',
              },
            ].map((item) => (
              <div key={item.problema} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">{item.problema}</p>
                <p className="text-sm text-gray-700 italic">{item.solucion}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. El prompt */}
        <section>
          <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">
            El prompt — cópialo y úsalo
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Copia este prompt, pégalo en ChatGPT o Claude, y responde a las preguntas que te haga.
            En menos de 15 minutos tendrás tu precio mínimo rentable, tu margen real y los
            argumentos para subirlo si hace falta.
          </p>
          <div className="bg-gray-900 rounded-2xl p-6 relative">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Prompt — Agente Precios</p>
            <pre className="text-sm text-gray-100 leading-relaxed whitespace-pre-wrap font-mono">
{`Actúa como un experto en fijación de precios para negocios físicos y pymes españolas. Tu objetivo es calcular el precio mínimo rentable de un producto o servicio y ayudar al dueño a entender su margen real.

Primero hazme estas preguntas:
1. Qué producto o servicio quiere calcular
2. Coste directo de materiales o mercancía por unidad
3. Tiempo que lleva producirlo o prestarlo (en horas o minutos)
4. A qué precio valora su tiempo (€/hora) o su coste de personal directo
5. Cuánto cuesta aproximadamente el espacio, luz, herramientas asignables a esa unidad
6. Precio al que lo vende actualmente (o al que quiere venderlo)
7. Cuántas unidades vende al mes

Con esa información calcúlame:
— Coste total por unidad (materiales + mano de obra directa + overhead asignado)
— Margen bruto actual (€ y %)
— Precio mínimo para un margen bruto del 40% (referencia saludable para pyme)
— Precio mínimo para un margen bruto del 60% (referencia para negocios de servicio)
— Qué pasaría si baja el precio un 10% (impacto en margen y en ventas necesarias)
— Qué pasaría si sube el precio un 15% (impacto en margen y cuántos clientes podría perder sin empeorar)

Termina con una recomendación de precio clara y un argumento concreto que el dueño puede usar con clientes que regatean.

Sé directo, con números, sin rodeos.`}
            </pre>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Funciona con ChatGPT 4o, Claude 3.5 Sonnet y versiones superiores.
          </p>
        </section>

        {/* CTA final — dos opciones */}
        <section>
          <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-8">
            ¿Por dónde empezar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Opción A: cópialo tú */}
            <div className="border-2 border-gray-200 rounded-2xl p-7">
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Opción A</p>
              <h3 className="text-lg font-black text-gray-900 mb-3">
                Configúralo tú mismo
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Copia el prompt de arriba y pégalo en ChatGPT, Claude o la IA que uses
                habitualmente. Responde a las preguntas que te haga y en 15 minutos
                tienes tu precio mínimo calculado. Sin cuenta, sin registro, sin nada.
              </p>
              <p className="text-sm font-bold text-gray-500">
                ↑ El prompt está justo arriba. Es tuyo.
              </p>
            </div>

            {/* Opción B: hub ChatGPT */}
            <div className="border-2 border-violet-400 bg-violet-50 rounded-2xl p-7">
              <p className="text-xs font-black uppercase tracking-widest text-violet-500 mb-3">Opción B</p>
              <h3 className="text-lg font-black text-gray-900 mb-3">
                Usa nuestra versión ya configurada
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Tenemos más de 10 agentes rentabilistas listos en ChatGPT. Cada uno está
                afinado para un problema concreto. Sin copiar prompts, sin configurar nada.
                Entras y usas.
              </p>
              <a
                href={CHATGPT_AGENTES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
              >
                Ver agentes en ChatGPT →
              </a>
            </div>

          </div>
        </section>

      </div>
    </div>
  )
}
