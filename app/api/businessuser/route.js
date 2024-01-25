import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export const GET = async (req, res) => {
    const users = await prisma.businessuser.findMany();
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
            agree_contact_sales,
            agree_tos_b,
            company_name,
            email_b,
            employees,
            name_b,
            password_b,
            position,
            storage_needs
        } = body;


        const user = await prisma.businessuser.create({
            data: {
                agree_contact_sales,
                agree_tos_b,
                company_name,
                email_b,
                employees,
                name_b,
                position,
                storage_needs,
                password_b: password_b ? await bcrypt.hash(password_b, 10) : null,
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