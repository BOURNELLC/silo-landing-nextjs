'use client'
import React, { useState } from 'react'
import Header from '../Header'
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2'


function SignupPersonal({ email }) {

    // loading state
    const [loading, setLoading] = useState(false)


    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        setLoading(true)

        // check password and confirm password match
        if (data.password !== data.confirm_password) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Passwords do not match!',
            })
            setLoading(false)
            return
        }

        // if agree_tos is not checked
        if (!data.agree_tos) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please agree to the Terms of Service and Privacy Policy!',
            })
            setLoading(false)
            return
        }



        const newData = {
            ...data,
            // remove confirm_password from data
            confirm_password: undefined
        }

        fetch('/api/personaluser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    setLoading(false)
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'You have successfully signed up!',
                    })
                } else {
                    setLoading(false)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    })
                }
            })


    }

    // get email structured from email prop
    if (email === undefined) {
        email = ''
    } else {
        var emailStructured = email.replace(/%40/g, '@')
    }



    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name">Name</label>
                        <input
                            {...register("name", { required: true })}
                            aria-invalid={errors.name ? "true" : "false"}
                            type="text" name='name' id='name' className='bg-[#060C18] border border-gray-300 rounded-md px-5 py-3' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="email">Email</label>
                        <input
                            {...register("email", { required: true })}
                            aria-invalid={errors.email ? "true" : "false"}
                            defaultValue={emailStructured}
                            type="email" name='email' id='email' className='bg-[#060C18] border border-gray-300 rounded-md px-5 py-3' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="password">Password</label>
                        <input
                            {...register("password", { required: true })}
                            aria-invalid={errors.password ? "true" : "false"}
                            type="password" name='password' id='password' className='bg-[#060C18] border border-gray-300 rounded-md px-5 py-3' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="confirm_password">Confirm Password</label>
                        <input
                            {...register("confirm_password", { required: true })}
                            aria-invalid={errors.confirm_password ? "true" : "false"}
                            type="password" name='confirm_password' id='confirm_password' className='bg-[#060C18] border border-gray-300 rounded-md px-5 py-3' />
                    </div>

                    {/* i agree checkbox */}
                    <div className='flex items-center gap-2 py-4'>
                        <input
                            {...register("agree_tos", { required: false })}

                            type="checkbox" name='agree_tos' id='agree_tos' className='checkbox checkbox-info' />
                        <label htmlFor="agree_tos">I agree to the <span className='text-sky-500 underline cursor-pointer'>Terms of Service</span> and <span className='text-sky-500  underline cursor-pointer'>Privacy Policy</span></label>
                    </div>
                    <button
                        type='submit'
                        className='bg-sky-500 text-white px-7 py-3 rounded-md'>
                        {loading ? 'Please wait...' : 'Get Started'}
                    </button>

                </div>
            </form>

            {/* already have an account */}
            <div className='flex items-center justify-center gap-2 mt-5 text-xs lg:text-base'>
                <p>Already have an account?</p>
                <a href="#" className='text-sky-500'>Sign in</a>

            </div>

        </div>
    )
}

export default SignupPersonal