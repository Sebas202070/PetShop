"use client"

import { generatePaginateNumbers } from '@/utils'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'

interface Props {
    totalPages: number
}

export const Pagination = ({totalPages}:Props) => {


    const pathname = usePathname()
    const searchparams = useSearchParams()
    const currentPage = Number(searchparams.get("page")? searchparams.get("page") : 1 )?? 1

    const allPages = generatePaginateNumbers(currentPage, totalPages)
 /*    console.log(allPages) */
   
    const createPageUrl = (pageNumber: number | string)=> {
const params = new URLSearchParams(searchparams)


if (pageNumber === "...") {
    return `${pathname}?${params.toString()}`
}

if (+pageNumber <= 0) {
    return `${pathname}`

}

if (+pageNumber > totalPages) {
    return `${pathname}?${params.toString()}`
}

params.set('page', pageNumber.toString())
return`${pathname}?${params.toString()}`

    }
  return (
 
<div className="flex text-center justify-center mt-20 mb-32">
  <nav aria-label="Page navigation example">
    <ul className="flex list-style-none">
      <li className="page-item "><Link
          className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href={createPageUrl(currentPage - 1)} aria-disabled="true"><IoChevronBackOutline size={30}/></Link></li>

          {
            allPages.map(p => (
                <li key={p} className="page-item"><Link
                className={
                    clsx(
                        "page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none",
                        {
                            "bg-blue-500": p === currentPage
                        }
                    )
                    
                   
                }
                href={createPageUrl(p)}>{p}</Link></li>
            ))
          }
   
      
      <li className="page-item"><Link
          className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href={createPageUrl(currentPage + 1)}><IoChevronForwardOutline size={30}/></Link></li>
    </ul>
  </nav>
</div>
  )
}
