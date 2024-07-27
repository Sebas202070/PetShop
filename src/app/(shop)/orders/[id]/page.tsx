
import { Title } from "@/components";
import { initialData } from "@/seeds";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { IoCardOutline } from "react-icons/io5";

interface Props {
  params: {
    id:string
  }
}

export default function OrderIdPage({params}:Props) {

  const addItems = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2]

 

  ]

  const {id} = params
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px] ">
      <Title
      title={`Orden #${id}`}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="flex flex-col ">
        <div className={
        clsx(
"flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5 ",
{
  'bg-red-500':false,
  'bg-green-500':true,
}
        )
        
       }>
        <IoCardOutline size={30}/>
        <span className="mx-2 text-xl">Pago Aprobado</span>
       </div>

       
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
  <p>Subtotal: ${a.price * 3}</p>
 
</div>
  </div>
))
}
</div>
<div className="bg-gray-200 shadow-xl  p-7 h-fit">
  <h2 className="text-2xl">Direccion de entrega</h2>
  <div className="mb-10">
    <p>Sebastian Najle</p>
    <p>Picaflor y Ombu s/n</p>
    <p>CP 3004</p>
    <p>Garupa,Misiones</p>
  </div>
  <div className="w-full bg-black h-0.5 mb-2 -mt-2"/>
<h2 className="text-2xl mb-2">Resumen de Orden</h2>
<div className="grid grid-cols-2">
  <span>No. de Productos</span>
  <span className="text-right"> 3 </span>
<span>Impuestos (15%)</span>
<span className="text-right">$100</span>
<span className="text-xl font-semibold mt-5">Total:</span>
<span className="text-right mt-5">$100</span>

</div>
<div className="mt-5 mb-2 w-full">
<div className={
        clsx(
"flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5 ",
{
  'bg-red-500':false,
  'bg-green-500':true,
}
        )
        
       }>
        <IoCardOutline size={30}/>
        <span className="mx-2 text-xl">Pago aprobado</span>
       </div>
 
</div>
</div>
      </div>
      </div>

    </div>
  );
}