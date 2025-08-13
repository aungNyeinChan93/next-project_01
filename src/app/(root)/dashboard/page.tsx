import { auth } from "@/auth";
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
        <p className="p-2 mt-3 text-center text-2xl capitalize font-semibold tracking-widest text-indigo-700 underline underline-offset-[16px] decoration-slate-400">
          Welcome {session?.user?.name}
        </p>
      </main>
    </React.Fragment>
  );
};

export default Dashboard;
