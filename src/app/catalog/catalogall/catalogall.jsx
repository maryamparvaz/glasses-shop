import React from 'react'
import Catalog1 from '../catalog1/catalog1'
import Catalog2 from '../catalog2/catalog2'
import Footer from '@/app/pages/footer/footer'
export default function catalogall() {
        return (
                <main className='w-full bg-white flex flex-wrap'>
                        <Catalog1/>
                        <Catalog2 />
                        <Footer />
                </main>
        )
}
