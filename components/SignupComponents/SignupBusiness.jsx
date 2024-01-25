'use client'
import React, { useState } from 'react'
import Header from '../Header'
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2'


function SignupBusiness({ email }) {

    // loading state
    const [loading, setLoading] = useState(false)

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmitBusiness = (data) => {
        setLoading(true)
        // check password and confirm password match
        if (data.password_b !== data.confirm_password_b) {
            setLoading(false)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Passwords do not match!',
            })
            return
        }

        // if agree_tos is not checked
        if (!data.agree_tos_b) {
            setLoading(false)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please agree to the Terms of Service and Privacy Policy!',
            })
            return
        }



        const newData = {
            ...data,
            // remove confirm_password from data
            confirm_password_b: undefined
        }

        fetch('/api/businessuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)

        }).then(res => res.json())
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
            <form onSubmit={handleSubmit(onSubmitBusiness)} className='mt-5'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name_b">Name</label>
                        <input
                            {...register("name_b", { required: true })}
                            aria-invalid={errors.name_b ? "true" : "false"}
                            type="text" name='name_b' id='name_b' className='bg-[#060C18] border border-gray-300 rounded-md px-5 py-3' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="email_b">Email</label>
                        <input
                            {...register("email_b", { required: true })}
                            aria-invalid={errors.email_b ? "true" : "false"}
                            defaultValue={emailStructured}
                            type="email" name='email_b' id='email_b' className='bg-[#060C18] border border-gray-300 rounded-md px-5 py-3' />
                    </div>

                    {/* company name, Position, Employees, Storage needs */}

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="company_name">Company Name</label>
                        <input
                            {...register("company_name", { required: true })}
                            aria-invalid={errors.company_name ? "true" : "false"}
                            type="text" name='company_name' id='company_name' className='bg-[#060C18] border border-gray-300 rounded-md px-5 py-3' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="position">Position</label>
                        <input
                            {...register("position", { required: true })}
                            aria-invalid={errors.position ? "true" : "false"}
                            type="text" name='position' id='position' className='bg-[#060C18] border border-gray-300 rounded-md px-5 py-3' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="employees">Employees</label>
                        <select
                            {...register("employees", { required: true })}
                            aria-invalid={errors.employees ? "true" : "false"}
                            name="employees" id="employees" className='bg-[#060C18] border border-gray-300 rounded-md px-5 py-3'>
                            <option value="1-50">1-50</option>
                            <option value="51-1000">51-1000</option>
                            <option value="1000+">1000+</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="storage_needs">Storage Needs</label>
                        <select
                            {...register("storage_needs", { required: true })}
                            aria-invalid={errors.storage_needs ? "true" : "false"}
                            name="storage_needs" id="storage_needs" className='bg-[#060C18] border border-gray-300 rounded-md px-5 py-3'>
                            <option value="150">Less than 150 TB</option>
                            <option value="150-499">150-499 TB</option>
                            <option value="500-999">500-999 TB</option>
                            <option value="PB+">PB+</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="password_b">Password</label>
                        <input
                            {...register("password_b", { required: true })}
                            aria-invalid={errors.password_b ? "true" : "false"}
                            type="password" name='password_b' id='password_b' className='bg-[#060C18] border border-gray-300 rounded-md px-5 py-3' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="confirm_password_b">Confirm Password</label>
                        <input
                            {...register("confirm_password_b", { required: true })}
                            aria-invalid={errors.confirm_password_b ? "true" : "false"}
                            type="password" name='confirm_password_b' id='confirm_password_b' className='bg-[#060C18] border border-gray-300 rounded-md px-5 py-3' />
                    </div>

                    {/* Contact sales checkbox*/}
                    <div className='flex items-center gap-2 py-4'>
                        <input
                            {...register("agree_contact_sales", { required: false })}
                            type="checkbox" name='agree_contact_sales' id='agree_contact_sales' className='checkbox checkbox-info' />
                        <label htmlFor="agree_contact_sales">Please have the Sales Team contact me</label>
                    </div>

                    {/* i agree checkbox */}
                    <div className='flex items-center gap-2 pb-4'>
                        <input
                            {...register("agree_tos_b", { required: false })}
                            type="checkbox" name='agree_tos_b' id='agree_tos_b' className='checkbox checkbox-info' />
                        <label htmlFor="agree_tos_b">I agree to the <span className='text-sky-500 underline cursor-pointer'>Terms of Service</span> and <span className='text-sky-500  underline cursor-pointer'>Privacy Policy</span></label>
                    </div>
                    <button
                        type='submit'
                        className='bg-sky-500 text-white px-7 py-3 rounded-md'>
                        {loading ? 'Please wait...' : 'Get Started'}
                    </button>

                </div>
            </form>

            {/* already have an account */}
            <div className='flex items-center justify-center gap-2 mt-5  text-xs lg:text-base'>
                <p>Already have an account?</p>
                <a href="#" className='text-sky-500'>Sign in</a>
            </div>

        </div>
    )
}

export default SignupBusiness