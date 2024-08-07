import React, { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import UserContext from "../Contex/CreateContex";
import { gsap } from "gsap";
import { KeyboardDoubleArrowLeftOutlined, KeyboardDoubleArrowRightOutlined } from "@mui/icons-material";

const CreatePost = () => {
  const { userDataFromSignup, isCreateBlogOpen ,setVisible} = useContext(UserContext);
  const [headline, setHeadline] = useState("");
  const [blog, setBlog] = useState("");
  const [photo, setPhoto] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [subParagraph1, setSubParagraph1] = useState("");
  const [subParagraph2, setSubParagraph2] = useState("");
  const [imagesSelected, setImagesSelected] = useState(false); // Track if images are selected

  const email = userDataFromSignup.email;

  const topics = [
    "Travel", "Food", "AI", "Art", "Music", "Technology", "Photography",
    "Sports", "Fashion", "History", "Nature", "Health", "Nutrition",
    "Education", "Fitness", "Business",
  ];

  const parentDivRef = useRef(null);
  const cloudName = import.meta.env.VITE_CLOUDNARY_CLOUDNAME;
  const apiKey = import.meta.env.VITE_CLOUDNARY_APIKEY;
  const uploadPreset = "profileimage";

  const handleBlogImage = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + photo.length > 5) {
      toast.error("You can only upload up to 5 photos");
      return;
    }
    setPhoto((prevPhotos) => [...prevPhotos, ...files]);
    setImagesSelected(true); // Set images selected
  };

  const removeImage = (index) => {
    setPhoto((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
    if (photo.length - 1 === 0) {
      setImagesSelected(false); // Update images selected status
    }
  };

  const uploadImages = async () => {
    if (photo.length > 5) return [];

    const toastId = toast.loading("Updating images...");
    try {
      const uploadedPhotos = [];
      for (let i = 0; i < photo.length; i++) {
        const file = photo[i];
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

      toast.success("Images updated successfully", { id: toastId });
      return uploadedPhotos;
    } catch (error) {
      console.error("Error uploading image:", error.message);
      toast.error("Failed to update images", { id: toastId });
      return [];
    }
  };

  const submitTheBlog = async (e) => {
    e.preventDefault();

    let uploadedPhotos = [];
  if (photo.length > 0) {
    uploadedPhotos = await uploadImages();
    if (uploadedPhotos.length === 0) return; // Stop submission if images failed to upload
  }

    try {
      var toastId = toast.loading("Creating post...");
      const responds = await axios.post(
        "user/blogcreating",
        {
          headline,
          blog,
          photo: uploadedPhotos,
          email,
          selectedTopic,
          subParagraph1,
          subParagraph2,
        }
      );

      if (responds.data.success) {
        setVisible(true)
        toast.success("Blog created", { id: toastId });

        // Clear inputs after successful submission
        setHeadline("");
        setBlog("");
        setPhoto([]);
        setSelectedTopic("");
        setSubParagraph1("");
        setSubParagraph2("");
        setCurrentPage(1);
        setImagesSelected(false);
      }
    } catch (error) {
      toast.error("Blog creation failed", { id: toastId });
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
              onChange={(e) => setHeadline(e.target.value)}
              value={headline}
              className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex w-full rounded-lg border p-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Topics
                </button>
                
            {selectedTopic && (
              <div className="mt-2 text-sm font-medium text-blue-700">
                Selected Topic: {selectedTopic}
              </div>
            )}
              </div>

              <div className="flex space-x-2">
                {currentPage > 1 && (
                  <button
                    onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
                    className=" mr-2 hover:text-purple-600"
                  >
                   <KeyboardDoubleArrowLeftOutlined/> Previous Para 
                  </button>
                )}
                {currentPage < 3 && (
                  <button
                    onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
                    className="hover:text-purple-600"
                  >
                    Next Para <KeyboardDoubleArrowRightOutlined/>
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

            <div className="flex flex-wrap mt-1 border border-gray-100 w-[50%] bg-white rounded-lg ">
              {photo.map((img, index) => (
                <div key={index} className="relative m-2 ">
                  <img
                    src={URL.createObjectURL(img)}
                    alt="Selected"
                    className="w-14 h-14 object-cover rounded-lg  border border-gray-300"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                  >
                    &times;
                  </button>
                </div>
              ))}
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
