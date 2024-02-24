import React from 'react'
import Image from 'next/image'
import U from './../../imgs/41.png'
import L from './../../imgs/40.png'
import N from './../../imgs/42.png'
import P from './../../imgs/43.png'
export default function page6() {
        return (
                <section className='w-full bg-white p-6 pt-[150px] 2xl:pt-[200px]' >
                        <div className='w-full h-[50px] flex relative mb-16'>
                                <h3 className='text-[35px] absolute z-10 text-black'>PARTNERS</h3>
                                <div className='w-[160px] h-[20px] bg-gri absolute left-0 z-0 bottom-0'></div>
                        </div>
                        <Fig />
                </section>
        )
}
function Fig() {
        return (
                        <div className='w-full flex flex-wrap md:flex-nowrap justify-evenly *:mx-10 *:md:mx-3 *:my-4 *:md:my-0 md:mb-[80px]'>
                                <Image
                                        src={U}
                                        alt="Picture of the author"
                                        width={130}
                                        height={130}
                                />
                                <Image
                                        src={L}
                                        alt="Picture of the author"
                                        width={130}
                                        height={130}
                                />
                                <Image
                                        src={P}
                                        alt="Picture of the author"
                                        width={130}
                                        height={130}
                                />
                                <Image
                                        src={N}
                                        alt="Picture of the author"
                                        width={130}
                                        height={130}
                                />

                        </div>
                
        )
}
