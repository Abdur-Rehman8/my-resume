"use client"

import Image from 'next/image'
import React from 'react'
import responsive from '../../public/responsive.png'
import { service } from '../components/databse'
import Accordion from '../components/acc';
import { IoMdAdd } from "react-icons/io";

export default function Services() {
  return (
    <>
      <div className='py-[100px]' id='services'>
        <div className=' max-w-7xl mx-auto my-0 py-0 px-4 md:px-8  xl:px-4'>
          {service.map((ins) =>

            <div className=' ' key={ins.id}>
              <div className=' pr-[50px] md:pr-[300px] lg:pr-[600px]'>
                <h1 className='  text-4xl sm:text-5xl lg:text-6xl font-semibold sm:pb-10 pb-0  uppercase'>{ins.mainHead}</h1>

              </div>
             
              <div className='flex  lg:flex-row flex-col   pb-32'>
                <div className='flex-1 lg:order-1 order-2 '>
                  <div className=' pr-0 lg:pr-[72px]'>

                    <h3 className=' text-xl lg:text-2xl pb-6'>{ins.headText}</h3>
                    <div>
                      <div>


                        <Accordion title={ins.subHead1}>

                          <p className=' text-lg pb-2' >{ins.subText1}</p>
                        </Accordion>
                        {/* <h1 className=' text-3xl font-semibold pb-5'>{ins.subHead1}</h1>
                        <p className=' text-lg' >{ins.subText1}</p> */}
                      </div>
                      <div>
                        <Accordion title={ins.subhead2}>
                          <p className='text-lg'>{ins.subtext2}</p>
                        </Accordion>


                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex-1 lg:-mt-20 mt-0 lg:order-2 order-1 '>
                  <Image src={ins.image} height={300} width={600} alt='responsive design' className='pl-0 lg:pl-8 mx-auto py-5 lg:py-0  grew w-[500px] lg:w-full' />
                </div>

              </div>
            </div>
          )}

        </div>
      </div>





    </>
  )
}

// function HomePage() {
//   return (
//     <div>
//       <h1>Accordion Example</h1>
//       <Accordion title="Section 1">
//         <p>Section 1 Content</p>
//       </Accordion>
//       <Accordion title="Section 2">
//         <p>Section 2 Content</p>
//       </Accordion>
//       {/* Add more accordion sections */}
//     </div>
//   );
// }
// export default HomePage;

