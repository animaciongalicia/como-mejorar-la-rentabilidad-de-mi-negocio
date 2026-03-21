import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL, CHATGPT_AGENTES_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Agente Ventas — Guiones y argumentarios de venta para tu negocio | Foco Rentabilismo',
  description:
    'Un agente de IA que genera guiones de venta personalizados para tu negocio: cómo responder al "es caro", cerrar sin presionar y hacer seguimiento sin molestar.',
  alternates: { canonical: `${BASE_URL}/agentes/guion-ventas/` },
}

export default function AgenteVentasPage() {
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
              Ventas
            </span>
            <span className="text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full">
              Disponible ahora
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
            Agente Ventas
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Guiones y argumentarios de venta personalizados para tu negocio. Responde al
            &ldquo;es caro&rdquo;, cierra sin presionar y haz seguimiento sin molestar.
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
              Tu producto o servicio es bueno. Lo sabes. Tus clientes actuales lo saben. El problema
              es que cuando alguien nuevo te pregunta el precio, la conversación se complica.
              &ldquo;Es caro.&rdquo; &ldquo;Lo pienso.&rdquo; &ldquo;Ya tengo a alguien.&rdquo; Y tú no sabes qué decir sin
              parecer desesperado ni perder la venta.
            </p>
            <p className="text-gray-700 leading-relaxed">
              El problema no es tu precio. Es que <strong>no tienes un argumentario</strong>.
              No tienes la frase concreta para responder a cada objeción. No tienes el guión de
              presentación que engancha en 60 segundos. No tienes el mensaje de seguimiento que
              reactiva al que desapareció sin decir nada.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Eso se aprende. O se encarga a alguien que lo haga por ti. Este agente hace exactamente eso:
              <strong> genera argumentarios concretos, con tu tono, para tu tipo de cliente y tu sector</strong>.
              No guiones de libro de texto. Frases que puedes usar literalmente mañana.
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
                titulo: 'Guión de presentación en 60 segundos',
                desc: 'Cómo presentar tu negocio cuando alguien te pregunta qué haces. Que capture atención, no que aburra.',
              },
              {
                titulo: 'Respuesta al "es caro"',
                desc: 'Argumentos específicos para tu producto o servicio. Sin bajar el precio. Con datos y sin defensiva.',
              },
              {
                titulo: 'Respuesta al "lo pienso"',
                desc: 'Cómo reconducir la conversación sin presionar. Que el cliente decida, pero con la información correcta.',
              },
              {
                titulo: 'Técnica de upselling natural',
                desc: 'Cómo ofrecer la versión superior sin que suene a venta agresiva. Que el cliente lo pida casi solo.',
              },
              {
                titulo: 'Guión de seguimiento',
                desc: 'Qué decir cuando un lead desapareció. El mensaje que reactiva sin resultar pesado ni desesperado.',
              },
              {
                titulo: 'Cierre adaptado a tu canal',
                desc: 'La frase final que convierte la conversación en decisión. Distinta para presencial, WhatsApp o teléfono.',
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
            El Agente Ventas usa un prompt diseñado para extraer el contexto de tu negocio y
            generar argumentarios que encajen con tu sector, tu tipo de cliente y tu forma de
            comunicarte. No es un generador genérico de frases de venta.
          </p>
          <ol className="space-y-6">
            {[
              {
                n: '01',
                titulo: 'Describes tu negocio y tu cliente',
                desc: 'Qué vendes, a quién, a qué precio medio. También el canal habitual: presencial, teléfono, WhatsApp. Cuanto más específico, mejor el resultado.',
              },
              {
                n: '02',
                titulo: 'Le dices cuál es tu mayor problema',
                desc: 'Objeciones que más escuchas, dónde se rompen las ventas, qué respuestas no tienes. El agente prioriza eso.',
              },
              {
                n: '03',
                titulo: 'Genera los argumentarios personalizados',
                desc: 'Con el tono que le indiques (cercano, profesional, técnico) y adaptados a lo que más valoran tus clientes: precio, calidad, rapidez, confianza.',
              },
              {
                n: '04',
                titulo: 'Lo pruebas y lo afinas',
                desc: 'Si una frase suena rara, se la dices. Si necesitas la versión corta para WhatsApp, se la pides. En 2-3 iteraciones tienes algo que puedes usar de verdad.',
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

        {/* 4. Cómo sacarle partido */}
        <section>
          <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">
            Cómo sacarle el máximo partido
          </h2>
          <div className="space-y-4">
            {[
              {
                titulo: 'Describe a tu cliente típico con detalle',
                desc: 'No "empresas" ni "particulares". Edad aproximada, qué le importa, qué le preocupa, por qué compra. Cuanto más específico, más útil el argumentario.',
              },
              {
                titulo: 'Dile la objeción exacta que más escuchas',
                desc: 'No "el precio". La frase literal que te dicen: "Acabo de contratar a alguien", "Lo hago yo mismo", "Ahora no es buen momento". El agente trabaja mejor con la frase real.',
              },
              {
                titulo: 'Pídele el tono correcto',
                desc: 'Si tus clientes son directivos, el tono es distinto que si son autónomos. Si vendes servicios técnicos, distinto que si vendes moda. Dile cómo hablas tú normalmente.',
              },
              {
                titulo: 'Prueba el guión en voz alta',
                desc: 'Leerlo está bien. Decirlo en voz alta es mejor. Si hay una frase que no fluye, vuelve al agente y dísela. Se corrige en segundos.',
              },
              {
                titulo: 'Pide versiones por canal',
                desc: 'El argumentario para una reunión presencial no es el mismo que para WhatsApp. Pídele los dos. El de WhatsApp tiene que caber en 3 líneas.',
              },
            ].map((item) => (
              <div key={item.titulo} className="border-l-4 border-violet-400 pl-5">
                <p className="font-bold text-gray-900 mb-1">{item.titulo}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Frases para corregirlo */}
        <section>
          <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-6">
            Cómo corregirlo cuando no encaja
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            El primer resultado no siempre es el bueno. Estas frases funcionan para reconducirlo
            rápido:
          </p>
          <div className="space-y-3">
            {[
              {
                problema: 'Suena a manual de ventas, no a persona real',
                solucion: '"Eso suena demasiado artificial. Escríbelo como si lo dijera alguien normal hablando con un conocido."',
              },
              {
                problema: 'La objeción que más me dan no es esa',
                solucion: '"La objeción que más escucho es X. Reescribe el argumentario enfocándote en eso."',
              },
              {
                problema: 'El tono no encaja con mis clientes',
                solucion: '"Mis clientes son [perfil]. Ese tono no les va. Hazlo más [formal/cercano/directo]."',
              },
              {
                problema: 'Necesito solo una parte',
                solucion: '"Dame solo la respuesta al precio. Lo demás ya lo tengo. Que quede en 3-4 líneas."',
              },
              {
                problema: 'Quiero la versión WhatsApp',
                solucion: '"Ahora hazme el guión de seguimiento para WhatsApp. Máximo 3 líneas, que no parezca spam."',
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
            Copia este prompt en ChatGPT o Claude. Responde a sus preguntas y en menos de
            5 minutos tienes argumentarios que puedes probar hoy mismo.
          </p>
          <div className="bg-gray-900 rounded-2xl p-6 relative">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Prompt — Agente Ventas</p>
            <pre className="text-sm text-gray-100 leading-relaxed whitespace-pre-wrap font-mono">
{`Actúa como un experto en ventas para negocios físicos y pymes. Voy a describir mi negocio y necesito que me des argumentarios y guiones de venta concretos, adaptados a mi sector y a mis clientes reales.

Para empezar hazme estas preguntas:
1. Qué vendo y a quién (tipo de cliente, edad aproximada, perfil)
2. Cuál es el precio medio de lo que vendo
3. Cuál es la objeción más frecuente que recibo ("es caro", "lo pienso", "ya tengo proveedor"...)
4. Cómo se produce normalmente la venta (presencial, por teléfono, por WhatsApp...)
5. Qué tono quiero usar (cercano, profesional, técnico, directo...)
6. Qué es lo que más valoran mis clientes de comprarme a mí (precio, calidad, cercanía, rapidez...)

Con esa información dame:
— Guión de presentación en 60 segundos (para cuando alguien me pregunta qué hago)
— Respuesta a la objeción principal que te he dado, sin bajar el precio
— Técnica de cierre adaptada a mi canal de venta
— Guión de seguimiento para leads que no han respondido en 3-4 días
— Frase de upselling para ofrecer el servicio o producto superior

Que todo suene natural, no a manual de ventas. Que lo pueda usar literalmente mañana.`}
            </pre>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Funciona con ChatGPT 4o, Claude 3.5 Sonnet y versiones superiores.
          </p>
        </section>

        {/* CTA final */}
        <section>
          <h2 className="text-2xl font-black text-gray-900 border-b-4 border-violet-500 pb-2 inline-block mb-8">
            ¿Por dónde empezar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-gray-200 rounded-2xl p-7">
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Opción A</p>
              <h3 className="text-lg font-black text-gray-900 mb-3">
                Configúralo tú mismo
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Copia el prompt de arriba y pégalo en ChatGPT, Claude o la IA que uses
                habitualmente. Funciona desde el primer mensaje. Sin cuenta, sin registro,
                sin nada extra.
              </p>
              <p className="text-sm font-bold text-gray-500">
                ↑ El prompt está justo arriba. Es tuyo.
              </p>
            </div>
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
