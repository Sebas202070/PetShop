import { ProductGrid, Title} from "@/components";
import { initialData } from "@/seeds/seed";



export default function Home() {

  const products = initialData.products
  return (
    <>
<Title
title={"PetShop La Santa"}
subtitle="Todo para tus Mascotas"
/>
<div className="md:ml-20">
    <ProductGrid products={products}/>
    </div>
    </>
  );
}
