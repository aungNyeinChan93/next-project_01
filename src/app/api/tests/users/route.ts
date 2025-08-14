import { NextRequest, NextResponse } from "next/server";
import { users, type User } from '@/app/api/tests/users/data'
import { headers, cookies } from "next/headers";



// get all users
export async function GET(_request: NextRequest) {
    const searchParams = _request.nextUrl.searchParams;
    const query = searchParams.get('query');
    const filterUser = query ? users.filter(u => u.name.toLowerCase().includes(query.toLowerCase())) : users;
    return NextResponse.json({ users: filterUser }, { status: 200 })
}


// /tests/users
export async function POST(request: NextRequest) {
    const { name, email, phone } = await request.json();
    if (!name || !email || !phone) return NextResponse.json({ message: 'some fields are required!' }, { status: 400 })

    // header class
    const classHeaders = new Headers(request.headers);
    const authorization = classHeaders.get('Authorization');

    // next-header method
    const nextHeaders = await headers();
    const secrectHeader = nextHeaders.get('secret')

    const newUser: User = {
        id: Number(users.length + 1),
        name, email, phone
    };

    // next-cookie
    const nextCookie = await cookies();
    nextCookie.set('user_id', JSON.stringify(newUser.id));

    users.push(newUser);

    return NextResponse.json({ users, authorization, secrectHeader }, {
        status: 200, headers: {
            'user-data': JSON.stringify(newUser),
            'Set-cookie': `name=${newUser.name}`
        },
    })
}