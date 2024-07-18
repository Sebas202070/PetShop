import { ProductGrid, Title } from "@/components";
import { ValidCategory, initialData } from "@/seeds";


const seedProducts = initialData.products
interface Props  {
  params: {
    id: ValidCategory
  }
}


export default function NotFoundOk({params}: Props ) {
 const {id} = params

 const products = seedProducts.filter(p => p.gender === id)

 /* if (id === "kids") {
  notFound()

 } */

 const labels: Record<ValidCategory,string> = {
 
  "unisex":"Unisex",
  "women":"Cachorros",
  "kid":"Unisex",
  "men":"Adultos"
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