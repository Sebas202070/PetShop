"use client"

import { logout } from '@/actions/auth/logout'
import { useUISTORE } from '@/store'
import clsx from 'clsx'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from 'react-icons/io5'

export const SideBar = () => {

    const isSideMenuOpen = useUISTORE(state => state.isSideMenuOpen)
    const closeMenu = useUISTORE(state => state.closeSideMenu)

    const {data:session} = useSession()
    
    const isAuthtenticated = !!session?.user
    const isRoleAdmin = session?.user.role === "admin"
   /*  console.log(session)
    console.log(isAuthtenticated) */
    const onClick = () => {
        logout()
        closeMenu()
    }


  return (
    <div>
        {

            isSideMenuOpen && (
                <div className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30'/>
            )
        }
        
{
    isSideMenuOpen && (
<div 
onClick={closeMenu}
className='fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm'/>
    )
}
    
        

      
        <nav className={
            clsx(  'portrait:w-[370px] fixed p-8 right-0 top-0 w-[300px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300 ',
                {
                    "translate-x-full": !isSideMenuOpen
                }
            )
          }>
            <IoCloseOutline
            size={30}
            className='absolute -top-0.5 right-1 cursor-pointer'
            onClick={()=>closeMenu()}
            />
            <div>
                <IoSearchOutline
                size={20}
                className='absolute mt-2 ml-2 '/>
                <input 
                type="text"
                placeholder='Buscar...'
                className='w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500 portrait:w-[200px]' />
            </div>
            {
                isAuthtenticated && (
                    <><Link
                          href="/profile"
                          className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                          onClick={() => closeMenu()}
                      >
                          <IoPersonOutline
                              size={20} />
                          <span className='ml-3'>Perfil de Usuario</span>
                      </Link><Link
                          href="/orders"
                          className='flex items-center mt-4 p-2 hover:bg-gray-100 rounded transition-all'
                          onClick={()=>closeMenu()}
                      >
                              <IoTicketOutline
                                  size={20} />
                              <span className='ml-3'>Ordenes</span>
                          </Link></>
                )
            }
           

            {
                isAuthtenticated && (
                    
                    <button 
    
                    className='flex items-center w-full mt-4 p-2 hover:bg-gray-100 rounded transition-all'
                    onClick={()=>onClick() }
                  
                    >
                        <IoLogOutOutline
                        size={20}
                    
                        />
                        <span className='ml-3'>Cerrar sesion</span>
                    </button>
                )
            }
            {
                !isAuthtenticated && (
<Link 
            href="/auth/login"
            className='flex items-center mt-4 p-2 hover:bg-gray-100 rounded transition-all'
            onClick={()=>closeMenu()}
            >
                <IoLogInOutline
                size={20}
            
                />
                <span className='ml-3'>Iniciar sesion</span>
            </Link>
                )
            }
            
         
<div className='w-full h-px bg-gray-200 my-10 portrait:w-[200px]'/>
{
isAuthtenticated && isRoleAdmin && (
    <div>
    <Link 
            href="/admin/products"
            className='flex items-center mt-4 p-2 hover:bg-gray-100 rounded transition-all'
            onClick={()=>closeMenu()}
            >
                <IoShirtOutline
                size={20}
            
                />
               
                <span className='ml-3'>Productos</span>
            </Link>
            <Link 
            href="/admin/orders"
            onClick={()=>closeMenu()}
            className='flex items-center mt-4 p-2 hover:bg-gray-100 rounded transition-all'
            >
                <IoTicketOutline
                size={20}
            
                />
                <span className='ml-3'>Ordenes</span>
            </Link>
            <Link 
            href="/admin/users"
            className='flex items-center mt-4 p-2 hover:bg-gray-100 rounded transition-all'
            onClick={()=>closeMenu()}
            >
                <IoPeopleOutline
                size={20}
            
                />
                <span className='ml-3'>Usuarios</span>
            </Link>
            </div>
)
                }

        </nav>
    </div>
  )
}
