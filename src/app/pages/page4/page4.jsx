"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './../../node_modules/swiper/swiper.css';
import L from './../../imgs/12.jpg'
import m from './../../imgs/13.jpg'
import n from './../../imgs/14.jpg'
import o from './../../imgs/15.jpg'
import p from './../../imgs/16.jpg'
import q from './../../imgs/17.jpg'
import r from './../../imgs/18.jpg'
import s from './../../imgs/19.jpg'
import u from './../../imgs/34.jpg'
import w from './../../imgs/31.jpg'
import z from './../../imgs/37.jpg'
import t from './../../imgs/32.jpg'
import h from './../../imgs/38.jpg'
import b from './../../imgs/35.jpg'
import c from './../../imgs/33.jpg'
import f from './../../imgs/36.jpg'
import useStore from './store';
import Link from 'next/link';
export default function page4() {
        return (
                <section className='w-full bg-white flex flex-wrap p-10 pt-16 pb-[100px] text-black'>

                        <div className='w-full h-[50px] flex relative mb-16'>
                                <h3 className='text-[35px] absolute z-10'>FEATURED FRAMES</h3>
                                <div className='w-[160px] h-[20px] bg-gri absolute left-0 z-0 bottom-0'></div>
                        </div>
                        <div className='w-full flex *:my-6 md:my-0  flex-wrap md:flex-nowrap *:mx-4 justify-center '>
                                <Swip />
                        </div>
                </section>
        )
}
function Swip() {
        function neww(e) {
                if (e.currentTarget.getAttribute('data-num') == 1) {
                        e.currentTarget.children[0].children[0].children[0].src = u.src
                        e.currentTarget.children[0].style.boxShadow = '0px 0px 23px -7px rgba(0,0,0,0.32)'
                        e.currentTarget.children[0].children[3].style.visibility = 'visible'
                } else if (e.currentTarget.getAttribute('data-num') == 2) {
                        e.currentTarget.children[0].children[0].children[0].src = w.src
                        e.currentTarget.children[0].style.boxShadow = '0px 0px 23px -7px rgba(0,0,0,0.32)'
                        e.currentTarget.children[0].children[3].style.visibility = 'visible'
                } else if (e.currentTarget.getAttribute('data-num') == 3) {
                        e.currentTarget.children[0].children[0].children[0].src = z.src
                        e.currentTarget.children[0].style.boxShadow = '0px 0px 23px -7px rgba(0,0,0,0.32)'
                        e.currentTarget.children[0].children[3].style.visibility = 'visible'
                } else if (e.currentTarget.getAttribute('data-num') == 4) {
                        e.currentTarget.children[0].children[0].children[0].src = t.src
                        e.currentTarget.children[0].style.boxShadow = '0px 0px 23px -7px rgba(0,0,0,0.32)'
                        e.currentTarget.children[0].children[3].style.visibility = 'visible'
                } else if (e.currentTarget.getAttribute('data-num') == 5) {
                        e.currentTarget.children[0].children[0].children[0].src = h.src
                        e.currentTarget.children[0].style.boxShadow = '0px 0px 23px -7px rgba(0,0,0,0.32)'
                        e.currentTarget.children[0].children[3].style.visibility = 'visible'
                } else if (e.currentTarget.getAttribute('data-num') == 6) {
                        e.currentTarget.children[0].children[0].children[0].src = b.src
                        e.currentTarget.children[0].style.boxShadow = '0px 0px 23px -7px rgba(0,0,0,0.32)'
                        e.currentTarget.children[0].children[3].style.visibility = 'visible'
                } else if (e.currentTarget.getAttribute('data-num') == 7) {
                        e.currentTarget.children[0].children[0].children[0].src = c.src
                        e.currentTarget.children[0].style.boxShadow = '0px 0px 23px -7px rgba(0,0,0,0.32)'
                        e.currentTarget.children[0].children[3].style.visibility = 'visible'
                } else if (e.currentTarget.getAttribute('data-num') == 8) {
                        e.currentTarget.children[0].children[0].children[0].src = f.src
                        e.currentTarget.children[0].style.boxShadow = '0px 0px 23px -7px rgba(0,0,0,0.32)'
                        e.currentTarget.children[0].children[3].style.visibility = 'visible'
                }
        }
        function back(e) {
                if (e.currentTarget.getAttribute('data-num') == 1) {
                        e.currentTarget.children[0].children[0].children[0].src = L.src
                        e.currentTarget.children[0].style.boxShadow = '0px 0px 0px 0px'
                        e.currentTarget.children[0].children[3].style.visibility = 'hidden'
                } else if (e.currentTarget.getAttribute('data-num') == 2) {
                        e.currentTarget.children[0].children[0].children[0].src = m.src
                        e.currentTarget.children[0].style.boxShadow = '0px 0px 0px 0px'
                        e.currentTarget.children[0].children[3].style.visibility = 'hidden'
                } else if (e.currentTarget.getAttribute('data-num') == 3) {
                        e.currentTarget.children[0].children[0].children[0].src = n.src
                        e.currentTarget.children[0].style.boxShadow = '0px 0px 0px 0px'
                        e.currentTarget.children[0].children[3].style.visibility = 'hidden'
                } else if (e.currentTarget.getAttribute('data-num') == 4) {
                        e.currentTarget.children[0].children[0].children[0].src = o.src
                        e.currentTarget.children[0].style.boxShadow = '0px 0px 0px 0px'
                        e.currentTarget.children[0].children[3].style.visibility = 'hidden'
                } else if (e.currentTarget.getAttribute('data-num') == 5) {
                        e.currentTarget.children[0].children[0].children[0].src = p.src
                        e.currentTarget.children[0].style.boxShadow = '0px 0px 0px 0px'
                        e.currentTarget.children[0].children[3].style.visibility = 'hidden'
                } else if (e.currentTarget.getAttribute('data-num') == 6) {
                        e.currentTarget.children[0].children[0].children[0].src = q.src
                        e.currentTarget.children[0].style.boxShadow = '0px 0px 0px 0px'
                        e.currentTarget.children[0].children[3].style.visibility = 'hidden'
                } else if (e.currentTarget.getAttribute('data-num') == 7) {
                        e.currentTarget.children[0].children[0].children[0].src = r.src
                        e.currentTarget.children[0].style.boxShadow = '0px 0px 0px 0px'
                        e.currentTarget.children[0].children[3].style.visibility = 'hidden'
                } else if (e.currentTarget.getAttribute('data-num') == 8) {
                        e.currentTarget.children[0].children[0].children[0].src = s.src
                        e.currentTarget.children[0].style.boxShadow = '0px 0px 0px 0px'
                        e.currentTarget.children[0].children[3].style.visibility = 'hidden'
                }
        }
        return (
                <Swiper
                        spaceBetween={50}
                        breakpoints={{
                                576: {
                                        slidesPerView: 2,
                                },
                                908: {
                                        slidesPerView: 3,
                                }
                        }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}

                >
                        <SwiperSlide onMouseEnter={neww} onMouseLeave={back} data-num='1' className='w-[48%] md:w-[24%] flex flex-wrap *:w-full *:flex *:justify-center'>


                                <div className='w-full flex flex-wrap *:w-full *:flex *:justify-center m-5 p-4 pb-6'>
                                        <figure className='w-full' >
                                                <img src={L.src} alt="" className='w-full' />
                                        </figure>
                                        <span className='mt-6 mb-2 font-thin text-[19px]'>Scott Harris</span>
                                        <span className='text-[16px] font-bold'>SH-812</span>
                                        <div className='mt-5 flex  items-center *:justify-center invisible'>
                                                <Heart />
                                                <Link href={'/glass1'}><span className='ml-4 text-[17px] hover:text-yel cursor-pointer'>view product</span></Link>
                                                <i class="bi bi-arrow-right ml-4 text-[19px]"></i>
                                        </div>
                                </div>


                        </SwiperSlide>
                        <SwiperSlide onMouseEnter={neww} onMouseLeave={back} data-num='2' className='w-[48%] md:w-[24%] flex flex-wrap *:w-full *:flex *:justify-center'>
                                <div className='w-full flex flex-wrap *:w-full *:flex *:justify-center m-5 p-4 pb-6'>
                                        <figure className='w-full' >
                                                <img src={m.src} alt="" className='w-full' />
                                        </figure>
                                        <span className='mt-6 mb-2 font-thin text-[19px]'>Cote D'Azur</span>
                                        <span className='text-[16px] font-bold'>CDA-362</span>
                                        <div className='mt-5 flex  items-center *:justify-center invisible'>
                                                <Heart />
                                                <Link href={'/glass2'}><span className='ml-4 text-[17px] hover:text-yel cursor-pointer'>view product</span></Link>
                                                <i class="bi bi-arrow-right ml-4 text-[19px]"></i>
                                        </div>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide onMouseEnter={neww} onMouseLeave={back} data-num='3' className='w-[48%] md:w-[24%] flex flex-wrap *:w-full *:flex *:justify-center'>
                                <div className='w-full flex flex-wrap *:w-full *:flex *:justify-center m-5 p-4 pb-6'>
                                        <figure className='w-full'>
                                                <img src={n.src} alt="" className='w-full' />
                                        </figure>
                                        <span className='mt-6 mb-2 font-thin text-[19px]'>Cinzia</span>
                                        <span className='text-[16px] font-bold'>CIN-5156</span>
                                        <div className='mt-5 flex  items-center *:justify-center invisible'>
                                                <Heart />
                                                <Link href={'/glass3'}><span className='ml-4 text-[17px] hover:text-yel cursor-pointer'>view product</span></Link>
                                                <i class="bi bi-arrow-right ml-4 text-[19px]"></i>
                                        </div>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide onMouseEnter={neww} onMouseLeave={back} data-num='4' className='w-[48%] md:w-[24%] flex flex-wrap *:w-full *:flex *:justify-center'>
                                <div className='w-full flex flex-wrap *:w-full *:flex *:justify-center m-5 p-4 pb-6 '>
                                        <figure className='w-full'>
                                                <img src={o.src} alt="" className='w-full' />
                                        </figure>
                                        <span className='mt-6 mb-2 font-thin text-[19px]'>Michael Ryen</span>
                                        <span className='text-[16px] font-bold'>MR-410</span>
                                        <div className='mt-5 flex  items-center *:justify-center invisible'>
                                                <Heart />
                                                <Link href={'/glass4'}><span className='ml-4 text-[17px] hover:text-yel cursor-pointer'>view product</span></Link>
                                                <i class="bi bi-arrow-right ml-4 text-[19px]"></i>
                                        </div>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide onMouseEnter={neww} onMouseLeave={back} data-num='5' className='w-[48%] md:w-[24%] flex flex-wrap *:w-full *:flex *:justify-center'>
                                <div className='w-full flex flex-wrap *:w-full *:flex *:justify-center m-5 p-4 pb-6'>
                                        <figure className='w-full'>
                                                <img src={p.src} alt="" className='w-full' />
                                        </figure>
                                        <span className='mt-6 mb-2 font-thin text-[19px]'>Cote D'Azur</span>
                                        <span className='text-[16px] font-bold'>CDA-356</span>
                                        <div className='mt-5 flex  items-center *:justify-center invisible'>
                                                <Heart />
                                                <Link href={'/glass5'}><span className='ml-4 text-[17px] hover:text-yel cursor-pointer'>view product</span></Link>
                                                <i class="bi bi-arrow-right ml-4 text-[19px]"></i>
                                        </div>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide onMouseEnter={neww} onMouseLeave={back} data-num='6' className='w-[48%] md:w-[24%] flex flex-wrap *:w-full *:flex *:justify-center'>
                                <div className='w-full flex flex-wrap *:w-full *:flex *:justify-center m-5 p-4 pb-6'>
                                        <figure className='w-full'>
                                                <img src={q.src} alt="" className='w-full' />
                                        </figure>
                                        <span className='mt-6 mb-2 font-thin text-[19px]'>Michael Ryen</span>
                                        <span className='text-[16px] font-bold'>MR-410</span>
                                        <div className='mt-5 flex  items-center *:justify-center invisible'>
                                                <Heart />
                                                <Link href={'/glass6'}><span className='ml-4 text-[17px] hover:text-yel cursor-pointer'>view product</span></Link>
                                                <i class="bi bi-arrow-right ml-4 text-[19px]"></i>
                                        </div>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide onMouseEnter={neww} onMouseLeave={back} data-num='7' className='w-[48%] md:w-[24%] flex flex-wrap *:w-full *:flex *:justify-center'>
                                <div className='w-full flex flex-wrap *:w-full *:flex *:justify-center m-5 p-4 pb-6'>
                                        <figure className='w-full'>
                                                <img src={r.src} alt="" className='w-full' />
                                        </figure>
                                        <span className='mt-6 mb-2 font-thin text-[19px]'>Michael Ryen </span>
                                        <span className='text-[16px] font-bold'>MR-398</span>
                                        <div className='mt-5 flex  items-center *:justify-center invisible'>
                                                <Heart />
                                                <Link href={'/glass7'}><span className='ml-4 text-[17px] hover:text-yel cursor-pointer'>view product</span></Link>
                                                <i class="bi bi-arrow-right ml-4 text-[19px]"></i>
                                        </div>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide onMouseEnter={neww} onMouseLeave={back} data-num='8' className='w-[48%] md:w-[24%] flex flex-wrap *:w-full *:flex *:justify-center'>
                                <div className='w-full flex flex-wrap *:w-full *:flex *:justify-center m-5 p-4 pb-6'>
                                        <figure>
                                                <img src={s.src} alt="" className='w-full' />
                                        </figure>
                                        <span className='mt-6 mb-2 font-thin text-[19px]'>Cinzia </span>
                                        <span className='text-[16px] font-bold'>CIN-5158</span>
                                        <div className='mt-5 flex  items-center *:justify-center invisible'>
                                                <Heart />
                                                <Link href={'/glass8'}><span className='ml-4 text-[17px] hover:text-yel cursor-pointer'>view product</span></Link>
                                                <i class="bi bi-arrow-right ml-4 text-[19px]"></i>
                                        </div>
                                </div>
                        </SwiperSlide>

                </Swiper>
        )
}
let flag = 0
function Heart() {
        const { her, updateUser } = useStore();
        function heart(e) {
                if (e.currentTarget.getAttribute('data-status') == 'off') {
                        e.currentTarget.style.color = 'red'
                        e.currentTarget.setAttribute('data-status', 'on')
                        flag++
                } else {
                        e.currentTarget.style.color = 'black'
                        e.currentTarget.setAttribute('data-status', 'off')
                        flag--
                }
                updateUser(flag)
        }
        return (

                <i onClick={heart} data-status='off' class="bi bi-heart text-[19px] hover:text-yel"></i>
        )
}