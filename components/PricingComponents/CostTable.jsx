import React from 'react'

function CostTable() {
    return (
        <div className='bg-[#060C18] text-white'>
            <section className=" max-w-7xl mx-auto px-7 2xl:px-0 py-14">
                <p className='text-left'>
                    See how Silo pricing gives real value at 1/3 the rates of AWS S3.
                </p>


                <div className=' overflow-x-auto'>
                    <table className="table-auto mx-auto mt-10 table ">
                        <thead>
                            <tr>
                                <th className='text-left'></th>
                                <th className='text-center text-white bg-sky-500 bg-opacity-20 min-w-[150px] text-lg'>Silo Network</th>
                                <th className='text-center text-white min-w-[150px]'>
                                    <div className='flex items-center justify-center'>
                                        <img src="https://editor.analyticsvidhya.com/uploads/48060amazon-s3_preview.png" alt="" className='h-10 rounded-md' />
                                    </div>
                                </th>
                                <th className='text-center text-white min-w-[150px]'>
                                    <div className='flex items-center justify-center'>
                                        <img src="https://escience.washington.edu/wp-content/uploads/2020/11/Azure-logo-1-1024x559.jpg" alt="" className='h-10 rounded-md' />
                                    </div>
                                </th>
                                <th className='text-center text-white min-w-[150px]'>
                                    <div className='flex items-center justify-center'>
                                        <img src="https://i.pcmag.com/imagery/reviews/02yVL9f8Jw1atwoG6sgFZDH-7..v1569482492.jpg" alt="" className='h-10 rounded-md' />
                                    </div>
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bg-[#060C18]'>
                                <td className='text-left'>
                                    Storage <br />
                                    <span className='text-gray-400 text-sm'>TB/month</span>
                                </td>
                                <td className='text-center bg-sky-500 bg-opacity-20'>$8</td>
                                <td className='text-center'>$26</td>
                                <td className='text-center'>$20</td>
                                <td className='text-center'>$23</td>
                            </tr>
                            <tr className='bg-[#060C18]'>
                                <td className='text-left'>
                                    Egress <br />
                                    <span className='text-gray-400 text-sm'>$/GB</span>
                                </td>
                                <td className='text-center bg-sky-500 bg-opacity-20'>Free*</td>
                                <td className='text-center'>$0.09</td>
                                <td className='text-center'>$0.08</td>
                                <td className='text-center'>$0.11</td>
                            </tr>

                        </tbody>
                    </table>
                </div>









            </section>

        </div>
    )
}

export default CostTable