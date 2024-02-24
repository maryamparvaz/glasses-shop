"use client"
import Header3 from '@/app/cart/header/header3'
import React from 'react'
import Footer from './../../pages/footer/footer'
import Page8 from '@/app/pages/page8/page8'
import Logbody from '../logbody/logbody'
export default function logAll() {
        return (
                <main className='w-full bg-white min-h-[100vh] flex flex-wrap content-start'>
                        <Header3/>
                        <Logbody />
                        <Page8/>
                        <Footer/>
                </main>
        )
}
