import MercadoPagoConfig, { Preference } from "mercadopago"
import { getOrderById } from "../order/get-order-by-id"

export const MercadoPayment= async (id:string) => {
 
   
    const orders =await  getOrderById(id)
     const cliente= new MercadoPagoConfig({accessToken:"TEST-4452565791503194-051409-8375de64d0ecd5e59a40c479dc74d12d-496502925"})
     const preference = new Preference(cliente)
     const q = orders!.order!.OrderItem.map(t => (t.quantity))
     var suma = 0
    for (let index = 0; index < q.length; index++) {
        const element = q[index];
        suma += element
    }

    var sumau=0
    const u = orders!.order!.OrderItem.map(t => t.price)
    for (let index = 0; index < u.length; index++) {
        const element = u[index];
        sumau += element
    }
    console.log(suma, sumau )
     const resp = await preference.create({body: {
         items: [
             {id:`${id}`,
                 title:`${orders!.order!.OrderItem.map(t => t.product.title) as any}`,
                 quantity: Number(suma) /* Number(orders!.order!.OrderItem.map(t => (t.quantity))) */,
                 unit_price: Number(sumau) /* Number(orders!.order!.OrderItem.map(t => t.price)) */,
                 description: orders!.order!.OrderItem.map(t => t.product.slug) as any, 
                 
         },
        
 
         ],
         back_urls: {
             success: "lasantapetshop.vercel.app",
             failure: "https://www.youtube.com/watch?v=-VD-l5BQsuE&pp=ygUQcGFzYXJlbGEgZGUgcGFnbw%3D%3D",
             pending:"https://www.youtube.com/watch?v=-VD-l5BQsuE&pp=ygUQcGFzYXJlbGEgZGUgcGFnbw%3D%3D"
                     },
                     auto_return: "approved",
                     notification_url:"https://lasantapetshop.vercel.app"

                     
                     
        
 
             
         
     }}) 
    
     
     

     console.log(resp)
     
  return resp
    
   
 }