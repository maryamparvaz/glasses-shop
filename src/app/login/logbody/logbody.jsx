
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import useStore from '@/app/catalog/zustand/store';
export default function logbody() {
        const user2 = useStore((state) => (state.user1))
        const [data, setData] = useState()
        const c = useRef()
        const d = useRef()
        const formik = useFormik({
                initialValues: {
                        email: '',
                        firstName: ''
                },
                validationSchema: Yup.object({
                        firstName: Yup.string()
                                .max(15, 'Must be 15 characters or less')
                                .required('Required'),
                        email: Yup.string().email('Invalid email address').required('Required'),
                }),
                onSubmit: values => {
                        alert(JSON.stringify(values, null, 2));
                },
        });
        useEffect(() => {
                fetch('https://65be4b4adcfcce42a6f22ed4.mockapi.io/login', {
                        method: 'GET',
                        headers: { 'content-type': 'application/json' },
                }).then(res => {
                        if (res.ok) {
                                return res.json();
                        }
                        // handle error
                }).then(tasks => setData(tasks))
                        .catch(error => {
                                // handle error
                        })
        }, [])

        function check() {
                data && data.map((val) => {
                        if ((val.email == formik.values.email) && (val.firstname == formik.values.firstName)) {
                                c.current.style.display = 'flex'
                                d.current.style.display = 'none'
                                user2.innerText = val.firstname;

                        } else {
                                d.current.style.display = 'flex'
                                c.current.style.display = 'none'
                        }

                })
        }
        return (
                <section className='w-full flex flex-wrap h-[100vh] mt-[100px] relative'>
                        <h2 className='text-[30px] md:text-[40px] text-black font-light ml-5 mt-10'>LOGIN</h2>
                        <div className='w-full h-[80%] bg-gr md:bg-white'>
                                <Image
                                        src={'/log.jpg'}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        className='w-full hidden md:flex h-[85%] object-cover object-center absolute bottom-0'
                                        alt='Mountains'
                                />
                                <div className='absolute flex flex-wrap w-full lg:w-[40%] pl-10 top-[50%] translate-y-[-50%]'>
                                        <div ref={c} className='w-full h-[45px] bg-green-100 mb-3 items-center px-3 hidden'>
                                                <i class="bi bi-check2-square text-[25px] text-green-800 "></i>
                                                <span className='text-[20px] text-black ml-3'>Log In Successful.</span>
                                        </div>
                                        <div ref={d} className='w-full h-[45px] bg-red-100 mb-3 items-center px-3 hidden '>
                                                <i class="bi bi-x-octagon text-[25px] text-red-600 "></i>
                                                <span className='text-[20px] text-black ml-3'>This user is not registered in the system</span>
                                        </div>
                                        <form onSubmit={formik.handleSubmit}>
                                                <input id="firstName"
                                                        name="firstName"
                                                        type="text"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.firstName}
                                                        className='w-[80%] text-black my-2 rounded-[20px] h-[45px] pl-3 border border-gray-400 outline-none'
                                                        placeholder='FirstName / admin' />
                                                {formik.touched.firstName && formik.errors.firstName ? (
                                                        <div>{formik.errors.firstName}</div>
                                                ) : null}


                                                <input id="email"
                                                        name="email"
                                                        type="email"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.email}
                                                        tooltip='me'
                                                        className='w-[80%] text-black my-2 rounded-[20px] h-[45px] pl-3 border border-gray-400 outline-none' placeholder='Email / admin' />
                                                {formik.touched.email && formik.errors.email ? (
                                                        <div>{formik.errors.email}</div>
                                                ) : null}
                                        </form>
                                        <button type="submit" onClick={check} className='w-[160px] h-[40px] font-medium text-[20px] rounded-[20px] bg-yel mt-5'>Log in</button>
                                        <div className='w-full mt-5 flex flex-wrap'>
                                                <span className='text-[20px] ml-3 cursor-pointer text-gray-400'>Do Not Have Any Account?</span>
                                                <Link href={'./signUp'}><button className='font-medium text-[20px] rounded-[20px] ml-2 text-yel underline'>Sign Up</button></Link>
                                        </div>
                                </div>
                        </div>
                </section>
        )
}
