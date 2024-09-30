"use client"

import { ProductImages } from "@/components/product-images/ProductImage"
import { Product } from "@/interfaces"
import { currencyFormat } from "@/utils"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


interface Props {
    product: Product
}

export const ProductGridItem = ({product}: Props) => {
const [displayImage, setDisplayImage] = useState(product.images[0])



  return (
    <div className="rounded-md overflow-hidden fade-in">
         <Link href={`/product/${product.slug}`}>
        <ProductImages
        src={displayImage}
        alt={product.title}
        className="object-fill ml-8"
        
        style={{
          width:"170px",
          height:"170px",
       
        }}
        width={500}
        height={500}
        onmouseEnter= {() => setDisplayImage(product.images[1])}
        onmouseLeave={()=>  setDisplayImage(product.images[0])}

        />
        </Link>
        <div className="-mt-2 ml-10 p-4 flex flex-col ">
            <Link className="hover:text-blue-700" href={`/product/${product.slug}`}>
            {product.title}
           
            </Link>
            <span className="font-bold">{currencyFormat(product.price)}</span>
        </div>
   
           
       
    </div>
  )
}
