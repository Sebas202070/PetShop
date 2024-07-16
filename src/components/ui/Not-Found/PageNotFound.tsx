"use client"

import Image from "next/image"
import Link from "next/link"

export const PageNotFound = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row  h-[700px] w-full justify-center items-center align-middle'>
      <Image 
src="/image1.jpg"
alt="Not Found"
width={500}
height={500}

/>
<div className='text-center px5 mx-5'>
<h2 className='text-9xl'>404</h2>
<p>Whopps!! Page not Found</p>
<p>Puedes regresar al inicio haciendo click</p>
<Link className="hover:underline" href="/">Aqui</Link>
</div>

    </div>
  )
}
