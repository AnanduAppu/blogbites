import React, { useState } from 'react';
import imagelogo from '../assets/logoOnly.png';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../Contex/CreateContex';
import { useContext } from 'react';

function OpenNavbar() {
  const navigate = useNavigate();
  const { showSignup, setShowSignup } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAboutpage = () => {
    setShowSignup(true);
    navigate('about');
  };

  const handleContactpage = () => {
    setShowSignup(true);
    navigate('contact');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={imagelogo} className="w-32" alt="Flowbite Logo" />
          <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white">
            BLOG <span className="text-blue-700">BITES</span>
          </span>
        </span>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:border-gray-700">
            <li>
              <Link to="/open" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={handleAboutpage}
              >About</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={handleContactpage}
              >Contact</a>
            </li>
            <hr className="border border-black bg-black" />
            <li>
              <button className="text-xl py-2 px-5 border border-black bg-blue-600 text-white hover:text-black hover:bg-blue-200 duration-300 rounded-sm" onClick={() => navigate('/Login')}>Login</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default OpenNavbar;
