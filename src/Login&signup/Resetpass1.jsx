import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logoimg from "../assets/BlogbiteslogoVetical.png";
import UserContext from "../Contex/CreateContex";


function Resetpass1() {
 const{ setResetemail}= useContext(UserContext)

  const navigate = useNavigate();
  const [email, setEmail] = useState(""); 

  const handleEmail = async (e) => {
    e.preventDefault(); 

    try {
      console.log(email,'we are in handle email function')
      
      const response = await axios.post("http://localhost:3015/user/varifyemail", {email},
      {withCredentials:true});
      
      if (response.data.success) {
        setResetemail(email)
        navigate("/login/emailvarify/otp");
      }
 
     
    } catch (error) {
     
      console.error("Error:", error);
    }
  };

  return (
    <div
    className="bg-slate-100 w-full md:max-w-md lg:max-w-full 
    md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16
     xl:px-12 flex items-center justify-center border border-b-slate-400 shadow-lg "
    
     >
    <form className="w-full h-100">
      <img src={logoimg} alt="" className="w-52 mx-16 block lg:hidden" />

      <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
        Enter Your email 
      </h1>

      <form className="mt-6"   >
        <div>
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            name=""
            id=""
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email Address"
            className="w-full px-4 py-3 rounded-lg  bg-gray-200 mt-2 border border-black focus:border-blue-500 focus:bg-white focus:outline-none"
            autoFocus
            autoComplete="off"
            required
          />
        </div>

        <button
          onClick={handleEmail}
          className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
        >
         Send Otp
        </button>
      </form>

      <hr className="my-6 border-gray-300 w-full" />

      <p className="mt-8">
        back to{" "}
        <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">
          login page?
        </a>
      </p>

      <p className="text-sm text-gray-500 mt-12">
        &copy; 2020 Abstract UI - All Rights Reserved.
      </p>
    </form>
    </div>
  );
}

export default Resetpass1
