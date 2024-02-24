"use client"
import React from 'react'
import Header from '../page1/header'
import Myimage from './../../imgs/2.jpg'
import Link from 'next/link'
export default function page1({ add ,need2 }) {
        return (
                <section className='w-full h-[120vh]  bg-cover relative justify-center md:justify-center '>
                        <Fig />
                        <Header sc={add} need1={need2}/>
                        <Butt />
                </section>
        )
}
function Fig() {
        return (
                <figure id='aft' className='w-full h-full absolute z-[-20] '>
                        <img className='w-full h-full object-cover' src={Myimage.src} alt="" />
                </figure>
        )
}
function Butt() {
        return (
                <div className='w-full h-full flex flex-wrap content-center justify-center md:justify-start md:w-[100%] *:text-white p-10 *:my-3'>
                        <span className='w-full text-white text-[30px] flex justify-center md:justify-start '>Explore Color with</span>
                        <h1 className='w-full text-white text-[45px] md:text-[70px] flex justify-center md:justify-start '>SCOTT HARRIS</h1>
                        <Link href={'/catalog'}> <span className='w-[280px] h-[50px]  text-white text-[28px] flex justify-center  border border-white rounded-[30px] hover:bg-wh'>View the collection</span></Link>
                </div>
        )
}
