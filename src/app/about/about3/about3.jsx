import React from 'react'
import Image from 'next/image'
export default function about3() {
        return (
                <section className='w-full flex flex-wrap lg:flex-nowrap bg-white'>
                        <Fig1/>
                        <Fig2/>
                </section>
        )
}
function Fig1() {
        return (
                <figure className='w-full lg:w-[50%]  relative'>
                        <Image
                                src='/13.jpg'
                                alt="Picture of the author"
                                width={1400}
                                height={800}
                        />
                        <Txt1 />
                </figure>
        )
}
function Txt1() {
        return (
                <div className='w-full absolute top-0 left-0 z-10 flex flex-wrap justify-center content-center mb-10 lg:py-10'>
                        <h3 className='w-full flex justify-center text-[36px]'>CAREERS</h3>
                        <p className='w-full flex justify-center text-center font-thin text-[17px] p-16 pb-6 pt-2'>Interested in joining the Europa Family? We don’t call it a family to be cute; we mean it. We’re proud to have mothers and daughters, brothers and sisters working alongside each other in our sales force, office, and factory. Learn about the latest opportunities…</p>
                        <a href="" className=' w-[70%] border border-white rounded-[20px] h-[50px] flex justify-center items-center hover:bg-wh'>Start your career with Europa</a>
                </div>
        )
}
function Fig2() {
        return (
                <figure className='w-full lg:w-[50%]  relative'>
                        <Image
                                src='/14.jpg'
                                alt="Picture of the author"
                                width={1400}
                                height={800}
                        />
                        <Txt2 />
                </figure>
        )
}
function Txt2() {
        return (
                <div className='w-full absolute top-0 left-0 z-10 flex flex-wrap justify-center content-center  lg:py-10'>
                        <h3 className='w-full flex justify-center text-[36px]'>BRANDS</h3>
                        <p className='w-full flex justify-center text-center font-thin text-[17px] p-16 pb-6'>No logo plaques, just independent eyewear. Learn about our ten diverse brands, offering everything from adult eyewear to kid’s glasses to polarized sunwear.</p>
                        <a href="" className=' w-[70%] border border-white rounded-[20px] h-[50px] flex justify-center items-center hover:bg-wh'>Explore Our Brands</a>
                </div>
        )
}
