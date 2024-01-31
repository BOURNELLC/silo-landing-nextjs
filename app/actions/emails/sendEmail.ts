'use server'

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (payload: any, options?: any | undefined) => {
    const data = await resend.emails.send(payload, options);
    console.log("email sent successfully");
    return data;
}
    