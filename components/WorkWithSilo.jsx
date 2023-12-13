import React from 'react'

function WorkWithSilo() {
    return (
        <div>
            <div>
                <div className="flex items-center justify-between border-t border-b border-gray-800 py-10">
                    <h3 className='text-3xl font-semibold'>
                        Work with Silo
                    </h3>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>

                <div className='flex justify-between border-b border-gray-800 w-full py-20'>
                    <div className='w-2/3 flex justify-center'>
                        <img src="https://www.iconpacks.net/icons/1/free-mail-icon-1008-thumb.png" alt="" className='h-[250px]' />
                    </div>
                    <div className='w-1/3 px-7'>
                        <h3 className='text-3xl font-bold py-7'>
                            As a sales <br className='hidden lg:block' /> representative
                        </h3>
                        <p className='pr-5 text-gray-300'>
                            Earn money by Silo's secure file storage solution. All you need are sales skills and a passion for privacy.
                        </p>
                        <button className='bg-white text-black px-10 py-3 rounded-md mt-10'>
                            Join Our Team
                        </button>
                    </div>

                </div>
                <div className='flex justify-between border-b border-gray-800 w-full py-20'>
                    <div className='w-2/3 flex justify-center'>
                        <img src="https://www.iconpacks.net/icons/1/free-mail-icon-1008-thumb.png" alt="" className='h-[250px]' />
                    </div>
                    <div className='w-1/3 px-7'>
                        <h3 className='text-3xl font-bold py-7'>
                            As a partner
                        </h3>
                        <p className='pr-5 text-gray-300'>
                            Silo helps business scale with secire file sharing, encryption and more.
                        </p>
                        <button className='bg-white text-black px-10 py-3 rounded-md mt-10'>
                            Partner with us
                        </button>
                    </div>

                </div>
                <div className='flex justify-between w-full py-20'>
                    <div className='w-2/3 flex justify-center'>
                        <img src="https://www.iconpacks.net/icons/1/free-mail-icon-1008-thumb.png" alt="" className='h-[250px]' />
                    </div>
                    <div className='w-1/3 px-7'>
                        <h3 className='text-3xl font-bold py-7'>
                            As a an employee
                        </h3>
                        <p className='pr-5 text-gray-300'>
                            Be part of a team that's building a top notch file storage and sharing service.
                        </p>
                        <button className='bg-white text-black px-10 py-3 rounded-md mt-10'>
                            Work with us
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WorkWithSilo