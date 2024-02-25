import React, { useState, useEffect } from 'react';
import useStore from './../../catalog/zustand/store';
import Link from 'next/link';

export default function CartRight() {
        return (
                <section className='w-full pl-3 lg:w-[35%] bg-white h-[420px] pb-10 shadow-ui mt-4 lg:ml-5 flex flex-wrap content-start py-5'>
                        <Org />
                </section>
        );
}

function Org() {
        const [isClient, setIsClient] = useState(false);
        useEffect(() => {
                setIsClient(true);
        }, []);

        let selectop = [];
        let mylocal = [];
        const [inp, setInp] = useState();
        let sum = 0;

        if (typeof window !== 'undefined') {
                mylocal = JSON.parse(localStorage.getItem('myProducts2')) || [];
                selectop = JSON.parse(localStorage.getItem('myProducts2')) || [];

                for (let i = 0; i < selectop.length; i++) {
                        let t = Number(selectop[i].price);
                        sum = sum + t;
                }
        }

        return (
                <div className='w-full flex flex-wrap px-3'>
                        {isClient ? (
                                <>
                                        <h4 className='text-[17px] text-black font-semibold mb-2'>Discount Code:</h4>
                                        <div className='w-full flex flex-wrap border-b border-gray-300 pb-5'>
                                                <div className='w-full flex'>
                                                        <input
                                                                className='text-black w-[70%] h-[50px] text-[20px] pl-3 border border-gray-400 rounded-[5px]'
                                                                placeholder='Promo code'
                                                                type='text'
                                                                name=''
                                                                value={inp}
                                                                id=''
                                                                onChange={(e) => setInp(e.target.value)}
                                                        />
                                                        <button className='w-[110px] sm:w-[120px] h-[50px] bg-yel rounded-[10px] mx-1 sm:mx-3'>Apply</button>
                                                </div>
                                                <div className='w-full flex mt-2 text-[15px]'>
                                                        <span className='text-gray-500'>Recommended Code:</span>
                                                        <a className='text-blue-700 ml-2'>GREAT24 </a>
                                                </div>
                                        </div>
                                        <div className='w-full flex flex-wrap px-3 mt-5 border-b border-gray-300 pb-5'>
                                                <h4 className='text-[17px] text-black font-semibold mb-2'>Discount Code:</h4>
                                                <div className='w-full flex justify-between text-black text-[17px]'>
                                                        <span>Items:</span>
                                                        <span>{mylocal.length}</span>
                                                </div>
                                                <div className='w-full flex justify-between text-black text-[17px]'>
                                                        <span>Subtotal:</span>
                                                        <span>${sum}</span>
                                                </div>
                                        </div>
                                        <div className='w-full flex flex-wrap'>
                                                <button className='w-full mt-5 h-[50px] bg-yel rounded-[10px] mb-3'>Proceed to Checkout</button>
                                                <Link href={'./catalog'}>
                                                        <span className='cursor-pointer text-blue-700 '>Continue Shopping</span>
                                                </Link>
                                        </div>
                                </>
                        ) : (
                                ''
                        )}
                </div>
        );
}
