import React from 'react'
import Image from 'next/image'
export default function brand2() {
        return (
                <section className='w-full  mt-10 flex flex-wrap items-center md:flex-nowrap justify-evenly px-5'>
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
                                        src={'./62.svg'}
                                        width={300}
                                        height={300}
                                        alt='refresh'
                                // className='w-[120px] h-[40px]'
                                />
                        </div>
                        <div className='w-full flex *:mx-2 text-yel text-[22px]'>
                                <span>Maverick</span>
                                <span>Cool</span>
                                <span>Soulful</span>
                        </div>
                        <p className='text-black'>AO EYEWEAR prides itself on quality and timeless American style, since 1833. AO has been proudly worn by JFK, the Apollo 11 crew, Malcolm X, Truman Capote, and countless film stars. AO frames are handcrafted by a team of skilled artisans in our Illinois factory with the finest globally sourced components.</p>
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
                        src={'/61.jpg'}
                        // layout='fill'
                        // objectFit='contain'
                        width={400}
                        height={100}
                        alt='refresh'
                        className='w-full lg:w-[47%] order-last lg:order-first'
                />
        )
}
