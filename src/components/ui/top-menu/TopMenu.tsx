"use client"

import { titleFont } from "@/config/fonts"
import { useUISTORE } from "@/store"
import Link from "next/link"
import {  IoSearchOutline, IoCart } from "react-icons/io5"


export const TopMenu = () => {
    const openMenu = useUISTORE(state => state.openSideMenu)
    const closeMenu = useUISTORE(state => state.closeSideMenu)


  return (
    <nav className="flex px5 justify-between items-center w-full">
        <div>
<Link href='/'>
<span className={`${titleFont.className} font-bold antialiased`}>Pet Shop</span>
    <span> | Shop</span>
</Link>
</div>
<div className="hidden sm:block">
    <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-500" href="/category/men">Adultos</Link>
    <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-500" href="/category/women">Cachorros</Link>
    <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-500" href="/category/children">Unisex</Link>
   
    
</div>
<div className="flex items-center -top-2">
    <Link className="mx-2" href="/search">

<IoSearchOutline  className="w-5 h-5"/>
</Link>
<Link className="mx-2"  href="/cart">
<div className="relative">
<span  className="absolute text-xs mx-2 rounded-full px-1 -top-3 -right-3 bg-blue-700  text-white">0</span>
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
