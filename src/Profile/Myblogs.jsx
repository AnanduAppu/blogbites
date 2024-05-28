import React, { useContext, useState } from "react";
import UserContext from "../Contex/CreateContex";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import noimage from "../assets/noImg.png";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";

function Myblogs() {
  const { userDataFromSignup, myBlogs,editAction, setEditAction } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const email = userDataFromSignup.email;

  const cloudName = import.meta.env.VITE_CLOUDNARY_CLOUDNAME;
  const apiKey = import.meta.env.VITE_CLOUDNARY_APIKEY;
  const uploadPreset = "profileimage";

  console.log(myBlogs);

  // editing the blog
  const [imageEdit, setImageEdit] = useState("");
  const [headingEdit, setHeadingEdit] = useState("");
  const [descriptionEdit, setDescriptionEdit] = useState("");
  const [blogid, setBlogid] = useState("");

  const handleEdit = (e, blog) => {
    setImageEdit(blog.image);
    setBlogid(blog._id)
    setHeadingEdit(blog.title);
    setDescriptionEdit(blog.description);
    setIsModalOpen(true);
  };

  const handleblogImg = async (e) => {
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
      setImageEdit(data.secure_url);
      toast.success("Success", { id: toastId });
    } catch (error) {
      console.log("we get an error", error);
    }
  };


  const onEditUpdate = async(e)=>{
 
    e.preventDefault()
    try {
      console.log(headingEdit)
   

      const response = await axios.put("http://localhost:3015/user/editBlog",
      {imageEdit,
        headingEdit,
        descriptionEdit,
        blogid})

      if(response.data.success){
        setEditAction(!editAction)
        toast.success(response.data.message)
      }else{
        toast.error("not updated")
      }
      
    } catch (error) {
      console.log("the error edit",error)
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {myBlogs.length===0?<>loading...</>: myBlogs.map((ele, ind) => {
        return (
          <Link
          to={`/blog/${ele._id}`}
            key={ind}
            className="overflow-hidden shadow-lg flex flex-col rounded-xl cursor-pointer"
          >
            <div className="relative">
        
                <div className="w-[420px] h-[250px]">
                  <img
                    className="w-[420px] h-[250px] object-fill"
                    src={ele.image?ele.image:noimage}
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
               
                {ele.title.split(" ").slice(0,4).join(" ")}
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
      })}
      {isModalOpen && (
 <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 py-2 px-4">
 <div className="relative bg-white rounded-lg border-gray-400 w-full max-w-4xl mx-auto max-h-full overflow-y-auto">
   <div className="border">
     <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal p-4">
       <div className="flex justify-between items-center">
         <h1 className="text-xl font-semibold">
           Update{" "}
           <span className="text-blue-600 font-semibold">Blog?</span>
         </h1>
         <button
           className="text-xl hover:text-red-700 duration-500"
           onClick={() => setIsModalOpen(false)}
         >
           close
         </button>
       </div>
       <div className="flex flex-col lg:flex-row justify-between items-center mt-4 lg:mt-10 space-y-4 lg:space-y-0 lg:space-x-4">
         <textarea
           name=""
           id=""
           cols="40"
           rows="2"
           className="border border-black text-lg lg:text-2xl p-2 w-full lg:w-auto"
           value={headingEdit}
           onChange={(e) => setHeadingEdit(e.target.value)}
         />
         <div className="flex flex-col items-center lg:items-start">
           {imageEdit && (
             <img
               src={imageEdit}
               className="h-[180px] w-full lg:w-[400px] object-cover rounded-md mb-2 lg:mb-0"
               alt="Tailwind Play"
             />
           )}
           <input
             type="file"
             id="imageInput"
             accept="image/*"
             className="opacity-0 absolute inset-0 z-[-1]"
             onChange={(e) => handleblogImg(e)}
           />
           <label
             htmlFor="imageInput"
             className="text-black text-lg font-bold cursor-pointer border border-purple-800 p-0.5 bg-green-200 rounded-md hover:bg-green-400 duration-500"
           >
             img+
           </label>
         </div>
       </div>
       <hr className="my-4" />
       <textarea
         cols="30"
         rows="11"
         className="text-base leading-8 p-2 border border-black w-full"
         value={descriptionEdit}
         onChange={(e) => setDescriptionEdit(e.target.value)}
       />
       <button
         onClick={(e) => onEditUpdate(e)}
         className="rounded-md mt-4 px-4 py-2 border border-gray-700 bg-blue-400 font-semibold hover:bg-blue-700 hover:text-white duration-500 self-center lg:self-end"
       >
         Update
       </button>
     </div>
   </div>
 </div>
</div>
      )}

      
    </div>
  );
}

export default Myblogs;
