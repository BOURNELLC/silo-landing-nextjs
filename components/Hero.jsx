
import React from 'react'
import ParticleBackground from './ParticleBackground'

function Hero() {
    return (
        <div className='py-24'>
            <ParticleBackground />
            <div className="flex flex-col items-center justify-center text-white pt-14">
                <div className="flex flex-col items-center justify-center">
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

                        <div className="flex flex-col items-center justify-center pt-5">
                            <div className="flex flex-row gap-2 items-center justify-center">
                                <input type="text" placeholder="Enter your email address" className="bg-[#060C18] w-[400px] px-14 py-3 rounded-md border border-zinc-400 text-white" />
                                <button className=" transition duration-200 hover:bg-sky-500 bg-white hover:text-white text-black px-7 py-3 rounded-md">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero