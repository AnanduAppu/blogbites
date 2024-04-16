import React, { useContext, useEffect } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { Link, Outlet } from "react-router-dom";


function MyblogsActivities() {

  return (
    <>
      <div className="w-[100%] p-5 sm:p-10 md:p-16 bg-white rounded-xl shadow-lg shadow-gray-400">
        <div className="border-b mb-5 flex gap-5 text-sm">
          <div className="text-indigo-600 flex items-center pb-2  border-b-2 border-indigo-600 uppercase">
            <Link to="/profile"  className="font-semibold inline-block ">
              My Blogs
            </Link>
          </div>
          <div className="text-gray-600 flex items-center pb-2  border-b-2 border-gray-600  uppercase">
            <Link to="likedblogs" className="font-semibold inline-block ">
            liked Blogs
            </Link>
          </div>

          <div className="text-gray-600 flex items-center pb-2 border-b-2 border-gray-600  uppercase">
            <a href="#" className="font-semibold inline-block ">
            Saved Blogs
            </a>
          </div>

      

          <a href="#">See All</a>
        </div>

       
        
        <Outlet/>

       
      </div>
    </>
  );
}

export default MyblogsActivities;
