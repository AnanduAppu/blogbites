import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UserContext from "../Contex/CreateContex";
import { fetchContent } from "../ReduxTool/CreateSlice";
import { isEqual } from "lodash";

function OtherUserProfile() {
  const dispatch = useDispatch();
  const { userid } = useParams();
  const { bloglist,userDataFromSignup } = useContext(UserContext);
  const [updateChange,setUpdateChange]=useState({})
  const [follow ,setFollow]=useState(false)
  let [info,setInfo]=useState({})
  info = useSelector(state => state.infoData.info);



  useEffect(() => {
    // Fetch data only if info is null or updateChange is not equal to info
    if (!info || !isEqual(updateChange, info)) {
   
     
      dispatch(fetchContent(userid));
      
   
    }
    if (info) {
      const findFollow = info.followed.find((ele)=>ele._id===userDataFromSignup._id)
      if(findFollow){
        console.log("print")
        setFollow(true)
      }
    }

  }, [dispatch, updateChange]);


 



  


  // console.log("this is get from useparams:-", userid);
  // const blogAuthor = bloglist.find((ele) => ele.author._id == userid)?.author;
  // console.log("blog author is:- ", blogAuthor);

  const followAndUnfollow = async(e)=>{
    e.preventDefault()
    const logeduserId = userDataFromSignup._id
    const anotheruserId=info._id

    try {
      const responds = await axios.put('http://localhost:3015/user/followAndunfollow',{logeduserId,anotheruserId})
      if(responds.data.success){
        dispatch(fetchContent(userid));
        toast.success(responds.data.message)
    

      }
    } catch (error) {
      console.log("error when follow user",error)
    }

  }
  return (
    <>


<div className="mx-2">
      {info && (
  <div className="relative w-full h-[60vh] md:h-[50vh] lg:h-[50vh] ">
    <img
      alt="Background"
      className="absolute inset-0 w-full h-[50vh] object-cover"
      height="400"
      src={info.backgroudWal ? info.backgroudWal : "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"}
      style={{ aspectRatio: "1200/400", objectFit: "cover" }}
      width="1200"
    />
    <div className="absolute inset-0 flex items-end justify-center">
      <img
        alt="Profile"
        className="rounded-full border-4 border-white shadow-lg"
        height="160"
        src={info.profilePicture ? info.profilePicture : "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"}
        style={{ aspectRatio: "160/160", objectFit: "cover" }}
        width="160"
      />
    </div>
  </div>
)}
{info && <div className="container mx-auto px-4">
  <div className="text-center space-y-4">
    <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">{info && info.username}</h1>
    <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">{info && info.region}</p>
    <div className="flex justify-center gap-4">
      
      <button className="border bg-pink-500 active:bg-pink-600 border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 flex items-center text-white font-bold"
       onClick={(e)=>followAndUnfollow(e)}
      >
        
    
        Follow
      </button>
      <button className="border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path>
        </svg>
        Message
      </button>
    </div>
    <div className="flex justify-center mt-4">
  <div>
    <p className="text-sm text-gray-600">Followers</p>
    <p id="followers" className="text-lg font-semibold text-gray-800">{info.followed.length}</p>
  </div>
  <div className="ml-6">
    <p className="text-sm text-gray-600">Following</p>
    <p id="repositories" className="text-lg font-semibold text-gray-800">{info.you_followed.length}</p>
  </div>
</div>
  </div>
  <div className="mt-8 md:mt-8 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-2">
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-4">
      <h3 className="text-lg font-semibold">About</h3>
      <p className="text-gray-500 dark:text-gray-400">
        John is a passionate software engineer with a strong background in full-stack web development. He has been working at Acme Inc. for the past 5 years, where he has contributed to the development of several award-winning web applications.
      </p>
    </div>

    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-4">
      <h3 className="text-lg font-semibold">interests</h3>
      <div className="flex flex-wrap gap-2">
        {info && info.interest.map((ele, ind) => (
          <span className="border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1" key={ind}>{ele}</span>
        ))}
      </div>
    </div>
  </div>
</div>}
</div>

     
    </>
  );
}

export default OtherUserProfile;
