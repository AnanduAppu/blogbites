import React, { useContext, useState } from "react";
import axios from "axios";
import UserContext from "../Contex/CreateContex";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-hot-toast";

function Interests() {
  const { userDataFromSignup } = useContext(UserContext);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [skipDisabled, setSkipDisabled] = useState(true);

  const navigate = useNavigate();

  const Interests = [
    "#travel",
    "#model",
    "#Tech",
    "#AI",
    "#books",
    "#Cars",
    "#Bitcoin",
    "#fashion",
    "#movies",
    "#anime",
    "#science",
    "#history",
    "#love",
    "#intruments",
    "#music",
    "#Medical",
    "#money",
  ];

  const toggleInterest = (interest) => {
    const selectedIndex = selectedInterests.indexOf(interest);
    let updatedInterests = [];

    if (selectedIndex === -1) {
      if (selectedInterests.length < 5) {
        updatedInterests = [...selectedInterests, interest];
      } else {
        // Show alert or toast indicating max selections reached
        return;
      }
    } else {
      updatedInterests = selectedInterests.filter((item) => item !== interest);
    }

    setSelectedInterests(updatedInterests);
    setSkipDisabled(updatedInterests.length > 0);
  };

  const handleSkip = () => {
    const cookieToken = document.cookie.replace(/(?:(?:^|.*;\s*)emailToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
       
    if (!cookieToken) {
      toast.error("Token not found");
      return;
    }else{
      
      setSelectedInterests([]);
      setSkipDisabled(true);
     // navigate("/Login");
     navigate('addpics');
    }
    
  
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const Useremail = userDataFromSignup.email
   
    
    const cookieToken = document.cookie.replace(/(?:(?:^|.*;\s*)emailToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
       
    if (!cookieToken) {
      toast.error("Token not found");
      return;
    }
  

    console.log(cookieToken)
    const otpEmail = jwtDecode(cookieToken);
    console.log(otpEmail.mail)
    
    const email = Useremail?Useremail:otpEmail.mail
    try {
   
  

      const response = await axios.post(
        "http://localhost:3015/user/userinterst",
        {
          selectedInterests,
          email,
        }
      );
     
      if(response.data.success){
       
        toast.success("successfull")
        //navigate("/Login");
        navigate('addpics');
      };
      
    } catch (error) {
      
      toast.error("some error occured")
    }
  };

  return (
    <div className="flex flex-col items-center justify-center my-24">
      <h1 className="text-2xl font-semibold">Pick Your interests</h1>
      <ul className="flex flex-row flex-wrap max-w-2xl p-6 text-lg font-bold divide-x divide-border gap-4 cursor-pointer">
        {Interests.map((ele, index) => (
          <li
            key={index}
            onClick={() => toggleInterest(ele)}
            className={`px-2 hover:text-green-500 ${
              selectedInterests.includes(ele) ? "text-green-500" : ""
            }`}
          >
            {ele}
          </li>
        ))}
      </ul>
      <div className="flex">
        <button
          onClick={handleSkip}
          disabled={selectedInterests.length !== 0}
          className={`text-3xl font-semibold py-2 px-2 hover:border-blue-400 ${
            selectedInterests.length !== 0
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          #skip
        </button>
        <button
          onClick={handleSubmit}
          disabled={selectedInterests.length === 0}
          className={`text-3xl font-semibold py-2 px-2  hover:border-blue-400 ${
            selectedInterests.length === 0
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          #select
        </button>
      </div>
    </div>
  );
}

export default Interests;
