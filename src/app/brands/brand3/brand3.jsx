import React from 'react'
import Image from 'next/image'
export default function brand3() {
        return (
                <section className='w-full  mt-5 flex flex-wrap items-center md:flex-nowrap justify-evenly px-5'>
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
                                        src={'./63.svg'}
                                        width={200}
                                        height={200}
                                        alt='refresh'
                                // className='w-[120px] h-[40px]'
                                />
                        </div>
                        <div className='w-full flex *:mx-2 text-yel text-[22px]'>
                                <span>Dynamic</span>
                                <span>Fresh</span>
                                <span>Energetic</span>
                        </div>
                        <p className='text-black'>Scott Harris isn’t about prescribing uniform eyewear; it’s about providing you with the options to best suit your unique self. Across men’s, women’s, and unisex options - Scott Harris offers fresh, timely, colorful stylings free of heavy embellishments. “Eyewear should fit both your face and your personality naturally, and it should be unique enough to fit them both perfectly.” - Scott Harris Shapiro</p>
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
                        src={'/64.jpg'}
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
