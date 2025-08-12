import Link from "next/link";
import React, { ReactNode } from "react";

const AuthLayout = async ({ children }: { children: Readonly<ReactNode> }) => {
  return (
    <React.Fragment>
      <main className="container mx-auto">
        <nav className="px-2 py-4 pannel shadow-md mb-4 shadow-slate-900">
          <ul className="flex gap-4 justify-center items-center">
            <li className=" px-4 py-2 bg-indigo-500 rounded-2xl cursor-pointer">
              <Link href={"/login"}>Login</Link>
            </li>
            <li className=" px-4 py-2 bg-indigo-500 rounded-2xl cursor-pointer">
              <Link href={"/register"}>Register</Link>
            </li>
          </ul>
        </nav>
        <section className="w-full min-h-screen ">{children}</section>
      </main>
    </React.Fragment>
  );
};

export default AuthLayout;
