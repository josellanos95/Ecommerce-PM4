 import React from 'react'
import Cards from '../Cards/Cards'
import { getProductsDB } from '@/helpers/products.helper'

const HomeContainer = async () => {
    const products = await getProductsDB()
    return (
        <div>
            <Cards products = {products} />
        </div>
    )
}

export default HomeContainer;
