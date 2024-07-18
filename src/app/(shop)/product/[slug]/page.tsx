import { initialData } from "@/seeds";
import NotFound from "../not-found";
import { SizeSelector } from "@/components";


interface Props {
  params : {
    slug: string
  
  }
}

export default function ProductItemPage({params}:Props) {
const {slug} = params
const product = initialData.products.find(p => p.slug === slug)

if (!product) {
  NotFound()
}

  return (
    <div className="mt-5 mb-5 grid md:grid-cols-3 gap-3">
  <div className="col-span-1 md:col-span-2">
Hola Mundo
  </div>
  <div className="col-span-1 mx-5 bg px-5">

<h1 className="text-xl font-semibold antialiased">{product?.title}</h1>
<p className="text-lg mb-5">${product?.price}</p>
<SizeSelector
availableSizes={product?.sizes}
selectedSize={product?.sizes[1]}
/>
<button className="btn-primary my-5">Agregar al carrito</button>
<h3 className="font-bold text-sm">Descripcion</h3>
<p className="font-light">{product?.description}</p>
  </div>
     
    </div>

  );
}