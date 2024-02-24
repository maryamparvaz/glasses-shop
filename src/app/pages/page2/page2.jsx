"use client"
import React, { useRef } from 'react'
import A from './../../imgs/4.jpg'
import B from './../../imgs/5.jpg'
export default function page2({ cc }) {
        let d = useRef()
        let s = useRef()
        if (cc >= 500 && cc < 1200) {
                d.current.style.transform = 'translateX(0)'
                s.current.style.transform = 'translateX(0)'
        } else if (cc >= 1200) {
                d.current.style.transform = 'translateX(-100%)'
                s.current.style.transform = 'translateX(100%)'
        } else if (cc < 500) {
                d.current.style.transform = 'translateX(-100%)'
                s.current.style.transform = 'translateX(100%)'
        }
        return (
                <section className='w-full flex flex-wrap lg:flex-nowrap bg-white'>
                        <div ref={d} className='w-full lg:w-[48%] flex flex-wrap content-center pl-10 mt-10 lg:mt-0 translate-x-[-100%] transition-all duration-[.6s]'>
                                <h2 id='bg' className='w-full flex text-[55px]'>INDEPENDENCE <br />IS  IN OUR DNA</h2>
                                <p className='w-full flex text-[20px] pl-10 font-medium mt-5 text-zinc-400'>Europa is the eyewear company committed to staying independent. Operated by the second generation of our founding family, we’re proud to craft products and policies focused on supporting likeminded, independent eye care professionals.</p>
                        </div>
                        <div ref={s} className='w-full lg:w-[48%] flex flex-wrap justify-center lg:justify-end relative mb-10 lg:mb-[200px] mt-10 lg:mt-0 translate-x-[100%] transition-all duration-[.6s]'>
                                <figure className='relative w-[200px] lg:w-[350px] z-[0] before:w-full before:h-full before:absolute before:bg-kr before:left-[-70px] before:top-[10%] before:z-[-10]'>
                                        <img className='lg:translate-y-[-30px]' src={A.src} alt="" />
                                        <img className='absolute left-[80%] bottom-[30%] lg:left-[-50%] lg:bottom-[-30%]' src={B.src} alt="" />
                                </figure>
                        </div>
                </section>
        )
}