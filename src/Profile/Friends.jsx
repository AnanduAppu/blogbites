import React from "react";

function MyFriends() {
  return (
    <div>
      <div className="w-[100%] p-5 sm:p-10 md:p-16 bg-white rounded-lg shadow-lg shadow-gray-400 my-4">
        <div className="rounded-lg bg-white p-8 ">
          <div className="flex items-center justify-between border-b-2 border-gray-400 ">
            <h4 className="text-xl font-bold text-gray-900">Friends(532)</h4>
            <a href="#" className="text-blue-600 font-semibold">see all</a>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection1.jpg"
              className="w-16 rounded-full"
              alt="Profile"
            />
            <p className="mt-1 text-center text-sm font-bold">Diane Aguilar</p>
            <p className="text-center text-xs text-gray-500">
              UI/UX Design at Upwork
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg"
              className="w-16 rounded-full"
              alt="Profile"
            />
            <p className="mt-1 text-center text-sm font-bold">Diane Aguilar</p>
            <p className="text-center text-xs text-gray-500">
              UI/UX Design at Upwork
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection1.jpg"
              className="w-16 rounded-full"
              alt="Profile"
            />
            <p className="mt-1 text-center text-sm font-bold">Diane Aguilar</p>
            <p className="text-center text-xs text-gray-500">
              UI/UX Design at Upwork
            </p>
          </a>
      
        </div>
      </div>
    </div>
  );
}

export default MyFriends;
