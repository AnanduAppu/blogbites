import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import UserContext from "../Contex/CreateContex";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import noimage from "../assets/noImg.png";
import { Link } from "react-router-dom";

function LikedBlogs() {
 

  const { likeBlogs, setLikeBlogs } = useContext(UserContext);


  // useEffect(() => {
  //   const fetchLikedBlogs = async () => {
 
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:3015/user/likedblog`,
  //         { params: { q:userId } }
  //         );
          
  //         if (response.data.success) {
  //         console.log("hi vhjwvhjd")
  //         setLikeBlogs(response.data.Data);
  //         console.log("here is:- " , response.data.Data);
  //       } else {
  //         console.log("some error happen when retrieving data");
  //       }
  //     } catch (error) {
  //       console.log("we got an error in liked blog", error);
  //     }
  //   };

  //   fetchLikedBlogs();
  // }, [userId,userDataFromSignup]);




  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        { likeBlogs.length>0? (
          likeBlogs.map((ele, ind) => (
            <Link
            to={`/blog/${ele._id}`}
              className="rounded overflow-hidden shadow-lg flex flex-col w-[420px] cursor-pointer"
              key={ind}
            >
              <a href="#"></a>
              <div className="relative">
                <div className=" h-[250px] object-cover">
                  <img
                    className="w-full h-[250px]"
                    src={ele.image.length>0 ? ele.image[0] : noimage}
                    alt="Sunset in the mountains"
                  />
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                </div>
                <a href="">
                <div className="text-xs absolute top-0 right-0 bg-red-500 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-red-600 transition duration-500 ease-in-out  rounded-md">
                  <DeleteForeverIcon />
               
                </div>
              </a>
              </div>
          
              <div className="px-6 py-4 mb-auto">
                <a
                  href="#"
                  className="font-medium text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                >
                  {ele.title}
                </a>
                <p className="text-gray-500 text-sm">
                  {ele.description.split(" ").slice(0, 20).join(" ")}
                  {ele.description.split(" ").length > 20 ? "..." : ""}
                </p>
              </div>
              <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                <span
                  href="#"
                  className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                >
                  <svg
                    height="13px"
                    width="13px"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <g>
                        <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                      </g>
                    </g>
                  </svg>
                  <span className="ml-1">{ele.createdAt.slice(0, 10)}</span>
                </span>

                <span
                  href="#"
                  className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                >
                  <svg
                    className="h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    ></path>
                  </svg>
                  <span className="ml-1">{ele.comments.length}comments</span>
                </span>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-black">Loading...</div>
        )}
      </div>
    </>
  );
}

export default LikedBlogs;
