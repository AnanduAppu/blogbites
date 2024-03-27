import React from "react";
import Blognavbar from "./Blognav";
import BlogRightSidebar from "./BlogRightSidebar";

import Blogside from "./blogside";
import Blogview from "./Blogview";
import Carousel from "./Carousel";
import Search_post from "./Search_post";

function Asemble() {
  return (
    <>
      <Blognavbar />

      <Search_post />

      <div className=" sm:mx-[5%] ">
      
        <div className="flex ">
          <div className="w-[70%]"><Blogview /></div>
          <div className="w-[30%]">
              <BlogRightSidebar/>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Asemble;
