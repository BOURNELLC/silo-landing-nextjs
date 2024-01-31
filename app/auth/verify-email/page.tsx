import React from 'react';
import prisma from '@/app/libs/prismadb';


interface VerifyEmailPageProps {
    searchParams: { [key: string]: string | string[] | undefined };
}

const verifyEmailPage = async ({ searchParams }: VerifyEmailPageProps) => {
    if (searchParams.token) {
        const user = await prisma.user.findUnique({
            where: {
                emailVerificationToken: searchParams.token as string
            }
        });

        if (!user) {
            return (
                <div className='text-center py-20 bg-gray-900 text-white min-h-screen'>
                    <div className="flex items-center justify-center gap-2 mb-3 pt-28">
                        <h1 className='font-bold text-3xl'>No user found with such token!</h1>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                            </svg>


                        </span>
                    </div>
                    <p>
                        The token you are using is invalid. Please check your email again.
                    </p>
                </div>
            );

        }

        await prisma.user.update({
            where: {
                emailVerificationToken: searchParams.token as string
            },
            data: {
                emailVerificationToken: null,
                emailVerified: true
            }
        });

        return (
            <div className='text-center py-20 bg-gray-900 text-white min-h-screen'>
                <div className="flex items-center justify-center gap-2 mb-3 pt-28">
                    <h1 className='font-bold text-3xl'>
                        Email verified successfully
                    </h1>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="aqua" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>

                    </span>
                </div>
                <p>
                    Your email has been verified. You can close this page.
                </p>
            </div>
        );
    }

    return (
        <div className='text-center py-20 bg-gray-900 text-white min-h-screen'>
            <div className="flex items-center justify-center gap-2 mb-3 pt-28">
                <h1 className='font-bold text-3xl'>Invalid token</h1>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                    </svg>


                </span>
            </div>
            <p>
                The token you are using is invalid. Please check your email again.
            </p>
        </div>
    );
}

export default verifyEmailPage;
