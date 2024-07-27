import { titleFont } from '@/config/fonts';
import Link from 'next/link';

export default function LoginPage () {
  return (
    <main className="flex flex-col max-h-full w-full justify-center -mt-20 items-center pt-32 sm:pt-52">

      <h1 className={ `${ titleFont.className } text-4xl mb-5` }>Registrarse</h1>

      <div className="flex flex-col">
<label htmlFor="text">Nombre</label>
<input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="text" />
        <label htmlFor="email">Correo electrónico</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="email" />


        <label htmlFor="email">Contraseña</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="email" />

        <button
          
          className="btn-primary">
 Crear Cuenta
        </button>


        {/* divisor l ine */ }
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">O</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>

        <Link
          href="/auth/login" 
          className="btn-secondary text-center">
        Login
        </Link>

      </div>
    </main>
  );
}