import React from "react";
import { Link } from "react-router-dom";

function Blogview() {
  return (
    <div className=" max-w-[85rem] py-10 sm:px-6 lg:px-2 lg:py-5 ">
      {/* Grid */}
      <div className=" grid lg:grid-cols-1 gap-5">
        {/* Card */}
        <Link to="/home/blog"
          className="group sm:flex rounded-xl bg-[#f9f9f5] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 border shadow-lg border-slate-200 hover:border-purple-600 duration-500"
          
        >
          <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[200px] sm:w-[250px] sm:h-[350px]">
            <img
              className="size-full absolute top-0 start-0 object-cover"
              src="https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt="Image Description"
            />
          </div>

          <div className="grow">
            <div className="p-4 flex flex-col h-full sm:p-6">
              <div className="mb-3">
                <p className="inline-flex items-center gap-1.5 py-1.5  rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  Business
                </p>
              </div>
              
              <div>
                <h1
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  Incredible accommodation for your team
                </h1>
                <p className="mt-2 text-slate-500">
                  Looking to take your team away on a retreat to enjoy awesome
                  food and take in some sunshine? We have a list of places to do
                  just that.Looking to take your team away on a retreat to enjoy awesome
                  food and take in some sunshine? We have a list of places to do
                  just that.Looking to take your team away on a retreat to enjoy awesome
                  food and take in some sunshine? We have a list of places to do
                  just that.
                </p>
              </div>
              <div className="mt-5 sm:mt-auto">
                {/* Avatar */}
                <div className=" flex justify-between mt-2">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="size-[46px] rounded-full"
                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                        alt="Image Description"
                      />
                    </div>
                    <div className="ms-2.5 sm:ms-4">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                        Aaron Larsson
                      </h4>
                      <p className="text-xs text-gray-500">Feb 15, 2021</p>
                    </div>
                  </div>
                  <div className="flex gap-9 pt-7">
                    <p>Like</p>
                    <p>Save</p>
                  </div>
                </div>
                {/* End Avatar */}
              </div>
            </div>
          </div>
        </Link>
        {/* End Card */}

        {/* Card */}
        <a
          className="group sm:flex rounded-xl dark:focus:outline-none bg-[#f7f7f0] dark:focus:ring-1 dark:focus:ring-gray-600 border shadow-lg border-slate-200 hover:border-purple-600 duration-500"
          href="#"
        >
          <div className="grow">
            <div className="p-4 flex flex-col h-full sm:p-6">
              <div className="mb-3">
                <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  Announcements
                </p>
              </div>
              <div>
                <h1
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  Incredible accommodation for your team
                </h1>
                <p className="mt-2 text-slate-500">
                  Looking to take your team away on a retreat to enjoy awesome
                  food and take in some sunshine? We have a list of places to do
                  just that.Looking to take your team away on a retreat to enjoy awesome
                  food and take in some sunshine? We have a list of places to do
                  just that.Looking to take your team away on a retreat to enjoy awesome
                  food and take in some sunshine? We have a list of places to do
                  just that.
                </p>
              </div>

              <div className="mt-5 sm:mt-auto ">
                {/* Avatar */}
                <div className=" flex justify-between mt-2">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="size-[46px] rounded-full"
                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                        alt="Image Description"
                      />
                    </div>
                    <div className="ms-2.5 sm:ms-4">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                        Aaron Larsson
                      </h4>
                      <p className="text-xs text-gray-500">Feb 15, 2021</p>
                    </div>
                  </div>
                  <div className="flex gap-9 pt-7">
                    <p>Like</p>
                    <p>Save</p>
                  </div>
                </div>
                {/* End Avatar */}
              </div>
            </div>
          </div>
        </a>
        {/* End Card */}
      </div>
      {/* End Grid */}
    </div>
  );
}

export default Blogview;
