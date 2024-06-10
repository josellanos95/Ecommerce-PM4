"use client";
import { getProductByIdDB } from '@/helpers/products.helper'
import { IProduct, userSession } from '@/types'
import React, { use, useEffect, useState } from 'react'
import swal from 'sweetalert2'
import ClientRouterComponent from '@/components/ClientRouterComponent/ClientRouterComponent'
import { useRouter } from 'next/navigation';


const ProductDetailPage = ({ params }: { params: { productId: string } }) => {
  const [product, setProduct] = useState<IProduct>()
  const [userData, setUserData] = useState<userSession>()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage){
      const userData = localStorage.getItem("userSession")
      setUserData(JSON.parse(userData!))
    }

    const fetchData = async () => {
      try {
        const product = await getProductByIdDB(params.productId)
        setProduct(product)
      } catch (error: any) {
        console.error("Error al obtener el producto:", error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const handleAddToCart = (e: any) => {
    if (!userData?.token) {
      swal.fire("Error", "Debes iniciar sesión para agregar productos al carrito", "error")
    } else {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]")
      const productExist = cart.some((product: IProduct) =>{
        if (product.id === Number(e?.target?.id))
          return true;
          return false;
      });
      if (productExist) {
        swal.fire("Error", "El producto ya se encuentra en el carrito", "error")
        router.push ("/cart")
      } else {
        cart.push(product)
        localStorage.setItem("cart", JSON.stringify(cart))
        swal.fire("Éxito", "Producto agregado al carrito", "success")
      }
    }
  }

  if (loading) {
    return <div>Cargando...</div>
  }

  if (error) {
    return (
      <ClientRouterComponent error={error} />
    )
  }
  return (
    <div className="bg-blue-100 min-h-screen py-8">
      <div className="container mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative pb-48 overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={product?.image}
                alt={product?.name}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{product?.name}</h2>
              <p className="text-gray-700 mb-4">{product?.description}</p>
              <div className="flex items-center justify-between mb-4">
                <p className="text-2xl font-bold text-blue-700">${product?.price}</p>
                <p className="text-lg text-green-500">Stock: {product?.stock}</p>
              </div>
              <button id={product?.id.toString()} onClick={handleAddToCart} className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage