import React from 'react'
import { facebook, instagram, linkedin, logoFT, twiter } from '../../assets/img'

export const Footer = () => {
  return (
    <div className='bg-ft-one flex items-center justify-center text-white text-center p-8 rounded-t-3xl'>
        <div className='flex items-center justify-center flex-col'>
           <a href=""> <img src={logoFT} alt="" /></a>

            <div>
             <p className='pb-2'>Follow us on</p>
             <div className='flex'>
                <a href=""><img src={twiter} alt="" /></a>
                <a href=""><img src={instagram} alt="" /></a>
                <a href=""><img src={facebook} alt="" /></a>
                <a href=""><img src={linkedin} alt="" /></a>
             </div>
            </div>

            <p className='text-neutral-400 pt-8'>ONET © 2024 All rights reserved.</p>
        </div>
    </div>
  )
}
