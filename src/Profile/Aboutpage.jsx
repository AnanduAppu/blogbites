import React, { useContext, useEffect, useState } from "react";
import UserContext from "../Contex/CreateContex";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from "axios";
import { toast } from "react-hot-toast";
function Aboutpage() {
  const { userDataFromSignup } = useContext(UserContext);
  const userid = userDataFromSignup._id;
  const [isOpen, setIsOpen] = useState(false);
  const togglePostCreation = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const [fullName, setFullName] = useState(userDataFromSignup?.firstName || '');
  const [username, setUsername] = useState(userDataFromSignup?.username || '');
  const [birthday, setBirthday] = useState(userDataFromSignup?.dob || '');
  const [location, setLocation] = useState(userDataFromSignup?.region || '');

  const handleSave = async (e) => {
    try {
      const response = await axios.put("user/edituser", {
        fullName,
        username,
        birthday,
        location,
        userid,
      });
      if (response.data.success) {
        toast.success("edited success");
      }
    } catch (error) {
      toast.error("an error occured", error);
    }
  };
  return (
    <div>
      <div className="my-4 flex flex-col space-y-4 2xl:flex-row 2xl:space-x-4 2xl:space-y-0">
        <div className="flex w-full flex-col 2xl:w-1/3">
          <div className="flex-1 rounded-lg bg-white p-8 shadow-xl">
            <h4 className="text-xl font-bold text-gray-900">
              Personal Info{" "}
              <a className="cursor-pointer ps-60 " onClick={togglePostCreation}>
                {isOpen ?< ArrowBackIcon /> : <EditIcon />}
              </a>{" "}
            </h4>

            {isOpen ? (
              <>
                <ul className="mt-2 text-gray-700 ">
                  <li className="flex border-y py-2">
                    <span className="w-24 font-bold">Full name:</span>
                    <input
                      className="text-gray-700"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </li>
                  <li className="flex border-b py-2">
                    <span className="w-24 font-bold">@username:</span>
                    <input
                      className="text-gray-700"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </li>
                  <li className="flex border-b py-2">
                    <span className="w-24 font-bold">Birthday:</span>
                    <input
                      type="date"
                      className="text-gray-700"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                    />
                  </li>

      
                  <li className="flex border-b py-2">
                    <span className="w-24 font-bold">Location:</span>
                    <select
                      id="region"
                      className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
                      onChange={(e) => setLocation(e.target.value)}
                      value={location}
                      required
                    >
                      {countries.map((country) => (
                        <option key={country.code} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </li>
                </ul>
                <button
                  className="px-3 my-2 border border-black font-semibold text-white bg-blue-600 hover:bg-blue-800"
                  onClick={(e) => handleSave(e)}
                >
                  Save
                </button>
              </>
            ) : (
              <ul className="mt-2 text-gray-700">
                <li className="flex border-y py-2">
                  <span className="w-24 font-bold">Full name:</span>
                  <span className="text-gray-700">
                    {userDataFromSignup.firstName}
                  </span>
                </li>
                <li className="flex border-b py-2">
                  <span className="w-24 font-bold">@username:</span>
                  <span className="text-gray-700">
                    {userDataFromSignup.username}
                  </span>
                </li>
                <li className="flex border-b py-2">
                  <span className="w-24 font-bold">Birthday:</span>
                  <span className="text-gray-700">
                    {userDataFromSignup.dob}
                  </span>
                </li>
                <li className="flex border-b py-2">
                  <span className="w-24 font-bold">Joined:</span>
                  <span className="text-gray-700">
                    {userDataFromSignup.createdAt}
                  </span>
                </li>

                <li className="flex border-b py-2">
                  <span className="w-24 font-bold">Email:</span>
                  <span className="text-gray-700">
                    {userDataFromSignup.email}
                  </span>
                </li>
                <li className="flex border-b py-2">
                  <span className="w-24 font-bold">Location:</span>
                  <span className="text-gray-700">
                    {userDataFromSignup.region}
                  </span>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="flex w-full flex-col 2xl:w-2/3 h-30 max-md:h-full max-sm:h-full">
          <div className="flex-1 rounded-lg bg-white p-8 shadow-xl">
            <h4 className="text-xl font-bold text-gray-900">About</h4>
            <p className="mt-2 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              voluptates obcaecati numquam error et ut fugiat asperiores. Sunt
              nulla ad incidunt laboriosam, laudantium est unde natus cum
              numquam, neque facere. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ut, magni odio magnam commodi sunt ipsum eum!
              Voluptas eveniet aperiam at maxime, iste id dicta autem odio
              laudantium eligendi commodi distinctio!
            </p>
            <hr className="my-5" />
  
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-semibold">interests</h3>
                <div className="flex flex-wrap gap-2">
                  {userDataFromSignup?.interest?.length > 0 &&
                userDataFromSignup.interest.map((ele, ind) => (
                      <span
                        className="border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1"
                        key={ind}
                      >
                        {ele}
                      </span>
                    ))}
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
