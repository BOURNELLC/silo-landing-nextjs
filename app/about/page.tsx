import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import About from '@/components/AboutComponents/About'
function page() {
    return (
        <div>
            <div className='bg-[#060C18]'>
                <Header />
            </div>
            <About />
            <Footer />
        </div>
    )
}

export default page