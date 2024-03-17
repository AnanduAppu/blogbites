import React from "react";
import logwal from "../assets/REGImages/logInimg1.jpg";

import { Outlet } from "react-router-dom";

function Loginpage() {
  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img src={logwal} alt="" className="w-full h-full object-cover" />
      </div>

    <Outlet/>
    </section>
  );
}

export default Loginpage;
