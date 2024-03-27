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
    const cookieToken = document.cookie.replace(/(?:(?:^|.*;\s*)Otptoken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
       
        if (!cookieToken) {
          toast.error("Token not found");
          return;
        } 
        const otptoken = jwtDecode(cookieToken);

          console.log(otptoken)
       
       
        try {

          if (otptoken==otp) {
            document.cookie = `Otptoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            const response = await axios.post("http://localhost:3015/user/usercreate",userDataFromSignup,{withCredentials:true})

            if(response.data.success){
              toast.success("profile created successful")
              navigate('interest');
            }else{
              toast.error("profile not created ")
            }
          } else {
            toast.error("Invalid OTP");
          }
          
        } catch (error) {
          toast.error(`the error: ${error}`)
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
