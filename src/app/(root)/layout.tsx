import Navbar from "@/components/share/Navbar";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Home",
};

interface Props {
  children: Readonly<ReactNode>;
}

const AppLayout = async ({ children }: Props) => {
  return (
    <React.Fragment>
      <main className="container mx-auto pannel flex flex-col">
        <section>
          <Navbar />
        </section>
        <section className="flex-grow">{children}</section>
      </main>
    </React.Fragment>
  );
};

export default AppLayout;
