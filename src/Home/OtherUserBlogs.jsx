import { Link } from 'react-router-dom';
import React from 'react';


const OtherUserBlogs = ({props}) => {

console.log(props)

//
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="border-b mb-5 flex justify-between text-sm">
        <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
          <a href="#" className="font-semibold inline-block">Blogs</a>
        </div>
        <a href="#">See All</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
     { props.map((blogs,ind)=>(
        <Link className="rounded overflow-hidden shadow-lg flex flex-col cursor-pointer"
        key={ind}
        to={`/blog/${blogs._id}`}
        >
   
          <div className="relative">
            <a>
              <img
                className="w-full"
                src={blogs.image}
                alt="Sunset in the mountains"
              />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </a>
          </div>
          <div className="px-6 py-4 mb-auto">
            <a
              href="#"
              className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
            >
              {blogs.title}
            </a>
            <p className="text-gray-500 text-sm">
             {blogs.description.split(" ").slice(0, 10).join(" ")}
             {blogs.description.split(" ").length > 20 ? "..." : ""}
            </p>
          </div>
          <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
            <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
              <svg
                height="13px"
                width="13px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{ enableBackground: 'new 0 0 512 512' }}
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                    ></path>
                  </g>
                </g>
              </svg>
              <span className="ml-1">{blogs.createdAt.slice(0, 10)}</span>
            </span>
            <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
              <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                ></path>
              </svg>
              <span className="ml-1">{blogs.comments.length} Comments</span>
            </span>
          </div>
        </Link>))}
      </div>
    </div>
  );
};

export default OtherUserBlogs;
