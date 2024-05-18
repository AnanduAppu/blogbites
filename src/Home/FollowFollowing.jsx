import React from "react";

function FollowFollowing({ props }) {
  console.log(props);
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <div className="bg-white shadow-md rounded-md overflow-hidden max-w-lg mx-auto mt-4">
              <div className="bg-gray-100 py-2 px-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {props.field}
                </h2>
              </div>
              <ul className="divide-y divide-gray-200">
              {props.data && props.data.map((ele, ind) => (
  <li className="flex items-center py-4 px-6" key={ind}>
    <span className="text-gray-700 text-lg font-medium mr-4">
      {ind + 1}
    </span>
    <img
      className="w-12 h-12 rounded-full object-cover mr-4"
      src={ele.profilePicture}
      alt="User avatar"
    />
    <div className="flex-1">
      <h3 className="text-lg font-medium text-gray-800">
        {ele.username}
      </h3>
      <p className="text-gray-600 text-base">1234 points</p>
    </div>
  </li>
))}
                
                {/* Additional list items can be added here */}
              </ul>
            </div>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default FollowFollowing;
