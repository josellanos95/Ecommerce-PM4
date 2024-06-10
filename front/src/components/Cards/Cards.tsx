import React from 'react'
import { IProduct } from '@/types'
import Card from '../Card/Card'
import Link from 'next/link'

const Cards = ({ products }: {products: IProduct[] }) => {
  return (
    <div className="bg-blue-100 min-h-screen py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <Card key={product.id} {...product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cards