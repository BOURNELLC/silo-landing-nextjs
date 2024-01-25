import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export const GET = async (req, res) => {
    const users = await prisma.personaluser.findMany();
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
            password
        } = body;


        const user = await prisma.personaluser.create({
            data: {
                name,
                email,
                agree_tos,
                password: password ? await bcrypt.hash(password, 10) : null,
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