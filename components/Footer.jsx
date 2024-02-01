import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <div className='bg-zinc-800 text-white pt-10'>
            <div className='flex flex-col lg:flex-row items-center gap-14 max-w-7xl mx-auto'>
                <div className="flex justify-center lg:justify-start">
                    <img src="/Horizontal Logo.png" alt="" className=' h-10' />
                </div>
                <div className="flex gap-5 font-thin text-base">
                    <Link href='/' className=''>
                        <h3 className="hover:text-sky-300 transition duration-200 py-2">Home</h3>
                    </Link>
                    <Link href='/' className=''>
                        <h3 className="hover:text-sky-300 transition duration-200 py-2">Products</h3>
                    </Link>
                    <Link href='/pricing' className=''>
                        <h3 className="hover:text-sky-300 transition duration-200 py-2">Pricing</h3>
                    </Link>
                    <Link href='/about' className=''>
                        <h3 className="hover:text-sky-300 transition duration-200 py-2">About</h3>
                    </Link>
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