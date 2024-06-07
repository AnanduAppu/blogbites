import React, { useState } from 'react';

const FriendsListing = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-25 left-0 z-40 w-64 h-screen transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li className="flex items-center py-4 px-6">
              <img
                className="w-12 h-12 rounded-full object-cover mr-4"
                src="https://randomuser.me/api/portraits/women/72.jpg"
                alt="User avatar"
              />
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800">Emily Jones</h3>
                <p className="text-gray-600 text-base">1234 points</p>
              </div>
            </li>
            <li className="flex items-center py-4 px-6">
              <img
                className="w-12 h-12 rounded-full object-cover mr-4"
                src="https://randomuser.me/api/portraits/men/40.jpg"
                alt="User avatar"
              />
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800">David Lee</h3>
              </div>
            </li>
            <li className="flex items-center py-4 px-6">
              <img
                className="w-12 h-12 rounded-full object-cover mr-4"
                src="https://randomuser.me/api/portraits/women/54.jpg"
                alt="User avatar"
              />
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800">Sophia Williams</h3>
              </div>
            </li>
            <li className="flex items-center py-4 px-6">
              <img
                className="w-12 h-12 rounded-full object-cover mr-4"
                src="https://randomuser.me/api/portraits/men/83.jpg"
                alt="User avatar"
              />
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800">Michael Chen</h3>
              </div>
            </li>
            <li className="flex items-center py-4 px-6">
              <img
                className="w-12 h-12 rounded-full object-cover mr-4"
                src="https://randomuser.me/api/portraits/women/17.jpg"
                alt="User avatar"
              />
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800">Mia Davis</h3>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default FriendsListing;
