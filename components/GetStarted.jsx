import React from 'react'

function GetStarted() {
    return (
        <div>
            <div className="flex items-center justify-between border-t border-b border-gray-800 py-10 px-5 2xl:px-0">
                <h3 className='text-2xl lg:text-3xl font-semibold'>
                    Get Started
                </h3>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row border-b border-gray-800'>
                <div className='flex flex-col items-center justify-center w-full lg:w-1/3 border-r border-gray-800 px-7 py-10'>
                    <img src="https://www.iconpacks.net/icons/1/free-mail-icon-1008-thumb.png" alt="" className='h-[250px]' />
                    <h3 className='text-2xl font-semibold py-7'>
                        Step 1
                    </h3>
                    <p className='text-center'>
                        Provide your name, email address to get started for free.
                    </p>
                </div>
                <div className='flex flex-col items-center justify-center w-full lg:w-1/3 border-r border-gray-800 p-7'>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/free-cloud-storage-2926993-2441074.png?f=webp" alt="" className='h-[250px]' />
                    <h3 className='text-2xl font-semibold py-7'>
                        Step 2
                    </h3>
                    <p className='text-center'>
                        Start storing and enjoy up to 20GB of free private cloud storage on us.
                    </p>
                </div>
                <div className='flex flex-col items-center justify-center w-full lg:w-1/3 p-7'>
                    <img src="https://cdn-icons-png.flaticon.com/512/5387/5387743.png" alt="" className='h-[250px]' />
                    <h3 className='text-2xl font-semibold py-7'>
                        Step 3
                    </h3>
                    <p className='text-center'>
                        Upgrade to unlimited for unthrottled storage space on a pay-as-you-go basis.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GetStarted