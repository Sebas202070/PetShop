import { getCategories, getProductBySlug } from "@/actions";
import { ProductForm } from "./ui/ProductForm";
import { Title } from "@/components";
import { ValidCategory } from "@/interfaces";

interface Props {
    params: {
        slug:string
       
    },
    
}







export default async function ProductPage({params}:Props) {
const {slug} = params
 

const [products,categories]  = await Promise.all([
    getProductBySlug(slug),getCategories()
]
)

const title= (slug === "new" ? "Nuevo Producto" : "Editar Producto") 


 
return (
    <div>
        <Title title={title}/>
      <h1>{products?.title}</h1>
      <ProductForm product={products?? {}} categories={categories}/>
    </div>
  );
}





