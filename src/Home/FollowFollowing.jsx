import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchContent } from "../ReduxTool/CreateSlice";

function FollowFollowing({ props }) {
  console.log(props);
 const Navigate = useNavigate()

  const Dispatch = useDispatch()

  const AuthorProfile = (e,id)=>{
    e.preventDefault()
    Dispatch(fetchContent(id));
    Navigate(`/author/${id}`)
   }
  return (
<div>
  <dialog id="my_modal_3" className="modal  w-full">
    <div>
      <div className=" w-full p-5 sm:p-10 md:p-5 bg-white rounded-lg shadow-lg shadow-gray-400 ">
        <div className="rounded-lg bg-white p-2">
          <div className="flex items-center justify-between border-b-2 border-gray-400">
            <h4 className="text-xl font-bold text-gray-900">{props.field}</h4>
            <button className="btn btn-sm mb-1  " onClick={() => document.getElementById('my_modal_3').close()}>
              ✕
            </button>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 max-sm:max-h-[50vh] max-sm:overflow-y-auto ">
          {props.data &&
            props.data.map((ele, ind) => (
              <a
                key={ind}
                onClick={(e)=>AuthorProfile(e,ele._id)}
                href="#"
                className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600 cursor-pointer"
                title="View Profile"
              >
                <img
                  src={ele.profilePicture}
                  className="w-16 rounded-full object-fill"
                  alt="Profile"
                />
                <p className="mt-1 text-center text-sm font-bold">
                  {ele.username}
                </p>
                <p className="text-center text-xs text-gray-500">
                  UI/UX Design at Upwork
                </p>
              </a>
            ))}
            <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg"
              className="w-16 rounded-full"
              alt="Profile"
            />
            <p className="mt-1 text-center text-sm font-bold">Diane Aguilar</p>
            <p className="text-center text-xs text-gray-500">
              UI/UX Design at Upwork
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg"
              className="w-16 rounded-full"
              alt="Profile"
            />
            <p className="mt-1 text-center text-sm font-bold">Diane Aguilar</p>
            <p className="text-center text-xs text-gray-500">
              UI/UX Design at Upwork
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg"
              className="w-16 rounded-full"
              alt="Profile"
            />
            <p className="mt-1 text-center text-sm font-bold">Diane Aguilar</p>
            <p className="text-center text-xs text-gray-500">
              UI/UX Design at Upwork
            </p>
          </a>

          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg"
              className="w-16 rounded-full"
              alt="Profile"
            />
            <p className="mt-1 text-center text-sm font-bold">Diane Aguilar</p>
            <p className="text-center text-xs text-gray-500">
              UI/UX Design at Upwork
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg"
              className="w-16 rounded-full"
              alt="Profile"
            />
            <p className="mt-1 text-center text-sm font-bold">Diane Aguilar</p>
            <p className="text-center text-xs text-gray-500">
              UI/UX Design at Upwork
            </p>
          </a><a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg"
              className="w-16 rounded-full"
              alt="Profile"
            />
            <p className="mt-1 text-center text-sm font-bold">Diane Aguilar</p>
            <p className="text-center text-xs text-gray-500">
              UI/UX Design at Upwork
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg"
              className="w-16 rounded-full"
              alt="Profile"
            />
            <p className="mt-1 text-center text-sm font-bold">Diane Aguilar</p>
            <p className="text-center text-xs text-gray-500">
              UI/UX Design at Upwork
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg"
              className="w-16 rounded-full"
              alt="Profile"
            />
            <p className="mt-1 text-center text-sm font-bold">Diane Aguilar</p>
            <p className="text-center text-xs text-gray-500">
              UI/UX Design at Upwork
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg"
              className="w-16 rounded-full"
              alt="Profile"
            />
            <p className="mt-1 text-center text-sm font-bold">Diane Aguilar</p>
            <p className="text-center text-xs text-gray-500">
              UI/UX Design at Upwork
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg"
              className="w-16 rounded-full"
              alt="Profile"
            />
            <p className="mt-1 text-center text-sm font-bold">Diane Aguilar</p>
            <p className="text-center text-xs text-gray-500">
              UI/UX Design at Upwork
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg"
              className="w-16 rounded-full"
              alt="Profile"
            />
            <p className="mt-1 text-center text-sm font-bold">Diane Aguilar</p>
            <p className="text-center text-xs text-gray-500">
              UI/UX Design at Upwork
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg"
              className="w-16 rounded-full"
              alt="Profile"
            />
            <p className="mt-1 text-center text-sm font-bold">Diane Aguilar</p>
            <p className="text-center text-xs text-gray-500">
              UI/UX Design at Upwork
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg"
              className="w-16 rounded-full"
              alt="Profile"
            />
            <p className="mt-1 text-center text-sm font-bold">Diane Aguilar</p>
            <p className="text-center text-xs text-gray-500">
              UI/UX Design at Upwork
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg"
              className="w-16 rounded-full"
              alt="Profile"
            />
            <p className="mt-1 text-center text-sm font-bold">Diane Aguilar</p>
            <p className="text-center text-xs text-gray-500">
              UI/UX Design at Upwork
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg"
              className="w-16 rounded-full"
              alt="Profile"
            />
            <p className="mt-1 text-center text-sm font-bold">Diane Aguilar</p>
            <p className="text-center text-xs text-gray-500">
              UI/UX Design at Upwork
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg"
              className="w-16 rounded-full"
              alt="Profile"
            />
            <p className="mt-1 text-center text-sm font-bold">Diane Aguilar</p>
            <p className="text-center text-xs text-gray-500">
              UI/UX Design at Upwork
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg"
              className="w-16 rounded-full"
              alt="Profile"
            />
            <p className="mt-1 text-center text-sm font-bold">Diane Aguilar</p>
            <p className="text-center text-xs text-gray-500">
              UI/UX Design at Upwork
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg"
              className="w-16 rounded-full"
              alt="Profile"
            />
            <p className="mt-1 text-center text-sm font-bold">Diane Aguilar</p>
            <p className="text-center text-xs text-gray-500">
              UI/UX Design at Upwork
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg"
              className="w-16 rounded-full"
              alt="Profile"
            />
            <p className="mt-1 text-center text-sm font-bold">Diane Aguilar</p>
            <p className="text-center text-xs text-gray-500">
              UI/UX Design at Upwork
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg"
              className="w-16 rounded-full"
              alt="Profile"
            />
            <p className="mt-1 text-center text-sm font-bold">Diane Aguilar</p>
            <p className="text-center text-xs text-gray-500">
              UI/UX Design at Upwork
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg"
              className="w-16 rounded-full"
              alt="Profile"
            />
            <p className="mt-1 text-center text-sm font-bold">Diane Aguilar</p>
            <p className="text-center text-xs text-gray-500">
              UI/UX Design at Upwork
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg"
              className="w-16 rounded-full"
              alt="Profile"
            />
            <p className="mt-1 text-center text-sm font-bold">Diane Aguilar</p>
            <p className="text-center text-xs text-gray-500">
              UI/UX Design at Upwork
            </p>
          </a>






        </div>

      </div>
    </div>
  </dialog>
</div>
  );
}

export default FollowFollowing;
