import React from 'react'
import Image from 'next/image'
export default function about2() {
        return (
                <section className='w-full bg-white lg:pt-36 flex flex-wrap lg:flex-nowrap relative'>
                        <Fig />
                        <Txt />
                </section>
        )
}
function Fig() {
        return (
                <Image
                        src='/11.jpg'
                        alt="Picture of the author"
                        width={730}
                        height={930}
                        className='2xl:w-[50%]'
                />
        )
}
function Txt() {
        return (
                <div className='w-full lg:w-[50%] bg-gri1 text-gray-500 font-thin lg:absolute  right-0 p-14 top-[30px] 2xl:relative 2xl:top-0'>
                        <h2 className='text-[36px] text-black font-medium'>INDEPENDENT FOR <br /> THE INDEPENDENT</h2>
                        <p className='text-[19px] mt-7'>Independence is in our DNA. You can chalk that up to the fact that Europa Eyewear is still owned and operated by its founding family, but it goes further than that. It's a deep-seated belief that we share with independent-minded eye care professionals and eyeglass wearers - that independent offices are vital parts of their communities.</p>
                </div>
        )
}