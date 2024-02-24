import React from 'react'
import Image from 'next/image'
import Header from '@/app/pages/page1/header'
export default function about1() {
  return (
    <section className='w-full h-[100vh]'>
      <Header/>
      <div className='w-full'>
        <Image
        fill
        alt='Mountains'
        src='/10.jpg'
          sizes='100vw'
        className='object-cover relative z-[-9]'/>
        <h1 className='text-[50px] lg:text-[80px] font-light w-full flex justify-start items-center absolute top-[50%] translate-y-[-50%] pl-12'>OUR STORY.</h1>
      </div>
    </section>
  )
}
