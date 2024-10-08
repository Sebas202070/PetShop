import { getPaginatedProductsWithImages } from "@/actions";
import { Notification } from "@/actions/mercado/notification";
import { Pagination, ProductGrid, Title } from "@/components";
import { Gender } from "@prisma/client";
import { redirect } from "next/navigation";




interface Props  {
  params: {
    gender: string
  },
  searchParams:{
    page?:string;
}
}


export default async function NotFoundOk({params,searchParams}: Props ) {
  
  const {gender} = params
  console.log(gender)
  const page = searchParams.page ? parseInt(searchParams.page) : 1
const {productsDb,totalPages} = await getPaginatedProductsWithImages({page,gender:gender as Gender,
})
 
/* if(productsDb.length === 0) {
  redirect(`/gender/${gender}`)
} */


 /* if (id === "kids") {
  notFound()

 } */
/* console.log(products) */

 const labels: Record<string,string> = {
 
  "Unisex":"Unisex",
  "Women":"Women",
  "Kids":"Kids",
  "Men":"Men"
 }
  return (
    <div>
     <Title
     title={`Articulos de ${gender}`}/>
      
     <ProductGrid
     products={productsDb}
    
     />
     <Pagination totalPages={totalPages}/>
   
    </div>
  );
}
