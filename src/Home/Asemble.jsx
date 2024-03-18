import React from "react";
import Blognav from "./Blognav";
import Blogside from "./blogside";
import Blogview from "./Blogview";
import Search_post from "./Search_post";

function Asemble() {
  return (
    <>
      <Blognav />
      <Blogside />
      
      
      <div className="p-1 lg:mt-2 md:mt-16 max-sm:mt-16  sm:ml-64 ">
     
      <div className=" mx-2 h-[10%]  rounded bg-blue-50 dark:bg-gray-800 border border-y-slate-100 shadow-lg">
            <Search_post/>
        </div>
        <Blogview/>
      </div>
    </>
  );
}

export default Asemble;
