import React, { useEffect, useState } from "react";
import BlogRightSidebar from "./BlogRightSidebar";
import Blogview from "./Blogview";
import Phonesize from "./Phonesize";
import Slider from "./Slider";

function Asemble() {


  return (
    <>
      <Slider />

      <Phonesize />
      <div className=" sm:mx-[5%] ">
        <div className="flex ">
          <div className="w-[70%] max-md:w-[100%] max-sm:mx-5">
            <Blogview />
          </div>
          <div className="w-[30%] py-3.5 max-md:hidden relative">
            <div className="sticky top-0">
              <BlogRightSidebar />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Asemble;
