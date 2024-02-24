"use client"
import Header3 from '@/app/cart/header/header3'
import Footer from '@/app/pages/footer/footer'
import React, { useEffect, useRef, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
export default function signall() {
  return (
    <main className='w-full bg-white min-h-[100vh]'>
      <Header3 />
      <section className='w-full flex flex-wrap items-center justify-center h-[90vh]'>
        <Formsign />
      </section>
      <Footer />
    </main>
  )
}
function Formsign() {
  const c =useRef()
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: ''
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastname: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      console.log('yes');
      c.current.style.display ='flex'
    },
  });
  function data() {
    if ((formik.errors.email != undefined)) {
      console.log('no');
    } else {
      const newTask = {
        firstname: formik.values.firstname,
        lastname: formik.values.lastname,
        email: formik.values.email
      }
      fetch('https://65be4b4adcfcce42a6f22ed4.mockapi.io/login', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newTask)
      }).then(res => {
        if (res.ok) {
          return res.json();
        }
      }).then(task => {
        // do something with the new task
      }).catch(error => {
        // handle error
      })
    }
  }
  return (
    <div className='w-full md:w-[600px] flex flex-wrap justify-center content-start px-4 mt-[100px]'>
      <div ref={c} className='w-full h-[70px] bg-green-100 mb-3 items-center px-3 hidden'>
        <i class="bi bi-check2-square text-[25px] text-green-800 "></i>
        <span className='text-[20px] text-black ml-3'>Sign Up Successful.</span>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <input className='w-full border my-2 border-yel p-3 text-[24px] outline-none text-black ' placeholder='First Name' id="firstname"
          name="firstname"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstname} />
        {formik.touched.firstname && formik.errors.firstname ? (
          <div className='text-red-600'>{formik.errors.firstname}</div>
        ) : null}
        <input className='w-full border my-2 border-yel p-3 text-[24px] outline-none text-black ' type="text" id="lastname"
          name="lastname"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastname} placeholder='Last Name' />
        {formik.touched.lastname && formik.errors.lastname ? (
          <div className='text-red-600'>{formik.errors.lastname}</div>
        ) : null}
        <input className='w-full border my-2 border-yel p-3 text-[24px] outline-none text-black '
          type="text" id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email} placeholder='Email' />
        {formik.touched.email && formik.errors.email ? (
          <div className='text-red-600'>{formik.errors.email}</div>
        ) : null}
        <div className='w-full flex justify-center mt-3'><button onClick={data} type="submit" className='w-[190px] h-[60px] bg-yel text-[20px] '>Sign up</button></div>
      </form>
      <span className='text-black mt-5'>Have An Account? <Link href={'/login'}><span className='cursor-pointer underline text-blue-600'>Log In</span></Link></span>
    </div>
  )
}
