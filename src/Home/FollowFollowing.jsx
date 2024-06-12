import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchContent } from "../ReduxTool/CreateSlice";

function FollowFollowing({ props }) {
  console.log(props);
 const Navigate = useNavigate()

  const Dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTasks = props.data.slice(startIndex, endIndex)

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const AuthorProfile = (e,id)=>{
    e.preventDefault()
    Dispatch(fetchContent(id));
    Navigate(`/author/${id}`)
   }

  return (
<div>
  <dialog id="my_modal_3" className="modal  w-full">
    <div>
      <div className=" w-full p-5 sm:p-10 md:p-5 bg-white rounded-lg shadow-lg shadow-gray-400 ">
        <div className="rounded-lg bg-white p-2">
          <div className="flex items-center justify-between border-b-2 border-gray-400">
            <h4 className="text-xl font-bold text-gray-900">{props.field}</h4>
            <button className="btn btn-sm mb-1  " onClick={() => document.getElementById('my_modal_3').close()}>
              ✕
            </button>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 max-sm:max-h-[50vh] max-sm:overflow-y-auto ">
          {props.data &&
            currentTasks.map((ele, ind) => (
              <a
                key={ind}
                onClick={(e)=>AuthorProfile(e,ele._id)}
                href="#"
                className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600 cursor-pointer"
                title="View Profile"
              >
                <img
                  src={ele.profilePicture}
                  className="w-16 rounded-full object-fill"
                  alt="Profile"
                />
                <p className="mt-1 text-center text-sm font-bold">
                  {ele.username}
                </p>
                <p className="text-center text-xs text-gray-500">
                  UI/UX Design at Upwork
                </p>
              </a>
            ))}
           






        </div>

      </div>
    </div>
    {props.data.length > 24 ? (
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
  </dialog>
</div>
  );
}

export default FollowFollowing;
