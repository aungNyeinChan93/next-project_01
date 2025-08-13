import { auth } from "@/auth";
import Hero from "@/components/share/Hero";
import SearchForm from "@/components/share/SearchForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    absolute: "Dashboard",
  },
};

interface Props {
  searchParams: Promise<{
    [key: string]: string;
  }>;
}

const Dashboard = async ({ searchParams }: Props) => {
  const session = await auth();
  const { search } = await searchParams;

  return (
    <React.Fragment>
      <main className="pannel w-full min-h-screen ">
        <section className="pannel px-2 py-1 bg-amber-200/70">
          <div className="flex justify-between items-center px-[120px] mt-4">
            <p className="p-2 mt-3 text-start text-2xl  capitalize font-bold tracking-widest text-slate-900 underline underline-offset-[16px] decoration-slate-400">
              Welcome {session?.user?.name || "unknow"}
            </p>
            <div>
              <SearchForm search={search} />
            </div>
          </div>
          <Hero image={session?.user?.image || ""} />
        </section>
      </main>
    </React.Fragment>
  );
};

export default Dashboard;
