"use server"

import prisma from "@/lib/prisma"
import { ok } from "assert"





export const getOrderById = async (id:string)=>{
    const orderById= await prisma.order.findUnique({
        where:{id},
        include:{
            
            OrderAddress:true,
            OrderItem:{
                select:{

                    price:true,
                    quantity:true,
                    size:true,

                    product:{
                        select:{
                            title:true,
                            slug:true,

                            ProductImage:{
                                select:{
                                    url:true,
                                },
                                take:1
                            }
                        }
                        
                    }
                }
                }
            }
        }
    )
    
    return {
        ok:true,
        order:orderById
    }
}