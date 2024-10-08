import { getOrderById } from "@/actions";
import { MercadoPayment } from "@/actions/mercado/get-mercado";
import prisma from "@/lib/prisma";
import axios from "axios";
import { revalidatePath } from "next/cache";

import { NextRequest, NextResponse } from "next/server"


export const POST = async (req:NextRequest) => {


 /*  const orders = await getOrderById(id) */
  var res = await req?.json()
  
 
  console.log("res",res);
 
  /*  const paramsOk = await res?.params?.notification */
/*   console.log("paramsOK",paramsOk) */


   const info = await res?.data?.id
console.log("Info",info)
const axiosInfo = await axios.get(`https://api.mercadopago.com/v1/payments/${info}?access_token=APP_USR-1729359829955498-051410-99ca2e300d9a77d4b6feeccdda5873bc-1813030250`).then((response) => {
  (response.data);
const data = response?.data
return data
  
});
console.log("axiosInfo",axiosInfo)
const status = await axiosInfo?.status
console.log("status",status)
const Id= await axiosInfo?.notification_url
console.log("Id",Id )

const idSplit = Id.split("/")
console.log(idSplit)
const Order = idSplit[5]


 


  

  
 const approved = async ()=>{
  if (status === "approved") {

    
    await prisma.order.update({
      where: { id: Order },
      data:  {
        isPaid: true,
        paidAt: new Date()
      }
    })
    revalidatePath(`https://92f4-161-0-64-81.ngrok-free.app/orders/${Order}`)
  }
}
await approved()
  










  return NextResponse.json({status:200})
 
}



