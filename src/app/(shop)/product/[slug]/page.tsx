

import { initialData } from "@/seeds";
import NotFound from "../not-found";
import { QuantitySelector, SizeSelector,ProductSlideShow, ProductMobileSlideShow } from "@/components";
import { getProductBySlug } from "@/actions";
import StockLabel from "@/components/product/stock-label/StockLabel";
import { AddToCart } from "./ui/AddToCart";
import { currencyFormat } from "@/utils";



interface Props {
  params : {
    slug: string
  
  
  },
  
}

export default async function ProductItemPage({params}:Props) {
const {slug} = params
const product = await getProductBySlug(slug)
console.log(product)

if (!product) {
  NotFound()
}

  return (
    <div className="mt-5 mb-5 grid md:grid-cols-3 gap-3">
  <div className="col-span-1 md:col-span-2">
    <div className="block md:hidden">
    <ProductMobileSlideShow
    title={product?.title!}
    images={product?.images!}
    classname=""
    

    />
    </div>
    <div className="hidden md:block">
<ProductSlideShow
 title={product?.title!}
 images={product?.images!}
classname=""
 

/>
</div>
  </div>
  <div className="ml-3 w-[380px] col-span-1 mx-5 bg px-5 bg-gray-200 py-4 ">
<StockLabel params={params}/>
<AddToCart product={product!}/>
<h1 className="text-xl font-semibold antialiased">{product?.title}</h1>
<p className="text-lg mb-5">{currencyFormat(product?.price!)}</p>

<h3 className="font-bold text-sm">Descripcion</h3>
<p className="font-light">{product?.description}</p>
  </div>
     
    </div>

  );
}