import React, { useState } from "react";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


function UserProfile() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="rounded-lg bg-white pb-8 shadow-xl">
      <div className="absolute right-12 mt-4 rounded">
        <button className="rounded border border-gray-400 bg-gray-100 bg-opacity-10 p-2 text-gray-300 hover:bg-opacity-20 hover:text-gray-300">
          <AddAPhotoIcon/>
        </button>
      </div>
      <div className="h-[250px] w-full">
        <img src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg" className="h-full w-full rounded-tl-lg rounded-tr-lg" alt="profile background" />
      </div>
      <div className="-mt-20 flex flex-col items-center">
      <div className="relative">
      <img
        src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
        className="w-full rounded-full border-4 border-white"
        alt="profile"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="text-white text-lg font-bold">
            <AddAPhotoIcon />
          </button>
        </div>
      )}
    </div>
        <div className="mt-2 flex items-center space-x-2">
          <p className="text-2xl">Amanda Ross</p>
          <span className="rounded-full bg-blue-500 p-1" title="Verified">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
            </svg>
          </span>
        </div>
        <p className="text-gray-700">Senior Software Engineer at Tailwind CSS</p>
        <p className="text-sm text-gray-500">New York, USA</p>
      </div>
      <div className="mt-2 flex flex-1 flex-col items-center justify-end px-8 lg:items-end">
        <div className="mt-2 flex items-center space-x-4">
          <button className="flex items-center space-x-2 rounded bg-blue-600 px-4 py-2 text-sm text-gray-100 transition duration-100 hover:bg-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
            </svg>
            <span>Connect</span>
          </button>
          <button className="flex items-center space-x-2 rounded bg-blue-600 px-4 py-2 text-sm text-gray-100 transition duration-100 hover:bg-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
            </svg>
            <span>Message</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;