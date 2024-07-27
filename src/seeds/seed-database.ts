import { initialData } from "./seed"
import prisma from "../lib/prisma"
import { url } from "inspector"


async function main () {
await Promise.all([
     prisma.productImage.deleteMany(),
     prisma.product.deleteMany(),
 prisma.category.deleteMany(),
])

const {categories,products} = initialData

const categoriesData = categories.map((name)=>({

    name
}))

await prisma.category.createMany({
    data:categoriesData
});
/* prisma.category.create({
   data:{
  name:"Shirts"
   }
}) */

const categoryDB = await prisma.category.findMany()
console.log(categoryDB)

const categoryMap = categoryDB.reduce((map,category)=> {
    map[category.name.toLowerCase()] = category.id
return map
}, {} as Record<string,string> )

console.log(categoryMap)


const {images,type,...product1} = products[0]

/* await prisma.product.create({
    data:{
        ...product1,
        categoryId:categoryMap["shirts"]
    }
}) */

    products.forEach(async (product)=> {
        const {type,images,...rest} = product
        const productDB = await prisma.product.create({
            data:{
                ...rest,
                categoryId:categoryMap[type]
            }
        })

        const imagesData = images.map(image => ({
            url:image,
            productId:productDB.id
        }))

        await prisma.productImage.createMany({
            data:imagesData
        })
    })
console.log("Ejecutado Correctamente") 
/* 
 */
    
}


(()=>{
    if(process.env.NODE_ENV === "production") return;
    main()
})()