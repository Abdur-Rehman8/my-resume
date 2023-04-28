import React from 'react'
import {BsGithub,BsLinkedin,BsTwitter} from 'react-icons/bs'

export default function Social() {
  return (
    <div className=' absolute top-96'>
        <div>
            <a href="https://www.github.com" className=''>
                <div className='flex w-32 bg-cyan-300  justify-evenly items-center h-12 p-2 hover:-ml-2 mb-2  duration-300  -ml-[87px] rounded-r-lg rounded-l-lg'>
                    <h3 className=' text-2xl font-medium'>Github</h3>
                    <BsGithub className=' text-2xl'/>
                </div>
            </a>
            <a href="https://www.linkdin.com" className=''>
                <div className='flex w-32  bg-cyan-300   justify-evenly items-center h-12 p-2 hover:-ml-2 mb-2  duration-300  -ml-[87px] rounded-r-lg rounded-l-lg'>
                    <h3 className=' text-2xl font-medium'>Linkdin</h3>
                    <BsLinkedin className=' text-2xl'/>
                </div>
            </a>
            <a href="https://www.twitter.com" className=''>
                <div className='flex w-32  bg-cyan-300   justify-evenly items-center h-12 p-2 hover:-ml-2  duration-300  -ml-[87px] rounded-r-lg rounded-l-lg'>
                    <h3 className=' text-2xl font-medium'>Twitter</h3>
                    <BsTwitter className='   text-2xl   text-black'/>
                </div>
            </a>
        </div>
    </div>
  )
}
