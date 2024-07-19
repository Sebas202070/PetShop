"use client"
import { useState } from 'react'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5'

export const QuantitySelector = () => {

    const [count, setCount] = useState(0)
    const handleCount = ()=> {
if(count === 0) return;
setCount(count- 1)
    }
  return (
    <div className='flex'>
          <button onClick={handleCount}>
            <IoRemoveCircleOutline size={30}/>
        </button>
   <span className='w-20 mx-3 px-5 bg-gray-100 text-center'>
    {count}
   </span>
   <button onClick={()=>setCount(count + 1)}>
            <IoAddCircleOutline size={30}/>
        </button>
    
    </div>
  )
}
