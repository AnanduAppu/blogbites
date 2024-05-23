import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../Contex/CreateContex";
import Comments from "./Comments";
import { fetchContent } from "../ReduxTool/CreateSlice";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function BlogPage() {
  
  const dispatch = useDispatch()
  const {blogid} = useParams()
  const {bloglist,userDataFromSignup} = useContext(UserContext)
  const navigate = useNavigate()

  const blogShow = bloglist.find((ele) => ele._id === blogid);



  if (!blogShow) {
    return <div>Blog not found</div>;
  }
  
  const userId = userDataFromSignup._id;

  const checkuser = ()=>{
    if(blogShow.author._id==userId){
      
      navigate(`/profile`)
    }else{
      dispatch(fetchContent(blogShow.author._id));
      navigate(`/author/${blogShow.author._id}`)
    }
  }
  return (
    <>
    <div className=" lg:px-40 md:px-20 max-md:px-10 max-sm:px-10">
      <main className="mt-10">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <div className="flex justify-between items-center">
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
              {blogShow.title}
            </h2>
            <div className="flex items-center gap-4">
              <span> <ThumbUpIcon/></span>
            <span><BookmarkBorderIcon/></span>
           
            </div>
           
            </div>
         
            <a
              href="#"
              className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
            >
              {blogShow.topic}
            </a>
          </div>

          {blogShow.image?
               <img
               src={blogShow.image}
               className="w-full object-cover lg:rounded lg:h-[500px]"
               
               alt="Banner"
             />
             : <div></div>
        
        }
     
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
            {blogShow.description}
          </div>
          <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
            <div className="p-4 border-t border-b md:border md:rounded">
              <div className="flex py-2">
                <img
                  src={blogShow.author.profilePicture}
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                  alt="User"
                />
                <div>
                  <p className="font-semibold text-gray-700 text-sm">
                    {" "}
                   {blogShow.author.firstName}{" "}
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
              <button onClick={checkuser} className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
                  view Profile
                <i className="bx bx-user-plus ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Comments blogid={blogid}/>
    </div>
    
    </>
  );
}

export default BlogPage;
