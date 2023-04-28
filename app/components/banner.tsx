import Image from 'next/image'
import React from 'react'
import profile from '../../public/profile.png'



export default function Banner() {
  return (

    <div className=' relative   pre'>
      <div className='flex flex-col gap-10 lg:gap-6 lg:flex-row  max-w-7xl lg:pt-[250px] pt-[130px]  mx-auto py-0 lg:pb-[0px] pb-[50px] px-4 justify-center items-center'>
        <div className='flex-1 '>
          <Image src={profile} height={500} width={400} alt="profile" className='mx-auto w-full lg:w-1/2' />

        </div>
        <div className='flex-1 text-center lg:text-start '>
          <p id="typewriter"></p>

          <h3 className=' text-3xl  #607d8bde  lg:pb-4 md:pb-2'>Hi!</h3>
          <h1 className=' lg:text-7xl text-5xl '>I’m a Creative <br/> <span className=' text-cyan-400'>Designer</span></h1>
          <h1 className=' lg:px-0 px-4 md:px-36 pt-6 lg:text-[40px]  text-[20px]  leading-[1.1]'>Turning your vision into a reality with innovative and seamless web development solutions. <br />
            {/* Dedicated to delivering exceptional web solutions */}
          </h1>


        </div>
      </div>
    </div>
  )
}

