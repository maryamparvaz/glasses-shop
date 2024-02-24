import React, { useEffect } from 'react'
import Image from 'next/image'
import useStore from '../zustand/store'
import Link from 'next/link'
export default function Minicart() {
        return (
                <div className='w-full overflow-hidden md:w-[40%] right-0 top-0 bg-gri1 h-[100vh] fixed z-50'>
                        <Closcart />
                        <div className='w-full flex flex-wrap justify-center'>
                                <Cartitem />
                                <Viewcart />
                        </div>
                </div>
        )
}
function Cartitem() {
        const op = useStore((state) => state.oppen)
        const tx = useStore((state) => state.txt)
        return (
                <div className='w-full flex px-5 items-center mt-10'>
                        <Image
                                src={op}
                                alt='refresh the page'
                                width={200}
                                height={100}
                                className='rounded-[20px]'
                        />
                        <div className='ml-3 text-black text-[22px]'>
                                <span>{ tx}</span>
                                <span className='ml-2'>added to cart</span>
                        </div>
                </div>
        )
}
function Closcart() {
        const ser = useStore((state) => state.selectt)
        function clos() {
                ser.style.display = 'none'
        }
        return (

                <div className='w-full flex justify-end pr-5 pt-5'><i onClick={clos} class="bi bi-x-octagon text-red-600 text-[30px] cursor-pointer"></i></div>
        )
}
function Viewcart() {
        return (
                <Link className='w-[70%] h-[60px]' href={'./cart'}><span className='w-full h-full cursor-pointer text-black flex justify-center items-center text-[25px] border border-gray-400 mt-16'>View Cart</span></Link>

        )
}


