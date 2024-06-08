import UserContext from "../Contex/CreateContex";
import { Link, useNavigate } from "react-router-dom";
import { Suspense, useContext, useState,useRef } from "react";
import axios from "axios";


import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { useDispatch } from "react-redux";
import { fetchContent } from "../ReduxTool/CreateSlice";


function Blogview() {
  const {
    userDataFromSignup,
    bloglist,
    likeAction,
    setLikeAction,
    saveAction,
    setSaveAction,
 
  } = useContext(UserContext);


  const dispatch = useDispatch()
  const navigate = useNavigate()



  const likeandUnlike = async (e, blogid) => {
    e.preventDefault();

    const userId = userDataFromSignup._id;
    console.log("userid is :-", userId + " and blogid is:-", blogid);

    try {
      const response = await axios.put("http://localhost:3015/user/like", {
        userId,
        blogid,
      });

      if (response.data.success) {
        console.log("liked");
        setLikeAction(!likeAction);
        return;
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };


 const AuthorProfile = (e,id)=>{
  e.preventDefault()
  dispatch(fetchContent(id));
  navigate(`/author/${id}`)
 }

  return (
    <div className=" max-w-[85rem] py-10 sm:px-6 lg:px-2 lg:py-5 ">
      {/* Grid */}
      <div className=" grid lg:grid-cols-1 gap-5">
        {/* Card */}
        <Suspense fallback={<loading />}>
          {bloglist.length == 0 ? (
            <>no data</>
          ) : (
            bloglist.map((ele, ind) => {
              return (
                <Link
                
                  to={`/blog/${ele._id}`}
                  className="group sm:flex rounded-xl bg-[#f9f9f5] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 border shadow-lg border-slate-200 hover:border-purple-600 duration-500"
                  key={ind}
                >
                  {ele.image.length>0 ? (
                    <div className="flex-shrink-0 relative rounded-xl  shadow-lg shadow-gray-400 overflow-hidden w-full lg:h-80 max-sm:w-full max-sm:h-[350px] sm:w-[250px] sm:h-full border border-white ">
                      <img
                        className="size-full absolute top-0 start-0 object-cover"
                        src={ele.image[0]}
                        alt="Image Description"
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}

                  <div className="grow">
                    <div className="p-4 flex flex-col h-full sm:p-6">
                      <div className="mb-3">
                        <p className="inline-flex items-center gap-1.5 py-1.5  rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                          {ele.topic}
                        </p>
                      </div>

                      <div>
                        <h1 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                          {ele.title}
                        </h1>
                        <p className="mt-2 text-slate-500 text-lg">
                          {ele.description.split(" ").slice(0, 30).join(" ")}
                          {ele.description.split(" ").length > 20 ? "..." : ""}
                        </p>
                      </div>
                      <div className="mt-5 sm:mt-auto">
                        {/* Avatar */}
                        <div className=" flex justify-between mt-2 ">
                          <button className="flex items-center  "  onClick={(e)=>AuthorProfile(e,ele.author._id)}>
                            <div className="flex-shrink-0">
                              <img
                                className="size-[46px] rounded-full object"
                                src={ele.author.profilePicture}
                                alt="Image Description"
                                style={{ aspectRatio: "160/160", objectFit: "cover" }}
                              />
                            </div>
                            <div className="ms-2.5 sm:ms-4">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                                {ele.author.firstName}
                              </h4>
                              <p className="text-xs text-gray-500">
                                {ele.createdAt.slice(0, 10)}
                              </p>
                            </div>
                          </button>
                          <div className="flex gap-9 pt-7">
                            <button onClick={(e) => likeandUnlike(e, ele._id)}>
                              {ele.likes &&
                              userDataFromSignup._id &&
                              ele.likes.find(
                                (ele) => ele._id === userDataFromSignup._id
                              ) ? (
                                <span className="text-blue-600 duration-700 "><ThumbUpAltIcon fontSize="medium"/> </span>
                              ) : (<span className="duration-700 "><ThumbUpOffAltIcon  fontSize="medium" /> </span>
                               
                              )}{" "}
                              {ele.likes.length}
                              
                            </button>
                            <p>Save</p>
                          </div>
                        </div>
                        {/* End Avatar */}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </Suspense>
      </div>
      {/* End Grid */}
    </div>
  );
}

function loading() {
  return <h2>loading...</h2>;
}

export default Blogview;
