import React from 'react';

function BlogRightSidebar() {
  return (
    <div className='relative'>
    <div className="flex flex-col space-y-8 sticky">
      {/* Trending News Section */}
      <div className="bg-white p-4 rounded-lg m-2 border-2 border-gray-400 shadow-lg shadow-blue-200 ">
      <h2 className="text-lg font-semibold mb-4">Trending News</h2>
      <div className="grid grid-cols-1 gap-4">
        {/* Trending News Cards */}

        <div className="flex items-center border border-gray-400 rounded-md">
          <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="Trending News Image" className="w-24 h-24 object-cover rounded-md mr-4" />
          <div>
            <h3 className="text-base font-semibold mb-2">Trending News Title</h3>
            <p className="text-sm text-gray-700">Description of the trending news goes here. It should give a brief overview of the news item.</p>
          </div>
        </div>
        <div className="flex items-center border border-gray-400 rounded-md">
          <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="Trending News Image" className="w-24 h-24 object-cover rounded-md mr-4" />
          <div>
            <h3 className="text-base font-semibold mb-2">Trending News Title</h3>
            <p className="text-sm text-gray-700">Description of the trending news goes here. It should give a brief overview of the news item.</p>
          </div>
        </div>
        <div className="flex items-center border border-gray-400 rounded-md">
          <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="Trending News Image" className="w-24 h-24 object-cover rounded-md mr-4" />
          <div>
            <h3 className="text-base font-semibold mb-2">Trending News Title</h3>
            <p className="text-sm text-gray-700">Description of the trending news goes here. It should give a brief overview of the news item.</p>
          </div>
        </div>
        {/* Add more trending news cards here */}
      </div>
    </div>

      {/* Categories Section */}
      <div className="bg-white rounded-lg shadow-md mx-2">
      <div className="w-full rounded-lg border-2 border-gray-400 p-4 max-w-sm shadow-lg shadow-purple-300">
        <h2 className="font-os text-lg font-bold">Categories</h2>
        <ul className="flex items-start flex-wrap mt-4">
          <li className="flex mx-1">
            <a href="category/all" className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-purple-800">
              all
            </a>
          </li>
          <li className="flex mx-1">
            <a href="category/react-js" className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-purple-800">
              react js
            </a>
          </li>
          <li className="flex mx-1">
            <a href="category/redux" className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-purple-800">
              redux
            </a>
          </li>
          <li className="flex mx-1">
            <a href="category/ui-design" className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-purple-800">
              ui design
            </a>
          </li>
          <li className="flex mx-1">
            <a href="category/user-experience" className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-purple-800">
              user experience
            </a>
          </li>
          <li className="flex mx-1">
            <a href="category/productivity" className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-purple-800">
              productivity
            </a>
          </li>
          <li className="flex mx-1">
            <a href="category/game" className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-purple-800">
              game
            </a>
          </li>
        </ul>
      </div>
    </div>

      {/* Online Friend List Section */}
      <div className="bg-white p-2 rounded-lg shadow-lg shadow-green-400 border-2 border-gray-400 m-2 ">
        <h2 className="text-lg font-semibold mb-4">Online Friends</h2>
        <ul className="space-y-2">
          <li className="flex items-center">
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="Friend Avatar" className="w-10 h-10 object-cover rounded-full mr-2 border-2 border-green-500" />
            <span className="text-sm">Friend Name</span>
          </li>
          <li className="flex items-center">
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="Friend Avatar" className="w-10 h-10 object-cover rounded-full mr-2 border-2 border-green-500" />
            <span className="text-sm">Friend Name</span>
          </li>
          <li className="flex items-center">
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="Friend Avatar" className="w-10 h-10 object-cover rounded-full mr-2 border-2 border-green-500" />
            <span className="text-sm">Friend Name</span>
          </li>
          {/* Add more online friends here */}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default BlogRightSidebar;
