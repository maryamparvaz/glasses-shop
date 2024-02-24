import React from 'react'
import Glass7 from '../glass7/glass7'
import Header3 from '@/app/cart/header/header3'
import Footer from '@/app/pages/footer/footer'
export default function glassall() {
        return (
                <main className='w-full flex flex-wrap content-start bg-white'>
                        <Header3 />
                        <Glass7 />
                        <Footer />
                </main>
        )
}
