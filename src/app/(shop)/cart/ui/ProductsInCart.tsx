"use client"

import { QuantitySelector } from '@/components'
import { ProductImages } from '@/components/product-images/ProductImage'
import { UseStoreCart } from '@/store'
import { currencyFormat } from '@/utils'

import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'


export const ProductsInCart = () => {

    const productsInCart = UseStoreCart(state => state.cart)
    const updatedQuantity = UseStoreCart(state => state.updatedProductQuantity)
    const removeProduct = UseStoreCart(state => state.removeProductInCart)
    const [loaded,setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
       
    }, []);

    if (!loaded) return <span>Loading..</span> 

  return (
    <div>
        {
productsInCart.map(a => (
  <div key={crypto.randomUUID()} className="flex -mx-2 mb-5">
<ProductImages
src={a.image}
alt={a.title}
width={100}
height={100}
style={{
  width:"100px",
  height:"100px"
}
  
}
/>
<div className="mx-4 ">
    <Link href={`/product/${a.slug}`}>
  <p className='hover:underline hover:text-blue-700 cursor-pointer'>{a.title} Talle {a.sizes}</p>
  </Link>
  <p>{currencyFormat(a.price)}</p>
  <QuantitySelector
  quantity={a.quantity}
  onQuantityChanged={quantity => updatedQuantity(a, quantity)}
  />
  <button
   className="btn-primary mt-2"
   onClick={()=> removeProduct(a)}
   >Remover</button>
</div>
  </div>
))
}
    </div>
  )
}
