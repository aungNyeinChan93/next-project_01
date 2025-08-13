"use client";

import React from "react";
import { redirect, usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const PathNamePage = () => {
  const pathname = usePathname();
  console.log({ pathname });

  const router = useRouter();

  const goDashboard = () => {
    // redirect("/dashboard");
    router.push("/dashboard");
  };

  return (
    <React.Fragment>
      <main>
        <button
          className="btn bg-red-500 "
          onClick={() => router.replace("/dashboard")}
        >
          {" "}
          Test
        </button>

        <button
          type="button"
          className="btn bg-slate-600 "
          onClick={goDashboard}
        >
          Go To Dashboard
        </button>

        <Link href={"/"} className="btn bg-green-400">
          Home
        </Link>

        <button
          type="button"
          className="btn bg-yellow-400"
          onClick={() => redirect("/login")}
        >
          Go to Login
        </button>
      </main>
    </React.Fragment>
  );
};

export default PathNamePage;
