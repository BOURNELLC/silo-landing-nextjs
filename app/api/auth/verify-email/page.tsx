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
                <div>
                    <h1>Invalid token</h1>
                    <p>
                        The token you are using is invalid. Please try again.
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
            <div>
                <h1>Email verified</h1>
                <p>
                    Your email has been verified.
                </p>
            </div>
        );
    }

    return (
        <div>
            <h1>Invalid token</h1>
            <p>
                The token you are using is invalid. Please check your email again.
            </p>
        </div>
    );
}

export default verifyEmailPage;
