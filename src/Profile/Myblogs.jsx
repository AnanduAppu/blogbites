import React, { useContext, useEffect, useRef, useState } from "react";
import UserContext from "../Contex/CreateContex";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import noimage from "../assets/noImg.png";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";

import Visibility from "@mui/icons-material/Visibility";
import { VisibilityOff } from "@mui/icons-material";

function Myblogs() {
  const { userDataFromSignup, myBlogs, editAction, setEditAction,isVisible,setVisible } =useContext(UserContext);
  const [currentTextPage, setCurrentTextPage] = useState(1);
  const [imageOrientations, setImageOrientations] = useState({});

  useEffect(() => {
    if (myBlogs.length > 0) {
      const orientations = {};
      myBlogs.forEach((blogs, ind) => {
        const img = new Image();
        img.src = blogs.image.length > 0 ? blogs.image[0] : noimage;
        img.onload = () => {
          orientations[ind] = img.width < img.height; // true if vertical, false if not
          setImageOrientations((prev) => ({ ...prev, ...orientations }));
        };
      });
    }
  }, [myBlogs])


  const cloudName = import.meta.env.VITE_CLOUDNARY_CLOUDNAME;
  const apiKey = import.meta.env.VITE_CLOUDNARY_APIKEY;
  const uploadPreset = "profileimage";

  console.log(myBlogs);

  // editing the blog
  const [imageEdit, setImageEdit] = useState([]);
  const [headingEdit, setHeadingEdit] = useState("");
  const [descriptionEdit, setDescriptionEdit] = useState("");
  const [descriptionEdit1, setDescriptionEdit1] = useState("");
  const [descriptionEdit2, setDescriptionEdit2]= useState("");
  const [blogid, setBlogid] = useState("");
  const userId = userDataFromSignup._id
  const modalRef = useRef(null);
  const handleEdit = (e, blog) => {
    setImageEdit(blog.image);
    setBlogid(blog._id);
    setHeadingEdit(blog.title);
    setDescriptionEdit(blog.description);
    setDescriptionEdit1(blog.descriptionPara1?blog.descriptionPara1:'')
    setDescriptionEdit2(blog.descriptionPara2?blog.descriptionPara2:'')

    document.getElementById('my_modal_4').showModal()
  };

  const closeModal = () => {
    if (modalRef.current) {
      setBlogid(''),
      setDescriptionEdit('')
      setHeadingEdit(''),
      setImageEdit([]),
      setDescriptionEdit1(" ")
      setDescriptionEdit2(" ")
      modalRef.current.close();
    }
  };

  const handleblogImg = async (e) => {
    e.preventDefault();
if (imageEdit.length===6) {

  toast.error("cant add image morethan 6")
  return
}

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
  
      const response = await axios.put("user/editBlog", {
        imageEdit,
        headingEdit,
        descriptionEdit,
        descriptionEdit1,
        descriptionEdit2,
        blogid,
      });
  
      if (response.data.success) {
        setEditAction(!editAction);

        toast.success(response.data.message);
      } else {
        toast.error("Not updated");
      }
    } catch (error) {
      console.log("The error edit", error);
      toast.error("An error occurred while updating the blog");
    }
  };

  const dialogRef = useRef(null);
  const  OpenDeleteModel= (e,id)=>{
   e.preventDefault();
   setBlogid(id)
   console.log(id)
  document.getElementById('my_modal_delete').showModal()

  }

  const handleDelete = async (e) => {
    e.preventDefault();
   
    try {
      const response = await axios.delete("user/deleteBlog", {
        data: { blogid, userId }
      });
      if (response.data.success) {
        toast.success("Deleted successfully");
        dialogRef.current.close();
        setEditAction(!editAction); 
      }
    } catch (error) {
      console.log("Error deleting blog", error);
    }
  };



  const CloseDeleteModel = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
      setBlogid('')
    }
  };

const pubicOrPrivate = async(e,blogid,isPublic)=>{
  e.preventDefault();

try {
  const response = await axios.post("user/publicOrPrivate", {
    userId,
    blogid,
    isPublic
  });

  if (response.data.success) {
    if (response.data.visbility) {
      toast.success("now it is public")
      setVisible(true)
    }else{
      toast.error("now it is private")
      setVisible(false)
    }
   
  }
} catch (error) {
  
}



}

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
                to={`/blog/${ele._id}`}
                key={ind}
                className="overflow-hidden shadow-lg flex flex-col rounded-xl w-[420px] cursor-pointer  "
              >
                <div className="relative">
                  <div className=" h-[250px] border  object-cover">
                    <img
                      className={`w-full h-[34vh] ${imageOrientations[ind] ? 'object-contain' : 'object-cover'}`}
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
                  
                    <button
                    onClick={(e) => {
                            e.stopPropagation();
                            OpenDeleteModel(e, ele._id);
                    }}
                    
                    className="btn text-xs absolute top-12 right-0 bg-red-500 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-red-600 transition duration-500 ease-in-out  rounded-md">
                      <DeleteForeverIcon />
                    </button>
                  </a>
                </div>
                <div className="px-6 py-4 mb-auto bg-blue-50 h-[18vh] ">
                
                  <a
                    href="#"
                    className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                  >
                    {ele.title.split(" ").slice(0, 6).join(" ")}
                    {ele.title.split(" ").length > 2 ? "..." : ""}
                  </a>
            
             
            
                  <p className="text-gray-500 text-sm">
                    {ele.description.split(" ").slice(0, 12).join(" ")}
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
                  <span>
                    {ele.visibility?
                    <span className="cursor-pointer"
                    onClick={(e)=>pubicOrPrivate (e,ele._id, true)}
                    ><Visibility/></span>:
                    <span className="cursor-pointer" 
                    onClick={(e)=>pubicOrPrivate (e,ele._id, false)}
                    ><VisibilityOff/></span>}
                    
                    
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
                    <div className="grid grid-cols-6 gap-4 md:grid-cols-5 h-[14vh]">
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
                      <label htmlFor="uploadImages" className="cursor-pointer  ">
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
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[97%] max-md:w-[100%] max-sm:w-[100%] flex-col border border-green-500 sm:flex-row rounded-md">
            {currentTextPage === 1 &&(
       <textarea
       id="description"
       rows="15"
       value={descriptionEdit}
       onChange={(e) => setDescriptionEdit(e.target.value)}
       className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
       placeholder="Write your thoughts here..."
     ></textarea>

            )}
        {currentTextPage === 2 &&(
                 <textarea
                 id="description"
                 rows="15"
                 value={descriptionEdit1}
                 onChange={(e) => setDescriptionEdit1(e.target.value)}
                 className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                 placeholder="Add  paragraph"
               ></textarea>
        )}
                {currentTextPage === 3 &&(
                 <textarea
                 id="description"
                 rows="15"
                 value={descriptionEdit2}
                 onChange={(e) => setDescriptionEdit2(e.target.value)}
                 className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                 placeholder="Add paragraph"
               ></textarea>
        )}
            </div>
            <div className="flex justify-end">
            {currentTextPage > 1 && (
                  <button
                    onClick={() => setCurrentTextPage((prevPage) => prevPage - 1)}
                    className="ring-offset-background focus-visible:ring-ring hover:bg-primary/90 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-purple-500 px-4 py-2 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 mr-2"
                  >
                    Previous
                  </button>
                )}
                {currentTextPage < 3 && (
                  <button
                    onClick={() => setCurrentTextPage((prevPage) => prevPage + 1)}
                    className="ring-offset-background focus-visible:ring-ring hover:bg-primary/90 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-purple-500 px-4 py-2 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Next
                  </button>
                )}
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

     
<dialog id="my_modal_delete" className="modal"  ref={dialogRef}>
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div className="relative p-4 w-full max-w-md max-h-full">
     

        <div className="p-4 md:p-5 text-center">
          <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this blog?</h3>
          <button
          
            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            onClick={handleDelete}                  
          >
            Yes, I'm sure
          </button>
     
          <button
            className="btn py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={CloseDeleteModel}                  
          >
            No, cancel
          </button>
      
        </div>
    
    </div>
  </div>
</dialog>
      
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
