"use client";

import React from "react";

const Toggle = () => {
  return (
    <React.Fragment>
      <main>
        <button
          type="button"
          onClick={() => document.documentElement.classList.toggle("dark")}
          className=" absolute top-6 right-6 btn bg-green-400"
        >
          Mode
        </button>
      </main>
    </React.Fragment>
  );
};

export default Toggle;
