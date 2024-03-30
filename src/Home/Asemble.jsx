import React from "react";
import Blognavbar from "./Blognav";
import BlogRightSidebar from "./BlogRightSidebar";

import Blogside from "./blogside";
import Blogview from "./Blogview";
import Carousel from "./Carousel";
import Phonesize from "./Phonesize";
import Search_post from "./Search_post";

function Asemble() {
  return (
    <>
      <Blognavbar />

      <Search_post />
      <Phonesize/>
      <div className=" sm:mx-[5%] ">
      
        <div className="flex ">
          <div className="w-[70%] max-md:w-[100%] max-sm:mx-5"><Blogview /></div>
          <div className="w-[30%] py-3.5 max-md:hidden">
              <BlogRightSidebar/>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Asemble;
