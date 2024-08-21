import { IProduct } from '@/types'
import React from 'react'

const Card: React.FC<IProduct> = ({ name, description, price, stock, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transition-transform duration-300 hover:scale-105">
      <div className="relative pb-[60%] overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={image}
          alt={name}
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">{name}</h2>
        <p className="text-gray-600 mb-2 flex-grow line-clamp-3">{description}</p>
        <div className="flex items-center justify-between mt-auto">
          <p className="text-lg font-bold text-blue-700">${price}</p>
          <p className="text-sm text-green-500">Stock: {stock}</p>
        </div>
      </div>
    </div>
  )
}

export default Card