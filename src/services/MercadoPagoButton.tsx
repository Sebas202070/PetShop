/* eslint-disable @next/next/no-async-client-component */
"use client"



import { MercadoPayment } from '@/actions/mercado/get-mercado';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'


initMercadoPago('TEST-87f7003a-c62a-4d51-96b1-a4bfb6d11d4e',{
    locale:"es-AR"
});
interface Props{
id:string
}

export const Mercado = async ({id}:Props) => {

    
 

    
    /* const {id:idmp} = await MercadoPayment(id)
  const idp = idmp
     */


return (
     <Wallet initialization={{ preferenceId:id}} customization={{ texts:{ valueProp: 'smart_option'}}} />
)
}

