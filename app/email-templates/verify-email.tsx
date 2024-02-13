import * as React from 'react';

interface VerifyEmailTemplateProps {
    emailVerificationToken: string;
}

export const VerifyEmailTemplate: React.FC<Readonly<VerifyEmailTemplateProps>> = ({ emailVerificationToken }) => (
    <div>
        <h1>Thanks for your interest!</h1>
        <p>
            Please verify your email address by clicking on the link below.
        </p>
        <p>
            <a href={`silo.network/auth/verify-email?token=${emailVerificationToken}`}>
                Click here to verify your email
            </a>
        </p>
    </div>
);

