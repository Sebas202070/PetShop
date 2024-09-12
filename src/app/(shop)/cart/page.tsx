import { Title } from "@/components";


import Link from "next/link";
import { redirect } from "next/navigation";
import { ProductsInCart } from "./ui/ProductsInCart";
import { OrderSummay } from "./ui/OrderSummay";


export default function CartPage() {

 

 
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0 ">
      <div className="flex flex-col w-[1000px]">
      <Title
      title="Carrito de Compras"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 ">
        <div className="flex flex-col  ">
          <span className="text-xl">Agregar mas Items</span>
          <Link href="/" className="mb-5 hover:underline hover:text-blue-700">
          Continuar Comprando
          </Link>

       <ProductsInCart/>

</div>
<div className="bg-gray-200 shadow-xl p-7 h-fit ">
<h2 className="text-2xl mb-2">Resumen de Orden</h2>
<OrderSummay/>
<div>
  <Link
  href="/checkout/address"
  className="flex btn-primary w-full mt-2 justify-center"
  >Comprar</Link>
</div>
</div>
      </div>
      </div>

    </div>
  );
}