import Image from 'next/image'
import React from 'react'
import about from '../../public/deve.jpg'

export default function About() {
    return (
        <>
            <div className=' py-28' >
                <div className=' max-w-7xl mx-auto my-0 py-0  px-4 ' id='about'>
                    <div className=' text-center '>
                        <h1 className=' font-semibold lg:text-5xl md:text-4xl text-[22px] sm:text-2xl pb-12 lg:pb-24'>Crafting clean, efficient code <br /> to bring your ideas to life. </h1>
                    </div>

                    <div className='flex items-center flex-col lg:flex-row gap-6'>
                        <div className='flex-1 '>
                            <Image src={about} height={400} width={500} alt={"about me"} className='rounded-lg mx-auto' />
                        </div>
                        <div className=' flex-1 text-center lg:text-start lg:px-0 px-2 sm:px-24'>
                            <p className='text-[16px] md:text-[19px] leading-[1.3]  '> hi! I am Abdur Rehman, a Self-motivated software engineering student with a passion for making stunning websites using cutting-edge technology. I specialize in front-end development using HTML, CSS, and JavaScript. In addition, I am experienced in using popular front-end frameworks such as Next.js and React.js to create responsive and dynamic user interfaces. With a strong focus on clean and efficient code, I strive to deliver high-quality solutions that meet the needs of my clients</p>


                            <button className=' text-xl bg-cyan-400  hover:bg-cyan-600 duration-500  py-2 px-8 rounded-lg mt-4 font-semibold  text-white   hover:text-white'> Get In Touch</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
