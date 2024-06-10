"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import { userSession } from '@/types'

const Dashboard = () => {
  const [userData, setUserData] = useState<userSession>()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const userData = localStorage.getItem("userSession")
      setUserData(JSON.parse(userData!))
    }
  }, [])

  return (
    <div className="bg-blue-100 min-h-screen py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Dashboard</h2>
        <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Información del usuario</h3>
              <p className="text-gray-700 mb-2"><strong>Nombre:</strong> {userData?.userData?.name}</p>
              <p className="text-gray-700 mb-2"><strong>Email:</strong> {userData?.userData.email}</p>
              <p className="text-gray-700 mb-2"><strong>Teléfono:</strong> {userData?.userData.phone}</p>
              <p className="text-gray-700 mb-2"><strong>Dirección:</strong> {userData?.userData.address}</p>
            </div>
            <div className="relative pb-48 overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://ui-avatars.com/api/?name=Jose+Llanos"
                alt="Avatar de usuario"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard