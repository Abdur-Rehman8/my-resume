"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";



export default function Header() {
    const [toggle, settoggle] = useState(true)
    return (

        <div className='flex   lg:px-16 px-4  lg:justify-evenly justify-between  items-center py-2 w-full   absolute z-[1]'>

            <div className=' flex items-center'>
                <div ><Image src={'/ar.png'} width={70} height={70} alt="panaverse logo" />  </div>
                <div>
                    <ul className='lg:flex hidden space-x-6 text-lg font-semibold items-center   pl-10'>
                        <li className=' hover:text-cyan-400 duration-200   font-medium  uppercase  text-black'><a href={'/'}>Home</a></li>
                        <li className=' hover:text-cyan-400 duration-200  font-medium  uppercase  text-black'> <a href={'/#about'}>About</a></li>
                        <li className=' hover:text-cyan-400 duration-200  font-medium  uppercase  text-black'> <a href={'/#services'}>Services</a></li>
                        <li className='  hover:text-cyan-400 duration-200  font-medium  uppercase  text-black'> <a href="/#projects">projects</a></li>

                    </ul>
                </div>
            </div>


            <div className='lg:block hidden'>
                <a href='/#contact' className='bg-cyan-400   hover:bg-cyan-600 duration-500 px-12 py-[0.7rem] rounded-sm  uppercase  text-base hover:text-white   text-white font-semibold'>Contact</a>
            </div>




            <div className='relative flex lg:hidden  text-2xl  text-black   z-10' onClick={() => {
                settoggle(!toggle)
                console.log(toggle)
            }}  >
                {toggle ? <  GiHamburgerMenu size={34} /> : <RxCross2 size={34} className=' text-white   relative z-20' />}
                 {/* side bar starts */}
                {!toggle ?
                <div className=' fixed top-0 left-0 bg-black  h-screen w-full justify-center items-center flex'>
                    <ul className=' text-lg font-semibold items-center  '>
                        <li className=' hover:text-blue-600  font-medium pb-2  uppercase  sm:text-5xl text-3xl   text-white'><a href={'/'}>Home</a></li>
                        <li className=' hover:text-blue-600  font-medium  pb-2 uppercase  sm:text-5xl text-3xl  text-white'><a href={'/#about'}>About</a></li>
                        <li className=' hover:text-blue-600  font-medium pb-2  uppercase  sm:text-5xl text-3xl  text-white'><a href={'/#services'}>Services</a></li>
                        <li className=' hover:text-blue-600  font-medium pb-2  uppercase  sm:text-5xl text-3xl  text-white'><a href={'/#projects'}>projects</a></li>
                    </ul>
                </div> : null}
            </div>
           

        
        </div>

    )
}
