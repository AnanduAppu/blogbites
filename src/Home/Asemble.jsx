import React, { useEffect, useState } from "react";
import BlogRightSidebar from "./BlogRightSidebar";
import Blogview from "./Blogview";
import Phonesize from "./Phonesize";
import ProfileCard from "./ProfileCard";
import Slider from "./Slider1";

function Asemble() {


  return (
    <div className="bg-gray-200  bg-opacity-100">
      <Slider />

      <Phonesize />
      <div className="   ">
 
        <div className="flex justify-between ">
          <div className="w-[20%] mx-2 max-sm:hidden relative">
          <ProfileCard/>
          </div>
        
          <div className="w-[55%] max-md:w-[100%] max-sm:mx-5">
            <Blogview />
          </div>
          <div className="w-[25%] py-3.5 max-md:hidden relative">
            <div className="sticky top-0 mt-1">
              <BlogRightSidebar />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Asemble;
