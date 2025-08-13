"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import React, { useState } from "react";
import LogoutAction from "./LogoutAvtion";

interface Props {
  session: any;
}
const Avator = ({ session }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <React.Fragment>
      <main className=" relative">
        <Image
          onClick={() => setShow((prev) => !prev)}
          src={session.user?.image ?? ""}
          alt={session?.user?.id ?? ""}
          width={40}
          height={40}
          className=" rounded-full"
        />
        {show && (
          <>
            <div className="w-40 bg-slate-400 text-black rounded-2xl absolute top-16 right-1">
              <ul className="p-4 flex flex-col gap-3 ">
                <li className="text-base hover:text-indigo-600 font-semibold tracking-wider">
                  Profile
                </li>
                <li className="text-base hover:text-indigo-600 font-semibold tracking-wider">
                  Setting
                </li>
                <li className="text-base hover:text-indigo-600 font-semibold tracking-wider">
                  <LogoutAction />
                </li>
              </ul>
            </div>
          </>
        )}
      </main>
    </React.Fragment>
  );
};

export default Avator;
