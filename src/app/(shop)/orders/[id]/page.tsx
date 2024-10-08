
import { getOrderById } from "@/actions";
import { Title } from "@/components";
import { initialData } from "@/seeds";
import { currencyFormat } from "@/utils";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { IoCardOutline } from "react-icons/io5";
import { PayPalButton } from "../../../../components/paypal/PaypalButton";
import { OrderStatus } from "@/components/orders/OrderStatus";

import { MercadoPayment } from "@/actions/mercado/get-mercado";
import { Mercado } from "@/services/MercadoPagoButton";





interface Props {
  params: {
    id:string
  }
}

export default async function OrderIdPage({params}:Props) {

 /*  const addItems = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2]

 

  ] */

  
  const {id} = params
  const {ok,order} = await getOrderById(id)
  if(!ok) {
    redirect("/")
  }
/*   console.log(JSON.stringify(order)) */


const address = order

const {id:idmp} = await MercadoPayment(id)
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px] ">
      <Title
      title={`Orden #${id}`}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="flex flex-col ">
        <OrderStatus isPaid={order?.isPaid ?? false} />

       
{
address?.OrderItem.map(a => (
  <div key={a.product.slug} className="flex -mx-2 mb-5">
<Image
src={`/${a.product.ProductImage[0].url}`}
alt={a.product.title}
width={100}
height={100}
style={{
  width:"100px",
  height:"100px"
}
  
}
/>
<div className="mx-4 ">
  <p>{a.product.title}</p>
  <p>{currencyFormat(a.price)}</p>
  <p>Subtotal: {currencyFormat(a.price * a.quantity)}</p>
 
</div>
  </div>
))
}
</div>
<div className="bg-gray-200 shadow-xl  p-7 h-fit">
  <h2 className="text-2xl">Direccion de entrega</h2>
  <div className="mb-10">
    <p>{address?.OrderAddress?.firstName} {address?.OrderAddress?.lastName}</p>
    <p>{address?.OrderAddress?.address}</p>
    <p>{address?.OrderAddress?.postalCode}</p>
    <p>{address?.OrderAddress?.city}</p>
    <p>{address?.OrderAddress?.countryId}</p>
  </div>
  <div className="w-full bg-black h-0.5 mb-2 -mt-2"/>
<h2 className="text-2xl mb-2">Resumen de Orden</h2>
<div className="grid grid-cols-2">
  <span>No. de Articulos</span>
<span className="text-right">{address?.OrderItem.map(p=>p.quantity).reduce((count, p) => count + p,0)}</span>


<span className="text-xl font-semibold mt-5">Total:</span>
<span className="text-right mt-5">{currencyFormat(address!.total)}</span>

</div>

<div className="mt-5 mb-2 w-full">
{order?.isPaid ? (
                <OrderStatus isPaid={order?.isPaid ?? false} />
              ) : (
                
                < Mercado id={idmp?? ""} />
               
              
               
        
              )
              
}
 
</div>
<div className="mt-5 mb-2 w-full">
{order?.isPaid ? (
                <OrderStatus isPaid={order?.isPaid ?? false} />
              ) : (
                
                <PayPalButton amount={order!.total} orderId={order!.id} />
                
              )
              
              }
 
</div>
</div>
      </div>
      </div>

    </div>
  );
}