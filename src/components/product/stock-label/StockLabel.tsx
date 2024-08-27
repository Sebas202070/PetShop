import { getProductBySlug } from "@/actions"



interface Props {
    params : {
      slug: string
    
    
    },
    
  }



export default async  function StockLabel ({params}:Props) {
const {slug} = params
   
    const product = await getProductBySlug(slug)
  return (
    <h1 className="text-xl font-semibold antialiased">Stock:{product?.inStock}</h1>
  )
}
