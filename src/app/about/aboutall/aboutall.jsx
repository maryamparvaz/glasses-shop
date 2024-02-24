import React from 'react'
import About1 from '../about1/about1'
import About2 from '../about2/about2'
import About3 from '../about3/about3'
import Footer from '@/app/pages/footer/footer'
import Image from 'next/image'
export default function aboutall() {
        return (
                <main className='w-full flex flex-wrap content-start'>
                        <Fig/>
                        <About1 />
                        <About2 />
                        <About3 />
                        <Footer />
                </main>
        )
}
function Fig() {
        return (
                <Image
                        fill
                        alt='Mountains'
                        src='/9.jpg'
                        sizes='100vw'
                        className='fixed bottom-0 object-cover z-[-9]'/>
        )
}