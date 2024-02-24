'use client'
import React, { useEffect, useState } from 'react'
import  useStore  from './../zustand/store'
export default function headercatalog() {
        const {updateUser3 } = useStore();
        const [x, setX] = useState()
        useEffect(() => {
                updateUser3(x)
        },[x])
        return (
                <section className='w-full  mt-[120px] h-[100px] bg-gri1 flex justify-between md:justify-around px-4 md:px-10 md:pr-16 items-center'>
                        <h2 className='text-[30px] md:text-[40px] text-black font-light '>CATALOG</h2>
                        <div className='w-full flex justify-end'>
                                <div className='w-[250px] md:w-[500px] h-[50px] flex bg-white justify-between rounded-[20px] items-center pl-3'>
                                        <input className='w-[90%] text-black outline-none h-full' type="text" placeholder='Model Number' value={x} onChange={(e) => setX(e.target.value)} />
                                        <i className='bi bi-search text-black text-[22px] h-full flex items-center px-3 hover:bg-gray-700 hover:text-white'></i>
                                </div>
                        </div>
                </section>
        )
}
