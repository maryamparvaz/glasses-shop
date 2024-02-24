"use client"
import Header3 from '@/app/cart/header/header3'
import Footer from '@/app/pages/footer/footer'
import Page8 from '@/app/pages/page8/page8'
import React from 'react'
import Brand1 from '../brand1/brand1'
import Brand2 from '../brand2/brand2'
import Brand3 from '../brand3/brand3'
import Brand4 from '../brand4/brand4'
import Brand5 from '../brand5/brand5'
import Brand6 from '../brand6/brand6'
import Brand7 from '../brand7/brand7'
import Brand8 from '../brand8/brand8'
export default function brandsall() {
        return (
                <main className='w-full bg-white flex flex-wrap content-start'>
                        <Header3 />
                        <Brand1 />
                        <Brand2 />
                        <Brand3 />
                        <Brand4 />
                        <Brand5 />
                        <Brand6 />
                        <Brand7 />
                        <Brand8 />
                        <Page8 />
                        <Footer />
                </main>
        )
}
