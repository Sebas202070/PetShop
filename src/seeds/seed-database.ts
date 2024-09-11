import { initialData } from "./seed"
import prisma from "../lib/prisma"
import { url } from "inspector"
import { countries } from "./seed-countries"


async function main () {
/* await Promise.all([ */
     await prisma.orderAddress.deleteMany();
     await prisma.orderItem.deleteMany();
     await prisma.order.deleteMany();
     await prisma.userAddress.deleteMany();
     await prisma.user.deleteMany();
     await prisma.countries.deleteMany();
     await prisma.productImage.deleteMany();
     await prisma.product.deleteMany();
     await prisma.category.deleteMany();
 
/* ]) */

const {categories,products,users} = initialData


await prisma.user.createMany({
    data:users
})

await prisma.countries.createMany({
    data:countries
})
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
/* console.log(categoryDB) */

const categoryMap = categoryDB.reduce((map,category)=> {
    map[category.name.toLowerCase()] = category.id
return map
}, {} as Record<string,string> )

/* console.log(categoryMap) */


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