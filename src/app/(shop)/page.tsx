import { ProductGrid} from "@/components";
import { initialData } from "@/seeds/seed";



export default function Home() {

  const products = initialData.products
  return (
    <>

    <ProductGrid products={products}/>
    </>
  );
}
