import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <div>
            <div className="flex items-center justify-between max-w-7xl mx-auto py-7 text-white">
                <div>
                    <h3 className='text-2xl font-bold'>
                        Silo Network
                    </h3>
                </div>
                <div className="flex justify-center relative left-20">
                    <div className='bg-[#060C18] w-[400px] px-14 py-2 rounded-full border border-zinc-400 flex gap-5 fixed top-8'>
                        <Link href='/' className='hover:text-sky-500 transition duration-200'>
                            Home
                        </Link>
                        <Link href='/' className='hover:text-sky-500 transition duration-200'>
                            Products
                        </Link>
                        <Link href='/' className='hover:text-sky-500 transition duration-200'>
                            Pricing
                        </Link>
                        <Link href='/' className='hover:text-sky-500 transition duration-200'>
                            About
                        </Link>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <button className='bg-white text-[#060C18] px-7 py-3 rounded-md'>Signup/Login</button>
                    <button className='bg-sky-500 text-white px-7 py-3 rounded-md'>Contact Sales</button>
                </div>
            </div>
        </div>
    )
}

export default Header