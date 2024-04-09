import React, { useContext, useState } from "react";
import UserContext from "../Contex/CreateContex";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import noimage from "../assets/BlogbiteslogoVetical.png";
import { toast } from "react-hot-toast";

function Myblogs() {
  const { userDataFromSignup, myBlogs } = useContext(UserContext);
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

  const handleEdit = (e, blog) => {
    setImageEdit(blog.image);

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


  const onUpdate = async()=>{
    try {
      
    } catch (error) {
      
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {myBlogs.map((ele, ind) => {
        return (
          <div
            key={ind}
            className="overflow-hidden shadow-lg flex flex-col rounded-xl"
          >
            <div className="relative">
              {ele.image ? (
                <div className="w-[420px] h-[250px]">
                  <img
                    className="w-[420px] h-[250px]"
                    src={ele.image}
                    alt="Sunset in the mountains"
                  />
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                </div>
              ) : (
                <div className="w-[420px] h-[250px]">
                  <img
                    className="w-[420px] h-[250px]"
                    src={noimage}
                    alt="Sunset in the mountains"
                  />
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                </div>
              )}

              <a href="#!">
                <button
                  onClick={(e) => handleEdit(e, ele)}
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
                {ele.title}
              </a>
              <p className="text-gray-500 text-sm">
                {ele.description.split(" ").slice(0, 20).join(" ")}
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
                <span className="ml-1">39 Comments</span>
              </span>
            </div>
          </div>
        );
      })}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative  bg-white  shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
            <div className="flex justify-between">
              <h1 className="my-4 text-xl font-semibold">
                Update{" "}
                <span className="text-blue-600 font-semibold"> Blog?</span>
              </h1>
              <button
                className="my-4 text-xl hover:text-red-700 duration-500"
                onClick={() => setIsModalOpen(false)}
              >
                close
              </button>
            </div>
            <div className="mx-auto max-w-md">
              {imageEdit && (
                <img
                  src={imageEdit}
                  className="h-[100px] w-[200px] my-1"
                  alt="Tailwind Play"
                />
              )}
              <>
                <input
                  type="file"
                  id="imageInput"
                  accept="image/*"
                  className="opacity-0 absolute inset-0 z-[-1]"
                  onChange={(e) => handleblogImg(e)}
                />
                <label
                  htmlFor="imageInput"
                  className="text-black text-lg font-bold cursor-pointer border border-gray-800 p-0.5 mt-2"
                >
                  img+
                </label>
              </>

              <div className="divide-y divide-gray-300/50">
                <div className="space-y-6 py-2 text-base leading-7 text-gray-600">
                  <input
                    className="text-xl font-semibold"
                    value={headingEdit}
                    onChange={(e) => setHeadingEdit(e.target.value)}
                  />
                  <textarea
                    cols="56"
                    rows="11"
                    className="border border-gray-400 p-1"
                    value={descriptionEdit}
                    onChange={(e) => setDescriptionEdit(e.target.value)}
                  ></textarea>
                </div>
                <button className="mb-5 px-2 py-2 border border-gray-700 bg-blue-400 font-semibold hover:bg-blue-700 hover:text-white duration-500">
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
