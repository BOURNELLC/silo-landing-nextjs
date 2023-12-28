import React from 'react'

function CaseStudies() {
    return (
        <div className='bg-[#060C18] text-white py-20'>
            <section className=" max-w-7xl mx-auto px-7 2xl:px-0">
                <h2 className='text-3xl font-semibold text-center pt-14 pb-5 text-white'>
                    Case Studies
                </h2>
                <p className='text-center text-sm'>
                    Explore success stories of our customers who have benefited from our secure file sharing service.
                </p>


                <div className="grid grid-cols-1 lg:grid-cols-3 mt-14 gap-14">
                    <div className="card card-compact bg-white bg-opacity-10 shadow-xl">
                        <figure><img src="https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b53d6186fc53_ABM%20College%20Web%20developer%20main.jpg" alt="pic" className='h-[230px] w-full object-cover' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Web Agencies</h2>
                            <p>
                                With our encrypted file sharing service, web developers and quality assurance teams can share critical review videos over the cloud without the concern of high costs.
                            </p>
                        </div>
                    </div>
                    <div className="card card-compact bg-white bg-opacity-10 shadow-xl">
                        <figure><img src="https://www.solutions.kompass.com/blog/media/business-data-make-or-brake-you.jpg" alt="pic" className='h-[230px] w-full object-cover' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Business Data</h2>
                            <p>
                                How our encrypted file sharing solution led to a 60% cost reduction in bandwidth costs for one of Silo's enterprise clients.
                            </p>
                        </div>
                    </div>
                    <div className="card card-compact bg-white bg-opacity-10 shadow-xl">
                        <figure><img src="https://www.cio.com/wp-content/uploads/2023/05/multiple-exposure_silhouettes_with_data_overlay_of_scientific_algorithms_formulas_intelligence_analysis_strategy_imagination_by_metamorworks_gettyimages-1201354389_2400x1600-100854455-orig-1.jpg?quality=50&strip=all" alt="pic" className='h-[230px] w-full object-cover' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Family Data</h2>
                            <p>
                                Silo Network is a solution for internet storage of documents and other data that are for your eyes only. Zero-trust system architecture and AES-256 encryption.
                            </p>
                        </div>
                    </div>
                </div>









            </section>
        </div>
    )
}

export default CaseStudies