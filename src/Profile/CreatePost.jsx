import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import UserContext from "../Contex/CreateContex";
import { gsap } from "gsap";
import { useRef } from "react";

const CreatePost = () => {
  const { userDataFromSignup, isCreateBlogOpen} =
    useContext(UserContext);
  const [headline, setHeadline] = useState("");
  const [blog, setBlog] = useState("");
  const [photo, setPhoto] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [subParagraph1, setSubParagraph1] = useState("");
  const [subParagraph2, setSubParagraph2] = useState("");

  const email = userDataFromSignup.email;
  const topics = [
    "Travel",
    "Food",
    "AI",
    "Art",
    "Music",
    "Technology",
    "Photography",
    "Sports",
    "Fashion",
    "History",
    "Nature",
    "Health",
    "Nutrition",
    "Education",
    "Fitness",
    "Business",
  ];
  const parentDivRef = useRef(null);
  const headlingChange = (e) => setHeadline(e.target.value);
  const BlogChange = (e) => setBlog(e.target.value);

  const cloudName = import.meta.env.VITE_CLOUDNARY_CLOUDNAME;
  const apiKey = import.meta.env.VITE_CLOUDNARY_APIKEY;
  const uploadPreset = "profileimage";

  const handleBlogImage = async (e) => {
    e.preventDefault();
    const files = e.target.files;

    if (files.length + photo.length > 6) {
      toast.error("You can only upload up to 6 photos");
      return;
    }

    const toastId = toast.loading("Updating images...");

    try {
      const uploadedPhotos = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
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
        if (data.error) throw new Error(data.error.message);
        uploadedPhotos.push(data.secure_url);
      }

      setPhoto((prevPhotos) => [...prevPhotos, ...uploadedPhotos]);
      toast.success("Success", { id: toastId });
    } catch (error) {
      console.error("Error uploading image:", error.message);
      toast.error("Failed");
    }
  };

  const submitTheBlog = async (e) => {
    e.preventDefault();
    console.log(headline, blog, photo, email, selectedTopic);
    try {
      var toastId = toast.loading("creating post...");
      const responds = await axios.post(
        "http://localhost:3015/user/blogcreating",
        {
          headline,
          blog,
          photo,
          email,
          selectedTopic,
          subParagraph1,
          subParagraph2,
        }
      );

      if (responds.data.success) {
        console.log(responds.data.data);
        toast.success("blog created", { id: toastId });
      }
    } catch (error) {
      toast.error("blog creation failed", { id: toastId });
      console.log(error);
    }
  };

  const handleTopicSelection = (topic) => {
    setSelectedTopic(topic);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const animationDuration = 0.6;

    if (isCreateBlogOpen) {
      gsap.fromTo(
        parentDivRef.current,
        { autoAlpha: 0, y: 100, x: -100, rotate: -10 },
        {
          duration: animationDuration,
          autoAlpha: 1,
          y: 0,
          x: 0,
          rotate: 0,
          ease: "power3.out", // Optional easing
        }
      );
    } else {
      gsap.to(parentDivRef.current, {
        autoAlpha: 0,
        duration: animationDuration,
      });
    }
  }, [isCreateBlogOpen]);

  return (
    <>
      {isCreateBlogOpen ? (
        <div ref={parentDivRef} className={`max-w-4xl space-y-4 p-2 mx-auto`}>
          <div className="flex flex-col space-y-4 border border-gray-500 rounded-lg p-2">
            <input
              type="text"
              onChange={headlingChange}
              className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex  w-full rounded-lg border p-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Headline ...."
            />

            {currentPage === 1 && (
              <textarea
                onChange={(e) => setBlog(e.target.value)}
                value={blog}
                rows="9"
                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[100px] w-full rounded-lg border p-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="What's on your mind?"
              ></textarea>
            )}
            {currentPage === 2 && (
              <textarea
                onChange={(e) => setSubParagraph1(e.target.value)}
                value={subParagraph1}
                rows="9"
                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[100px] w-full rounded-lg border p-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Write your second paragraph..."
              ></textarea>
            )}
            {currentPage === 3 && (
              <textarea
                onChange={(e) => setSubParagraph2(e.target.value)}
                value={subParagraph2}
                rows="9"
                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[100px] w-full rounded-lg border p-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Write your third paragraph..."
              ></textarea>
            )}
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
                <div>
                  <input
                    type="file"
                    multiple
                    id="imageInput"
                    accept="image/*"
                    className="hidden"
                    onChange={handleBlogImage}
                  />
                  <label htmlFor="imageInput">
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
                  </label>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Topics
                </button>
              </div>

              <div className="flex space-x-2">
                {currentPage > 1 && (
                  <button
                    onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
                    className="ring-offset-background focus-visible:ring-ring hover:bg-primary/90 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-purple-500 px-4 py-2 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 mr-2"
                  >
                    Previous
                  </button>
                )}
                {currentPage < 3 && (
                  <button
                    onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
                    className="ring-offset-background focus-visible:ring-ring hover:bg-primary/90 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-purple-500 px-4 py-2 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Next
                  </button>
                )}
              </div>
              <button
                onClick={(e) => submitTheBlog(e)}
                className="ring-offset-background focus-visible:ring-ring hover:bg-primary/90 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-purple-500 px-4 py-2 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                Post
              </button>
            </div>
          </div>

          {isModalOpen && (
            <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-50 z-50">
              <div className="bg-white rounded-lg p-4 w-full max-w-2xl">
                <div className="flex items-center justify-between p-2 border-b">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Topics
                  </h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-400 hover:text-gray-800 focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 p-4 max-w-sm mx-auto my-4 text-sm">
                  {topics.map((topic) => (
                    <button
                      key={topic}
                      onClick={() => handleTopicSelection(topic)}
                      className={`${
                        selectedTopic === topic
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-700"
                      } px-2 py-1 rounded hover:bg-gray-300`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CreatePost;
