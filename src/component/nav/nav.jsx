import React from 'react';
import { Logo } from '../../assets/img';
import { useLocation, NavLink } from "react-router-dom";

export const Nav = () => {

  const location = useLocation()
  const path = location.pathname;

  return (
    <div className='flex w-full justify-between items-center lg:px-16 md:px-8 sm:px-4 px-2 p-2 py-4 pb-14 md:pb-4 lg:pb-4'>
      <a href="/"><img src={Logo} alt="" /> </a> 

      <div className='link md:unlink lg:unlink p-2 rounded-full bg-light-gray flex gap-4'>
        <NavLink to="/">
            {path === "/" ? 
            (<a href=""  className='text-black font-bold text-1xl'>Welcome</a>)
            :(<a href="">Welcome</a>)}
        </NavLink>

        <a href='./#courses'>
            {path === "/#courses" ? 
            (<a href="/#courses"  className='text-black font-bold text-1xl'>Courses</a>)
            :(<a href="/#courses">Courses</a>)}
        </a>

        <a href='./#faq'>
            {path === "/#faq" ? 
            (<a href="/#faq"  className='text-black font-bold text-1xl'>FAQs</a>)
            :(<a href="/#faq">FAQs</a>)}
        </a>

        <NavLink to="/register">
            {path === "/register" ? 
            (<a href=""  className='text-black font-bold text-1xl'>Get started</a>)
            :(<a href="">Get started</a>)}
        </NavLink>
      </div>

      <a href='/register' className='p-3 bg-btn-color text-white rounded-xl'>Get Started</a>
    </div>
  )
}