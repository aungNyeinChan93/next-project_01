import { signOutAction } from "@/actions/actions";
import React from "react";

const LogoutAction = async () => {
  return (
    <React.Fragment>
      <main>
        <form action={() => signOutAction("/")}>
          <button type="submit">Logout</button>
        </form>
      </main>
    </React.Fragment>
  );
};

export default LogoutAction;
