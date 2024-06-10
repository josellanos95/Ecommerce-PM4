// Card.tsx
import { IProduct } from '@/types'
import React from 'react'

const Card: React.FC<IProduct> = ({ name, description, price, stock, image, categoryId }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative pb-48 overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={image}
          alt={name}
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600 mb-2">{description}</p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-blue-700">${price}</p>
          <p className="text-sm text-green-500">Stock: {stock}</p>
        </div>
      </div>
    </div>
  )
}

export default Card