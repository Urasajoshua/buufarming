"use client"
import React from 'react'
import { aboutItem } from '../constants'

const About = () => {
  return (
    <div id='about' className='py-16'>
         
    <div>
      <h1 className='text-center text-[#82B440] text-3xl py-6 font-medium'>
      Who We are?
      </h1>
      <p className='text-center md:mx-24 md:py-6'>
      BUU FARM is a forward-thinking and environmentally conscious entity dedicated to transform organic farming & transforming waste into valuable resources. Founded with a passion for making a positive impact, we have evolved into a trusted partner in fostering a greener and healthier world.
      </p>
      
      <div className='py-14 bg-[#82B440] text-white md:space-y-4'>
      <h1 className='text-center text-3xl font-medium underline-offset-auto'>History & Overview</h1>
      <p className='items-center justify-center flex'>
      The farm started as a series of researches on how to use the BSF to solve the environmental waste agricultural problems
      </p>
      <h1 className='text-4xl font-bold text-black text-center'>2022</h1>
      <p className='text-center'>
      Started with research and enginering developments.
      </p>
      <h1 className='text-4xl font-bold text-black text-center'>2023</h1>
      <p className='text-center'>
      Completed with composting and Black soldier fly production research
      </p>

      <h1 className='text-4xl font-bold text-black text-center'>3%</h1>
      <p className='text-center'>
      We are 3% done with our vision still we have 97% ahead of us
      </p>
      </div>

      <div>
        <h1 className='text-3xl text-center font-medium py-10 text-gray-950'>
        Our Priority is Protecting <span className='text-[#82B440] font-bold'>
          The Environment
        </span>
        </h1>

        <p className='text-center py-4 md:mx-24 text-lg'>
        “<span className='text-2xl text-gray-900 font-medium'>Buu farming</span> is much more than choosing not to use chemical pesticides, fertilizer and genetically modified organisms,  growth hormones and plant antibiotics. It is a wholesome method of relying on renewable materials, crop and livestock production for a healthy living!”
          </p>
      </div>
      <div className=''>
        <div className='flex flex-col mx-56 py-12'>
          {aboutItem.map((item)=>(
            <div key={item.icon} className='flex gap-4 py-6'>
             <div className='flex justify-center items-center'>
              {item.icon}
             </div>
             <div className='flex flex-col space-y-4'>
              <h1 className='text-xl text-gray-950 font-bold'>
                {item.title}
              </h1>
              <p className='w-1/2'>
                {item.message}
              </p>
             </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
    </div>
  )
}

export default About