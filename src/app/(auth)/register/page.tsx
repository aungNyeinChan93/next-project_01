import React from "react";
import { signIn, auth } from "@/auth";

const Register = async () => {
  const session = await auth();
  console.log({ session });

  return (
    <React.Fragment>
      <main className="w-full min-h-100 flex justify-center items-center">
        <form
          action={async () => {
            "use server";
            await signIn("github", { redirectTo: "/dashboard" });
          }}
        >
          <button
            type="submit"
            className="btn bg-slate-900 rounded-md text-white"
          >
            Register by Github
          </button>
        </form>
      </main>
    </React.Fragment>
  );
};

export default Register;
