import React from 'react'
import Image from 'next/image'
import StoreSvg from "../../../public/Store.svg"

const Footer = () => {
  return (
    <footer className="bg-blue-700 py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
          <div>
            <a href="#" className="flex items-center mb-4">
            <Image
                src={StoreSvg}
                alt="Store"
                width={50} // Ajusta el ancho según sea necesario
                height={50} // Ajusta la altura según sea necesario
              />
              <span className="text-2xl font-bold">TechShop</span>
            </a>
            <p className="text-gray-300 mb-4">
              Somos una tienda en línea especializada en productos tecnológicos
              de alta calidad.
            </p>
            <div className="flex space-x-4">
              {/* Añade aquí los enlaces a tus redes sociales */}
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
          <div className="md:col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Enlaces</h3>
              <ul className="text-gray-300">
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Inicio
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Productos
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Sobre nosotros
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contacto</h3>
              <ul className="text-gray-300">
                <li className="mb-2">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  123 Calle Principal, Ciudad, País
                </li>
                <li className="mb-2">
                  <i className="fas fa-phone mr-2"></i>
                  +1 (555) 123-4567
                </li>
                <li className="mb-2">
                  <i className="fas fa-envelope mr-2"></i>
                  info@techshop.com
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-600" />
        <p className="text-sm text-gray-300 text-center">
          &copy; {new Date().getFullYear()} TechShop. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer