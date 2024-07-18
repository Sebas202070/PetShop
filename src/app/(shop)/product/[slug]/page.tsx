import { initialData } from "@/seeds";
import NotFound from "../not-found";


interface Props {
  params : {
    slug: string
  
  }
}

export default function ProductItemPage({params}:Props) {
const {slug} = params
const product = initialData.products.find(p => p.slug === slug)

if (product?.slug !== slug) {
  NotFound()
}

  return (
    <div>
      <h1>{product?.title}</h1>
     
    </div>

  );
}