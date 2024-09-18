"use client";

import { createUpdateProduct } from "@/actions";
import { deleteProductImage } from "@/actions";
import { ProductImages } from "@/components/product-images/ProductImage";
import { Product, ProductImage, ValidCategory, ValidSizes } from "@/interfaces";
import { Category } from "@/interfaces/category.interface";
import { Countries } from "@/interfaces/countries.interface";
import clsx from "clsx";
import { randomUUID } from "crypto";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";


interface Props {
  product: Partial<Product> & {ProductImage?:ProductImage[]}
  categories: Category[]
}

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];



interface FormInputs {

 
  title:string,
  slug:string,
  description:string,
  price:number,
  inStock:number,
  sizes:string[],
  tags:string,
  gender:"Men" | "Women" | "Kids" | "Unisex",
  categoriId: string,
  images?:FileList;

}

export const ProductForm = ({ product,categories }: Props) => {
  const router = useRouter()
  

  const {handleSubmit,register,formState:{isValid},getValues,setValue,watch} = useForm<FormInputs>({

    defaultValues:{
    ...product,
    tags:product.tags?.join(","),
   sizes:product.sizes?? [],
   images:undefined
  
  
    }
    

   
  })
  watch('sizes')

const formdata = new FormData()


  


const onSubmit = async (data:FormInputs) => {
  const {images,...productsToSave}= data

  if(product.id){
    formdata.append("id", product.id?? "")
  }

formdata.append("title", productsToSave.title)
formdata.append("slug", productsToSave.slug)
formdata.append("description", productsToSave.description)
formdata.append("price", productsToSave.price.toString())
formdata.append("inStock", productsToSave.inStock.toString())

formdata.append("sizes", productsToSave.sizes.toString())
formdata.append("tags", productsToSave.tags)
formdata.append("categoryId", productsToSave.categoriId)
    formdata.append("gender", productsToSave.gender);
    if ( images ) {
      for ( let i = 0; i < images.length; i++  ) {
        formdata.append('images', images[i]);
      }
    }
    console.log(images)
   

    const {ok,product:products} = await createUpdateProduct(formdata)
    if(!ok){
      alert("El producto no se pudo cargar")
      return
    }
    router.replace(`/admin/product/${products?.slug}`)
    console.log(ok)
  }

    const onSizeChange = (size:string) =>{
      const sizes= new Set(getValues("sizes"))
      sizes.has(size)? sizes.delete(size) :  sizes.add(size)
      setValue("sizes", Array.from(sizes))
console.log(sizes)
    }

        

    
  return (
    <form onSubmit={handleSubmit(onSubmit)}className="grid px-5 mb-16 grid-cols-1 sm:px-0 sm:grid-cols-2 gap-3">
      {/* Textos */}
      <div className="w-full">
        <div className="flex flex-col mb-2">
          <span>Título</span>
          <input type="text" className="p-2 border rounded-md bg-gray-200" {...register("title",{required:true})}/>
        </div>

        <div className="flex flex-col mb-2">
          <span>Slug</span>
          <input type="text" className="p-2 border rounded-md bg-gray-200" {...register("slug",{required:true})} />
        </div>

        <div className="flex flex-col mb-2">
          <span>Descripción</span>
          <textarea
            rows={5}
            className="p-2 border rounded-md bg-gray-200" {...register("description",{required:true})}
          ></textarea>
        </div>

        <div className="flex flex-col mb-2">
          <span>Price</span>
          <input type="number" className="p-2 border rounded-md bg-gray-200" {...register("price",{required:true,min:0})} />
        </div>

        <div className="flex flex-col mb-2">
          <span>Tags</span>
          <input type="text" className="p-2 border rounded-md bg-gray-200" {...register("tags",{required:true})} />
        </div>

        <div className="flex flex-col mb-2">
          <span>Gender</span>
          <select className="p-2 border rounded-md bg-gray-200" {...register("gender",{required:true})}>
            <option value="">[Seleccione]</option>
          
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kid</option>
            <option value="Unisex">Unisex</option>
          </select>
        </div>

        <div className="flex flex-col mb-2">
          <span>Categoria</span>
          <select className="p-2 border rounded-md bg-gray-200" {...register("categoriId",{required:true})}>
            <option value="">[Seleccione]</option>
            {
                categories.map(c=>(
                    <option key={c.id} value={c.id}>{c.name}</option>
                )
            )
            }
          </select>
        </div>

        <button className="btn-primary w-full">
          Guardar
        </button>
      </div>

      {/* Selector de tallas y fotos */}
      <div className="flex flex-col mb-2">

      <span>inStock</span>
      <input type="number" className="p-2 border rounded-md bg-gray-200" {...register("inStock",{required:true,min:0})} />
        {/* As checkboxes */}
        <div className="flex flex-col">

          <span>Tallas</span>
          <div className="flex flex-wrap">
            
            {
              sizes.map( size => (
                // bg-blue-500 text-white <--- si está seleccionado
                <div key={ size } 
                onClick={()=>onSizeChange(size)}
                className={
                  clsx("flex  items-center justify-center w-10 h-10 mr-2 border rounded-md transition-all",
                    {
                      "bg-blue-700 text-white":getValues("sizes").includes(size)
                    }

                  )
                }
                >
                  <span>{ size }</span>
                </div>
              ))
            }

          </div>


          <div className="flex flex-col mb-2">

            <span>Fotos</span>
            <input 
              type="file"
              {...register("images")}
              multiple 
              className="p-2 border rounded-md bg-gray-200" 
              accept="image/png, image/jpeg"
            />

          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {
              product.ProductImage?.map(image => (

                <div key={image.id}>
                  <ProductImages
                  alt={image.url}
                  src={image.url}
                  width={80}
                  height={80}
                  className=" w-40 h-30 object-cover shadow-md rounded"
                  />
                  <button type="button"  className="btn-primary w-full" onClick={()=>deleteProductImage(image.id,image.url,)}>Eliminar</button>
                </div>
              ))
            }
          </div>

        </div>
      </div>
      </form>
  );
};