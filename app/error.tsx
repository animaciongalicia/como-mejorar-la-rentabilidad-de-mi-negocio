'use client'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-7xl font-black text-gray-100 mb-4">!</p>
        <h2 className="text-2xl font-black text-gray-900 mb-3">
          Algo ha salido mal
        </h2>
        <p className="text-gray-500 mb-8">
          Ha ocurrido un error inesperado. Puedes intentarlo de nuevo.
        </p>
        <button
          onClick={() => reset()}
          className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  )
}
