import React, { useContext } from "react";
import UserContext from "../Contex/CreateContex";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import noimage from "../assets/BlogbiteslogoVetical.png"

function Myblogs() {
  const { userDataFromSignup } = useContext(UserContext);

  const myBlogs = userDataFromSignup.your_blogs;

  console.log(userDataFromSignup);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    {myBlogs.map((ele, ind) => {
      return (
        <div key={ind} className="overflow-hidden shadow-lg flex flex-col rounded-xl">
          <div className="relative">
            {ele.image ? (
              <a href="#">
                <img
                  className="w-[100%]"
                  src={ele.image}
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
            ) : (
              <a href="#" className="w-[100%]">
               <img
                  className="w-full"
                  src={noimage}
                  alt="Sunset in the mountains"
                />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
            )}

            <a href="#!">
              <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                <EditIcon />
              </div>
              <div className="text-xs absolute top-12 right-0 bg-red-500 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                <DeleteForeverIcon />
              </div>
            </a>
          </div>
          <div className="px-6 py-4 mb-auto bg-blue-50">
            <a
              href="#"
              className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
            >
              {ele.title}
            </a>
            <p className="text-gray-500 text-sm">
              {ele.description.split(" ").slice(0, 20).join(" ")}
              {ele.description.split(" ").length > 20 ? "..." : ""}
            </p>
          </div>
          <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100 border border-gray-200">
            <span
              href="#"
              className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
            >
              <span className="ml-1">{ele.createdAt.slice(0, 10)}</span>
            </span>
            <span
              href="#"
              className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
            >
              <span className="ml-1">39 Comments</span>
            </span>
          </div>
        </div>
      );
    })}
  </div>
  );
}

export default Myblogs;
