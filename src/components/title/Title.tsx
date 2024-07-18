import { titleFont } from '@/config/fonts'
import React from 'react'
import { FaDog } from 'react-icons/fa'


interface Props{
    title:string,
    subtitle?: string,
    classname?:string
}


export const Title = ({title,classname,subtitle}:Props) => {
  return (
    <div className={`mt-3 ${classname}`}>
        <h1 className={`${titleFont.className} antialiased text-4xl font-semibold my-10 `}>{title} </h1>
        {
            subtitle && (
                <h3 className={`${titleFont.className} antialiased text-2xl font-semibold my-10 -mt-8 `}>{subtitle}</h3>
            )
            
        }
    </div>
  )
}
