"use client"

import { titleFont } from "@/config/fonts"
import { UseStoreCart, useUISTORE } from "@/store"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaDog } from "react-icons/fa"
import {  IoSearchOutline, IoCart } from "react-icons/io5"


export const TopMenu = () => {
    const openMenu = useUISTORE(state => state.openSideMenu)
    const closeMenu = useUISTORE(state => state.closeSideMenu)
    const totalProductsiInCart = UseStoreCart(state => state.getTotalItems())
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
      
    setLoaded(true)
     
    }, [])
    

  return (
    <nav className="flex px5 justify-between items-center w-full">
        <div>
<Link className="flex" href='/'>
<span className={`${titleFont.className} font-bold antialiased`}>PetShop </span>
    <span>|La Santa</span>
    <FaDog 
    className="ml-1"
    size={20}
    
    />
   
   
</Link>
</div>
<div className="hidden sm:block">
    <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-500" href="/gender/Men">Adultos</Link>
    <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-500" href="/gender/Women">Cachorros</Link>
    <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-500" href="/gender/Kids">Unisex</Link>
   
    
</div>
<div className="flex items-center -top-2">
    <Link className="mx-2" href="/search">

<IoSearchOutline  className="w-5 h-5"/>
</Link>
<Link href=  {(totalProductsiInCart === 0 && loaded) 
    ? "/empty" 
    : "/cart"}
    className="mx-2" >
<div className="relative">
    {(loaded && totalProductsiInCart > 0) && (
<span  className="absolute text-xs mx-2 rounded-full px-1 -top-3 -right-3 bg-blue-700  text-white">
    {totalProductsiInCart}
</span>
        )
    }

<IoCart className="w-5 h-5"/>
</div>
</Link>

    <button 
    onClick={() =>openMenu() }
    className="m-2 p-2 rounded-md transition-all hover:bg-gray-500">Menu</button>
    
</div>
    </nav>
  )
}
