import { NextRequest, NextResponse } from "next/server";
import { users } from '@/app/api/tests/users/data'
import { redirect } from "next/navigation";


// get user
export async function GET(request: Request, { params }: { params: Promise<{ userId: string }> }) {
    const { userId } = await params;

    if (Number(userId) > users.length) redirect('/api/tests/users')
    const user = users.find(u => u.id === Number(userId))
    return NextResponse.json({ userId, user })
}

// user update
export async function PATCH(request: NextRequest, { params }: { params: Promise<{ userId: string }> }) {
    const body = await request.json();
    const { userId } = await params

    const index = users.findIndex(u => u.id === Number(userId))

    users[index] = { ...body, id: Number(userId), updatedAt: Date.now() };

    return new NextResponse(JSON.stringify(users[index], null, 2))
}

// user delete
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ userId: string }> }) {
    const { userId } = await params

    const index = users.findIndex(u => u.id === Number(userId))

    const deleteUser = users.splice(index, 1)

    return NextResponse.json({ deleteUser, users })
}