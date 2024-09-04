import { Title } from '@/components';
import Link from 'next/link';
import { AddressForm } from './ui/AddressForm';
import { countries } from '@/seeds/seed-countries';
import { getCountries } from '@/actions/countries/get-countries';
import { auth } from '@/auth.config';
import { getUserAddress } from '@/actions/address/get-user-address';


export default async function NamePage() {

  const countriesData = await getCountries()

  const session = await auth()
  if(!session?.user) {
    return (

      <h2>No se inicio session</h2>
    )

  }

  const userAddres = await getUserAddress(session.user.id) ?? undefined
  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0">



      <div className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">
        
        <Title title="Dirección" subtitle="Dirección de entrega" />

        <AddressForm countries={countriesData} useStoreAddress={userAddres}/>

      </div>




    </div>
  );
}