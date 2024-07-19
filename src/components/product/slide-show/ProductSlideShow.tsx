"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import {Swiper as SwiperObject} from 'swiper';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import "./productslideshow.css"
import React, { useState } from 'react';
import { Autoplay, FreeMode, Navigation, Thumbs, } from 'swiper/modules';
import Image from 'next/image';


interface Props {
    title: string;
    images:string[];
    classname?:string;
}
export const ProductSlideShow = ({title,images,classname}:Props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

  return (
    <>
    <Swiper
    style={{
      '--swiper-navigation-color': '#080808',
      '--swiper-pagination-color': '#080808',
   
    
    } as React.CSSProperties}
    spaceBetween={10}
    navigation={true}
    autoplay={{delay:2500}}
    thumbs={{ swiper: thumbsSwiper }}
    modules={[FreeMode, Navigation, Thumbs, Autoplay, Navigation]}
    className="mySwiper2"
  >{
    images.map(i=> (
<SwiperSlide key={i}>
     <Image
   
     src={`/${i}`}
     alt='Not Found'
     width={500}
     height={500}
     />
     </SwiperSlide>
    ))
  }
    
  </Swiper>
  <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
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
     />
     </SwiperSlide>
   
    ))
  }
    </Swiper>
    </>
  )
}
