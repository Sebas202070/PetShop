"use server"

import prisma from "@/lib/prisma"


export const getUserAddress = async (userId:string)=> {
    try {
        const getUser = await prisma.userAddress.findUnique({
            where:{userId}
        })

if (!getUser) return null

const {countryId,address2,...rest} = getUser
return {
    ...rest,
    country:countryId,
    address2: address2 ? address2:"",
  
}


 

        
    } catch (error) {
        console.log(error)
        return null
    }
}