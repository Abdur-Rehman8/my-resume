import Image from 'next/image'
import React from 'react'
import panaverse from '../../public/panaverse-web.jpg'
import todo from '../../public/todo.jpg'
import { projects } from '../components/databse'

export default function Projects() {
    return (
        <>
            <div className=' pre py-[100px]' id='projects'>
                <div className=' max-w-7xl mx-auto my-0 py-0 px-4 grid  gap-16'>
                    {projects.map((ins) =>
                        <div className=' flex items-center  lg:flex-row flex-col  ' key={ins.id}>

                            <div className=' flex-1 md:px-24 px-8 lg:px-12 '>
                                <a href={ins.link} target={"_blank"}><Image src={ins.image} height={400} width={600} alt={"about me"} className=' hover:scale-110 duration-500   rounded-2xl'></Image> </a>

                            </div>
                            <div className='flex-1 text-center lg:pl-16 pl-0  '>
                                <h1 className=' font-semibold  pt-5 text-[24px]   md:text-[32px] lg:text-[40px] pb-4'>{ins.webHead}</h1>
                                <p className=' text-xl'>{ins.webText}</p>

                                <div className=' mt-5'>
                                    <a href={ins.link} target={'_blank'} className='  bg-cyan-200  hover:bg-cyan-400 duration-500 py-2 md:px-8 px-[24px]  rounded-xl hover:text-white   text-lg md:text-xl  '>
                                        Visit Website

                                    </a>

                                </div>

                            </div>

                        </div>
                    )}


                </div>
            </div>
        </>
    )
}
