import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logoimg from "../assets/BlogbiteslogoVetical.png";
import UserContext from "../Contex/CreateContex";
import { jwtDecode } from "jwt-decode";

function ResetPass2() {
    const navigate = useNavigate();
    const {resetEmail}=useContext(UserContext)
    const [otpVerified, setOtpVerified] = useState(false);
    const [otpinput,setOtpinput]=useState(Number)
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const handleOtpVerification = (e) => {
      e.preventDefault();
      const cookieToken = document.cookie.replace(/(?:(?:^|.*;\s*)OtpPass\s*\=\s*([^;]*).*$)|^.*$/, "$1");
       
      if (!cookieToken) {
        toast.error("Token not found");
        return;
      }
      const otptoken = jwtDecode(cookieToken);
     
        if (otptoken==otpinput) {
          document.cookie = `OtpPass=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;e
            setOtpVerified(true);
        }
    };
  
    const handlePasswordReset = (e) => {
      e.preventDefault();
      // Your logic for resetting the password goes here
      // After resetting the password, you may navigate the user to another page
      navigate("/login"); // Example navigation
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
                    className="w-full px-4  py-3 rounded-lg  bg-gray-200 mt-2 border border-black focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                <label className="block text-gray-700">Confirm Password</label>
                    <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg  bg-gray-200 mt-2 border border-black focus:border-blue-500 focus:bg-white focus:outline-none"
                    />

                <button
                type="submit"
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
