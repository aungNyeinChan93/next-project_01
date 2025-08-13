import { auth, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import Avator from "@/components/share/Avator";
import Loader from "./Loader";

export default async function Navbar() {
  const session = await auth();

  return (
    <header className="flex shadow-md py-5 px-4 sm:px-10 bg-indigo-400 dark:bg-slate-800 min-h-[70px] tracking-wide relative z-50 !pannel">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <Link href="/" className="max-sm:hidden">
          <Image
            className=""
            src={"/next.svg"}
            alt="logo"
            width={80}
            height={20}
          />
        </Link>

        {/* Mobile Menu using <details> for toggle */}
        <details className="lg:hidden">
          <summary className="cursor-pointer">
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5h14M3 10h14M3 15h14"
                clipRule="evenodd"
              />
            </svg>
          </summary>
          <ul className="flex flex-col bg-slate-400 p-4 shadow-md">
            <li className="p-2 text-indigo-400">
              <Link
                href="/dashboard"
                className="hover:text-blue-700  text-slate-600"
              >
                Dashboard
              </Link>
            </li>
            <li className="p-2 text-indigo-400">
              <a href="/team" className="hover:text-blue-700 text-slate-600">
                Team
              </a>
            </li>
            <li className="p-2 text-indigo-400">
              <a
                href="/features"
                className="hover:text-blue-700 text-slate-600"
              >
                Features
              </a>
            </li>
          </ul>
        </details>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6  justify-center items-center">
          <li>
            <Link href="/dashboard" className={`hover:text-blue-700 `}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/team" className="hover:text-blue-700">
              Team
            </Link>
          </li>
          <li>
            <Link href="/features" className="hover:text-blue-700">
              Features
            </Link>
          </li>

          {!session && (
            <>
              <li>
                <Link
                  href="/login"
                  className=" px-4 py-2 bg-slate-200 rounded-md hover:bg-indigo-500 text-black"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className=" px-4 py-2 bg-slate-200 rounded-md hover:bg-indigo-500 text-black"
                >
                  Register
                </Link>
              </li>
            </>
          )}

          {session && (
            <>
              <li>
                {session?.user && (
                  <Suspense fallback={<Loader />}>
                    <Avator session={session} />
                  </Suspense>
                )}
              </li>
              <li>
                <form
                  action={async () => {
                    "use server";
                    await signOut({ redirectTo: "/" });
                  }}
                  className=" px-4 py-2 bg-slate-200 rounded-md hover:bg-indigo-500 text-black"
                >
                  <button type="submit">Logout</button>
                </form>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}
