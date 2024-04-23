import axios from "axios";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import UserContext from "../Contex/CreateContex";
function OtherUserProfile() {
  const { userid } = useParams();
  const { bloglist,userDataFromSignup } = useContext(UserContext);

  console.log("this is get from useparams:-", userid);
  const blogAuthor = bloglist.find((ele) => ele.author._id == userid)?.author;
  console.log("blog author is:- ", blogAuthor);

  const followAndUnfollow = async(e)=>{
    e.preventDefault()
    const logeduserId = userDataFromSignup._id
    const anotheruserId=blogAuthor._id

    try {
      const responds = await axios.put('http://localhost:3015/user/followAndunfollow',{logeduserId,anotheruserId})
      if(responds.data.success){
        toast.success(responds.data.message)
      }
    } catch (error) {
      console.log("error when follow user",error)
    }

  }
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
        />
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
        />
      </head>

      <main className="profile-page">
        <section className="relative block h-500-px">
          {blogAuthor.backgroudWal ? (
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${blogAuthor.backgroudWal})` }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
              ></span>
            </div>
          ) : (
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg')",
              }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
              ></span>
            </div>
          )}
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0px)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={blogAuthor.profilePicture}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 md:text-right md:self-center px-4 lg:order-3 lg:text-right lg:self-center max-sm:flex  max-sm:justify-center">
                    <div className="py-6  mt-32 sm:mt-0">
                      <button
                        className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={(e)=>followAndUnfollow(e)}
                      >
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          22
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Friends
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Photos
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                    {blogAuthor.username}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    {blogAuthor.region}
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    mail - {blogAuthor.email}
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    createdAt -{" "}
                    {new Date(blogAuthor.createdAt).toLocaleDateString(
                      "en-GB",
                      { day: "2-digit", month: "long", year: "numeric" }
                    )}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4 flex justify-center gap-4">
                      {blogAuthor.interest.map((ele, index) => (
                        <p
                          className="mb-4 text-lg leading-relaxed text-blueGray-700 "
                          key={index}
                        >
                          {ele}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                  <div className="text-sm text-blueGray-500 font-semibold py-1">
                    Made with BLOG BITES{" "}
                    <a
                      href="#"
                      className="text-blueGray-500 hover:text-gray-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>{" "}
                    by{" "}
                    <a
                      href="#"
                      className="text-blueGray-500 hover:text-blueGray-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Creative
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </>
  );
}

export default OtherUserProfile;
