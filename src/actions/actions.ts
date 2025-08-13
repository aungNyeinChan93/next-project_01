'use server'

import { auth, signOut as authSignOut } from "@/auth"; // rename imported signOut
// import { revalidatePath } from "next/cache";

export async function signOutAction(url: string) { // renamed function
    const session = await auth();
    if (session) {
        await authSignOut({ redirectTo: url }); // pass options to imported signOut
        // revalidatePath(url);
    }
}