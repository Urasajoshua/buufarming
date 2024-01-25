"use client"
import React, { useEffect, useState } from 'react'
import { navItems } from '../constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from '@iconify/react';

const Navbar = () => {
    const [active ,setActive] = useState('')
    const pathName = usePathname()
    const [menuOpen , setMenuOpen] = useState(false)

    useEffect(()=>{
        setActive(pathName)
    },[pathName])
  return (
    <div className='sticky top-0 flex justify-between items-center bg-[#82B440] py-6 px-4'>
        <div>logo</div>
        <div className='hidden sm:flex'>
            <ul className=''>
                {navItems.map((item)=>(
                    <Link href={item.link} key={item.link} className={`ml-12 first-letter:uppercase ${active === item.link ? "text-black underline" : "text-white"}`}>
                        {item.name}
                    </Link>
                ))}
            </ul>
        </div>
        <div>
            <div className='flex md:hidden'>
            <Icon icon="pajamas:hamburger" />
            </div>
        </div>
    </div>
  )
}

export default Navbar