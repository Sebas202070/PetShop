"use client";

import { login } from "@/actions/auth/login";
import { registerUser } from "@/actions/auth/register";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

export const RegisterForm = () => {
  const { register, handleSubmit,formState:{errors} } = useForm<FormInputs>();
  const [errorMessage, setErrorMessage]= useState("")

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const { name, email, password } = data;
 const res = await registerUser(name, email, password);
 if(!res.ok){
 setErrorMessage(res.message)
 return
 }
 await login(email,password)
 window.location.replace("/auth/login")
 
 
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        {
            errors.name?.type === "required" && (
                <span className="text-red-700 text-sm semi">* El nombre es requerido</span>
            )
        }
      <label htmlFor="name">Nombre</label>
      <input
        className={
          clsx("px-5 py-2 border bg-gray-200 rounded mb-5",
           { "border-red-500":errors.name}
          )
        }
        type="text"
        autoFocus
        {...register(("name"), { required: true })}
      />
{
            errors.email?.type === "pattern" &&   (
                <span className="text-red-700 text-sm semi">* Correo invalido</span>
            )
           /*  errors.email?.type === "required" && (
              <span className="text-red-700 text-sm semi">El correo es requerido</span>
            ) */
            
        }
        {
           errors.email?.type === "required" &&   (
                <span className="text-red-700 text-sm semi">* El correo es requerido</span>
            )
        }
        
      <label htmlFor="email">Correo electrónico</label>
      <input
        className={
          clsx("px-5 py-2 border bg-gray-200 rounded mb-5",
           { "border-red-500":errors.email}
          )
        }
        type="email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i, })}
      />
      {/* {
            errors.name?.type === "required" && (
                <span className="text-red-700 text-sm semi">* La contraseña es requerida</span>
            )
        }  */}
         {
           errors.password?.type === "minLength" &&   (
                <span className="text-red-700 text-sm semi">* La contraseña debe tener minimo 7 caracteres</span>
            )
        }

{
           errors.password?.type === "required" &&   (
                <span className="text-red-700 text-sm semi">* La contraseña es requerida</span>
            )
        }

      <label htmlFor="password">Contraseña</label>
      <input
        className={
          clsx("px-5 py-2 border bg-gray-200 rounded mb-5",
           { "border-red-500":errors.password}
          )
        }
        type="password"
        {...register(("password"), { required: true,minLength:7 })}
        
      />
{
  <span className="text-red-700 text-sm semi">{errorMessage}</span>
}
      <button className="btn-primary">Crear Cuenta</button>

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/login" className="btn-secondary text-center">
        Login
      </Link>
    </form>
  );
};
