import React, { useState } from 'react'
import Image from 'next/image'

export default function page8() {
        const [x, setX] = useState()
        function inp() { }
        return (
                <section className='bg-gri1 w-full flex flex-wrap justify-center p-32 pb-0'>
                        <div className='w-full flex justify-center'>
                                <div className='w-[500px] h-[50px] flex bg-white justify-between items-center pl-3'>
                                        <input className='text-black outline-none h-full' type="text" placeholder='Your E-mail' value={x} onChange={(e) => setX(e.target.value)} />
                                        <i className='bi bi-arrow-right text-black text-[22px] h-full flex items-center px-3 hover:bg-gray-700 hover:text-white'></i>
                                </div>
                        </div>
                        <Image
                                src="/8.png"
                                alt="Picture of the author"
                                width={730}
                                height={330}

                        />
                </section>
        )
}
