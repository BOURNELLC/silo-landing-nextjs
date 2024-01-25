import React from 'react'

function Footer() {
    return (
        <div className='bg-zinc-800 text-white pt-10'>
            <div className='flex flex-col lg:flex-row items-center gap-14 max-w-7xl mx-auto'>
                <h3 className='text-2xl font-bold'>
                    Silo Network
                </h3>
                <div className="flex gap-5">
                    <h3>
                        Home
                    </h3>
                    <h3>
                        About
                    </h3>
                    <h3>
                        Contact
                    </h3>
                </div>
            </div>
            <div className="flex lg:justify-end pt-5 lg:pt-0 pb-3 justify-center">
                <h1 className='text-xs font-light pt-2 lg:pr-5 text-gray-400'>
                    Developed by <a href="https://www.fiverr.com/metrocoder">
                        <span className='text-[#42ff52] hover:text-[#96ff9f] opacity-50 hover:opacity-90 transition duration-200'>Metrocoder</span>
                    </a>
                </h1>
            </div>
        </div>
    )
}

export default Footer