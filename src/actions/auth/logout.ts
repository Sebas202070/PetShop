"use server"

import { signOut } from '@/auth.config'
import React from 'react'

export const logout = async () => {

 await signOut()
 
}
