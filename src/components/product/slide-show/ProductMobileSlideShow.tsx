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
    width:"50vh",
    height:"290px",
    marginBottom:"10px",
    marginTop:"20px"
   
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
  style={{
    width:"350px",
    height:"100px",
/*        marginLeft:"300px" */
   }}
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
     className='object-fill'
     />
     </SwiperSlide>
   
    ))
  }
    </Swiper>
    </>
  )
}
