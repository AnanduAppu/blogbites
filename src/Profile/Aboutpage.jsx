import React, { useContext, useState } from "react";
import UserContext from "../Contex/CreateContex";
import EditIcon from "@mui/icons-material/Edit";
function Aboutpage() {
  const { userDataFromSignup } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const togglePostCreation = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [fullName, setFullName] = useState(userDataFromSignup.firstName);

  const handleSave = () => {
    console.log("Saved Input Data:");
    console.log("Full Name:", fullName);
 
  };
  return (
    <div>
      <div className="my-4 flex flex-col space-y-4 2xl:flex-row 2xl:space-x-4 2xl:space-y-0">
        <div className="flex w-full flex-col 2xl:w-1/3">
          <div className="flex-1 rounded-lg bg-white p-8 shadow-xl">
            <h4 className="text-xl font-bold text-gray-900">
              Personal Info{" "}
              <a className="cursor-pointer ps-60 " onClick={togglePostCreation}>
                {isOpen ? "edit" : <EditIcon />}
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
                    value={userDataFromSignup.username}
                  />
                </li>
                <li className="flex border-b py-2">
                  <span className="w-24 font-bold">Birthday:</span>
                  <input
                    className="text-gray-700"
                    value={userDataFromSignup.dob}
                  />
                </li>
                <li className="flex border-b py-2">
                  <span className="w-24 font-bold">Joined:</span>
                  <input
                    className="text-gray-700"
                    value={userDataFromSignup.createdAt}
                  />
                </li>

                <li className="flex border-b py-2">
                  <span className="w-24 font-bold">Email:</span>
                  <input
                    className="text-gray-700"
                    value={userDataFromSignup.email}
                  />
                </li>
                <li className="flex border-b py-2">
                  <span className="w-24 font-bold">Location:</span>
                  <input
                    className="text-gray-700"
                    value={userDataFromSignup.region}
                  />
                </li>
              </ul>
              <button className="px-3 my-3 border border-black font-semibold text-white bg-blue-600 hover:bg-blue-800">Save</button>
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
        <div className="flex w-full flex-col 2xl:w-2/3">
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
          </div>
          <div className="lg:mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <div className="bg-blue-500 p-4 text-white text-center">
              <div className="text-2xl font-bold">Followers</div>
              <div className="text-lg">250</div>
            </div>
            <div className="bg-green-500 p-4 text-white text-center">
              <div className="text-2xl font-bold">Followed</div>
              <div className="text-lg">150</div>
            </div>
            <div className="bg-yellow-500 p-4 text-white text-center">
              <div className="text-2xl font-bold">Likes</div>
              <div className="text-lg">125</div>
            </div>
            <div className="bg-purple-500 p-4 text-white text-center">
              <div className="text-2xl font-bold">Blogs</div>
              <div className="text-lg">25</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
