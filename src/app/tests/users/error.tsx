"use client";

import React from "react";

interface Porps {
  error: Error;
  reset: () => void;
}

const UserError = ({ error, reset }: Porps) => {
  return (
    <React.Fragment>
      <main className="flex justify-center items-center h-screen">
        {error && (
          <div>
            <h3 className="text-2xl text-red-500">{error?.message}</h3>
            <button onClick={reset} className="btn bg-slate-500 text-whitr">
              {" "}
              Try Again
            </button>
          </div>
        )}
      </main>
    </React.Fragment>
  );
};

export default UserError;
