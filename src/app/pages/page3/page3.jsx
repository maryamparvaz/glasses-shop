"use client"
import React, { useRef } from 'react'
import A from './../../imgs/6.jpg'
import B from './../../imgs/4.svg'
import C from './../../imgs/1.svg'
import D from './../../imgs/02.svg'
import E from './../../imgs/3.svg'
import F from './../../imgs/05.svg'
import G from './../../imgs/06.svg'
import H from './../../imgs/7.svg'
import I from './../../imgs/8.svg'
import J from './../../imgs/09.svg'
import K from './../../imgs/10.svg'
import L from './../../imgs/11.svg'
export default function page3({ dd }) {

        return (
                <section className='w-full flex flex-wrap md:flex-nowrap pt-16 bg-white'>
                        <figure className='w-full md:w-[50%] md:translate-y-[-40px]  lg:translate-y-[-100px] relative '>
                                <img className='w-full' src={A.src} alt="" />
                                <figcaption className='font-all1 absolute right-[-120px] lg:right-[-170px] font-medium top-[210px] text-[70px] lg:text-[100px] 2xl:text-[150px] text-gr rotate-[-90deg]'>BRANDS</figcaption>
                        </figure>
                        <Brand />
                </section>
        )
}
function Brand({ p }) {
        return (
                <div className='w-full md:w-[50%] flex bg-gr justify-evenly items-center transition-all duration-[.6s] '>
                        <ul className='*:my-14'>
                                <li>
                                        <img className='w-[130px]' src={B.src} alt="" />
                                </li>
                                <li>
                                        <img className='w-[130px]' src={C.src} alt="" />
                                </li>
                                <li>
                                        <img className='w-[130px]' src={D.src} alt="" />
                                </li>
                                <li>
                                        <img className='w-[130px]' src={E.src} alt="" />
                                </li>
                                <li>
                                        <img className='w-[130px]' src={F.src} alt="" />
                                </li>
                                <li>
                                        <img className='w-[130px]' src={G.src} alt="" />
                                </li>
                        </ul>
                        <ul className='*:my-12'>
                                <li>
                                        <img className='w-[130px]' src={H.src} alt="" />
                                </li>
                                <li>
                                        <img className='w-[130px]' src={I.src} alt="" />
                                </li>
                                <li>
                                        <img className='w-[130px]' src={J.src} alt="" />
                                </li>
                                <li>
                                        <img className='w-[130px]' src={K.src} alt="" />
                                </li>
                                <li>
                                        <img className='w-[130px]' src={L.src} alt="" />
                                </li>
                        </ul>
                </div>

        )
}
