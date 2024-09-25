import MercadoPagoConfig, { Preference } from "mercadopago"
import { getOrderById } from "../order/get-order-by-id"

export const MercadoPayment= async (id:string) => {
 
   
    const orders =await  getOrderById(id)
     const cliente= new MercadoPagoConfig({accessToken:"APP_USR-4452565791503194-051409-8873a3d9472be6e732d4942885b9b700-496502925"})
     const preference = new Preference(cliente)
     const resp = await preference.create({body: {
         items: [
             {id:id,
                 title:orders!.order!.OrderItem.map(t => t.product.title) as any,
                 quantity:/* orders!.order!.OrderItem.map(t => t.quantity)  */2,
                 unit_price:2
         }
 
         ],
         back_urls: {
             success: "https://www.youtube.com/watch?v=-VD-l5BQsuE&pp=ygUQcGFzYXJlbGEgZGUgcGFnbw%3D%3D",
             failure: "https://www.youtube.com/watch?v=-VD-l5BQsuE&pp=ygUQcGFzYXJlbGEgZGUgcGFnbw%3D%3D",
             pending:"https://www.youtube.com/watch?v=-VD-l5BQsuE&pp=ygUQcGFzYXJlbGEgZGUgcGFnbw%3D%3D"
                     },
                     auto_return: "approved",
                     
        
 
             
         
     }}) 
    
     
     
     console.log(resp)
  return resp
    
   
 }