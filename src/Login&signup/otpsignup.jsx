import React, { useContext } from "react";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-hot-toast";
import axios from "axios";
import UserContext from "../Contex/CreateContex";
import { useNavigate } from "react-router-dom";


function Otpsignup() {
  const navigate = useNavigate()

  const [otp,setOtp] = useState('')

  const {userDataFromSignup,setShowSignup} = useContext(UserContext)

console.log(userDataFromSignup)
  const handleinput = (value)=>{
      setOtp(value)
  }

  const submitOtp = async(e)=>{
    e.preventDefault();
   
       
    try {
      const response = await axios.post(
        "/user/usercreate",
        { userDataFromSignup, otp }, // Include otp in the request body
        { withCredentials: true } // This ensures cookies are sent with the request
      );
  
      if (response.data.success) {
        toast.success("Profile created successfully");
        navigate('interest');
      } else {
        toast.error("Profile not created");
      }
    } catch (error) {
      toast.error(`The error: ${error.message}`); // Improved error message handling
    }
       
  }
  return (
    <div className="mb-24">
      <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md mx-auto mt-24">
        <div className="flex flex-col space-y-2 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Confirm OTP</h2>
          <p className="text-md md:text-xl">Enter the OTP we just sent you.</p>
        </div>
        <div className="flex flex-col max-w-md space-y-5">
          <input
            type="number"
            placeholder="otp"
            value={otp}
            onChange={(e)=>handleinput(e.target.value)}
            className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
          />
          <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
          onClick={submitOtp}
         
          >
            Confirm
          </button>
        </div>
      </div>
    </div>





  );
}

export default Otpsignup;
