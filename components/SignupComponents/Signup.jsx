'use client'
import React, { useState } from 'react'
import Header from '../Header'
import SignupPersonal from './SignupPersonal'
import SignupBusiness from './SignupBusiness'



function Signup({ email }) {


    const [personal, setPersonal] = useState(true)
    const [business, setBusiness] = useState(false)







    return (
        <div>
            <div className='bg-[#060C18]'>
                <Header />
            </div>

            <div className='bg-[#060C18] min-h-screen text-white pb-20 pt-14'>
                <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto px-7 2xl:px-0">
                    <div className='w-full lg:w-[45%] text-center lg:text-left'>
                        <h1 className='text-3xl lg:text-4xl font-bold py-10 text-sky-500'>Silo Network</h1>
                        <h3 className='text-2xl lg:text-3xl font-semibold'>Experience better cloud storage for your business.</h3>
                        <p className='text-gray-300 mt-5 w-2/3 lg:w-full mx-auto lg:pr-10'>
                            Start for free and get unparalleled performance and security, while shaving a zero of your cloud bill and carbon footprint.
                        </p>
                    </div>
                    <div className='w-full lg:w-[55%] text-center lg:text-left bg-white bg-opacity-5 p-5 lg:p-10 rounded-lg'>
                        <h2 className='text-lg font-semibold'>
                            Sign up and get 10 GB free
                        </h2>
                        {/* personal and business tab */}
                        <div className='flex mt-5'>
                            <div className='w-1/2'>
                                <button
                                    onClick={() => { setPersonal(true); setBusiness(false) }}
                                    className={
                                        personal ? 'bg-sky-500 text-white px-7 py-3 rounded-l-md w-full' : 'bg-gray-200 text-[#060C18] px-7 py-3 rounded-l-md w-full'
                                    }
                                >Personal</button>
                            </div>
                            <div className='w-1/2'>
                                <button
                                    onClick={() => { setPersonal(false); setBusiness(true) }}
                                    className={business ? 'bg-sky-500 text-white px-7 py-3 rounded-r-md w-full' : 'bg-gray-200 text-[#060C18] px-7 py-3 rounded-r-md w-full'}
                                >Business</button>
                            </div>
                        </div>

                        {/* Personal form */}
                        <div className={personal ? 'block' : 'hidden'}>
                            <SignupPersonal email={email} />
                        </div>

                        {/* Business form */}
                        <div className={business ? 'block' : 'hidden'}>
                            <SignupBusiness email={email} />
                        </div>














                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup