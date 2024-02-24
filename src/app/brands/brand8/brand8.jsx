import React from 'react'
import Image from 'next/image'
export default function brand6() {
        return (
                <section className='w-full mb-12  mt-10 flex flex-wrap items-center md:flex-nowrap justify-evenly px-5'>
                        <Fig />
                        <Left />
                </section>
        )
}
function Left() {
        return (
                <div className='w-full lg:w-[48%] flex flex-wrap *:my-2 content-start mr-3 order-first lg:order-last'>
                        <div className='w-full'>
                                <Image
                                        src={'./74.svg'}
                                        width={200}
                                        height={200}
                                        alt='refresh'
                                // className='w-[120px] h-[40px]'
                                />
                        </div>
                        <div className='w-full flex *:mx-2 text-yel text-[22px]'>
                                <span>Pragmatic</span>
                                <span> Comprehensive</span>
                                <span> Confident</span>
                        </div>
                        <p className='text-black'>Some decisions are complicated, choosing eyewear doesn’t have to be. Michael Ryen eyewear is designed to provide discerning men a breadth of options in a wide range of sizes. Three principles drive the design and execution of every Michael Ryen frame: Fit, Quality, & Style.</p>
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
                <Image
                        src={'/75.jpg'}
                        // layout='fill'
                        // objectFit='contain'
                        width={400}
                        height={100}
                        alt='refresh'
                        className='w-full lg:w-[47%] order-last lg:order-first'
                />
        )
}