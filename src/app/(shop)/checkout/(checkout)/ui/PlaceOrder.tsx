"use client"

import { placeOrder } from "@/actions"
import { OrderSummay } from "@/app/(shop)/cart/ui/OrderSummay"
import { UseStoreCart } from "@/store"
import { useAddress } from "@/store/address/address-store"
import { currencyFormat } from "@/utils"
import clsx from "clsx"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export const PlaceOrder = () => {

    const [loaded, setLoaded] = useState(false)

    const address = useAddress(state=> state.address)
    const {itemsInCart,subtotal,tax,total} = UseStoreCart(state => state.getSummaryInformation())

    
    const cart = UseStoreCart(state=> state.cart)
    const clearCart = UseStoreCart(state=> state.clearCart)


    const [isPlacingOrder,setIsPlacingOrder]=useState(false)
    const [errorMessage, setErrorMessage] = useState("")


    const router = useRouter()


    const placingOrder = async ()=>{
        setIsPlacingOrder(true)
        const productsToOrder=cart.map(product => ({
            productId:product.id,
            quantity:product.quantity,
            size:product.sizes
        }))

const res = await placeOrder(productsToOrder,address)
if(!res?.ok){
    setIsPlacingOrder(false)
    setErrorMessage(res?.message)
    return
}


clearCart()
router.replace("/orders/" + res.order?.id)

        
    
    }

    useEffect(() => {
        
       
        setLoaded(true)
    }, []);

if(!loaded) return <h2>Loading..</h2>
  return (
    <div>
        <div className="bg-gray-200 shadow-xl  p-7 h-fit">
  <h2 className="text-2xl">Direccion de entrega</h2>
  <div className="mb-10">
    <p>{address.firstName}</p>
    <p>{address.address}</p>
    <p>{address.postalCode}</p>
    <p>{address.city}</p>
  </div>
  <div className="w-full bg-black h-0.5 mb-2 -mt-2"/>
<h2 className="text-2xl mb-2">Resumen de Orden</h2>
<div className="grid grid-cols-2">
 
    <span>No. de Productos</span>
  <span className="text-right"> { itemsInCart === 1 ? "1 Articulo" : `${itemsInCart} Articulos`}</span>
<span>Impuestos (21%)</span>
<span className="text-right">{currencyFormat(tax)}</span>
<span>Sub-Total</span>
<span className="text-right">{currencyFormat(subtotal)}</span>

<span className="text-xl font-semibold mt-5">Total</span>
<span className="text-right mt-5">{currencyFormat(total)}</span>

</div>
<div className="mt-5 mb-2 w-full">
  <p className="mb-5"></p>
  <span className="text-xs">Al hacer click en Procesar Orden, aceptas nuestros <a className="underline" href="#">Terminos y condiciones</a> </span>
  
  <div>
  <span className="text-xs text-red-700"> {errorMessage}</span>
  </div>
  <button
          // href="/orders/123"
          onClick={ placingOrder }
          className={
            clsx({
              'btn-primary': !isPlacingOrder,
              'btn-disabled': isPlacingOrder
            })
          }
        >
         Confirmar Compra
        </button>
</div>
</div>
    </div>
  )
}
