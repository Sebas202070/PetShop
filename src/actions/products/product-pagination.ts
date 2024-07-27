import prisma from "@/lib/prisma"


export const getPaginatedProductsWithImages = async () => {
try {
    

    const productsDb = await prisma.product.findMany({
include:{
    ProductImage:{
        take:2,
        select:{
            url:true
        }
    }
}
    })


    return {
        productsDb: productsDb.map(product => ({
            ...product,
            images:product.ProductImage.map(image => (image.url))
           
        }))

       
    }
   
} catch (error) {
   
    throw new Error("No se pudo cargar los productos")
}

}