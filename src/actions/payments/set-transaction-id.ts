"use server"

import prisma from "@/lib/prisma"
import { trace } from "console"

export const setTransactionId = async (orderId: string, transactionId: string)=> {
try {
    

    const order = await prisma.order.update({
        where:{
            id:orderId
        },
        data:{
            TransactionId:transactionId
        }
    })


   if(!order) {
    return {
        pk:false,
        message:`No se encontro la orden ${orderId}`
    }
   }
    return {
        ok:true
    }
} catch (error) {
    return {
        ok:false,
        message:"No se pudo actualizar el id de la transaccion"
    }
}

















}
