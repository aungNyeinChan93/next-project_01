// export { auth as middleware } from "@/auth"

import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export const middleware = async (request: NextRequest) => { //guard for app router

    const response = NextResponse.next()

    console.log(" __Request url__ ", request.url);
    console.log(" __Origin__ ", request.nextUrl.origin);
    console.log(" __pathname__ ", request.nextUrl.pathname);

    const themeCookie = request.cookies.get('theme')

    if (!themeCookie) {
        // nextCookies.set('theme', "dark") // that cookies method is not work on middleware file
        response.cookies.set('theme', 'dark');
    }

    return response;

}