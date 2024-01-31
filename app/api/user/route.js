import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';


export const GET = async (req, res) => {
    const users = await prisma.user.findMany();
    return NextResponse.json({
        success: true,
        message: "GET Success",
        data: users
    });
};


export const POST = async (request) => {
    try {
        const body = await request.json();

        const {
            name,
            email,
            agree_tos,
            password,
            agree_contact_sales,
            company_name,
            employees,
            position,
            storage_needs
        } = body;


        const user = await prisma.user.create({
            data: {
                name,
                email,
                agree_tos,
                password: await bcrypt.hash(password, 10),
                agree_contact_sales: agree_contact_sales ? agree_contact_sales : false,
                company_name: company_name ? company_name : null,
                employees: employees ? employees : null,
                position: position ? position : null,
                storage_needs: storage_needs ? storage_needs : null,
                emailVerificationToken: null,

            },
        });
        return NextResponse.json({
            success: true,
            message: "POST Success",
            data: user
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: "POST Failed",
            error: error
        })

    }
};


// UPDATE USERS emailVerificationToken 
export const PUT = async (request) => {
    try {
        const body = await request.json();
        const { id, emailVerificationToken } = body;
        const user = await prisma.user.update({
            where: { id: id },
            data: { emailVerificationToken: emailVerificationToken },
        });
        return NextResponse.json({
            success: true,
            message: "PUT Success",
            data: user
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: "PUT Failed",
            error: error
        })

    }
}