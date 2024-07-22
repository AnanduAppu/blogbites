import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import noimage from "../assets/noImg.png";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnotherBlogs  } from "../ReduxTool/CreateSlice";


const OtherUserBlogs = () => {
  const { userid } = useParams()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAnotherBlogs(userid));
  }, []);

  const [imageOrientations, setImageOrientations] = useState({});

  let userBlogs = useSelector((state) => state.infoData.blogs || []);

 

  useEffect(() => {
    if (userBlogs.length > 0) {
      const orientations = {};
      userBlogs.forEach((blogs, ind) => {
        const img = new Image();
        img.src = blogs.image.length > 0 ? blogs.image[0] : noimage;
        img.onload = () => {
          orientations[ind] = img.width < img.height; // true if vertical, false if not
          setImageOrientations((prev) => ({ ...prev, ...orientations }));
        };
      });
    }
  }, [userBlogs])

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTasks = userBlogs.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

//
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="border-b mb-5 flex justify-between text-sm">
        <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
          <a href="#" className="font-semibold inline-block">Blogs</a>
        </div>
 
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
     {userBlogs.length>0? currentTasks.map((blogs,ind)=>(
        <Link className="rounded overflow-hidden shadow-lg flex flex-col cursor-pointer"
        key={ind}
        to={`/blog/${blogs._id}`}
        >
   
          <div className="relative">
            <a>
              <img
               className={`w-full h-[28vh] ${imageOrientations[ind] ? 'object-contain' : 'object-cover'}`}
               src={blogs.image.length > 0 ? blogs.image[0] : noimage}
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
        </Link>)):<>no data</>}
      </div>
      {userBlogs.length > 6 ? (
  <div className="flex justify-center mt-5">
    <button
      onClick={goToPreviousPage}
      disabled={currentPage === 1}
      className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      <svg
        className="w-3.5 h-3.5 me-2 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 5H1m0 0 4 4M1 5l4-4"
        />
      </svg>
      Previous
    </button>

    <button
      onClick={goToNextPage}
      disabled={currentTasks.length < itemsPerPage}
      className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      Next
      <svg
        className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </button>
  </div>
) : null}
    </div>
  );
};

export default OtherUserBlogs;
