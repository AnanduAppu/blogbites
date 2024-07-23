import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import logoimg from "../assets/BlogbiteslogoVetical.png";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
function Loginform() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hanldeSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in both email and password fields");
      return;
    }

    try {
      const response = await axios.post(
        "user/userlogin",
        { email, password },
        { withCredentials: true }
      );
      if (response.data.success) {
        toast.success("successfully loged");
        navigate("/");
        window.location.reload();
      } else {
        toast.error("something happened");
      }
    } catch (error) {
      toast.error("we got this ", error);
    }
  };

  return (
    <div
      className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center"
      style={{ backgroundColor: "rgb(167, 254, 235)" }}
    >
      <form className="w-full h-100">
        <img src={logoimg} alt="" className="w-52 mx-16 block lg:hidden" />
        <h1 className="text-2xl font-bold text-">
          Welcome <span className="text-blue-800">Blogiee...</span>{" "}
        </h1>

        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
          Log in to your account
        </h1>

        <form className="mt-6" action="#" method="POST">
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

          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name=""
              id=""
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              minLength="6"
              className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border border-black focus:border-blue-500 focus:bg-white focus:outline-none"
              required
            />
          </div>

          <div className="text-right mt-2">
            <Link
              to="/login/emailvarify"
              href="#"
              className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            onClick={hanldeSubmit}
            className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
          >
            Log In
          </button>
        </form>

        <hr className="my-6 border-gray-300 w-full" />
        <div className="w-full lg:w-[45%] sm:w-[60%] max-sm:w-[90%] lg:mx-auto">
      <GoogleLogin
      width='400px'
        onSuccess={(credentialResponse) => {
          var value = jwtDecode(credentialResponse.credential);
          console.log(value);
          const Enteredemail = value.email;
          console.log(Enteredemail);

          axios
            .post(
              "user/authlogin",
              { Enteredemail },
              { withCredentials: true }
            )
            .then((res) => {
              if (res.data.success) {
                toast.success("login successful");
                navigate("/");
                window.location.reload();
              } else {
                toast.error("no account exists");
                navigate("/open");
              }
            })
            .catch((err) => {
              alert(err);
            });
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
        

        <p className="mt-8">
          Need an account?{" "}
          <Link
            to="/open"
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Create an account
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-12">
          &copy; 2020 Abstract UI - All Rights Reserved.
        </p>
      </form>
    </div>
  );
}

export default Loginform;
