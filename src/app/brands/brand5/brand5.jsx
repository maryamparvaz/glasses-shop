import React from 'react'
import Image from 'next/image'
export default function brand5() {
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
                                        src={'./67.svg'}
                                        width={200}
                                        height={200}
                                        alt='refresh'
                                // className='w-[120px] h-[40px]'
                                />
                        </div>
                        <div className='w-full flex *:mx-2 text-yel text-[22px]'>
                                <span>Straightforward</span>
                                <span>Honest</span>
                                <span>Energetic</span>
                        </div>
                        <p className='text-black mt-3'>When the late Alan J. Shapiro started his own eyewear company out of a garage in the 70s, he didn’t have a lot of resources but he had plenty of grit, a contagious energy, and the determination to do things his own way. He valued honesty more than status and people more than profits. By focusing on quality you can feel, frames you can wear with confidence, and a company you can feel good about supporting, the Alan J. collection pays tribute to the man who inspired it all. Every Alan J frame is handcrafted by a team of skilled artisans in our Illinois factory with the finest globally sourced components.</p>
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
                        src={'/68.jpg'}
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
