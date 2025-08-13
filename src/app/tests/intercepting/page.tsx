import Link from "next/link";
import React from "react";

const InterceptingPage = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center p-2 ">
        <Link className="btn bg-green-300 text-xl " href={"/login"}>
          Login
        </Link>
      </main>
    </React.Fragment>
  );
};

export default InterceptingPage;
