import React from 'react'
import Glass5 from '../glass5/glass5'
import Header3 from '@/app/cart/header/header3'
import Footer from '@/app/pages/footer/footer'
export default function glassall() {
        return (
                <main className='w-full flex flex-wrap content-start bg-white'>
                        <Header3 />
                        <Glass5 />
                        <Footer />
                </main>
        )
}
