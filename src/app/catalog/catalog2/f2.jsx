"use client"
import React, { useEffect, useState } from 'react'
import useStore from './../../catalog/zustand/store'
import Image from 'next/image'
export default function cart2() {
        return (
                <section className='w-full pt-[120px] px-10'>
                        <Left />
                </section>
        )
}
function Left() {
        const iddd = useStore((state) => state.idd)
        const selectt = useStore((state) => state.selectIt)
        localStorage.setItem('items', JSON.stringify(iddd));
        const userData = JSON.parse(localStorage.getItem('items'));
        localStorage.setItem('sel', JSON.stringify(selectt));
        const selectop = JSON.parse(localStorage.getItem('sel'));
        // const[pric , setPrice] = useState()
        // function num(e) {
        //         setPrice(e.currentTarget.value)
        // }
        function clos(e) {
                e.target.parentElement.parentElement.style.display = 'none'
        }

        return (
                <div>
                        {

                                userData && userData.map((val, i) => {
                                        return (
                                                <div className='w-full lg:w-[70%] flex flex-wrap items-center my-4 bg-white shadow-ui'>
                                                        <div className='w-full flex justify-end text-black'><i onClick={clos} class="bi bi-x text-[30px] cursor-pointer"></i></div>
                                                        <figure>
                                                                <Image
                                                                        src={selectop[i + 2].img}
                                                                        alt="Picture of the author"
                                                                        width={300}
                                                                        height={300}

                                                                />
                                                        </figure>
                                                        <div className='text-black  flex flex-wrap *:w-full *:flex *:justify-start *:text-[24px] *:my-2 ml-10 mb-6'>
                                                                <span>Name :{selectop[i + 2].name + ' ' + selectop[i + 2].name2}</span>
                                                                <span>Price :{selectop[i + 2].price}</span>
                                                                <div className='flex items-center border-b-2 pb-4'>
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
                                                                {/* <span>Subtotal :{(Number(selectop[i + 2].price)) * Number(pric) }</span> */}
                                                        </div>
                                                </div>
                                        )
                                })
                        }

                </div>
        )
}
