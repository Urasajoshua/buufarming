import { ourServices, usefulLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'
import { Icon } from '@iconify-icon/react';

const Footer = () => {
  return (
<div className='bg-[#5670A0]'>
<div className='  py-10'>
        <div className='grid md:grid-cols-12 md:place-items-center mx-4'>
            <div className='md:col-span-4'>
                <h3 className='text-[28px] text-white font-bold py-4'>
                Milele Trading Co Ltd
                </h3>
               <div className='text-[14px] font-normal text-white text-start'>
               <p>
                Plot. No. 1183, Block G – Tabata Mawenzi St,
                </p>
                <p>
                Dar es Salaam , Tanzania
                </p>
               <div className='py-6'>
               <p>
                Phone: +255 747 999 989
                </p>
                <p>
                Email: info@mileletrading.co.tz
                </p>
               </div>
               </div>
            </div>
            <div className='md:col-span-2'>
                <h2 className='text-[16px] font-semibold text-white'>useful link</h2>
                <div className='w-8 h-1 bg-[#3279FC] mt-2'></div>

                <ul className='flex flex-col space-y-2 text-start py-4'>
                    {usefulLinks.map((item)=>(
                        <div className='flex justify-start gap-1' key={item.icon}>
                        
                            <Link key={item.link} href={item.link} className='text-[14px] font-normal text-left text-gray-300 gap-1 flex justify-center items-center'>
                          <span>{item.icon}</span>  <span>{item.name}</span>
                        </Link>
                        </div>
                    ))}
                </ul>
            </div>


             <div className='md:col-span-2'>
                <h2 className='text-[16px] font-semibold text-white'>Our Services</h2>
                <div className='w-8 h-1 bg-[#3279FC] mt-2'></div>

                <ul className='flex flex-col space-y-2 text-start py-4'>
                    {ourServices.map((item)=>(
                        <div className='flex justify-start' key={item.icon}>
                           
                            <Link key={item.link} href={item.link} className='ftext-[14px] font-normal text-left text-gray-300 flex justify-center items-center gap-1'>
                            <span>{item.icon}</span> <span>{item.name}</span>
                        </Link>
                        </div>
                    ))}
                </ul>
            </div>
            <div className='md:col-span-4'>
                <h1 className='text-[16px] font-semibold text-white'>
                Join Our Newsletter
                </h1>
                <div className='w-8 h-1 bg-[#3279FC] mt-2'></div>
                <p className='text-start  text-[14px] font-normal text-white py-6'>Keep up with all our news and upcoming events by<br/> signing up to our newsletter</p>

                <form className='md:py-6'>
                    <input className='bg-white py-2 px-4 rounded-l-lg'/>
                    <button className='bg-[#3279FC] text-white py-2 px-6 md:px-4'>Subscribe</button>
                </form>
            </div>
        </div>
       
    </div>
    <div className='bg-[#3B5380]   py-10 text-white'>
            <div className='flex flex-col-reverse md:flex md:justify-between mx-20'>
            <div>
                <p className='text-[14px] font-normal text-white font-sans py-2'> &copy; Copyright jTechnologies. All Rights Reserved</p>
                <p className='text-[13px] font-normal text-white font-sans '>Designed by <span className='text-[#3279Fc] font-normal underline'> j Technologies</span></p>
            </div>
            <div className='flex mx-6 gap-4 py-3'>
          <Link href={''}>
          <Icon icon="logos:facebook" width={25} height={25} />
          </Link>
           <Link href={''}>
           <Icon icon="skill-icons:instagram" width={25} height={25} />
           </Link>
           <Link href={''}>
           <Icon icon="devicon:twitter" width={25} height={25} />
           </Link>
           <Link href={''}>
           <Icon icon="skill-icons:linkedin" width={25} height={25} />
           </Link>
            </div>
            </div>
        </div>
</div>
  )
}

export default Footer