'use client'

import { useState } from 'react'
import NewsletterForm from './NewsletterForm'

interface LeadMagnetProps {
  title: string
  description: string
  fileName: string
  type: 'guide' | 'checklist' | 'template' | 'calculator'
}

const TYPE_CONFIG: Record<LeadMagnetProps['type'], { icon: string; label: string; color: string; border: string }> = {
  guide: {
    icon: '📖',
    label: 'Guía gratuita',
    color: 'text-blue-700',
    border: 'border-l-blue-500',
  },
  checklist: {
    icon: '✅',
    label: 'Checklist',
    color: 'text-green-700',
    border: 'border-l-green-500',
  },
  template: {
    icon: '📄',
    label: 'Plantilla',
    color: 'text-purple-700',
    border: 'border-l-purple-500',
  },
  calculator: {
    icon: '🧮',
    label: 'Calculadora',
    color: 'text-orange-700',
    border: 'border-l-orange-500',
  },
}

export default function LeadMagnet({ title, description, fileName, type }: LeadMagnetProps) {
  const [showModal, setShowModal] = useState(false)
  const config = TYPE_CONFIG[type]

  return (
    <>
      {/* Lead Magnet Card */}
      <div
        className={`bg-white rounded-xl shadow-md border-l-4 ${config.border} p-6 my-8 flex items-start gap-4`}
      >
        <div className="text-4xl flex-shrink-0" aria-hidden="true">
          {config.icon}
        </div>
        <div className="flex-1 min-w-0">
          <span className={`text-xs font-semibold uppercase tracking-wide ${config.color}`}>
            {config.label}
          </span>
          <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors duration-200"
          >
            Descargar gratis →
          </button>
        </div>
      </div>

      {/* Email Capture Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false) }}
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Cerrar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center mb-4">
              <div className="text-4xl mb-2">{config.icon}</div>
              <h3 className="text-xl font-bold text-gray-900">
                Recibe {title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Introduce tu email y te lo enviamos gratis ahora mismo.
              </p>
            </div>

            <NewsletterForm
              variant="inline"
              leadMagnet={fileName}
            />
          </div>
        </div>
      )}
    </>
  )
}
