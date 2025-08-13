"use server"

import { auth, signOut as authSignOut, signIn as authSignIn } from "@/auth";

export async function signOutAction(url: string) {
    const session = await auth();
    if (session) {
        await authSignOut({ redirectTo: url });
    }
}

export async function signInAction(url: string, provider: string) {
    await authSignIn(provider, { redirectTo: url })
}