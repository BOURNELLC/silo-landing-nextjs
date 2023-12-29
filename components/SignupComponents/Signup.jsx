'use client'
import React, { useState } from 'react'
import Header from '../Header'
import { useRouter } from 'next/navigation'

function Signup({ params }) {

    const [personal, setPersonal] = useState(true)
    const [business, setBusiness] = useState(false)

    // get email from the url query
    const router = useRouter()
    const { email } = router.query


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
                            <form className='mt-5'>
                                <div className='flex flex-col gap-5'>
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name='name' id='name' className='bg-[#060C18] border border-gray-300 rounded-md px-5 py-3' />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            defaultValue={email}
                                            type="email" name='email' id='email' className='bg-[#060C18] border border-gray-300 rounded-md px-5 py-3' />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name='password' id='password' className='bg-[#060C18] border border-gray-300 rounded-md px-5 py-3' />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="confirm-password">Confirm Password</label>
                                        <input type="password" name='confirm-password' id='confirm-password' className='bg-[#060C18] border border-gray-300 rounded-md px-5 py-3' />
                                    </div>

                                    {/* i agree checkbox */}
                                    <div className='flex items-center gap-2 py-4'>
                                        <input type="checkbox" name='agree' id='agree' className='checkbox checkbox-info' />
                                        <label htmlFor="agree">I agree to the <span className='text-sky-500 underline cursor-pointer'>Terms of Service</span> and <span className='text-sky-500  underline cursor-pointer'>Privacy Policy</span></label>
                                    </div>
                                    <button className='bg-sky-500 text-white px-7 py-3 rounded-md'>Get Started</button>

                                </div>
                            </form>

                            {/* already have an account */}
                            <div className='flex items-center justify-center gap-2 mt-5 text-xs lg:text-base'>
                                <p>Already have an account?</p>
                                <a href="#" className='text-sky-500'>Sign in</a>

                            </div>
                        </div>




                        {/* Business form */}
                        <div className={business ? 'block' : 'hidden'}>
                            <form className='mt-5'>
                                <div className='flex flex-col gap-5'>
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name='name' id='name' className='bg-[#060C18] border border-gray-300 rounded-md px-5 py-3' />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            defaultValue={email}
                                            type="email" name='email' id='email' className='bg-[#060C18] border border-gray-300 rounded-md px-5 py-3' />
                                    </div>

                                    {/* company name, Position, Employees, Storage needs */}

                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="company-name">Company Name</label>
                                        <input type="text" name='company-name' id='company-name' className='bg-[#060C18] border border-gray-300 rounded-md px-5 py-3' />
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="position">Position</label>
                                        <input type="text" name='position' id='position' className='bg-[#060C18] border border-gray-300 rounded-md px-5 py-3' />
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="employees">Employees</label>
                                        <select name="employees" id="employees" className='bg-[#060C18] border border-gray-300 rounded-md px-5 py-3'>
                                            <option value="1-50">1-50</option>
                                            <option value="51-1000">51-1000</option>
                                            <option value="1000+">1000+</option>
                                        </select>
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="storage-needs">Storage Needs</label>
                                        <select name="storage-needs" id="storage-needs" className='bg-[#060C18] border border-gray-300 rounded-md px-5 py-3'>
                                            <option value="150">Less than 150 TB</option>
                                            <option value="150-499">150-499 TB</option>
                                            <option value="500-999">500-999 TB</option>
                                            <option value="PB+">PB+</option>
                                        </select>
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name='password' id='password' className='bg-[#060C18] border border-gray-300 rounded-md px-5 py-3' />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="confirm-password">Confirm Password</label>
                                        <input type="password" name='confirm-password' id='confirm-password' className='bg-[#060C18] border border-gray-300 rounded-md px-5 py-3' />
                                    </div>

                                    {/* Contact sales checkbox*/}
                                    <div className='flex items-center gap-2 py-4'>
                                        <input type="checkbox" name='agree' id='agree' className='checkbox checkbox-info' />
                                        <label htmlFor="agree">Please have the Sales Team contact me</label>
                                    </div>

                                    {/* i agree checkbox */}
                                    <div className='flex items-center gap-2 pb-4'>
                                        <input type="checkbox" name='agree' id='agree' className='checkbox checkbox-info' />
                                        <label htmlFor="agree">I agree to the <span className='text-sky-500 underline cursor-pointer'>Terms of Service</span> and <span className='text-sky-500  underline cursor-pointer'>Privacy Policy</span></label>
                                    </div>
                                    <button className='bg-sky-500 text-white px-7 py-3 rounded-md'>Get Started</button>

                                </div>
                            </form>

                            {/* already have an account */}
                            <div className='flex items-center justify-center gap-2 mt-5  text-xs lg:text-base'>
                                <p>Already have an account?</p>
                                <a href="#" className='text-sky-500'>Sign in</a>

                            </div>
                        </div>







                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup