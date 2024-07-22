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


interface Props {
    title: string;
    images:string[];
    classname:string;
}
export const ProductMobileSlideShow = ({title,images,classname}:Props) => {

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
  return (
    <>
    <Swiper
   style={{
    width:"58vh",
    height:"240px",
    marginBottom:"10px",
    marginTop:"80px"
   
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
     <Image
   className='object-cover'
     src={`/${i}`}
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
    width:"480px",
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
     <Image

     src={`/${i}`}
     alt='Not Found'
     width={400}
     height={400}
     className='object-cover'
     
     />
     </SwiperSlide>
   
    ))
  }
    </Swiper>
    </>
  )
}
