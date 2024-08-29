import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function EmptyCartPage() {
  return (
    <div className="flex justify-center items-center h-[400px] gap-2">
      <IoCartOutline size={80}/>
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold">Oops..Tu Carrito esta vacio</h1>
        <Link className=" text-blue-500 underline " href="/">
        Regresar
        </Link>
      </div>
    </div>
  );
}