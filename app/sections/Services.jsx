"use client"
import Image from 'next/image'
import React from 'react'
import { coreServices } from '../constants'

const Services = () => {
  return (
    <div className='mt-4 mb-4 py-16' id='services'>
        <h1 className='text-center text-3xl font-semibold text-[#82B440] py-6'>Our Services</h1>
        <div className='flex justify-center items-center'>
            <div className='grid md:grid-cols-2 md:content-center'>
                <div className='mx-28'>
                    <Image src={'/1.jpg'} width={455} height={150}/>
                </div>
                <div className='md:w-1/2'>
                    <h1 className='text-center py-4 text-xl'>We operate through providing of:</h1>
                    <div className='flex flex-col justify-center items-center space-y-8'>
                        <div className='flex  justify-center'>
                            <div className='w-10 h-4 bg-[#82B440] rounded-full mx-4'></div>
                            <div>
                                <p className='text-center mx-8 md:mx-0'>
                                Waste management services: This includes prepare and monitoring waste  management plans on site, Industries, Institution,Cleaning, Design of waste management facilities ,Training and consultation services
                                </p>
                            </div>
                        </div>


                       <div className='flex  justify-center'>
                            <div className='w-10 h-4 bg-[#82B440] rounded-full mx-4'></div>
                            <div>
                                <p className='text-center mx-8 md:mx-0'>
                                Resource Transformation: Our expertise extends to converting waste into valuable resources, such as compost and biofeed, contributing to a sustainable and regenerative ecosystem.
                                </p>
                            </div>
                        </div>


                       <div className='flex  justify-center'>
                            <div className='w-10 h-4 bg-[#82B440] rounded-full mx-4'></div>
                            <div>
                                <p className='text-center mx-8 md:mx-0'>
                                Recycling: We actively promote and engage in recycling initiatives, diverting materials from landfills and promoting a circular economy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center py-12 text-center md:mx-16 bg-[#82B440] font-semibold text-white rounded-3xl mt-4 md:mt-8 mx-4 '>
            
            
                <p className='md:mx-4'>
                Sustainability is not solely about doing less harm; it's a commitment to doing more good, preserving our communities for future generations, and cultivating a world where every action nurtures the well-being of the environment, society, and economy.
                </p>
            
        </div>
        <h1 className='py-6 text-[#82B440] text-center font-semibold text-xl'>Our Core Activity</h1>
        <div className='flex justify-center items-center py-6'>
            <div className='grid md:grid-cols-2 md:mx-28'>
                {coreServices.map((item)=>(
                    <div className=' flex justify-center items-center py-8 border mx-4 my-4 rounded-2xl shadow-sm'>
                        <div>
                            {item.image}
                        </div>
                        <div>
                            <h1 className='text-center text-gray-950 font-semibold'>
                                {item.title}
                            </h1>
                            <p className='text-center md:mx-8 text-wrap text-gray-950'>
                                {item.message}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services