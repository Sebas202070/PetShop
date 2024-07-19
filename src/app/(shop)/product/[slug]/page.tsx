

import { initialData } from "@/seeds";
import NotFound from "../not-found";
import { QuantitySelector, SizeSelector,ProductSlideShow, ProductMobileSlideShow } from "@/components";



interface Props {
  params : {
    slug: string
  
  
  },
  
}

export default function ProductItemPage({params}:Props) {
const {slug} = params
const product = initialData.products.find(p => p.slug === slug)!

if (!product) {
  NotFound()
}

  return (
    <div className="mt-5 mb-5 grid md:grid-cols-3 gap-3">
  <div className="col-span-1 md:col-span-2">
    <ProductMobileSlideShow
    title={product?.title}
    images={product?.images}
    classname=""
    />
{/* <ProductSlideShow
title={product?.title}
images={product?.images}
/> */}
  </div>
  <div className="col-span-1 mx-5 bg px-5 bg-gray-200 py-4">

<h1 className="text-xl font-semibold antialiased">{product?.title}</h1>
<p className="text-lg mb-5">${product?.price}</p>
<SizeSelector
selectedSize={product?.sizes[0]}
availableSizes={product?.sizes}

/>
<QuantitySelector/>
<button className="btn-primary my-5">Agregar al carrito</button>
<h3 className="font-bold text-sm">Descripcion</h3>
<p className="font-light">{product?.description}</p>
  </div>
     
    </div>

  );
}