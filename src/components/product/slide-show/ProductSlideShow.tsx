"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import {Swiper as SwiperObject} from 'swiper';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import "./productslideshow.css"

import { FreeMode, Navigation,Autoplay, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import { useState } from 'react';
import { ProductImages } from '@/components/product-images/ProductImage';


interface Props {
    title: string;
    images:string[];
    classname:string;
}
export const ProductSlideShow = ({title,images,classname}:Props) => {

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
  return (
    <>
    <Swiper
   style={{
    width:"58vh",
    height:"228px",
    marginBottom:"10px",
    marginTop:"80px",
   
   
   
   
   }}
   
   thumbs={{ swiper: thumbsSwiper }}
    navigation={true}
    autoplay={{delay:2500}}
spaceBetween={50}
 
    modules={[FreeMode, Navigation,Autoplay, Thumbs]}
    className="mySwiper2"
  >{
    images.map(i=> (
<SwiperSlide key={i}>
     <ProductImages
   className='object-fill'
     src={i}
     alt='Not Found'
     width={700}
     height={700}
     
     
     />
     </SwiperSlide>
    ))
  }
    
  </Swiper>
  <Swiper
  style={{
    width:"520px",
    height:"100px",
/*        marginLeft:"300px" */
   }}
        onSwiper={setThumbsSwiper}
        spaceBetween={8}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
    images.map(i=> (
<SwiperSlide key={i}>
     <ProductImages

     src={i}
     alt='Not Found'
     width={380}
     height={380}
     className='object-cover'
     
     />
     </SwiperSlide>
   
    ))
  }
    </Swiper>
    </>
  )
}
