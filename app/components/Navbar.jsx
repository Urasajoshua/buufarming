"use client"
import React, { useEffect, useState } from 'react'
import { navItems } from '../constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from '@iconify/react';
import Image from 'next/image'

const Navbar = () => {
    const [active ,setActive] = useState('')
    const pathName = usePathname()
    const [menuOpen , setMenuOpen] = useState(false)


    const handleHamburger = ()=>{
        setMenuOpen(!menuOpen)
    }

    useEffect(()=>{
        setActive(pathName)
    },[pathName])
  return (
    <div className='sticky top-0 z-50 flex justify-between items-center bg-[#82B440]  py-3 px-4'>
        <div className=''>
            <Image src={'/buu.png'} width={100} height={100} color='' className=''/>
        </div>
        <div className='hidden sm:flex'>
            <ul className=''>
                {navItems.map((item)=>(
                    <Link href={`/#${item.id}`} key={item.link} className={`ml-12 first-letter:uppercase hover:underline text-white`}>
                        {item.name}
                    </Link>
                ))}
            </ul>
        </div>
        <div>
            <div className='flex md:hidden' onClick={handleHamburger}>
            {
                menuOpen ? <Icon icon="iconoir:cancel" color='white' width={50} height={50} /> :  <Icon icon="pajamas:hamburger" color='white' width={40} height={40} /> 
            }
            </div>
        </div>



        <div className={`${menuOpen ? 'fixed top-0 left-0 w-[65%] sm:hidden h-[420px] bg-opacity-100 px-10 py-10  ease-in duration-500 bg-[#82B440]' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500' }`}>
            <ul className='flex flex-col top-0 py-10 gap-10 text-white text-lg'>
                {
                    navItems.map((item)=>(
                        <Link onClick={handleHamburger} key={item.id} href={`#${item.id}`} className='hover:underline'>
                            {item.name}
                        </Link>
                    ))
                }
            </ul>
        </div>

    </div>
  )
}

export default Navbar