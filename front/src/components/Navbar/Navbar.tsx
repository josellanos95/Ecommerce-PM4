"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { userSession } from "@/types";
import Image from "next/image";
import StoreSvg from "../../../public/Store.svg"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const [userData, setUserData] = useState<userSession | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = localStorage.getItem("userSession");
      setUserData(userData ? JSON.parse(userData) : null);
    }
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("userSession");
    router.push("/");
  };

  return (
    <nav className="bg-blue-700">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo y nombre */}
          <div className="flex items-center flex-shrink-0 mr-6">
            <Link href="/">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Image
                  src={StoreSvg}
                  alt="Store"
                  width={50}
                  height={50}
                />
                <span className="text-2xl font-bold text-white">TechShop</span>
              </div>
            </Link>
          </div>

          {/* Botón hamburguesa */}
          <div className="lg:hidden">
            <button
              className="text-white hover:text-gray-300 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Menú navegación desktop/tablet */}
          <div className="hidden lg:flex lg:flex-grow items-center justify-between">
            <ul className="flex space-x-4 text-white">
              <li>
                <Link href="/">
                  <span className={`px-3 py-2 rounded-md ${
                    pathname === "/" ? "bg-white text-blue-700" : "hover:bg-blue-600"
                  } transition duration-300`}>
                    Inicio
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros">
                  <span className={`px-3 py-2 rounded-md ${
                    pathname === "/sobre-nosotros" ? "bg-white text-blue-700" : "hover:bg-blue-600"
                  } transition duration-300`}>
                    Sobre Nosotros
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contacto">
                  <span className={`px-3 py-2 rounded-md ${
                    pathname === "/contacto" ? "bg-white text-blue-700" : "hover:bg-blue-600"
                  } transition duration-300`}>
                    Contacto
                  </span>
                </Link>
              </li>
            </ul>

            <div className="flex items-center space-x-2">
              {userData ? (
                <>
                  <Link href="/dashboard">
                    <span className="px-4 py-2 rounded-md bg-white text-blue-700 hover:bg-blue-100 transition duration-300">
                      Mi Perfil
                    </span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition duration-300"
                  >
                    Cerrar Sesión
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <span className="px-4 py-2 rounded-md bg-white text-blue-700 hover:bg-blue-100 transition duration-300">
                      Iniciar Sesión
                    </span>
                  </Link>
                  <Link href="/register">
                    <span className="px-4 py-2 rounded-md bg-white text-blue-700 hover:bg-blue-100 transition duration-300">
                      Registrarse
                    </span>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Menú móvil */}
          {isMenuOpen && (
            <div className="w-full lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="/">
                  <span className={`block px-3 py-2 rounded-md text-base font-medium text-white ${
                    pathname === "/" ? "bg-blue-700" : "bg-blue-600"
                  } transition duration-300`}>
                    Inicio
                  </span>
                </Link>
                <Link href="/sobre-nosotros">
                  <span className={`block px-3 py-2 rounded-md text-base font-medium text-white ${
                    pathname === "/sobre-nosotros" ? "bg-blue-700" : "bg-blue-600"
                  } transition duration-300`}>
                    Sobre Nosotros
                  </span>
                </Link>
                <Link href="/contacto">
                  <span className={`block px-3 py-2 rounded-md text-base font-medium text-white ${
                    pathname === "/contacto" ? "bg-blue-700" : "bg-blue-600"
                  } transition duration-300`}>
                    Contacto
                  </span>
                </Link>
                {userData ? (
                  <>
                    <Link href="/dashboard">
                      <span className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-700 hover:bg-blue-600 transition duration-300">
                        Mi Perfil
                      </span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-red-500 hover:bg-red-600 transition duration-300"
                    >
                      Cerrar Sesión
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login">
                      <span className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-700 hover:bg-blue-600 transition duration-300">
                        Iniciar Sesión
                      </span>
                    </Link>
                    <Link href="/register">
                      <span className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-700 hover:bg-blue-600 transition duration-300">
                        Registrarse
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;