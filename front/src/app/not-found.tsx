import React from 'react'
import Link from 'next/link'

const NotFound = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col justify-center items-center">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Página no encontrada</h1>
        <p className="text-gray-600 mb-8">
          Lo sentimos, la página que estás buscando no existe.
        </p>
        <Link href="/">
          <button className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition duration-300">
            Regresar al inicio
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound