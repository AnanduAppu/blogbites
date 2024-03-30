import React from "react";
import imageChat from "../assets/chatbox.jpg"
import imageNews from "../assets/news.jpg"

function Phonesize() {
    // this component show the sidebar when it reaches in phone size

  return (
    <div >
      <section className="bg-white lg:hidden md:hidden ">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
              <div className="grid gap-4 grid-cols-2 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href="#"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src={imageChat}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-black absolute top-0 left-0 p-4 md:text-3xl ">
                    Chat <span className="text-blue-500">box</span> 
                  </h3>
                </a>
                <a
                  href="#"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src={imageNews}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-yellow-500 absolute top-0 left-0 p-4 md:text-3xl">
                    News
                  </h3>
                </a>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 flex flex-col">
              <div className="flex flex-wrap items-start justify-center p-5 py-10">
                <a
                  className=" relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 "
                  href="https://tailwindflex.com/tag/card"
                >
                  <span className="text-sm">#All</span>
                </a>
                <a
                  className=" relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 "
                  href="https://tailwindflex.com/tag/call-to-action"
                >
                  <span className="text-sm">#Fashion</span>
                </a>
                <a
                  className=" relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 "
                  href="https://tailwindflex.com/tag/carousel"
                >
                  <span className="text-sm">#Travel</span>
                </a>
                <a
                  className=" relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 "
                  href="https://tailwindflex.com/tag/banner"
                >
                  <span className="text-sm">#Love</span>
                </a>
                <a
                  className=" relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 "
                  href="https://tailwindflex.com/tag/breadcrumb"
                >
                  <span className="text-sm">#trading</span>
                </a>
                <a
                  className=" relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 "
                  href="https://tailwindflex.com/tag/avatar"
                >
                  <span className="text-sm">#Movies</span>
                </a>
                <a
                  className=" relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 "
                  href="https://tailwindflex.com/tag/blog"
                >
                  <span className="text-sm">#AI</span>
                </a>
                <a
                  className=" relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 "
                  href="https://tailwindflex.com/tag/button"
                >
                  <span className="text-sm">#Food</span>
                </a>
                <a
                  className=" relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-violet-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 "
                  href="https://tailwindflex.com/tag/contact-us-page"
                >
                  <span className="text-sm">#Nature</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Phonesize;
