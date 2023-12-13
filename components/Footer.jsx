import React from 'react'

function Footer() {
    return (
        <div className='bg-zinc-700 text-white py-10'>
            <div className='flex items-center gap-14 max-w-7xl mx-auto'>
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
        </div>
    )
}

export default Footer