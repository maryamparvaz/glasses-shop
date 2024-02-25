"use client"
import React, { useEffect, useRef, useState } from 'react'
import useStore from './../../catalog/zustand/store'
import Image from 'next/image'
import Cartright from './cartright'
import { select } from '@nextui-org/react'
export default function cart2() {
        const { updateUser8 } = useStore();
        let x = useRef()
        if (typeof window !== 'undefined') {
                let datas2 = JSON.parse(localStorage.getItem('myProducts2'));
                useEffect(() => {
                        if (datas2 == '') {
                                x.current.innerText = 'Your Shopping Cart is Empty'
                                x.current.style.fontSize = '45px'
                                x.current.style.color = 'black'
                        }
                }, [x, datas2])
        }
        return (
                <section ref={x} className='w-full pt-[120px] px-10 lg:pl-10 lg:pr-5 flex flex-wrap lg:flex-nowrap  justify-center pb-10'>
                        <Left />
                        <Cartright />
                </section>
        )
}
function Left() {
        const selecrto = useStore((state) => state.selectIt)
        const iddd = useStore((state) => state.idd)
        const selectt = useStore((state) => state.selectIt)

        function clos(e) {
                e.target.parentElement.parentElement.style.display = 'none'
                let del = e.target.parentElement.parentElement.getAttribute('data-del')
                if (typeof window !== 'undefined') {
                        let datas = JSON.parse(localStorage.getItem('myProducts2'));
                        datas.map((val, i) => {
                                if (val.id == del) {
                                        datas.splice(i, 1)
                                }
                                localStorage.setItem('myProducts2', JSON.stringify(datas))
                        })
                }
        }
        const [isClient, setIsClient] = useState(false)
        useEffect(() => {
                setIsClient(true)
        }, [])
        let selectop = []
        if (typeof window !== 'undefined') {
                selectop = JSON.parse(localStorage.getItem('myProducts2'));
        }
        // return <h1>{isClient ? 'This is never prerendered' : 'Prerendered'}</h1>
        return (
                <section className='w-full lg:w-[65%]'>
                        {isClient ?
                                selectop && selectop.map((val, i) => {
                                        return (
                                                <div data-del={val.id} className='w-full  flex flex-wrap items-center my-4 bg-white shadow-ui'>
                                                        <div className='w-full flex justify-end text-black'><i onClick={clos} class="bi bi-x text-[30px] cursor-pointer"></i></div>
                                                        <div className='flex flex-wrap md:flex-nowrap w-full'>
                                                                <figure>
                                                                        <Image
                                                                                src={val.img}
                                                                                alt="Picture of the author"
                                                                                width={300}
                                                                                height={300}

                                                                        />
                                                                </figure>
                                                                <div className='text-black  flex flex-wrap *:w-full *:flex *:justify-start *:text-[24px] *:my-2 ml-10 mb-6'>
                                                                        <span>Name :{val.name + ' ' + val.name2}</span>
                                                                        <span>Price :{val.price}</span>
                                                                        <div className='flex items-center  pb-4'>
                                                                                <span>Qty : </span>
                                                                                <select className='w-[70px] px-2 bg-white border border-b-2 ml-2' name="" id="">
                                                                                        <option value="1">1</option>
                                                                                        <option value="2">2</option>
                                                                                        <option value="3">3</option>
                                                                                        <option value="4">4</option>
                                                                                        <option value="5">5</option>
                                                                                        <option value="6">6</option>
                                                                                </select>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        )
                                }) : 'Prerendered'
                        }

                </section>
        )
        // }




}