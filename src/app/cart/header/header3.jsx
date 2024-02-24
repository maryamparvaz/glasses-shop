"use client"
import React, { useEffect, useRef } from 'react'
import A from './../../imgs/3.jpg'
import Link from 'next/link'
import useStore from '@/app/catalog/zustand/store'
export default function header3() {
        let c = useRef()
        return (
                <header className='bg-white w-full h-[100px]  flex justify-around transition-all duration-[.5s] z-50 fixed' ref={c}>
                        <Fig />
                        <div className='w-[70%] flex justify-end lg:justify-between'>
                                <Ull />
                                <Ulr />
                        </div>
                </header>
        )
}
function Fig() {
        return (
                <figure className='w-[200px] flex items-center'>
                        <img className='w-full' src={A.src} alt="" />
                </figure>
        )
}
function Ulr() {
        const {updateUser9} = useStore();
        let j = useRef()
        let e = useRef()
        useEffect(() => {
                const user = j.current
                const user6 = e.current
                updateUser9(user, user6)
        }, [])
        return (
                <ul className='flex *:cursor-pointer *:text-white *:text-[30px] *:lg:text-[22px] *:mx-2 items-center'>
                        <li className='relative'><i class="bi bi-heart text-black"></i> <span className='w-[20px] h-[20px] bg-yel rounded-[50%] flex justify-center items-center absolute top-[-10px] right-[-10px] text-[16px]'>0</span></li>
                        <Link href='./cart'><li><i class="bi bi-bag text-black"></i></li></Link>
                        <li className='relative group'><i class="bi bi-person text-black text-[28px]"></i>
                                <ul className='group-hover:h-[80px] overflow-hidden bg-white transition-all duration-[.6s] absolute  w-[130px] h-0 shadow-ui left-[-100px]'>
                                        <li  className='flex flex-wrap content-start *:w-full p-2 text-black'>
                                                <span className='text-black'>Hello</span>
                                                <span ref={j} className='text-black'>user</span>
                                        </li>
                                </ul>
                        </li>
                </ul>
        )
}
function Ull() {
        return (
                <ul className='hidden lg:flex *:cursor-pointer *:text-black *:text-[22px] *:mx-6  items-center'>
                        <Link href='./..'><li className='hover:text-yel hover:border-b-2 hover:border-yel'>Home</li></Link>
                        <Link href='./about'><li className='hover:text-yel hover:border-b-2 hover:border-yel'>About</li></Link>
                        <Link href='./catalog'><li className='hover:text-yel hover:border-b-2 hover:border-yel'>Catalog</li></Link>
                        <Link href='./brands'><li className='hover:text-yel hover:border-b-2 hover:border-yel'>Brands</li></Link>
                        <li className='hover:text-yel hover:border-b-2 hover:border-yel'>Contact</li>
                        <Link href='./login'><li className='hover:text-yel hover:border-b-2 hover:border-yel'>Login</li></Link>
                </ul>
        )
}