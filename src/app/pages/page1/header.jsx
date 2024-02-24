"use client"
import React, { useRef } from 'react'
import A from './../../imgs/3.jpg'
import useStore from './../page4/store'
import Link from 'next/link'
export default function Header({ sc}) {
        let c = useRef()
        if (sc >= 90) {
                c.current.style.position = 'fixed'
                c.current.style.backgroundColor = 'white'
                c.current.style.marginTop = 0
                c.current.style.padding = '60px'
                c.current.children[1].children[0].children[1].style.color = 'black'
                c.current.children[1].children[0].children[2].style.color = 'black'
                c.current.children[1].children[0].children[3].style.color = 'black'
                c.current.children[1].children[0].children[4].style.color = 'black'
                c.current.children[1].children[0].children[5].style.color = 'black'
                c.current.children[1].children[0].children[0].style.color = 'black'
                c.current.children[1].children[1].children[0].style.color = 'black'
                c.current.children[1].children[1].children[1].style.color = 'black'
                c.current.children[1].children[1].children[2].style.color = 'black'
        } else if (sc < 133) {
                c.current.style.position = 'none'
                c.current.style.backgroundColor = 'inherit'
                c.current.style.marginTop = '70px'
                c.current.style.padding = '20px'
                c.current.children[1].children[0].children[1].style.color = 'white'
                c.current.children[1].children[0].children[2].style.color = 'white'
                c.current.children[1].children[0].children[3].style.color = 'white'
                c.current.children[1].children[0].children[4].style.color = 'white'
                c.current.children[1].children[0].children[5].style.color = 'white'
                c.current.children[1].children[0].children[0].style.color = 'white'
                c.current.children[1].children[1].children[0].style.color = 'white'
                c.current.children[1].children[1].children[1].style.color = 'white'
                c.current.children[1].children[1].children[2].style.color = 'white'
        }
        return (
                <header className='w-full h-[50px] mt-20 flex justify-around transition-all duration-[.5s] z-50' ref={c}>
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
        const hert = useStore((state) => state.her)
        return (
                <ul className='flex *:cursor-pointer *:text-white *:text-[30px] *:lg:text-[22px] *:mx-2 items-center'>
                        <li className='relative'><i class="bi bi-heart"></i> <span className='w-[20px] h-[20px] bg-yel rounded-[50%] flex justify-center items-center absolute top-[-10px] right-[-10px] text-[16px]'>{hert}</span></li>
                        <Link href={'./cart'}><li><i class="bi bi-bag"></i></li></Link>
                        <li className='relative group'><i class="bi bi-person  text-[28px]"></i>
                                <ul className='group-hover:h-[100px] overflow-hidden bg-white transition-all duration-[.6s] absolute  w-[130px] h-0 shadow-ui left-[-100px]'>
                                        <li className='flex flex-wrap *:w-full p-2'>
                                                {/* <span className='text-black'>Hello</span> */}
                                                <Link href={'/login'} className='mt-5'><span className='text-black mt-5'>Log In <i class="bi bi-box-arrow-in-right ml-3"></i></span></Link>
                                        </li>
                                </ul>
                        </li>
                </ul>
        )
}
function Ull() {
        return (
                <ul className='hidden lg:flex *:cursor-pointer *:text-white *:text-[22px] *:mx-6  items-center'>
                        <Link href='./'><li className='hover:text-yel hover:border-b-2 hover:border-yel'>Home</li></Link>
                        <Link href='./about'><li className='hover:text-yel hover:border-b-2 hover:border-yel'>About</li></Link>
                        <Link href='./catalog'><li className='hover:text-yel hover:border-b-2 hover:border-yel'>Catalog</li></Link>
                        <Link href='./brands'><li className='hover:text-yel hover:border-b-2 hover:border-yel'>Brands</li></Link>
                        <li className='hover:text-yel hover:border-b-2 hover:border-yel'>Contact</li>
                        <Link href='./login'><li className='hover:text-yel hover:border-b-2 hover:border-yel'>Login</li></Link>
                </ul>
        )
}