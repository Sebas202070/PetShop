import { titleFont } from '@/config/fonts';
import Link from 'next/link';
import { RegisterForm } from './ui/RegisterForm';

export default function LoginPage () {
  return (
    <main className="flex flex-col max-h-full w-full justify-center -mt-20 items-center pt-32 sm:pt-52">

      <h1 className={ `${ titleFont.className } text-4xl mb-5` }>Registrarse</h1>

     <RegisterForm/>
    </main>
  );
}