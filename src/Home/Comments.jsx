import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import UserContext from "../Contex/CreateContex";

function Comments({ blogid }) {
  const [comment, setComment] = useState("");
  const [rendComment, setRendComment] = useState(false);
  const [showComment, setShowComment] = useState([]);
  const { userDataFromSignup } = useContext(UserContext);
  const userId = userDataFromSignup._id;

  //fetch all comments from backend
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.post(
          "user/showComment",
          { blogid }
        );
        if (response.data.success) {
          console.log(response.data.commentData)
          setShowComment(response.data.commentData);
        }
      } catch (error) {
        console.log("the error in comment fetching :-", error);
        toast.error("Failed to fetch comments");
      }
    };
  
    fetchComments();
  }, [blogid, rendComment]); 

  //add comment
  const postComment = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "actvity/postcomment",
        { userId, blogid, comment }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setRendComment(!rendComment);
        setComment("");
      }
    } catch (error) {
      console.log("the error in comment is:- ", error);
    }
  };

  return (
    <div className="bg-gray-100 p-6 my-6">
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
        {showComment &&
          showComment.map((ele,ind) => (
            <div className="bg-white p-4 rounded-lg shadow-md" key={ind}>
              <h3 className="text-lg font-bold">{ele.commentPerson.firstName}</h3>
              <p className="text-gray-700 text-sm mb-2">
                Posted on {new Date(ele.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
              </p>
              <p className="text-gray-700">
             {ele.comment}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Comments;
