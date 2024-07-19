

import { ValidSizes } from "@/interfaces"
import clsx from "clsx"



interface Props {
    selectedSize: ValidSizes,
    availableSizes: ValidSizes[]
}
 
export const SizeSelector = ({availableSizes,selectedSize}:Props) => {

  
  return (
    <div>
        <h3>Talles disponibles</h3>
        <div>
            {
            availableSizes.map(a => (
                <button className={
                    clsx(
                        "mx-2 hover:underline hover:text-blue-700 text-lg",
                        {
                        "underline": a === selectedSize
                    }
                    )
                }
                key={a}>{a}
                </button>
            ))
        }</div>
        
    </div>
  )
}
