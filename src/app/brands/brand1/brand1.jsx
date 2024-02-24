import React from 'react'
import Image from 'next/image'
export default function brand1() {
        return (
                <section className='w-full  mt-[100px] flex flex-wrap items-center md:flex-nowrap justify-evenly px-5'>
                        <Left />
                        <Fig />
                </section>
        )
}
function Left() {
        return (
                <div className='w-full lg:w-[48%] flex flex-wrap *:my-2 content-start mr-3'>
                        <div className='w-full'>
                                <Image
                                        src={'./q1.svg'}
                                        width={200}
                                        height={200}
                                        alt='refresh'
                                // className='w-[120px] h-[40px]'
                                />
                        </div>
                        <div className='w-full flex *:mx-2 text-yel text-[22px]'>
                                <span>Intelligent</span>
                                <span>Authentic</span>
                                <span>Soulful</span>
                        </div>
                        <p className='text-black'>THERE ARE 70 CRAFTSPEOPLE in our Chicago factory determined to redefine luxury eyewear. Each frame is meticulously handcrafted from premium, globally sourced materials to be a genuine expression of one’s personal style and distinct personality. STATE frames are for those who consider how their frame is made with as much mindfulness as how it looks.</p>
                        <div>
                                <div className='flex w-[170px] h-[40px] rounded-[20px] border border-yel justify-evenly items-center text-black'>
                                        <span>Explore Brand</span>
                                        <i class="bi bi-caret-right text-yel text-[24px]"></i>
                                </div>
                                <div>
                                        <span>Explore Collection</span>
                                        <i></i>
                                </div>
                        </div>
                </div>
        )
}
function Fig() {
        return (
                // <figure className='w-full md:w-[48%]'>
                <Image
                        src={'/60.jpg'}
                        // layout='fill'
                        // objectFit='contain'
                        width={400}
                        height={100}
                        alt='refresh'
                        className='w-full lg:w-[47%]'
                />
                // </figure>
        )
}
