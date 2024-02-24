"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './../../node_modules/swiper/swiper.css';
import Image from 'next/image'
export default function page7() {
        return (
                <section className='w-full bg-white p-6'>
                        <div className='w-full h-[50px] flex relative mb-16'>
                                <h3 className='text-[35px] absolute z-10 text-black'>NEWS</h3>
                                <div className='w-[160px] h-[20px] bg-gri absolute left-0 z-0 bottom-0'></div>
                        </div>
                        <Swip />
                </section>
        )
}
function Swip() {
        return (
                <Swiper
                        spaceBetween={50}
                        breakpoints={{
                                576: {
                                        slidesPerView: 1,
                                },
                                1108: {
                                        slidesPerView: 2,
                                },
                                1700: {
                                        slidesPerView: 3,
                                }
                        }}

                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}

                >
                        <SwiperSlide className='cursor-pointer w-[48%] flex flex-wrap *:w-full *:flex *:justify-center'>

                                <div className='w-full flex *:flex m-5 p-4 pb-6 flex-wrap justify-around'>
                                        <figure className='w-[60%] ' >
                                                <Image
                                                        src="/1.jpg"
                                                        alt="Picture of the author"
                                                        width={330}
                                                        height={430} />
                                        </figure>
                                        <div className='w-[40%] text-black content-center flex flex-wrap '>
                                                <p className='w-full mt-6 mb-2 text-[20px] md:text-[24px] ml-3 md:ml-6'>
                                                        The First AO Eyewear Optical Collection of the 21st Century!</p>
                                                <p className='w-fulltext-[16px] md:text-[19px] font-thin mt-6 ml-3 md:ml-6'>Historic frames are reissued along with new styles sure to become instant classics</p>
                                        </div>

                                </div>

                        </SwiperSlide>
                        <SwiperSlide className='cursor-pointer w-[48%] flex flex-wrap *:w-full *:flex *:justify-center'>

                                <div className='w-full flex *:flex m-5 p-4 pb-6 flex-wrap justify-around'>
                                        <figure className='w-[60%] ' >
                                                <Image
                                                        src="/2.jpg"
                                                        alt="Picture of the author"
                                                        width={330}
                                                        height={530} />
                                        </figure>
                                        <div className='w-[40%] text-black content-center flex flex-wrap '>
                                                <p className='w-full mt-6 mb-2 text-[20px] md:text-[24px] ml-3 md:ml-6'>
                                                        Introducing Michael Ryen PureFlex</p>
                                                <p className='w-fulltext-[16px] md:text-[19px] font-thin mt-6 ml-3 md:ml-6'>Titanium-based memory metal with resilient style!</p>
                                        </div>

                                </div>

                        </SwiperSlide>
                        <SwiperSlide className='cursor-pointer w-[48%] flex flex-wrap *:w-full *:flex *:justify-center'>

                                <div className='w-full flex *:flex m-5 p-4 pb-6 flex-wrap justify-around'>
                                        <figure className='w-[60%] ' >
                                                <Image
                                                        src="/3.png"
                                                        alt="Picture of the author"
                                                        width={330}
                                                        height={530} />
                                        </figure>
                                        <div className='w-[40%] text-black content-center flex flex-wrap '>
                                                <p className='w-full mt-6 mb-2 text-[20px] md:text-[24px] ml-3 md:ml-6'>
                                                        Introducing DB4K React</p>
                                                <p className='w-fulltext-[16px] md:text-[19px] font-thin mt-6 ml-3 md:ml-6'>Learn more about what sets this line apart from other flexible kids frames</p>
                                        </div>

                                </div>

                        </SwiperSlide>
                        <SwiperSlide className='cursor-pointer w-[48%] flex flex-wrap *:w-full *:flex *:justify-center'>

                                <div className='w-full flex *:flex m-5 p-4 pb-6 flex-wrap justify-around'>
                                        <figure className='w-[60%] ' >
                                                <Image
                                                        src="/4.jpg"
                                                        alt="Picture of the author"
                                                        width={330}
                                                        height={530} />
                                        </figure>
                                        <div className='w-[40%] text-black content-center flex flex-wrap '>
                                                <p className='w-full mt-6 mb-2 text-[20px] md:text-[24px] ml-3 md:ml-6'>AO Eyewear meets with US Trade Representative Katherine Tai</p>
                                                <p className='w-fulltext-[16px] md:text-[19px] font-thin mt-6 ml-3 md:ml-6'>
                                                        Ambassador Tai tours AO's museum and manufacturing facility
                                                </p>
                                        </div>

                                </div>

                        </SwiperSlide>
                        <SwiperSlide className='cursor-pointer w-[48%] flex flex-wrap *:w-full *:flex *:justify-center'>

                                <div className='w-full flex *:flex m-5 p-4 pb-6 flex-wrap '>
                                        <figure className='w-[60%] flex justify-start' >
                                                <Image
                                                        src="/5.jpg"
                                                        alt="Picture of the author"
                                                        width={330}
                                                        height={530} />
                                        </figure>
                                        <div className='w-[40%] text-black content-center flex flex-wrap '>
                                                <p className='w-full mt-6 mb-2 text-[20px] md:text-[24px] ml-3 md:ml-6'>
                                                        Accessories Council Design Excellence Award Winner!
                                                </p>
                                                <p className='w-fulltext-[16px] md:text-[19px] font-thin mt-6 ml-3 md:ml-6'>

                                                        The AO Oxford takes home the ACE award!

                                                </p>
                                        </div>

                                </div>

                        </SwiperSlide>
                        <SwiperSlide className='cursor-pointer w-[48%] flex flex-wrap *:w-full *:flex *:justify-center'>

                                <div className='w-full flex *:flex m-5 p-4 pb-6 flex-wrap justify-evenly'>
                                        <figure className='w-[60%] ' >
                                                <Image
                                                        src="/6.jpg"
                                                        alt="Picture of the author"
                                                        width={200}
                                                        height={330} />
                                        </figure>
                                        <div className='w-[40%] text-black content-center flex flex-wrap '>
                                                <p className='w-full mt-6 mb-2 text-[20px] md:text-[24px]  '>

                                                        Europa Named Business Partner of the Year!
                                                </p>
                                                <p className='w-full text-[16px] md:text-[19px] font-thin mt-6 '>


                                                        Thank you to The Power Practice, we are proud to partner with you!


                                                </p>
                                        </div>

                                </div>

                        </SwiperSlide>
                        <SwiperSlide className='cursor-pointer w-[48%] flex flex-wrap *:w-full *:flex *:justify-center'>

                                <div className='w-full flex *:flex m-5 p-4 pb-6 justify-evenly'>
                                        <figure className='w-[60%] ' >
                                                <Image
                                                        src="/7.jpg"
                                                        alt="Picture of the author"
                                                        width={250}
                                                        height={430} />
                                        </figure>
                                        <div className='w-[40%] text-black content-center flex flex-wrap ml-3 md:ml-6 '>
                                                <p className='w-full mt-6 mb-2 text-[20px] md:text-[24px]  '>

                                                        Europa Named Business Partner of the Year!
                                                </p>
                                                <p className='w-full text-[16px] md:text-[19px] font-thin mt-6 '>


                                                        Thank you to The Power Practice, we are proud to partner with you!


                                                </p>
                                        </div>

                                </div>

                        </SwiperSlide>
                        
                </Swiper>
        )
}
