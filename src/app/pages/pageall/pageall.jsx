"use client"
import React, { useContext, useRef, useState } from 'react'
import A from './../../imgs/1.jpg'
import Page1 from '../page1/page1'
import Page2 from '../page2/page2'
import Page3 from '../page3/page3'
import Page4 from '../page4/page4'
import Page5 from '../page5/page5'
import Page6 from '../page6/page6'
import Page7 from '../page7/page7'
import Page8 from '../page8/page8'
import Footer from '../footer/footer'
export default function pageall() {
        const [x, setX] = useState({})
        const c = useRef()
        function para(e) {
                setX({
                        ...x,
                        scr: e.target.scrollTop
                })
        }
        return (
                <main onScroll={para} class="w-full h-[100vh] overflow-y-scroll 2xl:mx-auto">
                        <section ref={c} class="w-full  flex justify-center content-start flex-wrap  overflow-x-hidden overflow-y-hidden">
                                <Fig />
                                <Page1 add={x.scr} />
                                <Page2 cc={x.scr} />
                                <Page3 dd={x.scr} />
                                <Page4 />
                                <Page5 />
                                <Page6 />
                                <Page7 />
                                <Page8 />
                                <Footer />
                                <Scrol sc={(x.scr)} />
                        </section>
                </main>
        )
}
function Fig() {
        return (
                <figure className='w-full h-[100vh] fixed z-[-50]'>
                        <img className='w-full h-full' src={A.src} alt="" />
                </figure>
        )
}
function Scrol({ sc }) {
        return (
                <span className='fixed w-[50px] h-[50px] text-[30px] left-0 top-0  z-50'></span>
        )
}