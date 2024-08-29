"use client"

import { UseStoreCart } from "@/store"
import { currencyFormat } from "@/utils"
import { useState,useEffect } from "react"
import { TbAxe } from "react-icons/tb"

export const OrderSummay = () => {

    const {itemsInCart,subtotal,tax,total} = UseStoreCart(state => state.getSummaryInformation())
    const [loaded, setLoaded] = useState(false)

  

    useEffect(() => {
        
        setLoaded(true)
    }, []);

    if(!loaded) return <span>Loading..</span>
  return (
    <div>
        <div className="grid grid-cols-2">
  <span>No. de Productos</span>
  <span className="text-right"> { itemsInCart === 1 ? "1 Articulo" : `${itemsInCart} Articulos`}</span>
<span>Impuestos (15%)</span>
<span className="text-right">{currencyFormat(tax)}</span>
<span>Sub-Total</span>
<span className="text-right">{currencyFormat(subtotal)}</span>

<span className="text-xl font-semibold mt-5">Total</span>
<span className="text-right mt-5">{currencyFormat(total)}</span>

</div>
    </div>
  )
}
