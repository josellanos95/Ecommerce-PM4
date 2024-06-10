"use client"
import React, { useEffect, useState } from 'react'
import { redirect, useRouter } from 'next/navigation'
import { IProduct, userSession } from '@/types'
import { createOrder } from '@/helpers/orders.helper'
import Swal from 'sweetalert2'

const Cart = () => {
  const [cart, setCart] = useState<IProduct[]>([])
  const [total, setTotal] = useState<number>(0)
  const [userData, setUserData] = useState<userSession>()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const userData: userSession = JSON.parse(localStorage.getItem("userSession")!)
      setUserData(userData)
      !userData?.token && redirect("/login")
    }

    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
    if (storedCart) {
      let totalcart = 0
      storedCart?.map((item: IProduct) => {
        totalcart += item.price
      })
      setTotal(totalcart)
      setCart(storedCart)
    }
  }, [])

const handleRemoveFromCart = (id: number) => {
  const newCart = cart.filter(item => item.id !== id);
  setCart(newCart);
  localStorage.setItem("cart", JSON.stringify(newCart));

  // Recalcular el total
  let totalcart = 0
  newCart.map((item: IProduct) => {
    totalcart += item.price
  })
  setTotal(totalcart)
}

  const handleClick = async () => {
      const idProduct = new Set(cart.map((product) => product.id))
      await createOrder(Array.from(idProduct), userData?.token!)
      Swal.fire("Éxito", "Orden creada correctamente", "success")
      setCart([])
      setTotal(0)
      localStorage.setItem("cart", "[]")
  }

  return (
    <div className="bg-blue-100 min-h-screen py-8">
      <div className="container mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Carrito de Compras</h2>
          <div className="mb-6">
            {cart?.length > 0 ? (
              cart.map((item) => (
                <div key={item.id} className="bg-gray-100 rounded-lg p-4 mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                  <button onClick={() => handleRemoveFromCart(item.id)} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Eliminar
                  </button>
                </div>
              ))
            ) : (
              <div className="bg-yellow-100 rounded-lg p-4 text-yellow-700">
                <p>No hay productos en el carrito</p>
              </div>
            )}
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold text-gray-800">Total: ${total}</h3>
            <button onClick={handleClick} className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart