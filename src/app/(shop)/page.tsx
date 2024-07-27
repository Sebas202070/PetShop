import { getPaginatedProductsWithImages } from "@/actions";
import { ProductGrid, Title} from "@/components";
import { initialData } from "@/seeds/seed";



export default async function Home() {

  /* const products = initialData.products */
const productsDb = await getPaginatedProductsWithImages()
console.log(productsDb)
  return (
    <>
<Title
title={"PetShop La Santa"}
subtitle="Todo para tus Mascotas"
/>
<div className="md:ml-20">
    <ProductGrid products={productsDb}/>
    </div>
    </>
  );
}
