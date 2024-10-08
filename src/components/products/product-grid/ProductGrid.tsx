import { Product } from "@/interfaces"
import { ProductGridItem } from "./ProductGridItem"


interface Props  {
products : Product[]
}

export const ProductGrid = ({products}: Props) => {
  return (
    <div className="grid grid-cols-2 -ml-2 sm:grid-cols-3 mb-10 items-end sm:ml-8">
    {products.map(p => (
        <ProductGridItem 
        key={p.slug}
        product={p}/>
    ))}
    </div>
  )
}
