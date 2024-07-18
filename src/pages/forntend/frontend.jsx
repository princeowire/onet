import React from 'react'
import { certificateIcon, cost, date, duration, frontEnd, level, requirement, time, venue } from '../../assets/img'

export const Frontend = () => {
  return (
    <div>
        <section className='lg:px-16 md:px-8 sm:px-4 px-2 p-2 py-4 flex flex-col md:flex-row lg:flex-row justify-between gap-8'>

            <div className='flex flex-col gap-2 max-w-md w-full md:w-2/5 lg:w-2/5'>
                <button className='bg-dark-gray fit-content px-4 rounded-sm border-solid border-border'> Online</button>
                <h2 className='text-3xl font-extrabold py-3'>Frontend Development</h2>
                <p className='text-text-gray'>By enrolling in our Front-End Development course, students will gain practical knowledge, learn industry best practices, and be well-prepared for a rewarding career in web development.</p>
                <button className="flex justify-center fit-content px-6 py-3 bg-btn-color text-white rounded-xl">Apply now</button>
                <p>Application are currently open!</p>
            </div>

            <div className='w-full md:w-3/5 lg:w-2/5'>
                <img className='w-full h-full object-cover max-h-72' src={frontEnd} alt="" />
            </div>

        </section>

        <section className='p-16 flex flex-col items-center gap-4 w-full'>

            <div className='flex flex-wrap items-center justify-evenly gap-8 w-full text-text-gray'>

                <div className='flex items-center justify-center flex-col gap-2'>
                    <img src={date} alt="" />
                    <p>Start Date</p>
                    <b className='text-1xl font-semibold'>Immediately</b>
                </div>

                <div className='flex items-center justify-center flex-col gap-2'>
                    <img src={duration} alt="" />
                    <p>Duration</p>
                    <b className='text-1xl font-semibold'>16 weeks</b>
                </div>
                    
                <div className='flex items-center justify-center flex-col gap-2'>
                    <img src={time} alt="" />
                    <p>Time Duration</p>
                    <b className='text-1xl font-semibold'>1 hour, 30 mins</b>
                </div>

                <div className='flex items-center justify-center flex-col gap-2'>
                    <img src={venue} alt="" />
                    <p>Venue</p>
                    <b className='text-1xl font-semibold'>Online</b>
                </div>
            </div>

            <div className='flex flex-wrap items-center justify-evenly gap-8 w-full text-text-gray'>

                <div className='flex items-center justify-center flex-col gap-2'>
                    <img src={certificateIcon} alt="" />
                    <p>Certificate</p>
                    <b className='text-sm font-semibold'>Upon Completion</b>
                </div>

                <div  className='flex items-center justify-center flex-col gap-2'>
                    <img src={cost} alt="" />
                    <p>Cost</p>
                    <p className='line-through'>N 120,000</p>
                    <b className='text-1xl font-semibold'>N 90, 000</b>
                </div>

                <div  className='flex items-center justify-center flex-col gap-2'>
                    <img src={level} alt="" />
                    <p>Level</p>
                    <b className='text-1xl font-semibold'>Beginner</b>
                </div>
                
                <div className='flex items-center justify-center flex-col gap-2'>
                    <img src={requirement} alt="" />
                    <p>Prerequisites</p>
                    <b className='text-1xl font-semibold'>Laptop and data</b>
                </div>

            </div>

        </section>
    </div>
  )
}
