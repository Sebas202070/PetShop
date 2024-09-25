import { MercadoPagoConfig, Preference } from "mercadopago";
const client = new MercadoPagoConfig({ accessToken: "TEST-4452565791503194-051409-8375de64d0ecd5e59a40c479dc74d12d-496502925" });

export class MercadoPagoServices {
  async MpPayment(data: {
    id: string;
    title: string;
    quantity: number;
    unit_price: number;
  }) {
    try {
      const preference = await new Preference(client).create({
        body: {
          items: [data],
          back_urls: {
            success: "/success",
            failure: "/failure",
            pending: "/pending",
          },
          auto_return: "approved",
        },
      });

      return { error: false, success: true, preference };
    } catch (error) {
      console.log(error);
      return { error: true, success: false, preference: null };
    }
  }
}