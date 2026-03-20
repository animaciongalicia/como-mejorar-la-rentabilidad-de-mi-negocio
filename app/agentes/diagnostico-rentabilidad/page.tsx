import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE_URL, CHATGPT_AGENTES_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Agente Diagnóstico — Radiografía rápida de tu negocio | Foco Rentabilismo',
  description:
    'Un agente de IA que analiza los números de tu negocio y te dice exactamente dónde estás perdiendo dinero. Sin rodeos, sin teoría. Solo lo que tienes que hacer.',
  alternates: { canonical: `${BASE_URL}/agentes/diagnostico-rentabilidad/` },
}

export default function AgenteDiagnosticoPage() {
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
              Diagnóstico
            </span>
            <span className="text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full">
              Disponible ahora
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
            Agente Diagnóstico
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Radiografía rápida de tu negocio. Detecta en qué áreas estás perdiendo dinero
            antes de tomar ninguna decisión.
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
              Muchos dueños de negocio trabajan 10 horas al día, facturan bien y al final del mes
              se preguntan dónde ha ido el dinero. No es mala suerte. Es que hay fugas que no se ven
              a simple vista.
            </p>
            <p className="text-gray-700 leading-relaxed">
              El problema no es que no trabajas. Es que no sabes <strong>dónde exactamente se va el
              margen</strong>. Puede ser en un producto que vendes mucho pero que casi no deja nada.
              Puede ser en horas de personal que no se traducen en facturación. Puede ser en costes
              fijos que se han ido acumulando sin que nadie los haya cuestionado.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Sin un diagnóstico claro, cualquier decisión que tomes va a ser a ciegas. Contratas más
              personal sin saber si te lo puedes permitir. Bajas precios para vender más sin saber si
              eso te hace ganar o perder. Inviertes en marketing cuando el problema real está en los
              costes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Este agente existe para eso: <strong>darte un diagnóstico honesto antes de que tomes
              decisiones que salgan caras</strong>.
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
                titulo: 'Identificar fugas de margen',
                desc: 'Descubre qué productos, servicios o áreas están consumiendo recursos sin devolver lo suficiente.',
              },
              {
                titulo: 'Priorizar dónde actuar',
                desc: 'No todo merece la misma atención. El agente te dice por dónde empezar para tener impacto real y rápido.',
              },
              {
                titulo: 'Entender tu punto de equilibrio real',
                desc: 'Cuánto tienes que facturar para no perder dinero. Con tus números, no con teoría.',
              },
              {
                titulo: 'Detectar costes que no cuestionas',
                desc: 'Gastos fijos que llevas años pagando y que ya no tienen sentido. El agente los saca a la luz.',
              },
              {
                titulo: 'Ver el negocio desde fuera',
                desc: 'A veces lo más difícil es ver lo que tenemos delante. Una perspectiva externa cambia el enfoque.',
              },
              {
                titulo: 'Un plan de acción concreto',
                desc: 'No un informe bonito. Tres o cuatro pasos específicos que puedes empezar esta semana.',
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
            El Agente Diagnóstico trabaja con un prompt estructurado que guía a ChatGPT o Claude
            para comportarse como un consultor especializado en rentabilidad de negocios físicos.
            No es magia. Es un prompt bien diseñado que hace las preguntas correctas y procesa
            las respuestas de forma útil.
          </p>
          <ol className="space-y-6">
            {[
              {
                n: '01',
                titulo: 'Le das contexto de tu negocio',
                desc: 'Tipo de negocio, facturación aproximada, número de empleados, principales costes. No hace falta que sea exacto al céntimo. El agente trabaja bien con rangos.',
              },
              {
                n: '02',
                titulo: 'El agente hace preguntas específicas',
                desc: 'No te pregunta de todo. Te pregunta lo que necesita saber para identificar las fugas principales. Margen por producto, estructura de costes, ticket medio, rotación.',
              },
              {
                n: '03',
                titulo: 'Analiza y detecta patrones',
                desc: 'Cruza la información que le das y detecta dónde está el problema real. Si hay una incoherencia entre lo que facturas y lo que te queda, la señala.',
              },
              {
                n: '04',
                titulo: 'Te da un diagnóstico y un plan',
                desc: 'No un resumen académico. Te dice: "El problema principal está aquí, esto es lo que está pasando y esto es lo que tienes que hacer primero."',
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
              <p className="font-bold text-gray-900 mb-1">Sé específico con los números</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Cuanto más concreto seas, mejor diagnóstico recibes. &ldquo;Facturo unos 15.000€ al mes&rdquo;
                es mucho más útil que &ldquo;facturo bastante&rdquo;. No tiene que ser exacto, pero sí aproximado.
              </p>
            </div>
            <div className="border-l-4 border-violet-400 pl-5">
              <p className="font-bold text-gray-900 mb-1">Empieza por lo que más te preocupa</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Si sabes que hay un área que te tiene intranquilo (los costes de personal, un
                producto que no rinde, el alquiler...), díselo al inicio. El agente ajustará
                el análisis a eso.
              </p>
            </div>
            <div className="border-l-4 border-violet-400 pl-5">
              <p className="font-bold text-gray-900 mb-1">Hazle preguntas de seguimiento</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Si el diagnóstico inicial no te convence o quieres profundizar en algo,
                pregunta. &ldquo;¿Y si te digo que también tenemos X?&rdquo; o &ldquo;¿Qué pasaría si redujera
                esto un 20%?&rdquo; El agente aguanta bien el hilo.
              </p>
            </div>
            <div className="border-l-4 border-violet-400 pl-5">
              <p className="font-bold text-gray-900 mb-1">Pídele que priorice</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Si te da cinco problemas, pregúntale: &ldquo;¿Por cuál empezarías tú y por qué?&rdquo;
                No todo tiene el mismo impacto. El agente sabe distinguir lo urgente de lo
                importante.
              </p>
            </div>
            <div className="border-l-4 border-violet-400 pl-5">
              <p className="font-bold text-gray-900 mb-1">Úsalo como punto de partida, no como oráculo</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                El agente no conoce tu mercado local ni a tus clientes. Lo que sí hace es
                forzarte a pensar con estructura. Toma el diagnóstico, valídalo con tu
                experiencia y actúa.
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
            A veces la IA se va por las ramas, te da respuestas demasiado genéricas o se pone
            en modo &ldquo;consultor de PowerPoint&rdquo;. Aquí van las frases que funcionan para
            reconducirlo:
          </p>
          <div className="space-y-3">
            {[
              {
                problema: 'Te da consejos genéricos de libro',
                solucion: '"Olvida los consejos generales. Con los datos que te he dado, dime qué está fallando específicamente en mi negocio."',
              },
              {
                problema: 'Se enrolla demasiado',
                solucion: '"Dame solo los tres puntos clave. Sin explicaciones largas. Qué problema, por qué y qué hago."',
              },
              {
                problema: 'No te convence el diagnóstico',
                solucion: '"Ese diagnóstico no encaja con lo que veo. Te doy más contexto: [añade info]. Revísalo."',
              },
              {
                problema: 'Te pide datos que no tienes',
                solucion: '"No tengo ese dato exacto. Trabaja con este rango aproximado y dime qué cambiaría."',
              },
              {
                problema: 'Se pone optimista sin base',
                solucion: '"Sé crítico. ¿Qué es lo peor que podría estar pasando con estos números? Quiero el diagnóstico duro."',
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
            Tarda menos de 10 minutos y el resultado es más útil que muchas horas de análisis
            por tu cuenta.
          </p>
          <div className="bg-gray-900 rounded-2xl p-6 relative">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Prompt — Agente Diagnóstico</p>
            <pre className="text-sm text-gray-100 leading-relaxed whitespace-pre-wrap font-mono">
{`Actúa como un consultor especializado en rentabilidad de negocios físicos y pymes españolas. Tu objetivo es hacer un diagnóstico rápido pero honesto del negocio que te voy a describir.

Primero, hazme las preguntas mínimas necesarias para entender:
1. Tipo de negocio y qué vende
2. Facturación mensual aproximada
3. Principales costes (personal, alquiler, proveedores)
4. Margen aproximado por producto o servicio principal
5. Número de empleados
6. Lo que más le preocupa al dueño ahora mismo

Una vez tengas esa información, analiza y dime:
— Cuál es el problema principal que detectas
— Por qué está pasando (causa real, no síntoma)
— Qué tres acciones concretas tomaría esta semana
— Qué indicador debería seguir cada semana para saber si mejora

Sé directo. Sin rodeos. Sin palabrería. Este dueño no tiene tiempo para informes largos. Quiere saber qué está fallando y qué hacer.`}
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
                habitualmente. Funciona desde el primer mensaje. Sin cuenta, sin registro,
                sin nada.
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
