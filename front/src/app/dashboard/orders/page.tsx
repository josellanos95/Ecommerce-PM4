"use client"
import React, { useEffect, useState } from 'react'
import { userSession } from '@/types'
import { getOrders } from '@/helpers/orders.helper'
import { IOrder } from '@/types'
import Link from 'next/link'

const OrdersPage = () => {
  const [userData, setUserData] = useState<userSession>()
  const [orders, setOrders] = useState<IOrder[]>([])

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const userData = localStorage.getItem('userSession')
      setUserData(JSON.parse(userData!))
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const ordersResponse = await getOrders(userData?.token!)
      setOrders(ordersResponse)
    }
    userData?.token && fetchData()
  }, [userData?.token])

  return (
    <div className="bg-blue-100 min-h-screen py-8">
      <div className="container mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Historial de Órdenes</h2>
          {orders?.length > 0 ? (
            <div>
              {orders.map((order) => (
                <div key={order.id} className="bg-gray-100 rounded-lg p-4 mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Orden: {order.id}</h3>
                  <p className="text-gray-600">Fecha: {new Date(order.date).toLocaleDateString()}</p>
                  <p className="text-gray-600">Estado: {order.status}</p>
                  <ul className="mt-2">
                    {order.products.map((product) => (
                      <li key={product.id} className="text-gray-700">
                        {product.name} - ${product.price}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-yellow-100 rounded-lg p-4 text-yellow-700">
              <p>No realizaste ninguna orden</p>
              <Link href="/">
                <button className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline">
                  Ver catálogo de productos
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default OrdersPage