"use client"
import React from 'react'
import { Icon } from '@iconify/react';

const Contact = () => {
  return (
    <div id='contact' className='py-20' data-aos='zoom-out'>
        <h1 className='text-center text-4xl'>Contact Us</h1>
        <div className='mx-12'>
            <h1 className='text-[#82B440] text-3xl font-medium py-4'>Get in Touch</h1>
            <p className='text-gray-600 text-lg font-normal py-2'>
                want to get in touch? We'd love to hear from your. here's  how you can reach us
            </p>
        </div>
        <div className='flex justify-center items-center'>
            <div className='flex flex-col  md:flex-row md:justify-around md:gap-4'>
                <div className='flex flex-col mb-6 py-10 space-y-10 border border-gray-50 shadow px-12 mt-10'>
                    <h1 className='text-gray-950 text-lg font-normal py-3'>We can help.Our team of expert is on hand <br/>to answer your questions</h1>

                    <div className='flex flex-col space-y-8'>
                        <div className='flex gap-3 border-b py-2'>
                        <Icon icon="ei:location" width={40} height={40}  style={{color: '#57e389'}} />
                        <div className=''> 
                            <h1 className='text-[#82B440] text-xl'>Location:</h1>
                            <p>Mbezi, Dar es Salaam, Tanzania</p>
                        </div>
                        </div>
                        <div className='flex gap-3 border-b' >
                        <Icon icon="fluent:call-28-regular" width={40} height={40}  style={{color: '#57e389'}} />
                        <div>
                            <h1 className='text-[#82B440] text-xl'>Phone</h1>
                            <p>+255699108598</p>
                        </div>
                        </div>
                        <div className='flex gap-3 border-b'>
                        <Icon icon="fluent:mail-32-regular" width={40} height={40}  style={{color: '#57e389'}} />
                        <div>
                            <h1 className='text-[82B440] text-xl'>Email</h1>
                            <p>buufarming@gmail.com</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-center first-letter:uppercase text-[#82B440] font-normal text-3xl'>Leave your message here</h1>
                    <form className='py-6 border mt-2 border-gray-50 px-6 rounded-lg shadow'>
                        <div className='flex flex-col md:flex-row gap-2 py-2'>
                        <input className='border rounded-lg bg-white px-6 py-2 focus:outline-none' placeholder='Your firstname' type='text'/>
                        <input className='border rounded-lg bg-white px-6 py-2 focus:outline-none' placeholder='Your lastname' type='text'/>
                        </div>
                        <div className='py-2 flex flex-col md:flex-row gap-2'>
                            <input className='border rounded-lg bg-white px-6 py-2 focus:outline-none' placeholder='Your email' type='email'/>
                            <input className='border rounded-lg bg-white px-6 py-2 focus:outline-none' placeholder='Your phone' type='number'/>
                        </div>
                        <div className='flex justify-center items-center py-3'>
                        <textarea placeholder='message' className='px-14 rounded-lg py-6 border bg-white focus:outline-none'></textarea>
                        </div>
                        <div className='flex justify-center items-center py-3'>
                            <button className='px-6 py-3 bg-[#82B440] text-white rounded-md'>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact