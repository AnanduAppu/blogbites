import React from 'react';

const blogprofile = () => {
  return (
<div className="flex w-full justify-center px-2 py-20">
          <div className="rounded-lg bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg">
            <div className="lg:w-1/2">
              <div
                className="h-80 rounded-b-none border bg-cover lg:h-full lg:scale-110 lg:rounded-lg"
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/19056314/pexels-photo-19056314/free-photo-of-ess-in-the-woods.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                }}
              ></div>
            </div>

            <div className="max-w-xl rounded-t-none border px-6 py-12 lg:w-1/2 lg:max-w-5xl lg:rounded-lg lg:px-12">
              <h2 className="text-3xl font-bold text-gray-800">
                <header className="p-4">
                  <img
                    src="https://via.placeholder.com/200"
                    className="float-left m-1 mr-3 h-10 w-10 rounded-full"
                    alt="Author"
                  />
                  <h3 className="text-lg font-bold">Author Name</h3>
                  <p className="text-sm text-gray-600">date-time</p>
                </header>
                Promoting Sustainable Lifestyle Choices
                <span className="text-indigo-600">Choices</span>
              </h2>
              <p className="mt-4 text-gray-600">
                The "Eco-Tracker" project aims to create a web-based platform
                that encourages individuals to adopt sustainable lifestyle
                choices and actively contribute to environmental conservation.
                The platform will provide users with personalized tracking,
                education, and engagement features to empower them to make
                eco-friendly decisions in various aspects of their lives.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="rounded px-2 py-1 font-semibold text-blue-400 border border-black hover:border-blue-600"
                >
                  View..
                </a>
              </div>
              <a href="#" className="float-right">
                <img
                  src="https://img.icons8.com/flat_round/24/000000/share--v1.png"
                  alt="Share"
                />
              </a>
              <a href="#" className="float-right mr-3">
                <img
                  src="https://img.icons8.com/flat_round/24/000000/hearts.png"
                  alt="Hearts"
                />
              </a>
            </div>
          </div>





          <li className='flex justify-center items-center'>
            <div >
               
               <button
                 type="button"
                 className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                 aria-expanded="false"
                 data-dropdown-toggle="dropdown-user"
               >
                 <span className="sr-only">Open user menu</span>
                 
                 <img
                   className="w-28 h-28 rounded-full"
                   src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                   alt="user photo"
                 />
               </button>
               <p className='text-2xl'>Your Name</p>
             </div>
            </li>
        </div>
  );
};

export default Header;