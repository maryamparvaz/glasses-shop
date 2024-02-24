import React from 'react'
import Glass1 from '../glass1/glass1'
import Header3 from '@/app/cart/header/header3'
import Footer from '@/app/pages/footer/footer'
export default function glassall() {
        return (
                <main className='w-full flex flex-wrap content-start bg-white'>
                        <Header3 />
                        <Glass1 />
                        <Footer />
                </main>
        )
}
