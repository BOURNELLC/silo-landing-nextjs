'use client'
import React, { useState } from 'react'
import ParticleBackground from './ParticleBackground'
import { useRouter } from 'next/navigation'


function Hero() {

    const router = useRouter()

    const [email, setEmail] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSendEmail = () => {

        // validation
        if (email === '') {
            alert('Please enter your email address')
            return
        }

        if (!email.includes('@')) {
            alert('Please enter a valid email address')
            return
        }


        // send email to the signup page
        router.query = { email: email }
        router.push('/signup')
    }



    return (
        <div className='py-24'>
            <ParticleBackground />
            <div className="flex flex-col items-center justify-center text-white pt-14">
                {/* --------FOR MOBILE--------- */}
                <div className="flex flex-col items-center justify-center lg:hidden px-5">
                    <h1 className="text-4xl lg:text-5xl font-semibold text-center text-white">
                        The most secure way to store & share files
                    </h1>


                </div>
                {/* --------FOR DESKTOP--------- */}
                <div className=" flex-col items-center justify-center hidden lg:flex">
                    <h1 className="text-5xl font-semibold text-center text-white">
                        The most secure way
                    </h1>
                    <h1 className="text-5xl font-semibold text-center text-white pt-5">
                        to store & share files
                    </h1>

                </div>
                <div className="flex flex-col items-center justify-center">
                    {/* EMAIL INPUT AND GET STARTED BUTTON */}
                    <div className="flex flex-col items-center justify-center pt-10">

                        <div className="flex flex-col items-center justify-center pt-5 ">
                            <div className="flex flex-col lg:flex-row gap-2 items-center justify-center w-11/12 mx-auto lg:w-full">
                                <input
                                    // validation

                                    required
                                    onChange={handleEmail}
                                    type="email" placeholder="Enter your email address" className="bg-[#060C18] w-full lg:w-[400px] px-5 py-3 rounded-md border border-sky-700 text-white" />
                                <button
                                    onClick={handleSendEmail}
                                    className="w-full lg:w-[170px] transition duration-200 hover:bg-sky-500 bg-white hover:text-white text-black px-7 py-3 rounded-md">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero