import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logoimg from "../assets/BlogbiteslogoVetical.png";
import UserContext from "../Contex/CreateContex";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-hot-toast";
import axios from "axios";

function ResetPass2() {
    const navigate = useNavigate();
    const {resetEmail}=useContext(UserContext)
    const [otpVerified, setOtpVerified] = useState(false);
    const [otpinput,setOtpinput]=useState(Number)
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
 
    const handleOtpVerification = async (e) => {
      e.preventDefault();
  

      try {
        const response = await axios.post('user/passotpverify', {otpinput});

        if (response.data.success) {
          toast.success(response.data.message);
     
          setOtpVerified(true);
        
        }else{
          toast.error(response.data.message);
        }
          

      } catch (error) {
        console.error("Error verifying OTP:", error);
        toast.error("Failed to verify OTP. Please try again.");
      }

    };
  
    const handlePasswordReset =async (e) => {
      e.preventDefault();
      try {
        if (newPassword===confirmPassword) {
        
          const response= axios.post('user/setnewpassword',{userEmail:resetEmail,newPassword})

          if ((await response).data.success) {
            
            toast.success("successfully reset password");
            navigate('/Login');
          }else{
            toast.error("something happened")
          }


        }
        
        
      }


      catch (error) {
        toast.error("we go this error",error)
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

        <form className="mt-6" action="#" method="POST">
        {!otpVerified&&( <div>
            <label className="block text-gray-700 text-xl md:text-2xl font-bold leading-tight mt-0">
              drop your otp
            </label>
            <input
              type="number"
              value={otpVerified ?'': otpinput}
              onChange={(e) =>setOtpinput(e.target.value)}
              className="w-full px-4 py-3 rounded-lg  bg-gray-200 mt-2 border border-black focus:border-blue-500 focus:bg-white focus:outline-none"
            />
          </div>)}

          {!otpVerified ?(
            <button
              type="submit"
              onClick={handleOtpVerification}
              className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
            >
              Verify
            </button>):(<h1 className="text-green-600 text-2xl font-semibold my-4">otp verification successfull...</h1>)}
            {otpVerified && (<div>
                <label className="block text-gray-700">New Password</label>
                    <input
                    type="password"
                    onChange={(e)=> setNewPassword(e.target.value)}
                    className="w-full px-4  py-3 rounded-lg  bg-gray-200 mt-2 border border-black focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                <label className="block text-gray-700">Confirm Password</label>
                    <input
                    type="text"
                    onChange={(e)=> setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg  bg-gray-200 mt-2 border border-black focus:border-blue-500 focus:bg-white focus:outline-none"
                    />

                <button
                onClick={handlePasswordReset}
                className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
                >
                Confirm
                </button>
          </div>)}
        </form>

        <hr className="my-6 border-gray-300 w-full" />

        <p className="mt-8">
          back to{" "}
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
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

export default ResetPass2;
