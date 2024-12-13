import React from "react";
import { Outlet } from "react-router-dom";

import "./styles.scss";

function AuthenLayoutRoot() {
  return (
    <div className="flex md:flex-row flex-col items-center">
      <div className="grow">
        <Outlet />
      </div>
      <div className="w-1/2 flex-none h-screen flex justify-center items-center banner">
        <h1 className="drop-shadow-[0_35px_35px_rgba(78, 72, 54, 1)] text-2xl min-[376px]:text-3xl sm:text-4xl lg:text-5xl banner-title prevent-select mt-72">
          Nhân tướng học steven
        </h1>
      </div>
    </div>
  );
}

export default AuthenLayoutRoot;
