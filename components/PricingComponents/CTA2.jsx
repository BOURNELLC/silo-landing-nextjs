import React from 'react'

function CTA2() {
    return (
        <div className='bg-[#060C18] text-white py-20'>
            <section className=" max-w-7xl mx-auto px-7 2xl:px-0">

                <h2 className='text-3xl font-semibold text-center pt-14 pb-5 text-white'>
                    Get Started For Free
                </h2>
                <p className='text-center text-sm'>
                    No credit card required. Start your encrypted file sharing with Silo's 10GB plan for the new users.
                </p>

                <div className="flex flex-col lg:flex-row justify-center items-center mt-10 gap-5 pb-14">
                    <button className="bg-white hover:bg-gray-400 transition duration-200 w-[250px] text-black px-10 py-3 rounded-md">Create a Free Account</button>
                    <button className="bg-sky-500 hover:bg-gray-900 transition duration-200 hover:text-white w-[250px] text-white px-10 py-3 rounded-md">Contact Sales</button>

                </div>
            </section>
        </div>
    )
}

export default CTA2