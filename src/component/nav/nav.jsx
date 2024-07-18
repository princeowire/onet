import React from 'react';
import { Logo } from '../../assets/img';

export const Nav = () => {
  return (
    <div className='flex w-full justify-between items-center lg:px-16 md:px-8 sm:px-4 px-2 p-2 py-4 pb-14 md:pb-4 lg:pb-4'>
      <a href="/"><img src={Logo} alt="" /> </a> 

      <div className='link md:unlink lg:unlink p-2 rounded-full bg-light-gray flex gap-4'>
        <a className='hover:bg-dark-gray rounded-3xl' href='./'>Welcome</a>
        <a className='hover:bg-dark-gray rounded-3xl' href='./#courses'>Courses</a>
        <a className='hover:bg-dark-gray rounded-3xl' href='./#faq'>FAQs</a>
        <a className='hover:bg-dark-gray rounded-3xl' href='./#get-started'>Get started</a>
      </div>

      <button className='p-3 bg-btn-color text-white rounded-xl'>Get Started</button>
    </div>
  )
}