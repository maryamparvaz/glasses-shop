"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import { space } from 'postcss/lib/list';
import useStore from './../zustand/store';
import Minicart from './minicart';
// let sel = 0
export default function catalog2() {
        const [data, setData] = useState();
        const { perpage, updateUser, updateUser4, updateUser5, updateUser6, updateUser7, updateUser8 } = useStore();
        const pag = useStore((state) => state.pagi)
        const w = useRef()
        const ser = useStore((state) => state.search)
        const f = useRef()
        const [vals, setVals] = useState(10)
        useEffect(() => {
                updateUser4(f.current)
                const url = new URL('https://65be4b4adcfcce42a6f22ed4.mockapi.io/pro');
                url.searchParams.append('page', pag);
                url.searchParams.append('limit', vals);
                fetch(url, {
                        method: 'GET',
                        headers: { 'content-type': 'application/json' },
                }).then(res => {
                        if (res.ok) {
                                return res.json();
                        }
                        // handle error
                }).then(tasks => {
                        setData(tasks)
                        // mockapi returns first 10 tasks that are not completed
                }).catch(error => {
                        // handle error
                })
                updateUser(vals)
        }, [vals, pag]);
        useEffect(() => {
                const url = new URL('https://65be4b4adcfcce42a6f22ed4.mockapi.io/pro');
                url.searchParams.append('page', pag);
                url.searchParams.append('limit', vals);
                url.searchParams.append('name1', ser);

                fetch(url, {
                        method: 'GET',
                        headers: { 'content-type': 'application/json' },
                }).then(res => {
                        if (res.ok) {
                                return res.json();
                        }
                        // handle error
                }).then(tasks => {
                        setData(tasks)
                        // mockapi returns first 10 tasks that are not completed
                }).catch(error => {
                        // handle error
                })
                // updateUser(vals)
        }, [ser]);
        const [glasess, setGlasess] = useState([])
        const [glasess2, setGlasess2] = useState([])
        function openmini(e) {
                f.current.style.display = 'block'
                updateUser5(e.target.parentElement.parentElement.children[0].getAttribute('data-sr'), e.target.parentElement.parentElement.children[1].innerText)
                glasess.push(e.target.getAttribute('data-id'))
                setGlasess2(...glasess)
                updateUser6(glasess)
                const newItem = {
                        img: e.target.parentElement.parentElement.children[0].getAttribute('data-sr'),
                        name: e.target.parentElement.parentElement.children[1].innerText,
                        name2: e.target.parentElement.previousElementSibling.innerText,
                        price: e.target.parentElement.getAttribute('data-price'),
                        id: e.target.getAttribute('data-id'),
                }
                if (typeof window !== 'undefined') {
                        if (newItem.img != undefined) {
                                let flag = 0
                                let myLocal = localStorage.getItem('myProducts2')
                                let db = []
                                if (myLocal != null) {
                                        let localStorageContent = JSON.parse(localStorage.getItem('myProducts2'))
                                        localStorageContent.map((val) => {
                                                db.push(val)
                                        })
                                        db.map((v) => {
                                                if (v.id == newItem.id) {
                                                        flag++
                                                }
                                        })
                                        if (flag == 0) {
                                                db.push(newItem)
                                        }
                                        localStorage.setItem('myProducts2', JSON.stringify(db))

                                } else {
                                        db.push(newItem)
                                        localStorage.setItem('myProducts2', JSON.stringify(db))
                                }
                        }
                }
        }
        return (
                <>
                        <section ref={w} className='w-full flex flex-wrap justify-center lg:justify-normal min-h-[100vh]'>
                                {
                                        data && data.map((val) => {
                                                return (
                                                        <div className='w-[400px] flex flex-wrap text-black *:w-full *:flex *:justify-center m-5 p-4 pb-6  hover:shadow-ui'>
                                                                <figure data-sr={val.img} className='w-full' >
                                                                        <Image
                                                                                src={val.img}
                                                                                alt="Picture of the author"
                                                                                width={1400}
                                                                                height={800}

                                                                        />
                                                                </figure>
                                                                <span className='mt-6 mb-2 font-thin text-[19px]'>{val.name1}</span>
                                                                <span className='text-[16px] font-bold'>{val.name2}</span>
                                                                <div data-price={val.price} className='mt-5 flex  items-center *:justify-center '>
                                                                        <span data-id={val.id} onClick={openmini} className='ml-4 text-[17px] hover:text-yel cursor-pointer'>Add To Cart</span>
                                                                        <i class="bi bi-arrow-right ml-4 text-[19px]"></i>
                                                                </div>
                                                        </div>
                                                )

                                                // }
                                        })
                                }
                                <div className='w-full flex justify-around my-10 h-[50px]'>
                                        <div className=' flex items-center text-black *:mx-2 text-[18px] *:md:mx-3 *:md:text-[20px]'>
                                                <span>Show</span>
                                                <select onChange={(e) => { setVals(e.target.value) }} className='w-[50px] h-[40px] md:h-[50px] md:w-[110px] px-1 md:px-3 text-[22px] border border-gray-300 rounded-[20px]' name="" id="">
                                                        <option value="10">10</option>
                                                        <option value="20">20</option>
                                                        <option value="30">30</option>
                                                        <option value="40">40</option>
                                                        <option value="50">all</option>
                                                </select>
                                                <span>Per Page</span>
                                        </div>
                                        <Pagination per={vals} />
                                </div>
                        </section>
                        <div ref={f} className='w-full hidden transition-all duration-[1s] overflow-hidden md:w-[40%] right-0 top-0 bg-gri1 h-[100vh] fixed z-50'><Minicart /></div>
                </>
        )
}
// pagination
function Pagination() {
        const [pages, setPages] = useState(50)
        const [pages2, setPages2] = useState([])
        const { updateUser2 } = useStore();
        const r = pages / 10
        const per = useStore((state) => state.perpage)
        const pag = useStore((state) => state.pagi)
        const c = useRef()
        useEffect(() => {
                if (per == '50') {
                        c.current.style.display = 'none'
                } else if (per == '40' || per == '30') {
                        c.current.style.display = 'flex'
                        c.current.children[0].style.display = 'flex'
                        c.current.children[1].style.display = 'flex'
                        c.current.children[2].style.display = 'none'
                        c.current.children[3].style.display = 'none'
                        c.current.children[4].style.display = 'none'
                } else if (per == '20') {
                        c.current.style.display = 'flex'
                        c.current.children[0].style.display = 'flex'
                        c.current.children[1].style.display = 'flex'
                        c.current.children[2].style.display = 'flex'
                        c.current.children[3].style.display = 'none'
                        c.current.children[4].style.display = 'none'
                } else if (per == '10') {
                        c.current.style.display = 'flex'
                        c.current.children[0].style.display = 'flex'
                        c.current.children[1].style.display = 'flex'
                        c.current.children[2].style.display = 'flex'
                        c.current.children[3].style.display = 'flex'
                        c.current.children[4].style.display = 'flex'
                }
        }, [per])
        for (let i = 0; i < r; i++) {
                pages2.push('test')
                setPages(...pages2)
        }
        function num(e) {
                updateUser2(e.target.innerText)
        }
        return (
                <div ref={c} className='flex h-[50px] items-center'>{
                        pages2 && pages2.map((val, ic) => {
                                return (
                                        <span onClick={num} className='w-[30px] h-[30px] cursor-pointer text-[20px] md:w-[40px] md:h-[40px] flex justify-center items-center text-gray-400 md:text-[25px] border border-gray-400 rounded-[50%] mx-1'>{ic + 1}</span>
                                )
                        })
                }
                </div>
        )
}

