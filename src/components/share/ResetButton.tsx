"use client";

import Link from "next/link";
import React from "react";
import { CircleX } from "lucide-react";

const ResetButton = () => {
  const reset = () => {
    const form = document.querySelector(".serach-form") as HTMLFormElement;
    if (form) {
      form.reset();
    }
  };
  return (
    <React.Fragment>
      <button onClick={reset} type="reset" className=" text-slate-700/50 mx-2">
        <Link href={"/dashboard"}>
          <CircleX size={25} />
        </Link>
      </button>
    </React.Fragment>
  );
};

export default ResetButton;
