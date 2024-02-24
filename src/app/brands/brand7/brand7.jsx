import React from 'react'
import Image from 'next/image'
export default function brand7() {
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
                                        src={'./72.svg'}
                                        width={300}
                                        height={300}
                                        alt='refresh'
                                // className='w-[120px] h-[40px]'
                                />
                        </div>
                        <div className='w-full flex *:mx-2 text-yel text-[22px]'>
                                <span>Feminine</span>
                                <span>Elegant</span>
                                <span>Energetic</span>
                        </div>
                        <p className='text-black'>Cote D’Azur eyewear aims to capture a moment of grace in the design of every frame, offering elegant styling for women who appreciate fine details and feminine touches, all designed to highlight your natural beauty. Only premium materials are used and all styles are designed to accommodate a wide range of prescriptions.</p>
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
                        src={'/73.jpg'}
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
