import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seeds";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function CartPage() {

  const addItems = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2]


  ]

  
/*     redirect("/empty") */
 
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0 ">
      <div className="flex flex-col w-[1000px]">
      <Title
      title="Carrito de Compras"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 ">
        <div className="flex flex-col  ">
          <span className="text-xl">Agregar mas Items</span>
          <Link href="/" className="mb-5">
          Continuar Comprando
          </Link>

       
{
addItems.map(a => (
  <div key={a.slug} className="flex -mx-2 mb-5">
<Image
src={`/${a.images[0]}`}
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
  <p>{a.title}</p>
  <p>${a.price}</p>
  <QuantitySelector
  />
  <button className="btn-primary mt-2">Remover</button>
</div>
  </div>
))
}
</div>
<div className="bg-gray-200 shadow-xl p-7 h-fit ">
<h2 className="text-2xl mb-2">Resumen de Orden</h2>
<div className="grid grid-cols-2">
  <span>No. de Productos</span>
  <span className="text-right"> 3 Articulos</span>
<span>Impuestos (15%)</span>
<span className="text-right">$ 100</span>
<span className="text-xl font-semibold mt-5">Total</span>
<span className="text-right mt-5">$ 100</span>

</div>
<div>
  <Link
  href="/checkout/address"
  className="flex btn-primary w-full mt-2 justify-center"
  >Ckeckout</Link>
</div>
</div>
      </div>
      </div>

    </div>
  );
}