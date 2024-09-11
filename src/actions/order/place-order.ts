"use server"

import { auth } from "@/auth.config"
import { ValidSizes } from "@/interfaces"
import { Address } from "@/interfaces/address.interface"
import prisma from "@/lib/prisma"
import { ok } from "assert"
import { promises } from "dns"
import { RiContactsBookLine } from "react-icons/ri"







interface ProductToOrder{
    productId:string
    quantity:number
    size:ValidSizes

}
export const placeOrder = async (productIds:ProductToOrder[],address:Address)=> {

    const session =await auth()
    const user = session?.user.id
    if(!user) {
        return {
            ok:false,
            message:"No hay session de usuario"
        }
    }

   const products = await prisma.product.findMany({
    where:{
        id:{
            in:productIds.map(p=>p.productId)
        }
    }
   })
   const itemsInOrder = productIds.reduce((count, p) => count + p.quantity,0)

   const {subTotal, tax, total} = productIds.reduce((totals, item)=>{

    const productQuantity = item.quantity
    const product = products.find(p=> p.id === item.productId)
    if(!product) throw new Error(`${item.productId} no existe -500`)

        const subTotal = product.price * productQuantity
        totals.subTotal += subTotal
        totals.tax += subTotal * 0.21
        totals.total += subTotal + (subTotal * 0.21)
    return totals

    
   },
   {subTotal:0, tax:0, total:0})
try {
    const prismaTx = await prisma.$transaction(async(tx)=> {
        const updatedProductsPromises = products.map(async(product)=>{
            const productQuantity =  productIds.filter(p=> p.productId === product.id).reduce((acc,item)=>item.quantity + acc,0)
    
            if(productQuantity === 0) {
                throw new Error(`${product.id} no tiene cantidad definida`)
            }
            return tx.product.update({
                where:{id:product.id},
                data:{
                    inStock:{
                        decrement:productQuantity
                    }
                }
            })
        })
    
        const updatedProducts = await Promise.all(updatedProductsPromises)
        updatedProducts.forEach(product=>{
            if(product.inStock < 0) {
                throw new Error(`${product.title} (No hay stock disponible)`)
            }
        })
     
    const order = await tx.order.create({
        data:{
            userId:user,
            itemsInOrder:itemsInOrder,
            subTotal:subTotal,
            tax:tax,
            total:total,
           
           
    
    
            OrderItem:{
               createMany:{
                
                data:productIds.map(p=>({
                    quantity:p.quantity,
                    size:p.size,
                    productId:p.productId,
                   
                    price:products.find(product=> product.id === p.productId)?.price ?? 0
            
                }))
               }
            }
        }
    })
    
    const {country,...restAddress} = address
    const orderAddress = await tx.orderAddress.create({
        data:{
            ...restAddress,
            countryId:country,
            orderId:order.id
    
        }
    })
    
    
    
    
    
    
    return {
        order:order,
        orderAddress:orderAddress,
        updatedProducts:updatedProducts
    }
    
    })
    return {
        ok:true,
        order:prismaTx.order,
        prismaTx:prismaTx
    }
} catch (error:any) {
    
    return {
        ok:false,
        message:error.message
    }
}


}