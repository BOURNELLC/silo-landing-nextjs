import React from 'react'

function ConnectApps() {
    return (
        <div>
            <div className="bg-[#0d182e] text-white py-20">
                <div className="mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center gap-10">
                        <div className="text-center">
                            <h2 className="text-xl font-semibold text-sky-500">Connect Your Apps</h2>
                            <p className="text-gray-400 text-2xl text-center py-5 w-full">
                                Discover Integration possibilities{" "}
                            </p>
                        </div>

                        <div>
                            <div className="flex flex-wrap justify-center gap-10">
                                <div className="flex flex-col lg:flex-row items-center gap-5">
                                    <picture>
                                        <img
                                            className="h-16 opacity-80 hover:opacity-100 transition duration-150"
                                            src="/github.png"
                                            alt=""
                                        />
                                    </picture>
                                    <picture>
                                        <img
                                            className="h-16 opacity-80 hover:opacity-100 transition duration-150"
                                            src="/gitlab.png"
                                            alt=""
                                        />
                                    </picture>
                                    <picture>
                                        <img
                                            className="h-16 opacity-80 hover:opacity-100 transition duration-150"
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
                                            alt=""
                                        />
                                    </picture>
                                    <picture>
                                        <img
                                            className="h-20 opacity-80 hover:opacity-100 transition duration-150"
                                            src="https://www.svgrepo.com/download/353655/discord-icon.svg"
                                            alt=""
                                        />
                                    </picture>
                                    <picture>
                                        <img
                                            className="h-20 opacity-80 hover:opacity-100 transition duration-150"
                                            src="https://upload.wikimedia.org/wikipedia/commons/9/93/Wordpress_Blue_logo.png"
                                            alt=""
                                        />
                                    </picture>
                                    <picture>
                                        <img
                                            className="h-16 opacity-80 hover:opacity-100 transition duration-150"
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dropbox_Icon.svg/2202px-Dropbox_Icon.svg.png"
                                            alt=""
                                        />
                                    </picture>
                                    <picture>
                                        <img
                                            className="h-16 opacity-80 hover:opacity-100 transition duration-150"
                                            src="/slack.png"
                                            alt=""
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center mt-10">
                            <button className="bg-sky-500 hover:bg-sky-600 transition duration-150 text-white px-10 py-3 rounded-md">
                                Get Connected with Silo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConnectApps