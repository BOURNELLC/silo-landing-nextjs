import * as React from 'react';

interface VerifyEmailTemplateProps {
    emailVerificationToken: string;
}

export const VerifyEmailTemplate: React.FC<Readonly<VerifyEmailTemplateProps>> = ({ emailVerificationToken }) => (
    <div>
        <h1>Verify email</h1>
        <p>
            Please verify your email address by clicking on the link below.
        </p>
        <p>
            <a href={`silo-landing-nextjs.vercel.app/auth/verify-email?token=${emailVerificationToken}`}>
                Verify your email
            </a>
        </p>
    </div>
);

