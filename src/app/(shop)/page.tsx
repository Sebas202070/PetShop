import { getPaginatedProductsWithImages } from "@/actions";
import { ProductGrid, Title} from "@/components";
import { initialData } from "@/seeds/seed";



export default async function Home() {

  /* const products = initialData.products */
const productsDB = await getPaginatedProductsWithImages()
console.log(productsDB)
  return (
    <>
<Title
title={"PetShop La Santa"}
subtitle="Todo para tus Mascotas"
/>
<div className="md:ml-20">
    <ProductGrid products={productsDB}/>
    </div>
    </>
  );
}
