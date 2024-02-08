"use client"
import React from 'react'
import { Icon } from '@iconify/react';

const Objective = () => {
  return (
    <div className='mt-10 md:mb-4 py-8' data-aos='fade-up'>
        <h1 className='text-center text-[#82B440] text-3xl font-semibold py-2'>Our Objectives</h1>
        <p className='text-center mx-4 text-lg'>
        To establish and promote sustainable Agriculture & waste management practices that fosters development & reduce the environmental negative impacts.
        </p>
        <div className='flex flex-col gap-8 md:flex-row md:justify-center md:py-6'>
            <div className='flex flex-col gap-8 space-y-4 mx-4 py-4 text-lg'>
                <div className='flex mx-4 gap-4'>
                <Icon icon="bi:pen-fill" color='#82B440' width={50} height={50} />
                <p>
                We are commited to write more suistainable agriculture & waste  solution stories in the future.
                </p>
                </div>
                <div className='flex mx-4 gap-4'>
                <Icon icon="game-icons:inspiration" color='#82B440' width={50} height={50} />
                <p>
                We inspired to reach new level of agriculture & waste management together with our communities.
                </p>
                </div>
            </div>
            <div className='md:w-1/2 text-center mx-4 py-8 bg-[#82B440] text-white md:py-6 rounded-2xl'>
                <h1 className='underline text-xl font-bold mt-2'>Sustainable Waste Management</h1>
                <p className='text-center mx-2'>
                Our  core objective of promoting sustainable waste management practices. Sustainable waste management refers to the responsible and environmentally conscious handling of waste, which aims to reduce its negative impact on the environment, society, and economy. 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Objective