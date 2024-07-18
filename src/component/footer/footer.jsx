import React from 'react'
import { facebook, instagram, linkedin, logoFT, twiter } from '../../assets/img'

export const Footer = () => {
  return (
    <div className='bg-ft-one flex items-center justify-center text-white text-center p-8 rounded-t-3xl'>
        <div className='flex items-center justify-center flex-col'>
           <a href=""> <img src={logoFT} alt="" /></a>

            <div>
             <p className='pb-2'>Follow us on</p>
             <div className='flex '>
                <img src={twiter} alt="" />
                <img src={instagram} alt="" />
                <img src={facebook} alt="" />
                <img src={linkedin} alt="" />
             </div>
            </div>

            <p className='text-neutral-400 pt-8'>ONET © 2024 All rights reserved.</p>
        </div>
    </div>
  )
}
