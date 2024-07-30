import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title} from "@/components";
import { initialData } from "@/seeds/seed";
import { redirect } from "next/navigation";

interface Props {
  searchParams:{
    page?:string;
}
}

export default async function Home({searchParams}:Props) {

const page = searchParams.page ? parseInt(searchParams.page) : 1
/* console.log(page) */


  /* const products = initialData.products */
const {productsDb, currentPage, totalPages} = await getPaginatedProductsWithImages({page})
/* console.log(productsDb) */
if(productsDb.length === 0) {
  redirect("/")
}
  return (
    <>
<Title
title={"PetShop La Santa"}
subtitle="Todo para tus Mascotas"
/>
<div className="md:ml-20">
    <ProductGrid products={productsDb}/>
<Pagination totalPages={totalPages}/>
    </div>
    </>
  );
}
