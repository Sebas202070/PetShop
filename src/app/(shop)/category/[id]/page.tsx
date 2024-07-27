import { getPaginatedProductsWithImages } from "@/actions";
import { ProductGrid, Title } from "@/components";
import { ValidCategory, initialData } from "@/seeds";



interface Props  {
  params: {
    id: ValidCategory
  }
}


export default async function NotFoundOk({params}: Props ) {

const {productsDb} = await getPaginatedProductsWithImages()
 const {id} = params

 const products = productsDb.filter(p => p.gender === id)

 /* if (id === "kids") {
  notFound()

 } */

 const labels: Record<ValidCategory,string> = {
 
  "Unisex":"Unisex",
  "Women":"Women",
  "Kids":"Kids",
  "Men":"Men"
 }
  return (
    <div>
     <Title
     title={`Articulos de ${labels[id]}`}/>
      
     <ProductGrid
     products={products}
    
     />
      
    </div>
  );
}