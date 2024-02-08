"use client"
import React from 'react'
import { mission } from '../constants'

const Mission = () => {
  return (
    <div data-aos='fade-up'>
        <h1 className='text-center text-2xl py-8 font-bold'>Mission & <span className='text-[#82B440]'>Vision</span></h1>
        <p className='text-center py-2 px-8 text-lg'>
        Our mission is to change the current agricultural practises in Africa , into organic farming methods,making the societies adapt the suitainable farming practises .
Our vission is to be leading  , the agricultural indutry and waste management indutry in Africa.
        </p>

        <div className='flex justify-center items-center'>
            <div className='grid md:grid-cols-3  gap-4 mx-8 py-10'>
                
                    {mission.map((item)=>(
                        <div key={item.title} className='bg-gray-50 shadow-md py-8  mx-2 flex flex-col gap-6' data-aos='zoom-out-left' data-aos-duration='3000'>
                            <div className='flex justify-center items-center'>
                                {item.icon}
                            </div>
                            <h1 className='text-center mx-4 underline underline-offset-8'>{item.title}</h1>
                            <p className='text-center mx-4'>
                                {item.message}
                            </p>
                        </div>
                    ))}
                
            </div>
        </div>
    </div>
  )
}

export default Mission