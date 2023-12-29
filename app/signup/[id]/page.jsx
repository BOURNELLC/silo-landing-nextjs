'use client'
import React from 'react'
import Signup from '../../../components/SignupComponents/Signup'

function page({ params }) {

    const email = params.id

    return (
        <div>
            <Signup email={email} />
        </div>
    )
}

export default page