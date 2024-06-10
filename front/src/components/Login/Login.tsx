"use client"
import { login } from '@/helpers/auth.helper';
import { formLoginValidation } from '@/helpers/formValidation';
import { LoginProps } from '@/types';
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter();
  const [dataUser, setDataUser] = useState<LoginProps>({
    email: "",
    password: ""
  });

  const [errorUser, setErrorUser] = useState<LoginProps>({
    email: "",
    password: ""
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataUser({
      ...dataUser,
      email: e.target.value
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataUser({
      ...dataUser,
      password: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await login(dataUser);
      const {token, user} = response;
      localStorage.setItem("userSession", JSON.stringify({token: token, userData: user}));
      router.push("/");

    } catch (error) {
      
    }

  };

  useEffect(() => {
    const errors = formLoginValidation(dataUser);
    setErrorUser(errors)
  }, [dataUser]);

  // Verifica si hay errores en los campos
  const hasErrors = !!errorUser.email || !!errorUser.password;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Iniciar Sesión
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
              type="email"
              placeholder="Ingresa tu correo electrónico"
              value={dataUser.email}
              onChange={handleEmailChange}
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
              type="password"
              placeholder="Ingresa tu contraseña"
              value={dataUser.password}
              onChange={handlePasswordChange}
            />
            {errorUser.password && <p>{errorUser.password}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={hasErrors}
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login