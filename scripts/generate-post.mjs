#!/usr/bin/env node
/**
 * Genera un post nuevo desde content/queue.json usando Claude API.
 * Uso: node scripts/generate-post.mjs
 * Requiere: ANTHROPIC_API_KEY en el entorno
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const QUEUE_FILE = path.join(ROOT, 'content', 'queue.json')
const POSTS_DIR = path.join(ROOT, 'content', 'posts')

async function callClaude(prompt) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 4096,
      messages: [{ role: 'user', content: prompt }],
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Claude API error ${res.status}: ${err}`)
  }

  const data = await res.json()
  return data.content[0].text
}

function buildPrompt(item, today) {
  return `Eres el redactor de FocoRentabilismo, un blog en español sobre rentabilidad para dueños de negocios físicos y pymes. Tu tono es directo, honesto y sin humo. Hablas como un consultor que ha pagado 2.000€ por su tiempo: sin rodeos, con ejemplos reales y números concretos.

Escribe un artículo de blog completo en formato MDX para publicar hoy (${today}).

DATOS DEL ARTÍCULO:
- Slug: ${item.slug}
- Title: ${item.title}
- Keyword principal: ${item.keyword}
- Pilar: ${item.pilar}
- Cluster: ${item.cluster}
- Categoría: ${item.categoria}
- Tags: ${item.tags.join(', ')}

REGLAS OBLIGATORIAS:
1. Empieza directamente con el frontmatter YAML (---), sin texto previo
2. El artículo debe tener entre 1.000 y 1.400 palabras
3. Mínimo 3 H2 con subtemas diferenciados
4. Al menos un ejemplo con números reales (no inventados, coherentes)
5. Al menos un caso concreto de tipo de negocio (restaurante, taller, tienda, peluquería, academia...)
6. 2-3 enlaces internos naturales usando markdown: [texto](/blog/slug-del-post)
   - Usa slugs de posts existentes como: diagnostico-rentabilidad-negocio, punto-de-equilibrio-negocio, costes-ocultos-negocio, calculo-margen-contribucion, como-subir-ticket-medio, reducir-costes-sin-perder-calidad, cuanto-cobrar-por-mi-producto, sueldo-dueno-negocio, procesos-negocio-fisico, marketing-bajo-coste-negocio-local
7. Termina con una llamada a la acción hacia: https://consultoriametodo.es
8. Sin introducción genérica tipo "En el mundo empresarial actual..."
9. Sin párrafos de más de 5 líneas
10. Sin tecnicismos sin explicar

FORMATO DEL FRONTMATTER (copia exactamente esta estructura):
---
title: "${item.title}"
description: "[descripción SEO de 150-160 caracteres con la keyword principal]"
date: "${today}"
categoria: "${item.categoria}"
cluster: "${item.cluster}"
pilar: "${item.pilar}"
tags: ${JSON.stringify(item.tags)}
featured: false
---

Escribe el artículo completo ahora. Solo el MDX, sin comentarios adicionales.`
}

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('ERROR: Falta la variable ANTHROPIC_API_KEY')
    process.exit(1)
  }

  // Leer la cola
  if (!fs.existsSync(QUEUE_FILE)) {
    console.log('No existe content/queue.json — nada que generar')
    process.exit(0)
  }

  const queue = JSON.parse(fs.readFileSync(QUEUE_FILE, 'utf-8'))

  if (queue.length === 0) {
    console.log('La cola está vacía — nada que generar')
    process.exit(0)
  }

  const item = queue[0]
  const postPath = path.join(POSTS_DIR, `${item.slug}.mdx`)

  // Saltar si el post ya existe
  if (fs.existsSync(postPath)) {
    console.log(`Post ya existe: ${item.slug} — eliminando de la cola y saliendo`)
    queue.shift()
    fs.writeFileSync(QUEUE_FILE, JSON.stringify(queue, null, 2))
    process.exit(0)
  }

  const today = new Date().toISOString().split('T')[0]
  const prompt = buildPrompt(item, today)

  console.log(`Generando post: ${item.slug}`)
  console.log(`Título: ${item.title}`)

  let content = await callClaude(prompt)

  // Limpiar posible envoltura de bloque de código que Claude a veces añade
  content = content.replace(/^```(?:mdx|md)?\n/, '').replace(/\n```$/, '').trim()

  // Guardar el post
  fs.mkdirSync(POSTS_DIR, { recursive: true })
  fs.writeFileSync(postPath, content, 'utf-8')
  console.log(`Post guardado: content/posts/${item.slug}.mdx`)

  // Eliminar de la cola
  queue.shift()
  fs.writeFileSync(QUEUE_FILE, JSON.stringify(queue, null, 2))
  console.log(`Cola actualizada: quedan ${queue.length} posts pendientes`)

  // Exportar el slug para el Action
  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `slug=${item.slug}\n`)
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `title=${item.title}\n`)
  }
}

main().catch((err) => {
  console.error('ERROR:', err.message)
  process.exit(1)
})
