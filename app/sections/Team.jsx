"use client"
import React from 'react'
import { team } from '../constants'
import Image from 'next/image'

const Team = () => {
  return (
    <div id='team' className='py-16'>
        <h1 className='text-center text-3xl text-[#82B440]'>Our Team</h1>
        <p className='text-center text-gray-950 text-xl py-2'>
        They work Relentlessly
        </p>

        <div className='flex justify-center items-center'>
            <div className='grid md:grid-cols-12 md:gap-4 text-center'>
                {
                    team.map((item)=>(
                        <div key={item.name} className='col-span-3 border rounded-lg py-10 px-10 '>
                             <h1 className='text-lg uppercase'>{item.name}</h1>
                            <Image src={item.image} width={200} height={70} alt='' className='rounded-full overflow-hidden'/>
                           
                            <p>
                                {item.profesion}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Team