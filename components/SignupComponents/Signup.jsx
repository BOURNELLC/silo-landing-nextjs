'use client'
import React, { useState } from 'react'
import Header from '../Header'
import SignupPersonal from './SignupPersonal'
import SignupBusiness from './SignupBusiness'
import Footer from '../Footer'



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
                        <div className="flex justify-center lg:justify-start">
                            <img src="/Horizontal Logo.png" alt="" className=' h-10 my-7' />
                        </div>
                        <h3 className='text-2xl lg:text-3xl font-bold'>Experience better cloud storage for your business.</h3>
                        <p className='text-gray-300 mt-5 w-2/3 lg:w-full mx-auto lg:pr-10 font-light'>
                            Start for free and get unparalleled performance and security for a fraction of the industry standard.
                        </p>
                    </div>
                    <div className='w-full lg:w-[55%] text-center lg:text-left bg-white bg-opacity-5 p-5 lg:p-10 rounded-lg'>
                        <h2 className='text-lg font-light'>
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
            <Footer />
        </div>
    )
}

export default Signup