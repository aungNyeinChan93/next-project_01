import Loader from "@/components/share/Loader";
import React from "react";

const TestLoading = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center pannel">
        <Loader />
      </main>
    </React.Fragment>
  );
};

export default TestLoading;
