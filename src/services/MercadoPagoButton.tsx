/* eslint-disable @next/next/no-async-client-component */
"use client"



import { MercadoPayment } from '@/actions/mercado/get-mercado';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'


initMercadoPago('APP_USR-0938b246-f8b7-4955-bc39-bf88bcee52bb',{
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

