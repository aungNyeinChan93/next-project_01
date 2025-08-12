"use client";

import React, { useEffect } from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const DetailTestError = ({ error, reset }: Props) => {
  useEffect(() => {
    if (error instanceof Error) console.error(error?.message);
  }, [error]);
  return (
    <React.Fragment>
      <main className="w-full h-screen flex justify-center items-center ">
        <div className="flex flex-col items-center gap-5">
          <p className="text-3xl text-red-600 font-bold">
            {/* {error && error.message} */}
            Something went wrong! Please Try again
          </p>
          <button
            className="btn ms-3 bg-red-600"
            type="button"
            onClick={() => reset()}
          >
            Try again
          </button>
        </div>
      </main>
    </React.Fragment>
  );
};

export default DetailTestError;
