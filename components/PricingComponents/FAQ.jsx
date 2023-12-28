import React from 'react'

function FAQ() {
    return (
        <div className='bg-[#060C18] text-white py-20'>
            <section className=" max-w-7xl mx-auto px-7 2xl:px-0">

                <h2 className='text-3xl font-semibold text-center pt-14 pb-5 text-white'>
                    Get Started For Free
                </h2>
                <p className='text-center text-sm'>
                    No credit card required. Start your encrypted file sharing with Silo's 10GB plan for the new users.
                </p>

                <div className='flex flex-col pt-20'>
                    <div className="collapse collapse-arrow bg-white bg-opacity-5 mb-1">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-medium">
                            What payment methods do you accept?
                        </div>
                        <div className="collapse-content text-gray-400">
                            <p>We accept major credit cards (Visa, Mastercard, American Express) as well as PayPal.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-white bg-opacity-5 mb-1">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-medium">
                            Do you offer a trial version?
                        </div>
                        <div className="collapse-content text-gray-400">
                            <p>Yes, we do! Sign up on our website to try our encrypted file sharing for free.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-white bg-opacity-5 mb-1">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-medium">
                            How can I contact customer support?
                        </div>
                        <div className="collapse-content text-gray-400">
                            <p>You can reach our customer support team by email or through our Support form where we will respond. Our support hours are Monday through Friday, 9am to 5pm EST.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-white bg-opacity-5 mb-1">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-medium">
                            Are you hiring?
                        </div>
                        <div className="collapse-content text-gray-400">
                            <p>We always welcome skilled individuals to join our team. Please write to us at candidates@silo.network with a resume and cover letter if you are interested in joining.</p>
                        </div>
                    </div>
                </div>



            </section>
        </div>
    )
}

export default FAQ