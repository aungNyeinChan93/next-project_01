import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    absolute: "Dashboard",
  },
};

const Dashboard = async () => {
  return (
    <React.Fragment>
      <main className="pannel w-full min-h-screen ">Dashboard</main>
    </React.Fragment>
  );
};

export default Dashboard;
