"use client"
import React from 'react'
import { Icon } from '@iconify/react';

const Objective = () => {
  return (
    <div className='md:mt-4 md:mb-4'>
        <h1 className='text-center text-[#82B440] text-2xl font-semibold py-4'>Our Objectives</h1>
        <p className='text-center py-4'>
        To establish and promote sustainable Agriculture & waste management practices that fosters development & reduce the environmental negative impacts.
        </p>
        <div className='flex flex-col md:flex-row md:justify-center md:py-6'>
            <div className='md:w-1/2 text-center md:mx-10 md:space-y-4 md:py-4'>
                <div className='flex'>
                <Icon icon="bi:pen-fill" color='#82B440' width={50} height={50} />
                <p>
                We are commited to write more suistainable agriculture & waste  solution stories in the future.
                </p>
                </div>
                <div className='flex'>
                <Icon icon="game-icons:inspiration" color='#82B440' width={50} height={50} />
                <p>
                We inspired to reach new level of agriculture & waste management together with our communities.
                </p>
                </div>
            </div>
            <div className='md:w-1/2 text-center mx-8 bg-[#82B440] text-white md:py-6 rounded-2xl'>
                <h1 className='underline text-xl font-bold'>Sustainable Waste Management</h1>
                <p className='text-center md:mx-4'>
                Our  core objective of promoting sustainable waste management practices. Sustainable waste management refers to the responsible and environmentally conscious handling of waste, which aims to reduce its negative impact on the environment, society, and economy. 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Objective