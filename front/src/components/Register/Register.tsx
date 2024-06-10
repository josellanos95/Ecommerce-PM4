"use client"
import { formRegisterValidation } from '@/helpers/formValidation';
import { RegisterErrorprops, RegisterProps } from '@/types';
import { register } from '@/helpers/auth.helper';
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Register = () => {
  const router = useRouter();
  const [dataUser, setDataUser] = useState<RegisterProps>({
    email: "",
    password: "",
    name: "",
    address: "",
    phone: ""
  });

  const [errorUser, setErrorUser] = useState<RegisterErrorprops>({
    email: "",
    password: "",
    name: "",
    address: "",
    phone: ""
  });

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setDataUser({
    ...dataUser,
    [e.target.name]: e.target.value
  });
};

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await register(dataUser);
      router.push("/login");
    } catch (error: any) {
      throw new Error(error.message);   
    }
  };

  useEffect(() => {
    const errors = formRegisterValidation(dataUser);
    setErrorUser(errors)
  }, [dataUser]);

  // Verifica si hay errores en los campos
  const hasErrors = !!errorUser.email || !!errorUser.password;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Registrarse en TechShop
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Correo electrónico
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name= "email"
              type="email"
              placeholder="Ingresa tu correo electrónico"
              value={dataUser.email}
              onChange={handleChange}
            />
            {errorUser.email && <p>{errorUser.email}</p>}
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="Ingresa tu contraseña"
              value={dataUser.password}
              onChange={handleChange}
            />
            {errorUser.password && <p>{errorUser.password}</p>}
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Nombre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Ingresa tu nombre"
              value={dataUser.name}
              onChange={handleChange}
            />
            {errorUser.name && <p>{errorUser.name}</p>}
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="address"
            >
              Dirección
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              name="address"
              type="text"
              placeholder="Ingresa tu dirección"
              value={dataUser.address}
              onChange={handleChange}
            />
            {errorUser.address && <p>{errorUser.address}</p>}
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="phone"
            >
              Teléfono
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              name="phone"
              type="text"
              placeholder="Ingresa tu número de teléfono"
              value={dataUser.phone}
              onChange={handleChange}
            />
            {errorUser.phone && <p>{errorUser.phone}</p>}
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={hasErrors}
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register