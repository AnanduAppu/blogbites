import React, { useContext, useRef, useState } from "react";
import UserContext from "../Contex/CreateContex";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import noimage from "../assets/noImg.png";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";

function Myblogs() {
  const { userDataFromSignup, myBlogs, editAction, setEditAction } =
    useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const email = userDataFromSignup.email;

  const cloudName = import.meta.env.VITE_CLOUDNARY_CLOUDNAME;
  const apiKey = import.meta.env.VITE_CLOUDNARY_APIKEY;
  const uploadPreset = "profileimage";

  console.log(myBlogs);

  // editing the blog
  const [imageEdit, setImageEdit] = useState([]);
  const [headingEdit, setHeadingEdit] = useState("");
  const [descriptionEdit, setDescriptionEdit] = useState("");
  const [blogid, setBlogid] = useState("");
  const modalRef = useRef(null);
  const handleEdit = (e, blog) => {
    setImageEdit(blog.image);
    setBlogid(blog._id);
    setHeadingEdit(blog.title);
    setDescriptionEdit(blog.description);

    document.getElementById('my_modal_4').showModal()
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const handleblogImg = async (e) => {
    e.preventDefault();

    const files = e.target.files;
    if (files.length === 0) {
      toast.error('No image selected');
      return;
    }

    const toastId = toast.loading('Updating images...');
    const uploadPromises = [];
    const uploadedImages = [];

    try {
      for (const file of files) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', uploadPreset);
        formData.append('api_key',  apiKey);

        const response = fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          {
            method: 'POST',
            body: formData,
          }
        );

        uploadPromises.push(response);
      }

      const responses = await Promise.all(uploadPromises);

      for (const response of responses) {
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error.message);
        }
        uploadedImages.push(data.secure_url);
      }

      setImageEdit([...imageEdit, ...uploadedImages]);
      toast.success('Images uploaded successfully', { id: toastId });
    } catch (error) {
      console.log('Error uploading images', error);
      toast.error('Error uploading images');
    }
  };


  const onEditUpdate = async (e) => {
    e.preventDefault();
    try {
      console.log(headingEdit);

      const response = await axios.put("http://localhost:3015/user/editBlog", {
        imageEdit,
        headingEdit,
        descriptionEdit,
        blogid,
      });

      if (response.data.success) {
        setEditAction(!editAction);
        toast.success(response.data.message);
      } else {
        toast.error("not updated");
      }
    } catch (error) {
      console.log("the error edit", error);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTasks = myBlogs.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {myBlogs.length === 0 ? (
          <>loading...</>
        ) : (
          currentTasks.map((ele, ind) => {
            return (
              <Link
                key={ind}
                className="overflow-hidden shadow-lg flex flex-col rounded-xl w-[420px] cursor-pointer  "
              >
                <div className="relative">
                  <div className=" h-[250px] border  object-cover">
                    <img
                      className="w-full h-[250px]"
                      src={ele.image.length>0 ? ele.image[0] : noimage}
                      alt="Sunset in the mountains"
                    />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  </div>

                  <a href="#!">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(e, ele);
                      }}
                      className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out rounded-md"
                    >
                      <EditIcon />
                    </button>
                    <div className="text-xs absolute top-12 right-0 bg-red-500 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-red-600 transition duration-500 ease-in-out  rounded-md">
                      <DeleteForeverIcon />
                    </div>
                  </a>
                </div>
                <div className="px-6 py-4 mb-auto bg-blue-50">
                  <a
                    href="#"
                    className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                  >
                    {ele.title.split(" ").slice(0, 4).join(" ")}
                    {ele.title.split(" ").length > 2 ? "..." : ""}
                  </a>
                  <p className="text-gray-500 text-sm">
                    {ele.description.split(" ").slice(0, 10).join(" ")}
                    {ele.description.split(" ").length > 20 ? "..." : ""}
                  </p>
                </div>
                <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100 border border-gray-200">
                  <span
                    href="#"
                    className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                  >
                    <span className="ml-1">{ele.createdAt.slice(0, 10)}</span>
                  </span>
                  <span
                    href="#"
                    className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                  >
                    <span className="ml-1">{ele.comments.length}comments </span>
                  </span>
                </div>
              </Link>
            );
          })
        )}
        <dialog id="my_modal_4" className="modal"  ref={modalRef}>
      <div className="modal-box w-11/12 max-w-5xl">
        <div className="container relative mx-auto mt-0 flex h-full max-w-6xl flex-col justify-between px-10 xl:px-0 ">
          
          <div className="flex justify-between my-2 modal-action" method="dialog" >
            <h2 className="mb-1 text-3xl max-sm:text-2xl font-extrabold leading-tight text-gray-900">Update Blog?</h2>
            <button className="duration-500 self-center lg:self-end max-md:me- text-xl hover:text-red-700"    onClick={closeModal}>Close</button>
          </div>

          <div className="w-full">
            <div className="mb-10 max-sm:mb-5 flex w-full flex-col sm:flex-row">
              <div className="mb-10 w-full max-sm:mb-2.5 sm:mb-0 sm:w-1/2">
                <div className="relative ml-0 mr-0 h-full sm:mr-10">
                  <span className="absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-indigo-500"></span>
                  <div className="relative h-full rounded-lg border-2 border-indigo-500 bg-white p-1">
                    <textarea
                      id="heading"
                      rows="3"
                      value={headingEdit}
                      onChange={(e) => setHeadingEdit(e.target.value)}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Write your thoughts here..."
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="relative ml-0 h-full md:mr-10">
                  <span className="absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-purple-500"></span>
                  <div className="relative h-full rounded-lg border-2 border-purple-500 bg-white px-3 py-2">
                    <div className="grid grid-cols-5 gap-4 md:grid-cols-5">
                    {imageEdit.map((image, index) => (
                        <div className="relative" key={index}>
                          <img
                            className="h-auto max-w-full rounded-lg"
                            src={image}
                            alt={`Blog Image ${index + 1}`}
                          />
                          <div className="absolute top-2 right-2 max-sm:right-0 flex items-center justify-center">
                            <button
                              className="font-bold text-sm text-red-500 border px-0.5 bg-black"
                              onClick={() => {
                                setImageEdit(imageEdit.filter((img, i) => i !== index));
                              }}
                            >
                              X
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-end">
                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleblogImg}
                        className="hidden"
                        id="uploadImages"
                      />
                      <label htmlFor="uploadImages" className="cursor-pointer text-2xl font-bold border border-l-8 border-purple-300 px-1 py-0">
                        +
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[97%] max-md:w-[100%] max-sm:w-[100%] flex-col border border-green-500 sm:flex-row rounded-md">
              <textarea
                id="description"
                rows="15"
                value={descriptionEdit}
                onChange={(e) => setDescriptionEdit(e.target.value)}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                onClick={onEditUpdate}
                className="lg:me-10 rounded-md mt-4 px-4 py-2 border border-gray-700 bg-blue-400 font-semibold hover:bg-blue-700 hover:text-white duration-500 self-center lg:self-end mb-2"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
      </div>
      
      {myBlogs.length > 6 ? (
  <div className="flex justify-center mt-5">
    <button
      onClick={goToPreviousPage}
      disabled={currentPage === 1}
      className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      <svg
        className="w-3.5 h-3.5 me-2 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 5H1m0 0 4 4M1 5l4-4"
        />
      </svg>
      Previous
    </button>

    <button
      onClick={goToNextPage}
      disabled={currentTasks.length < itemsPerPage}
      className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      Next
      <svg
        className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </button>
  </div>
) : null}
    </>
  );
}

export default Myblogs;
