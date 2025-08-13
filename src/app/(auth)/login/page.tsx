import { signInAction } from "@/actions/actions";
import React from "react";

const Login = async () => {
  return (
    <React.Fragment>
      <main className="w-full h-100 flex justify-center items-center">
        <form
          action={async () => {
            "use server";
            await signInAction("/dashboard", "github");
          }}
        >
          <button
            type="submit"
            className="btn bg-slate-600 text-slate-50 rounded-2xl "
          >
            Login With GitHub
          </button>
        </form>
      </main>
    </React.Fragment>
  );
};

export default Login;
