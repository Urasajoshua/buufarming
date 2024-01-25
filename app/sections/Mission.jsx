"use client"
import React from 'react'
import { mission } from '../constants'

const Mission = () => {
  return (
    <div>
        <h1 className='text-center text-2xl py-8 font-bold'>Mission & <span className='text-[#82B440]'>Vision</span></h1>
        <p className='text-center py-2 md:px-24'>
        Our mission is to change the current agricultural practises in Africa , into organic farming methods,making the societies adapt the suitainable farming practises .
Our vission is to be leading  , the agricultural indutry and waste management indutry in Africa.
        </p>

        <div className='flex justify-center items-center'>
            <div className='grid md:grid-cols-3 md:mx-8 md:py-10'>
                
                    {mission.map((item)=>(
                        <div key={item.title} className='bg-gray-50 shadow-xl  md:mx-2 md:space-y-4'>
                            <div className='flex justify-center items-center -top-2'>
                                {item.icon}
                            </div>
                            <h1 className='text-center underline underline-offset-8'>{item.title}</h1>
                            <p className='text-center'>
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