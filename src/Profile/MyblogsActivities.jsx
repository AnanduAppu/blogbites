import React, { useState,useRef } from "react";
import {NavLink, Outlet } from "react-router-dom";




function MyblogsActivities() {




  return (
<>
      <div className="w-[100%] p-5 sm:p-10 md:p-16 bg-white rounded-xl shadow-lg shadow-gray-400">
        <div className="border-b mb-5 flex gap-5 text-sm">
          <NavLink
            to="/profile"
            end
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 flex items-center pb-2 border-b-2 border-indigo-600 uppercase font-semibold inline-block cursor-pointer"
                : "text-gray-600 flex items-center pb-2 border-b-2 border-gray-600 uppercase font-semibold inline-block cursor-pointer"
            }
          >
            My Blogs
          </NavLink>
          <NavLink
            to="/profile/likedblogs"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 flex items-center pb-2 border-b-2 border-indigo-600 uppercase font-semibold inline-block cursor-pointer"
                : "text-gray-600 flex items-center pb-2 border-b-2 border-gray-600 uppercase font-semibold inline-block cursor-pointer"
            }
          >
            Liked Blogs
          </NavLink>
          <NavLink
            to="/profile/savedblogs"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 flex items-center pb-2 border-b-2 border-indigo-600 uppercase font-semibold inline-block cursor-pointer"
                : "text-gray-600 flex items-center pb-2 border-b-2 border-gray-600 uppercase font-semibold inline-block cursor-pointer"
            }
          >
            Saved Blogs
          </NavLink>
          <a href="#" className="text-gray-600 font-semibold inline-block">
            See All
          </a>
        </div>

        <div className="w-[100%]">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default MyblogsActivities;