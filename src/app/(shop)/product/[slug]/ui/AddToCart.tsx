"use client"

import { QuantitySelector, SizeSelector } from '@/components'
import type { CartProduct, Product, ValidSizes } from '@/interfaces'
import { UseStoreCart } from '@/store'
import { useState } from 'react'

interface Props {
    product: Product
}
export const AddToCart = ({product}:Props) => {

const [size, setSize] = useState<ValidSizes|undefined>();
const [quantity, setQuantity] = useState<number>(1);
const [posted, setPosted] = useState(false);


const addProductToCart = UseStoreCart(state => state.addProductToCart)

const addToCart = () => {
    console.log({size,quantity})
  
    setPosted(true)
    if(!size) return
    const cartProduct: CartProduct = {
        id: product.id,
        slug: product.slug,
        title: product.title,
        price: product.price,
        quantity: quantity,
        sizes:size! ,
        image: product.images[0]
    }
    addProductToCart(cartProduct)
    setPosted(false)
    setQuantity(1)
    setSize(undefined)
}

  return (
   
    <div>
        {
            posted && !size && ( <span className='text-red-500'>Debe selecionar una talla</span>)
        }
        
        <SizeSelector
selectedSize={size}
availableSizes={product?.sizes!}
onSizeChanged={setSize}

/>
<QuantitySelector
quantity={quantity}
onQuantityChanged = {setQuantity}
/>
<button 
className="btn-primary my-5"
onClick={addToCart}
>Agregar al carrito</button>
    </div>
  )
}
