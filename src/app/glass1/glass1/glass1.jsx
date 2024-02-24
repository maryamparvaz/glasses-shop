"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './../../node_modules/swiper/swiper.css';
import './../../node_modules/swiper/modules/free-mode.css';
import './../../node_modules/swiper/modules/navigation.css';
import './../../node_modules/swiper/modules/thumbs.css';
import { useState } from 'react';
import { FreeMode, Navigation, Thumbs } from './../../node_modules/swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
export default function glass1() {
        return (
                <section className='w-full mt-[120px] px-5 text-black flex flex-wrap min-h-[70vh] content-center mb-10'>
                        <div className='w-full flex flex-wrap md:flex-nowrap'>
                                <div className='w-full lg:w-[48%] flex justify-center'><div className='w-[400px] sm:w-[500px]'><Swip /></div> </div>
                                <div className='w-full lg:w-[48%] ml-5'>
                                        <h1 className='text-black text-[30px] mb-5'>Scott Harris SH-742</h1>
                                        <h3>Style Description</h3>
                                        <p>This petite women's style packs a lot of fun color into a small package. Whimsical tortoise shades instantly brighten up your face and satin metal temples anchor the look.</p>
                                        <Link href={'/catalog'}><button className='w-[180px] h-[50px] bg-yel mt-6 text-white rounded-[20px]'>Show Catalog</button></Link>
                                </div>
                        </div>
                </section>
        )
}
function Swip() {
        const [thumbsSwiper, setThumbsSwiper] = useState(null);
        return (
                <>
                        <Swiper
                                style={{
                                        '--swiper-navigation-color': '#bcb33d',
                                        '--swiper-pagination-color': '#bcb33d',
                                }}
                                spaceBetween={30}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2 "
                        >
                                <SwiperSlide className='left-[20%] sm:left-[15%] top-[20%]'>
                                        <Image src={'/q.jpg'} width={350} height={350} alt={'refresh'} className='w-[250px] sm:w-[350px]' />
                                </SwiperSlide>
                                <SwiperSlide className='left-[20%] sm:left-[15%] top-[20%]'>
                                        <Image src={'/q2.jpg'} width={350} height={350} alt={'refresh'} className='w-[250px] sm:w-[350px]' />
                                </SwiperSlide>
                                <SwiperSlide className='left-[20%] sm:left-[15%] top-[20%]'>
                                        <Image src={'/q3.jpg'} width={350} height={350} alt={'refresh'} className='w-[250px] sm:w-[350px]' />
                                </SwiperSlide>
                                <SwiperSlide className='left-[20%] sm:left-[15%] top-[20%]'>
                                        <Image src={'/q4.jpg'} width={150} height={150} alt={'refresh'} className='w-[150px] sm:w-[150px]' />
                                </SwiperSlide>

                        </Swiper>
                        <Swiper
                                onSwiper={setThumbsSwiper}
                                spaceBetween={10}
                                slidesPerView={3}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper mt-16"
                        >
                                <SwiperSlide>
                                        <Image src={'/q.jpg'} width={300} height={300} alt={'refresh'} />
                                </SwiperSlide>
                                <SwiperSlide>
                                        <Image src={'/q2.jpg'} width={300} height={300} alt={'refresh'} />
                                </SwiperSlide>
                                <SwiperSlide>
                                        <Image src={'/q3.jpg'} width={300} height={300} alt={'refresh'} />
                                </SwiperSlide>
                                <SwiperSlide>
                                        <Image src={'/q4.jpg'} width={100} height={100} alt={'refresh'} />
                                </SwiperSlide>

                        </Swiper>
                </>
        );
}