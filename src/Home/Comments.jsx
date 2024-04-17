import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import UserContext from "../Contex/CreateContex";

function Comments({ blogid }) {
  const [comment, setComment] = useState("");
  const { userDataFromSignup } = useContext(UserContext);
  const userId = userDataFromSignup._id

  const postComment = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3015/user/postcomment',{userId,blogid,comment})
   
      if(response.data.success){
        toast.success(response.data. message)
        setComment('')
      }
    } catch (error) {
      console.log("the error in comment is:- ",error)
    }
  };

  return (
    <div className="bg-gray-100 p-6">
      <form
        className="bg-white p-4 rounded-lg shadow-md"
        onSubmit={(e) => postComment(e)}
      >
        <h3 className="text-lg font-bold mb-2">Add a comment</h3>
        <div className="mb-4"></div>
        <div className="mb-4">
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="comment"
            rows="3"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Enter your comment"
          ></textarea>
        </div>
        <button
          className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
      <h2 className="text-lg font-bold my-4 underline">Comments</h2>
      <div className="flex flex-col space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">John Doe</h3>
          <p className="text-gray-700 text-sm mb-2">Posted on April 17, 2023</p>
          <p className="text-gray-700">
            This is a sample comment. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">Jane Smith</h3>
          <p className="text-gray-700 text-sm mb-2">Posted on April 16, 2023</p>
          <p className="text-gray-700">
            I agree with John. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">Bob Johnson</h3>
          <p className="text-gray-700 text-sm mb-2">Posted on April 15, 2023</p>
          <p className="text-gray-700">
            I have a different opinion. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
