"use client";

import React from "react";
import { Lightbulb } from "lucide-react";

const Toggle = () => {
  return (
    <React.Fragment>
      <main>
        <button
          type="button"
          onClick={() => document.documentElement.classList.toggle("dark")}
          className=" absolute top-6 right-6 btn bg-green-400"
        >
          <Lightbulb size={16} />
        </button>
      </main>
    </React.Fragment>
  );
};

export default Toggle;
