import React from 'react'
import { ImLocation } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
export default function Contact() {
    return (
        <div className='pre' id='contact'>
            <div className='  max-w-6xl mx-auto py-[100px] px-4 my-0 '>
                <div className=' text-center'>
                    <h1 className=' font-semibold text-[30px] sm:text-[40px]  pb-16'>LET’S TRANSFORM YOUR ONLINE BUSINESS</h1>
                </div>
                <div className=' flex shadow-2xl flex-col sm:flex-row  bg-white'>
                    <div className='flex-1 pl-16 py-[65px] '>
                        <div>
                            <h1 className='text-2xl sm:text-3xl'>Send me a message </h1>
                            <div>
                                <form action="">
                                    <input type="text" required placeholder=' Your Name' className='py-6 w-2/3 mb-3  f-border' /> <br />
                                    <input type="email" required placeholder=' Your Email' className='py-6 w-2/3  mb-3 f-border' /> <br />
                                    <input type="number" minLength={9} maxLength={11} placeholder='Your Phone' className='py-6   w-2/3 mb-3 f-border' required /> <br />

                                    <input type="text" placeholder=' Your Message' className='py-6 w-2/3 mb-3  f-border  ' />
                                    <div className=' mt-3 '>
                                        <a href="">
                                            <input type="button" value="Send Message" className='  py-[10px] px-4 bg-cyan-200   rounded-md' />
                                            </a>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                    <div className='flex-1 pl-16 py-[65px]'>
                        <div>
                            <h1 className=' pb-6 text-2xl sm:text-3xl'>Contact Me</h1>
                            <p className=' py-5'>I’m available for new projects and collaborations</p>
                            <div>
                                <div className='py-5'>
                                    <a href="https://goo.gl/maps/Lp915Cv8hhgeTHs4A" className='flex items-center'>
                                        <ImLocation className=' svg-border p-2 text-4xl hover:bg-cyan-300 duration-500' />
                                        <p className=' pl-4'><strong>Address:</strong> Bahria Auditorium street 11 Block G, <br className=' hidden lg:flex' />  karachi</p>
                                    </a>
                                </div>
                                <div className=' py-5'>
                                    <a href="tel:+92-0000-000000" className='flex items-center'>
                                        <IoIosCall className=' svg-border p-2 text-4xl hover:bg-cyan-300 duration-500' />
                                        <p className=' pl-4'><strong>Phone:</strong> +92-000-0000001</p>
                                    </a>
                                </div>
                                <div className=' py-5'>
                                    <a href="mailto:abdure83@gmail.com" className='flex items-center'>
                                        <MdEmail className=' svg-border p-2 text-4xl hover:bg-cyan-300 duration-500' />
                                        <p className=' pl-4'><strong>Email:</strong> info@yoursite.com</p>
                                    </a>
                                </div>
                            </div>
                            <div className='flex gap-5 pt-5'>
                                <a href="https://www.linkedin.com/" target={'blank'}> <AiFillLinkedin className=' hover:bg-cyan-300 duration-500 svg-border p-2 text-4xl' /> </a>
                                <a href="https://www.github.com/" target={'blank'}> <AiFillGithub className='hover:bg-cyan-300 duration-500  svg-border p-2 text-4xl' /> </a>
                                <a href="https://www.twitter.com/" target={'blank'}> <AiFillTwitterCircle className='hover:bg-cyan-300 duration-500  svg-border p-2 text-4xl' /> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
