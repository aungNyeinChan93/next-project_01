"use client";
import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      <main className="pannel w-full min-h-screen ">
        <h3>Home Page</h3>
        <button
          type="button"
          onClick={() => document.documentElement.classList.toggle("dark")}
          className="btn"
        >
          toggle
        </button>
      </main>
    </React.Fragment>
  );
};

export default HomePage;
