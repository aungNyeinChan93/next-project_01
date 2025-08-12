import React from "react";
// import { Mogra } from "next/font/google";
import Banner from "@/components/share/Banner";
import Toggle from "@/components/share/Toggle";

// const mogra = Mogra({
//   weight: "400",
//   subsets: ["latin"],
// });
const HomePage = () => {
  return (
    <React.Fragment>
      <main className="pannel w-full min-h-screen flex flex-col ">
        <section className="pannel flex-grow relative">
          <Toggle />
          <Banner />
        </section>
      </main>
    </React.Fragment>
  );
};

export default HomePage;
