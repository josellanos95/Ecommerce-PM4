"use client"
import React from 'react'
import Image from 'next/image'

const AboutUsPage = () => {
  return (
    <div className="bg-blue-100 min-h-screen py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Sobre Nosotros</h2>
        <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">TechShop</h3>
              <p className="text-gray-700 mb-4">
                TechShop es una tienda online líder en la venta de productos tecnológicos, fundada en 2010 en Buenos Aires, Argentina. Nuestra misión es ofrecer a nuestros clientes las últimas innovaciones en tecnología a precios asequibles y con un excelente servicio al cliente.
              </p>
              <p className="text-gray-700 mb-4">
                Contamos con un amplio catálogo de productos que incluye computadoras, celulares, audífonos, consolas de videojuegos y más. Trabajamos con las marcas más reconocidas del mercado para garantizar la calidad de nuestros productos.
              </p>
              <p className="text-gray-700 mb-4">
                En TechShop, nos enorgullecemos de ofrecer una experiencia de compra excepcional. Aceptamos diversos métodos de pago, incluyendo efectivo, tarjetas de crédito y débito, y criptomonedas. Además, ofrecemos envíos a todo el mundo, para que nuestros clientes puedan disfrutar de nuestros productos sin importar su ubicación.
              </p>
            </div>
            <div className="relative pb-48 overflow-hidden">
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src="/tiendaimg.png"
                alt="Sobre Nosotros"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage