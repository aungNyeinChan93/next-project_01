import { Metadata } from "next";
import React, { Suspense } from "react";
import { getQuotes, getRecipes } from "./action";
import Toggle from "@/components/share/Toggle";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    default: "Test Page",
    absolute: "Test Page",
  },
  keywords: ["test", "test page"],
};

const TestPage = async () => {
  const [quotes, recipes] = await Promise.all([getQuotes(), getRecipes()]);

  return (
    <React.Fragment>
      <main className=" w-full min-h-screen pannel mx-auto">
        <Toggle />
        <p className="text-center p-4 ">Test Page</p>

        <section className="pannel p-3 rounded-lg flex justify-center items-center ">
          <Suspense fallback={"loading ... "}>
            <div className="grid grid-cols-1 sm:grid-cols-2 px-4 gap-5 flex-1">
              {quotes &&
                Array.isArray(quotes) &&
                quotes?.map((q) => (
                  <p
                    key={q.id}
                    className="p-2 bg-indigo-300 dark:bg-slate-700 dark:text-white rounded my-2"
                  >
                    {" "}
                    {q.quote}
                  </p>
                ))}
            </div>
          </Suspense>
          <Suspense fallback={"loading ... "}>
            <div className="grid grid-cols-1 sm:grid-cols-3 px-4 gap-5 flex-1 p-4 ">
              {recipes &&
                Array.isArray(recipes) &&
                recipes?.map((r) => (
                  <Image
                    src={r.image}
                    alt={r.name}
                    key={r.id}
                    width={150}
                    height={90}
                    className="rounded-2xl"
                  />
                ))}
            </div>
          </Suspense>
        </section>
      </main>
    </React.Fragment>
  );
};

export default TestPage;
