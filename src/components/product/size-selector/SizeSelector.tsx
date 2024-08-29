

import { ValidSizes } from "@/interfaces"
import clsx from "clsx"



interface Props {
    selectedSize?: ValidSizes,
    availableSizes: ValidSizes[],
    onSizeChanged: (size:ValidSizes) => void
}
 
export const SizeSelector = ({availableSizes,selectedSize,onSizeChanged}:Props) => {

  
  return (
    <div>
        <h3>Talles disponibles</h3>
        <div>
            {
            availableSizes.map(a => (
                <button
                key={a}
                onClick={() => (onSizeChanged(a))}
                className={
                   clsx(
                       "mx-2 hover:underline hover:text-blue-700 text-lg",
                       {
                       "underline": a === selectedSize
                   }
                   )
               }
                >{a}
                
               
                
           
                </button>
            ))
        }
        </div>
        
    </div>
  )
}
