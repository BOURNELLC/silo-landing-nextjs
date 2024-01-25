import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <div>
            <div className="flex items-center justify-between max-w-7xl mx-auto py-7 px-5 2xl:px-0 text-white">


                <div className="flex items-center lg:hidden">


                    {/* ----------MOBILE MENU---------- */}

                    <div className="drawer  z-[999999] w-[50px]">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className="drawer-button">
                                <div className='lg:hidden'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-7 h-7 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </div>
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <div className="menu p-4 w-80 min-h-full bg-zinc-900 text-white text-center pt-10">
                                {/* close button */}
                                <div className='flex justify-end '>
                                    <label htmlFor="my-drawer" className="drawer-button">
                                        <div className='lg:hidden border-2 border-zinc-200 rounded-md p-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-7 h-7 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                        </div>
                                    </label>
                                </div>
                                {/* Sidebar content here */}
                                <Link href='/' className='hover:bg-zinc-700 rounded-md'>
                                    <h3 className="hover:text-gray-300 py-2 text-xl">Home</h3>
                                </Link>
                                <Link href='/' className='hover:bg-zinc-700 rounded-md'>
                                    <h3 className="hover:text-gray-300 py-2 text-xl">Products</h3>
                                </Link>
                                <Link href='/pricing' className='hover:bg-zinc-700 rounded-md'>
                                    <h3 className="hover:text-gray-300 py-2 text-xl">Pricing</h3>
                                </Link>
                                <Link href='/' className='hover:bg-zinc-700 rounded-md'>
                                    <h3 className="hover:text-gray-300 py-2 text-xl">About</h3>
                                </Link>

                                <div className='flex flex-col gap-2 mt-7'>
                                    <Link href='/signup'>
                                        <button className='bg-white w-full text-[#060C18] px-7 py-3 rounded-md'>Signup/Login</button>
                                    </Link>
                                    <button className='bg-sky-500 w-full text-white px-7 py-3 rounded-md'>Contact Sales</button>
                                </div>

                            </div>
                        </div>
                    </div>



                    <div className=' w-[300px]'>
                        <img src="/Horizontal Logo.png" alt="" className=' h-10' />
                    </div>
                </div>







                <div className='hidden lg:block'>
                    <img src="/Horizontal Logo.png" alt="" className=' h-10' />
                </div>
                <div className="hidden lg:flex justify-center relative left-20 z-50">
                    <div className='bg-[#060C18] w-[400px] px-14 py-2 rounded-full border border-sky-700 flex gap-5 fixed top-8'>
                        <Link href='/' className='hover:text-sky-500 transition duration-200'>
                            Home
                        </Link>
                        <Link href='/' className='hover:text-sky-500 transition duration-200'>
                            Products
                        </Link>
                        <Link href='/pricing' className='hover:text-sky-500 transition duration-200'>
                            Pricing
                        </Link>
                        <Link href='/' className='hover:text-sky-500 transition duration-200'>
                            About
                        </Link>
                    </div>
                </div>
                <div className='hidden lg:flex gap-2'>
                    <Link href='/signup'>
                        <button className='bg-white text-[#060C18] px-7 py-3 rounded-md'>Signup/Login</button>
                    </Link>
                    <button className='bg-sky-500 text-white px-7 py-3 rounded-md'>Contact Sales</button>
                </div>
            </div>
        </div>
    )
}

export default Header