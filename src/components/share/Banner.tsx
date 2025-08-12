"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
  const router = useRouter();
  return (
    <React.Fragment>
      <main className="!pannel">
        <section className="pannel lg:grid lg:h-screen lg:place-content-center">
          <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-prose text-center">
              <h1 className="text-4xl font-bold text-indigo-900 sm:text-5xl">
                Understand user flow and
                <strong className="text-indigo-600"> increase </strong>
                conversions
              </h1>

              <p className="mt-4 text-base text-pretty pannel  sm:text-lg/relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
                nisi. Natus, provident accusamus impedit minima harum corporis
                iusto.
              </p>

              <div className="mt-4 flex justify-center gap-4 sm:mt-6">
                <Link
                  className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                  href={{
                    pathname: "/dashboard",
                    // query: {
                    //   name: "test",
                    // },
                  }}
                >
                  Go To Dashboard
                </Link>

                <Link
                  className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                  href="/register"
                >
                  Sign Up
                </Link>

                <button
                  type="button"
                  onClick={() => router.push("/tests")}
                  className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                >
                  Go to Test
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Banner;
