"use client"
import React from 'react'

const ContactPage = () => {
  return (
    <div className="bg-blue-100 min-h-screen py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contáctanos</h2>
        <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Información de contacto</h3>
              <p className="text-gray-700 mb-4">
                ¿Tienes alguna pregunta o inquietud sobre nuestros productos o servicios? Nuestro equipo de atención al cliente estará encantado de ayudarte. Puedes contactarnos a través de los siguientes medios:
              </p>
              <div className="mb-4">
                <p className="text-gray-700 font-semibold">Dirección:</p>
                <p className="text-gray-700">Av. Tecnología 123, Buenos Aires, Argentina</p>
              </div>
              <div className="mb-4">
                <p className="text-gray-700 font-semibold">Teléfono:</p>
                <p className="text-gray-700">+54 11 1234-5678</p>
              </div>
              <div className="mb-4">
                <p className="text-gray-700 font-semibold">Email:</p>
                <p className="text-gray-700">info@techshop.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Formulario de contacto</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ingresa tu nombre"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ingresa tu email"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ingresa tu mensaje"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage