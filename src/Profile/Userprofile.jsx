import React, { useContext, useState } from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import UserContext from "../Contex/CreateContex";
import axios from "axios";
import { toast } from "react-hot-toast";
import FollowFollowing from "../Home/FollowFollowing";
import CreatePost from "./CreatePost";

function UserProfile() {
  const { userDataFromSignup,isCreateBlogOpen, setIsCreateBlogOpen, imgProfile,setImgProfile } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cloudName = import.meta.env.VITE_CLOUDNARY_CLOUDNAME;
  const apiKey = import.meta.env.VITE_CLOUDNARY_APIKEY;
  const uploadPreset = "profileimage";

  const [propValue, setPropValue] = useState({data:[]});

  const email = userDataFromSignup.email;
  const togglePostCreation = () => {
    setIsOpen((prevState) => !prevState);
    setIsCreateBlogOpen((prevState) => !prevState)
  };


  
  //add profile image
  const handleImageChange = async (e) => {
    e.preventDefault();

    const file = e.target.files[0];

    if (!file) {
      toast.error("No image selected");
      return;
    }

    const toastId = toast.loading("Updating image...");

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);
      formData.append("api_key", apiKey);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      const backendResponse = await axios.post(
        "user/userimage",
        {
          imageUrl: data.secure_url,
          email: email,
        }
      );

      if (!backendResponse.data.success) {
        toast.error(backendResponse.data.error, "error");
        return;
      }
      setImgProfile(true)
      toast.success("Success", { id: toastId });
    } catch (error) {
      console.log("we get an error", error);
    }
  };

  //hnadle background image
  const handleWalImageChange = async (e) => {
    e.preventDefault();

    const file = e.target.files[0];

    if (!file) {
      toast.error("No image selected");
      return;
    }

    const toastId = toast.loading("Updating image...");

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);
      formData.append("api_key", apiKey);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      const backendResponse = await axios.put(
        "user/updateWalimg",
        {
          imageUrl: data.secure_url,
          email: email,
        }
      );

      if (!backendResponse.data.success) {
        toast.error(backendResponse.data.error, "error");
        return;
      }
      setImgProfile(true)
      toast.success("Success", { id: toastId });
    } catch (error) {
      console.log("we get an error", error);
    }
  };


  const showModal = (data,field) => {

    setPropValue({data,field}); // Set the parameter value
    document.getElementById('my_modal_3').showModal(); // Show the modal
  };
  return (
    <>
    { Object.keys(userDataFromSignup).length==0?<>no data</>:
      <div className="rounded-lg bg-white pb-8 shadow-xl">
        <div className="absolute right-12 mt-4 rounded">
          <input
            type="file"
            id="walimageInput"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleWalImageChange(e)}
          />
          <label
            htmlFor="walimageInput"
            className="rounded border border-gray-400 bg-gray-100 bg-opacity-10 p-2 text-gray-300 hover:bg-opacity-20 hover:text-gray-300"
          >
            <AddAPhotoIcon />
          </label>
        </div>
        {userDataFromSignup.backgroudWal ? (
          <div className="h-[250px] w-full">
            <img
              src={userDataFromSignup.backgroudWal}
              className="h-[40vh] w-full rounded-tl-lg rounded-tr-lg  object-cover"
              alt="profile background"
            />
          </div>
        ) : (
          <div className="h-[250px] w-full">
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
              className="h-full w-full rounded-tl-lg rounded-tr-lg"
              alt="profile background"
            />
          </div>
        )}

        <div className="-mt-20 flex flex-col items-center">
          <div
            className="relative max-sm:mt-20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
            <img
              src={userDataFromSignup.profilePicture}
              height="160"
              width="160"
              className="rounded-full border-4 border-white shadow-lg"
              alt="profile"
              style={{ aspectRatio: "160/160", objectFit: "cover" }}
            />
            {isHovered && (
              <div className="absolute inset-0 flex items-center justify-center">
                <input
                  type="file"
                  
                  id="imageInput"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageChange(e)}
                />
                <label
                  htmlFor="imageInput"
                  className="text-white text-lg font-bold cursor-pointer" // Added cursor-pointer
                >
                  <div className="bg-black bg-opacity-50 rounded-full p-2">
                    {" "}
                    <AddAPhotoIcon />
                  </div>
                </label>
              </div>
            )}
          </div>

          <div className="mt-2 flex items-center space-x-2">
            <p className="text-2xl">{userDataFromSignup.username}</p>
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
      
          <p className="text-sm text-gray-500">{userDataFromSignup.region}</p>
          <div className="flex space-x-2 mt-2">
            <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
              <p className="text-sm font-medium text-gray-500">Blogs</p>
              <p className="text-3xl font-medium text-gray-600">{userDataFromSignup.your_blogs.length}</p>
            </div>
            
            <div className=" flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2 cursor-pointer"
           onClick={() => showModal(userDataFromSignup.you_followed,"Following")}
            >
              <p className="text-sm font-medium text-gray-500">Following</p>
              <p className="text-3xl font-medium text-gray-600">{userDataFromSignup.you_followed.length}</p>
            </div>
           
            <div className=" flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2 cursor-pointer"
            onClick={() => showModal(userDataFromSignup.followed,"Follower")}
            >
              <p className="text-sm font-medium text-gray-500">Follower</p>
              <p className="text-3xl font-medium text-gray-600">{userDataFromSignup.followed.length}</p>
            </div>
            <div className=""></div>
          </div>
        </div>
        <div className="mt-2 flex flex-1 flex-col items-center justify-end px-8 lg:items-end">
          <div className="mt-2 flex items-center space-x-4">
            <button
              onClick={togglePostCreation}
              className="flex items-center space-x-2 rounded bg-blue-600 px-4 py-2 text-sm text-gray-100 transition duration-100 hover:bg-blue-700"
            >
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
}
      {isOpen ? (
        <div className="duration-500"><CreatePost/></div>
        
      ) : (
        <div className="duration-500 "></div>
      )}

      
<FollowFollowing props={propValue} />

    </>
  );
}

export default UserProfile;
