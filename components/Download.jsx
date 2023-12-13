import React from 'react'

function Download() {
    return (
        <div>
            <div className="flex items-center justify-between border-t border-b border-gray-800 py-10 px-5 2xl:px-0">
                <h3 className='text-2xl lg:text-3xl font-semibold'>
                    Download our app
                </h3>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>

            <div className='flex flex-col-reverse gap-10 lg:flex-row items-center justify-between border-b border-gray-800 w-full py-28'>
                <div className='w-full lg:w-2/3 px-7'>
                    <h3 className='text-2xl lg:text-3xl font-bold py-7'>
                        Our own data
                    </h3>
                    <p className='pr-5 text-gray-300 w-full lg:w-1/2'>
                        Seli for windows is a free software solution for those who would like their cloud storage mounted as a local disc drive on their computer for use in any program that uses.
                    </p>
                    <button className='bg-white text-black px-10 py-3 rounded-md mt-10'>
                        Download
                    </button>
                </div>
                <div className='w-full lg:w-1/3 flex justify-center'>
                    <img src="https://iconape.com/wp-content/png_logo_vector/windows-store-logo.png" alt="" className='h-[250px]' />
                </div>


            </div>
        </div>
    )
}

export default Download