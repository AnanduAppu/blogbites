import React, { useContext, useState } from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import UserContext from "../Contex/CreateContex";


function UserProfile() {
  const { userDataFromSignup } = useContext(UserContext);
  const [isOpen,setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false);

  const togglePostCreation = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="rounded-lg bg-white pb-8 shadow-xl">
        <div className="absolute right-12 mt-4 rounded">
          <button className="rounded border border-gray-400 bg-gray-100 bg-opacity-10 p-2 text-gray-300 hover:bg-opacity-20 hover:text-gray-300">
            <AddAPhotoIcon />
          </button>
        </div>
        <div className="h-[250px] w-full">
          <img
            src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
            className="h-full w-full rounded-tl-lg rounded-tr-lg"
            alt="profile background"
          />
        </div>
        <div className="-mt-20 flex flex-col items-center">
          <div className="relative">
            <img
              src={userDataFromSignup.profilePicture}
              className="w-52 rounded-full border-4 border-white"
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
            <p className="text-2xl">{userDataFromSignup.firstName}</p>
            <span className="rounded-full bg-blue-500 p-1" title="Verified">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-2.5 w-2.5 text-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={4}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
          </div>
          <p className="text-gray-700">{userDataFromSignup.interest}</p>
          <p className="text-sm text-gray-500">{userDataFromSignup.region}</p>
        </div>
        <div className="mt-2 flex flex-1 flex-col items-center justify-end px-8 lg:items-end">
          <div className="mt-2 flex items-center space-x-4">
            <button 
            onClick={togglePostCreation}
            className="flex items-center space-x-2 rounded bg-blue-600 px-4 py-2 text-sm text-gray-100 transition duration-100 hover:bg-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
              </svg>
              <span>Create Post</span>
            </button>
            <button className="flex items-center space-x-2 rounded bg-blue-600 px-4 py-2 text-sm text-gray-100 transition duration-100 hover:bg-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Chat Box</span>
            </button>
          </div>
        </div>
      </div>
      {isOpen?<div className="max-w-4xl space-y-4 p-4 mx-auto duration-500">
          <div className="flex flex-col space-y-4 border border-gray-500 rounded-lg p-2">
            <input type="text" 
            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex  w-full rounded-lg border p-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Headline ...."
            />
            <textarea
              className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[100px] w-full rounded-lg border p-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="What's on your mind?"
            ></textarea>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 20h.01"></path>
                  <path d="M7 20v-4"></path>
                  <path d="M12 20v-8"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-purple-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                  <circle cx="12" cy="13" r="3"></circle>
                </svg>
              </div>
              <button className="ring-offset-background focus-visible:ring-ring hover:bg-primary/90 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-purple-500 px-4 py-2 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                Post
              </button>
            </div>
          </div>
        </div>:<div className="duration-500 "></div>}
      
    </>
  );
}

export default UserProfile;
