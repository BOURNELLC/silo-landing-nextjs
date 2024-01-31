'use client'
import React from 'react'
import Signup from '../../components/SignupComponents/Signup'

function page({ params }) {

    const email = params.signup



    return (
        <div>
            <Signup />
        </div>
    )
}

export default page