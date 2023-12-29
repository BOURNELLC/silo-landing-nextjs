'use client'

import React, { useEffect, useState } from 'react'

function CostCalculator() {

    const [TBRange, setTBRange] = useState(500)
    const [MonthlyDownloads, setMonthlyDownloads] = useState(500)



    useEffect(() => {
        handleCosts()

    }, [TBRange, MonthlyDownloads])

    const handleTBRange = (e) => {
        // minimum 1 TB
        if (e.target.value < 1) {
            setTBRange(1)
            return
        }

        setTBRange(e.target.value)
        handleCosts()
    }

    const handleMonthlyDownloads = (e) => {
        setMonthlyDownloads(e.target.value)
        handleCosts()
    }


    const [SiloCost, setSiloCost] = useState(0)
    const [AmazonCost, setAmazonCost] = useState(0)
    const [AzureCost, setAzureCost] = useState(0)
    const [GoogleCost, setGoogleCost] = useState(0)

    const [SiloBarHeight, setSiloBarHeight] = useState(0)
    const [AmazonBarHeight, setAmazonBarHeight] = useState(0)
    const [AzureBarHeight, setAzureBarHeight] = useState(0)
    const [GoogleBarHeight, setGoogleBarHeight] = useState(0)

    const handleCosts = () => {
        let TB = TBRange
        let Downloads = MonthlyDownloads

        // Silo Network cost
        let SiloStorageCost = 8 * TB

        // Egress is free until the egress used exceeds 3 times the storage used, after which it is $10 per TB
        let SiloEgressCost = Downloads > (TB * 3) ? (Downloads - (TB * 3)) * 10 : 0
        let SiloTotalCost = SiloStorageCost + SiloEgressCost
        setSiloCost(SiloTotalCost * 12)
        setSiloBarHeight(100 - (SiloTotalCost / 1000))

        // Amazon S3 cost
        let AmazonStorageCost = 26 * TB
        let AmazonEgressCost = 0.09 * Downloads * 1000
        let AmazonTotalCost = AmazonStorageCost + AmazonEgressCost
        setAmazonCost(AmazonTotalCost * 12)
        setAmazonBarHeight(100 - (AmazonTotalCost / 1000))

        // Microsoft Azure cost
        let AzureStorageCost = 20 * TB
        let AzureEgressCost = 0.08 * Downloads * 1000
        let AzureTotalCost = AzureStorageCost + AzureEgressCost
        setAzureCost(AzureTotalCost * 12)
        setAzureBarHeight(100 - (AzureTotalCost / 1000))

        // Google Cloud cost
        let GoogleStorageCost = 23 * TB
        let GoogleEgressCost = 0.11 * Downloads * 1000
        let GoogleTotalCost = GoogleStorageCost + GoogleEgressCost
        setGoogleCost(GoogleTotalCost * 12)
        setGoogleBarHeight(100 - (GoogleTotalCost / 1000))
    }






    return (
        <div className='bg-[#060C18] text-white py-20'>
            <section className=" border-t border-gray-800 max-w-7xl mx-auto px-7 2xl:px-0">

                <h2 className='text-3xl font-semibold text-center pt-14 pb-5 text-white'>
                    Cloud Storage Cost and Savings Calculator
                </h2>
                <p className='text-left text-sm'>
                    Compare how $6/TB/month stacks up. <br />
                    Isn't math fun when it reveals how your budget could work harder?
                </p>



                <div className="flex flex-col lg:flex-row gap-10 pt-5">
                    <div className="w-full lg:w-1/2 ">
                        <div className="flex justify-between items-center">
                            <h3 className=" font-semibold text-white">Total Data Stored</h3>
                            <div className="flex items-center gap-2">
                                <input
                                    defaultValue={TBRange}
                                    value={TBRange}
                                    onChange={(e) => handleTBRange(e)}
                                    type="number" className="border border-gray-700 bg-[#060C18] rounded-md px-3 py-2 mt-2 w-[100px]" />
                                <span className="text-white mt-2 ml-2">TB</span>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <input onChange={(e) => handleTBRange(e)}
                                type="range"
                                min="0"
                                defaultValue={500}
                                value={TBRange}
                                max="1000" className="range range-xs range-info" />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 ">
                        <div className="flex justify-between items-center">
                            <h3 className=" font-semibold text-white">Monthly Downloads</h3>
                            <div className="flex items-center gap-2">
                                <input
                                    defaultValue={MonthlyDownloads}
                                    value={MonthlyDownloads}
                                    onChange={(e) => handleMonthlyDownloads(e)}
                                    type="number" className="border border-gray-700 bg-[#060C18] rounded-md px-3 py-2 mt-2 w-[100px]" />
                                <span className="text-white mt-2 ml-2">TB</span>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <input onChange={(e) => handleMonthlyDownloads(e)}
                                type="range"
                                min="0"
                                defaultValue={500}
                                value={MonthlyDownloads}
                                max="1000" className="range range-xs range-info" />
                        </div>
                    </div>

                </div>



                {/* ------------- BAR ------------ */}

                <div className='bg-white bg-opacity-5 my-10 flex justify-evenly rounded-lg px-7 2xl:px-0'>

                    {/* COST BAR FOR SILO */}
                    <div className="flex flex-col justify-between items-center mt-10 pt-5">
                        <h3 className=" text-xs lg:text-sm text-gray-200">
                            ${SiloCost.toFixed(0)} / year
                        </h3>
                        <div className="h-[200px] w-10 lg:w-28 bg-sky-500 overflow-hidden">
                            <div
                                className="h-full bg-[#131824]"
                                style={{ height: `${SiloBarHeight}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* COST BAR FOR AWS */}
                    <div className="flex flex-col justify-between items-center mt-10 pt-5">
                        <h3 className=" text-xs lg:text-sm text-gray-200">
                            ${AmazonCost.toFixed(0)} / year
                        </h3>
                        <div className="h-[200px] w-10 lg:w-28 bg-yellow-500 overflow-hidden">
                            <div
                                className="h-full bg-[#131824]"
                                style={{ height: `${AmazonBarHeight}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* COST BAR FOR AZURE */}
                    <div className="flex flex-col justify-between items-center mt-10 pt-5">
                        <h3 className=" text-xs lg:text-sm text-gray-200">
                            ${AzureCost.toFixed(0)} / year
                        </h3>
                        <div className="h-[200px] w-10 lg:w-28 bg-red-500 overflow-hidden">
                            <div
                                className="h-full bg-[#131824]"
                                style={{ height: `${AzureBarHeight}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* COST BAR FOR GCP */}
                    <div className="flex flex-col justify-between items-center mt-10 pt-5">
                        <h3 className=" text-xs lg:text-sm text-gray-200">
                            ${GoogleCost.toFixed(0)} / year
                        </h3>
                        <div className="h-[200px] w-10 lg:w-28 bg-green-500 overflow-hidden">
                            <div
                                className="h-full bg-[#131824]"
                                style={{ height: `${GoogleBarHeight}%` }}
                            ></div>
                        </div>
                    </div>
                </div>


                <div className='flex justify-evenly px-7 2xl:px-0 text-center'>
                    <div className='w-10 lg:w-28 flex justify-center'>
                        <div className='flex items-center justify-center'>
                            Silo
                        </div>
                    </div>
                    <div className='w-10 lg:w-28 flex justify-center'>
                        <div className='flex items-center justify-center'>
                            <img src="https://editor.analyticsvidhya.com/uploads/48060amazon-s3_preview.png" alt="" className='h-10 rounded-md' />
                        </div>
                    </div>
                    <div className='w-10 lg:w-28 flex justify-center'>
                        <div className='flex items-center justify-center'>
                            <img src="https://escience.washington.edu/wp-content/uploads/2020/11/Azure-logo-1-1024x559.jpg" alt="" className='h-10 rounded-md' />
                        </div>
                    </div>
                    <div className='w-10 lg:w-28 flex justify-center'>
                        <div className='flex items-center justify-center'>
                            <img src="https://i.pcmag.com/imagery/reviews/02yVL9f8Jw1atwoG6sgFZDH-7..v1569482492.jpg" alt="" className='h-10 rounded-md' />
                        </div>
                    </div>

                </div>


                <div className='w-5/6 lg:w-2/3 mx-auto'>
                    <p className='text-gray-400 text-sm text-center mt-10'>
                        Every scenario is a little different, and this calculator uses competitive providers’ published rates for high storage tiers in low cost regions—results viewed here are estimates that require further diligence on your part.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default CostCalculator