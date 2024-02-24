import React from 'react'
import Image from 'next/image'

import N from './../../imgs/21.jpg'
export default function page5() {
        return (
                <section className='w-full min-h-[100vh] 2xl:min-h-[50vh] flex flex-wrap md:flex-nowrap lg:relative lg:justify-end '>
                        <figure className='w-full md:w-[48%] lg:absolute top-[-50px] left-0 2xl:left-[100px]'>
                                <Image
                                        src={N}
                                        alt="Picture of the author"
                                        width={630}
                                        height={630}
                                />
                        </figure>
                        <div className='w-full md:w-[48%] flex flex-wrap justify-center md:justify-center content-center'>
                                <h3 className='w-full md:w-[40%] text-center justify-center  text-[50px] md:text-[70px] mt-10 md:mt-0 text-white'>STATE <br /> ARTISAN <br /> SERIES</h3>
                                <div className='w-full flex justify-center mb-10 lg:mb-0'><a className='w-[220px] font-thin text-start text-black bg-white h-[50px] rounded-[20px] flex items-center justify-center' href="">Browse Products</a></div>
                        </div>
                </section>
        )
}