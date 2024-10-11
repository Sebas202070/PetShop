
import MercadoPagoConfig, { Preference} from "mercadopago";
import { getOrderById } from "../order/get-order-by-id";



export const MercadoPayment = async (id: string) => {

  
  const orders = await getOrderById(id);
  const cliente = new MercadoPagoConfig({
    accessToken: "APP_USR-1729359829955498-051410-99ca2e300d9a77d4b6feeccdda5873bc-1813030250",
  });
  const preference = new Preference(cliente);

  // Mapeamos cada ítem de la orden para construir los objetos necesarios para Mercado Pago
  const items = orders!.order!.OrderItem.map((t) => ({
    id: id, // Asegúrate de tener un ID único para cada producto
    title: t.product.title,
    quantity: t.quantity,
    unit_price: t.price,
    description: t.product.slug,
  }));

  const resp = await preference.create({
    body: {
      items: items, // Ahora pasamos la lista completa de ítems
      back_urls: {
        success: `https://lasantapetshop.vercel.app/`,
        failure: "https://www.youtube.com/watch?v=-VD-l5BQsuE&pp=ygUQcGFzYXJlbGEgZGUgcGFnbw%3D%3D",
        pending: "https://www.youtube.com/watch?v=-VD-l5BQsuE&pp=ygUQcGFzYXJlbGEgZGUgcGFnbw%3D%3D",
      },
      auto_return: "approved",
      notification_url: `https://lasantapetshop.vercel.app/api/webhook/${id}`,
      
    
    },
  });

  console.log(resp);
  console.log(resp.notification_url);
  console.log(resp.back_urls?.success);

  return resp;
};




 

