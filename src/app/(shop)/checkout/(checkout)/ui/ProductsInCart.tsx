"use client"


import { ProductImages } from '@/components/product-images/ProductImage'
import { UseStoreCart } from '@/store'
import { currencyFormat } from '@/utils'

import Image from 'next/image'

import { useEffect, useState } from 'react'


export const ProductsInCart = () => {

    const productsInCart = UseStoreCart(state => state.cart)
   
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
    <span >
  {a.sizes} - {a.title} ({a.quantity})
  </span>
  <p className='font-semibold'>{currencyFormat(a.price)}</p>
  
</div>
  </div>
))
}
    </div>
  )
}
