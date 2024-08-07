import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../Contex/CreateContex";
import Comments from "./Comments";
import { fetchContent } from "../ReduxTool/CreateSlice";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import axios from "axios";
import BlogImages from "./BlogImages";
import FollowFollowing from "./FollowFollowing";

function BlogPage() {
  const dispatch = useDispatch();
  const { blogid } = useParams();
 
  const {
    userDataFromSignup,
    likeAction,
    setLikeAction,
    saveAction,
    setSaveAction,
  } = useContext(UserContext);
  const navigate = useNavigate();
  const [blogShow,setBlogshow]=useState()
  const [propValue, setPropValue] = useState({data:[]});
 
  useEffect(() => {
    if (!blogid) {
      console.error("Blog ID is missing.");
      return;
    }
   
    const selectedBlog = async () => {
      try {
        const response = await axios.get("user/selectedBlog", {
          params: { blogId: blogid }
        });

        if (response.data.successful) {
          setBlogshow(response.data.blogdata);
        } else {
          console.error("Failed to fetch the blog data.");
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    selectedBlog();

  }, [likeAction,saveAction,blogid]);

  


  const saveAndUnsave = async (e, blogid) => {
    e.preventDefault();

    const userId = userDataFromSignup._id;
    try {
      const response = await axios.put("actvity/saveBlog", {
        userId,
        blogid,
      });

      if (response.data.success) {
        setSaveAction(!saveAction);
        return;
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const likeandUnlike = async (e, blogid) => {
    e.preventDefault();

    const userId = userDataFromSignup._id;

    try {
      const response = await axios.put("actvity/like", {
        userId,
        blogid,
      });

      if (response.data.success) {
      
        setLikeAction(!likeAction);
        return;
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  if (!blogShow) {
    return <div>Blog not found</div>;
  }

  const userId = userDataFromSignup._id;
  console.log("from blg",blogShow.author)

  const checkuser = () => {
    if (blogShow.author._id == userId) {
      navigate(`/profile`);
    } else {
      dispatch(fetchContent(blogShow.author));
      navigate(`/author/${blogShow.author._id}`);
    }
  };



  const showModal = (e,data,field) => {
    e.preventDefault()
    setPropValue({data,field}); // Set the parameter value
    document.getElementById('my_modal_3').showModal(); // Show the modal
  };

  return (
    <>
      <div className=" lg:px-40 md:px-20 max-md:px-10 max-sm:px-10">
        <main className="mt-10">
          <div className="mb-4 md:mb-0 w-full mx-auto relative">
            <div className="px-4 lg:px-0">
              <div className="flex justify-between items-center">
                <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                  {blogShow?.title}
                </h2>
                <div className="flex items-center gap-4">
                <button 
                           className="py-2.5 px-2.5 rounded-lg text-sm font-medium bg-teal-200 text-teal-800 shadow-lg"
                           onClick={(e) => showModal(e,blogShow.likes,"Liked users")}
                          >
                  <button onClick={(e) =>{ e.stopPropagation() 
                    likeandUnlike(e, blogShow._id)}}>
                    {blogShow.likes &&
                    userDataFromSignup._id &&
                    blogShow.likes.find(
                      (ele) => ele._id === userDataFromSignup._id
                    ) ? (
                      <span className="text-blue-600 duration-700 ">
                        <ThumbUpAltIcon fontSize="medium" />{" "}
                      </span>
                    ) : (
                      <span className="duration-700 ">
                        <ThumbUpOffAltIcon fontSize="medium" />{" "}
                      </span>
                    )}{" "}
                    {blogShow.likes.length}
                  </button>
                </button>
                  <button onClick={(e) => saveAndUnsave(e, blogShow._id)}>
                    {userDataFromSignup._id &&
                    userDataFromSignup.saved_blogs.find(
                      (ele) => ele == blogid
                    ) ? (
                      <span className="text-blue-600 duration-700 ">
                        <BookmarkIcon fontSize="medium" />{" "}
                      </span>
                    ) : (
                      <span className="duration-700 ">
                        <BookmarkBorderIcon fontSize="medium" />{" "}
                      </span>
                    )}{" "}
                  </button>
                </div>
              </div>

              <a
                href="#"
                className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
              >
                {blogShow.topic}
              </a>
            </div>

            {blogShow.image.length>0 ? (
              <BlogImages props={blogShow.image}/>
            ) : (
              <div></div>
            )}
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
              {blogShow.description}
              <div className="my-10">{blogShow.descriptionPara1?blogShow.descriptionPara1:''}</div>
              <div className="my-10">{blogShow.descriptionPara2?blogShow.descriptionPara2:''}</div>
             
            </div>
       
            <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
              <div className="p-4 border-t border-b md:border md:rounded">
                <div className="flex py-2">
                  <img
                    src={blogShow?.author.profilePicture}
                    className="h-10 w-10 rounded-full mr-2 object-cover"
                    alt="User"
                  />
                  <div>
                    <p className="font-semibold text-gray-700 text-sm">
                      {" "}
                      {blogShow?.author.firstName}{" "}
                    </p>
                    <p className="font-semibold text-gray-600 text-xs">
                      {" "}
                      Editor{" "}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 py-3">
                  Mike writes about technology Yourself required no at thoughts
                  delicate landlord it be. Branched dashwood do is whatever it.
                </p>
                <button
                  onClick={checkuser}
                  className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded"
                >
                  view Profile
                  <i className="bx bx-user-plus ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </main>
     
        <Comments blogid={blogid} />
      </div>
      <FollowFollowing props={propValue} />
    </>
  );
}

export default BlogPage;
