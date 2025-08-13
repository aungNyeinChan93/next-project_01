import { auth } from "@/auth";
import Hero from "@/components/share/Hero";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    absolute: "Dashboard",
  },
};

const Dashboard = async () => {
  const session = await auth();
  console.log(session);

  return (
    <React.Fragment>
      <main className="pannel w-full min-h-screen ">
        <section className="pannel px-2 py-1 bg-amber-200/70">
          <p className="p-2 mt-3 text-start text-xl ms-[110px] capitalize font-bold tracking-widest text-slate-900 underline underline-offset-[16px] decoration-slate-400">
            Welcome {session?.user?.name || "unknow"}
          </p>
          <Hero image={session?.user?.image || ""} />
        </section>
      </main>
    </React.Fragment>
  );
};

export default Dashboard;
