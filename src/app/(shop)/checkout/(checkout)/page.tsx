import { QuantitySelector, Title } from "@/components";

import Image from "next/image";
import Link from "next/link";
import { ProductsInCart } from "./ui/ProductsInCart";
import { PlaceOrder } from "./ui/PlaceOrder";

export default function CheckOutPage() {

 
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px] ">
      <Title
      title="Confirmacion de Compra "/>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="flex flex-col ">
          <span className="text-xl font-semibold">Modificar Carrito</span>
          <Link href="/cart" className="mb-5 underline">
            Editar Carrito
          </Link>

<ProductsInCart/>
</div>
<PlaceOrder/>
      </div>
      </div>

    </div>
  );
}