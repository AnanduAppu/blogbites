import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

function Myblogs() {
  return (
    <>
      <div className="w-[100%] p-5 sm:p-10 md:p-16 bg-white rounded-xl shadow-lg shadow-gray-400">
        <div className="border-b mb-5 flex gap-5 text-sm">
          <div className="text-indigo-600 flex items-center pb-2  border-b-2 border-indigo-600 uppercase">
            <a href="#" className="font-semibold inline-block ">
              My Blogs
            </a>
          </div>
          <div className="text-gray-600 flex items-center pb-2  border-b-2 border-gray-600  uppercase">
            <a href="#" className="font-semibold inline-block ">
            liked Blogs
            </a>
          </div>

          <div className="text-gray-600 flex items-center pb-2 border-b-2 border-gray-600  uppercase">
            <a href="#" className="font-semibold inline-block ">
            Saved Blogs
            </a>
          </div>

      

          <a href="#">See All</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="overflow-hidden shadow-lg flex flex-col rounded-xl">
            <a href="#"></a>
            <div className="relative">
              <a href="#">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <a href="#!">
                <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                 <EditIcon/>
                </div>
                <div className="text-xs absolute top-12 right-0 bg-red-500 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                <DeleteForeverIcon/>
                </div>
              </a>
            </div>
            <div className="px-6 py-4 mb-auto bg-blue-50">
              <a
                href="#"
                className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
              >
                Simplest Salad Recipe ever
              </a>
              <p className="text-gray-500 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100 border border-gray-200">
              <span
                href="#"
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <span className="ml-1">6 mins ago</span>
              </span>
              <span
                href="#"
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <span className="ml-1">39 Comments</span>
              </span>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded overflow-hidden shadow-lg flex flex-col">
            <a href="#"></a>
            <div className="relative">
              <a href="#">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <a href="#!">
              <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                 <EditIcon/>
                </div>
                <div className="text-xs absolute top-12 right-0 bg-red-500 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                <DeleteForeverIcon/>
                </div>
              </a>
            </div>
            <div className="px-6 py-4 mb-auto">
              <a
                href="#"
                className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
              >
                Best FastFood Ideas (Yummy)
              </a>
              <p className="text-gray-500 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
              <span
                href="#"
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <span className="ml-1">10 days ago</span>
              </span>
              <span
                href="#"
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <span className="ml-1">0 Comments</span>
              </span>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="rounded overflow-hidden shadow-lg flex flex-col">
            <a href="#"></a>
            <div className="relative">
              <a href="#">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/6086/food-salad-healthy-vegetables.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <a href="#!">
              <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                 <EditIcon/>
                </div>
                <div className="text-xs absolute top-12 right-0 bg-red-500 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                <DeleteForeverIcon/>
                </div>
              </a>
            </div>
            <div className="px-6 py-4 mb-auto">
              <a
                href="#"
                className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
              >
                Why to eat salad?
              </a>
              <p className="text-gray-500 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
              <span
                href="#"
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <span className="ml-1">16 hours ago</span>
              </span>
              <span
                href="#"
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <span className="ml-1">9 Comments</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Myblogs;
