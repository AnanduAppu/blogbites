import React, { useContext, useState } from "react";
import axios from "axios";
import UserContext from "../Contex/CreateContex";
function Interests() {
  const {userDataFromSignup} = useContext(UserContext)
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [skipDisabled, setSkipDisabled] = useState(true);

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
    setSelectedInterests([]);
    setSkipDisabled(true);
  };

  const handleSubmit = async () => {
   const email =userDataFromSignup.email
    try {
      const response = await axios.post("http://localhost:3015/user/userinterst", {
        selectedInterests,
        email
      });
      // Handle success response
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error("Error submitting interests:", error);
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
      <button
        onClick={handleSkip}
        disabled={!skipDisabled}
        className={`text-3xl font-semibold py-2 px-2 border border-black hover:border-blue-400 ${
          skipDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {skipDisabled ? "#select" : "#skip"}
      </button>
      <button
        onClick={handleSubmit}
        disabled={selectedInterests.length === 0}
        className={`text-3xl font-semibold py-2 px-2 border border-black hover:border-blue-400 ${
          selectedInterests.length === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Submit Interests
      </button>
    </div>
  );
}

export default Interests;
