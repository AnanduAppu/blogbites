import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import logoimg from '../assets/logoOnly.png'


const BlogNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logoimg} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white max-sm:hidden">BLOG <span className='text-blue-500'>BITES</span></span>
        </a>
        
        <div className="flex  items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* Search bar */}
          <div className="relative flex items-center lg:mx-10">
          
            <input 
              type="text"
              className="block w-full shadow-lg shadow-blue-200 px-10 border-none rounded-3xl pl-11 pr-2 py-2 focus:outline-blue-200 bg-gray-50 text-sm text-gray-700 placeholder-gray-500"
              placeholder="Search"
            />
              <button className="absolute left-3 top-2 text-sm text-gray-500">
              <SearchIcon/>
            </button>
          </div>
          
          {/* User menu */}
          <button 
            type="button" 
            className="flex text-sm bg-gray-800 shadow-lg rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" 
            id="user-menu-button" 
            aria-expanded={isMenuOpen ? "true" : "false"} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open user menu</span>
            <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
          </button>
          
          {/* Dropdown menu */}
          {isMenuOpen && (
            <div className="z-50 absolute right-0 mt-64 max-sm:mt-72 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default BlogNavbar;