import React from "react";

const blogprofile = () => {
  return (
    <div className="flex w-full justify-center px-2 py-20">
      <div className="rounded-lg bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg">
        <div className="lg:w-1/2">
          <div
            className="h-80 rounded-b-none border bg-cover lg:h-full lg:scale-110 lg:rounded-lg"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/19056314/pexels-photo-19056314/free-photo-of-ess-in-the-woods.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}
          ></div>
        </div>

        <div className="max-w-xl rounded-t-none border px-6 py-12 lg:w-1/2 lg:max-w-5xl lg:rounded-lg lg:px-12">
          <h2 className="text-3xl font-bold text-gray-800">
            <header className="p-4">
              <img
                src="https://via.placeholder.com/200"
                className="float-left m-1 mr-3 h-10 w-10 rounded-full"
                alt="Author"
              />
              <h3 className="text-lg font-bold">Author Name</h3>
              <p className="text-sm text-gray-600">date-time</p>
            </header>
            Promoting Sustainable Lifestyle Choices
            <span className="text-indigo-600">Choices</span>
          </h2>
          <p className="mt-4 text-gray-600">
            The "Eco-Tracker" project aims to create a web-based platform that
            encourages individuals to adopt sustainable lifestyle choices and
            actively contribute to environmental conservation. The platform will
            provide users with personalized tracking, education, and engagement
            features to empower them to make eco-friendly decisions in various
            aspects of their lives.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="rounded px-2 py-1 font-semibold text-blue-400 border border-black hover:border-blue-600"
            >
              View..
            </a>
          </div>
          <a href="#" className="float-right">
            <img
              src="https://img.icons8.com/flat_round/24/000000/share--v1.png"
              alt="Share"
            />
          </a>
          <a href="#" className="float-right mr-3">
            <img
              src="https://img.icons8.com/flat_round/24/000000/hearts.png"
              alt="Hearts"
            />
          </a>
        </div>
      </div>
      <li className="flex justify-center items-center">
        <div>
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            aria-expanded="false"
            data-dropdown-toggle="dropdown-user"
          >
            <span className="sr-only">Open user menu</span>

            <img
              className="w-28 h-28 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="user photo"
            />
          </button>
          <p className="text-2xl">Your Name</p>
        </div>
      </li>
      ////blog card///
      <section class="bg-gray-100">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 items-center  gap-5 lg:gap-0 md:grid-cols-2">
            <div class="mt-5 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                alt="blog image"
                class="rounded-lg object-cover shadow-md lg:w-[90%]  "
              />
            </div>
            <div class="max-w-lg">
              <div class="flex justify-between">
                <figcaption class="flex items-center space-x-4 mb-3 cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1632910121591-29e2484c0259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb2RlcnxlbnwwfDB8fHwxNzEwMTY0NjIzfDA&ixlib=rb-4.0.3&q=80&w=1080"
                    alt=""
                    class="h-14 w-14 flex-none rounded-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div class="flex-auto">
                    <div class="text-blackfont-bold text-base">John Doe</div>
                    <div class="mt-0.5 dark:text-slate-500">
                      9:30-am/20/05/2024
                    </div>
                  </div>
                </figcaption>
                <p class=" lg:mt-2 me-2 cursor-pointer">Like</p>
              </div>
              <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                why business?
              </h2>
              <p class="mt-4 text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quis eros at lacus feugiat hendrerit sed ut tortor. Suspendisse
                et magna quis elit efficitur consequat. Mauris eleifend velit a
                pretium iaculis. Donec sagittis velit et magna euismod, vel
                aliquet nulla malesuada. Nunc pharetra massa lectus, a fermentum
                arcu volutpat vel.
              </p>
              <div class="mt-8">
                <a
                  href="#"
                  class="font-medium text-blue-500 hover:text-blue-600"
                >
                  Read more <span class="ml-2">&#8594;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



{/* 
      //edit the blog */}


<div className="relative p-6 shadow bg-gray-200 bg-opacity-90">
      <div className="max-w-4xl mx-auto border border-gray-400 rounded-lg">
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
        <div className="flex justify-between">
              <h1 className="my-4 text-xl font-semibold">
                Update{" "}
                <span className="text-blue-600 font-semibold"> Blog?</span>
              </h1>
              <button
                className="my-4 text-xl hover:text-red-700 duration-500"
                onClick={() => setIsModalOpen(false)}
              >
                close
              </button>
            </div>
          <div className="flex justify-between">
            <div className="my-10">
              <input type="text" className="text-4xl border border-gray-300"
              
              value={headingEdit}
              onChange={(e) => setHeadingEdit(e.target.value)}
              />
            </div>
            <div>
            {imageEdit && (
                <img
                  src={imageEdit}
                  className="h-[100px] w-[200px] my-1"
                  alt="Tailwind Play"
                />
              )}
            </div>
          </div>
          <hr />
          <textarea 
            cols="119" 
            rows="11" 
            className="text-base leading-8 my-5 border border-black"
            value={descriptionEdit}
            onChange={(e) => setDescriptionEdit(e.target.value)}
          ></textarea>
        </div>
        <button className="mb-5 px-2 py-2 border border-gray-700 bg-blue-400 font-semibold hover:bg-blue-700 hover:text-white duration-500">
                  Update
                </button>
      </div>
    </div>
      )}

      const [activeCategory, setActiveCategory] = useState('all');
  useEffect(() => {

    console.log("we are here ")
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:3015/user/bloglist", {
          params: { id: activeCategory, page: currentPage, limit: blogsPerPage }
        });
        const value = response.data.blogs;

        if (!isEqual(bloglist, value)) {
          setBloglist(value);
          setBlogUser(value.author)
          console.log("blog details are ", value);
         
        }
      } catch (error) {
        console.log("we get an error in retriving blog datas", error);
      }
    };

    fetchBlogs();
  }, [bloglist,likeAction, saveAction,activeCategory,isVisible,]);






      <>
      {/* blog profile page must use */}
      <div class="relative w-full h-[60vh] md:h-[50vh] lg:h-[50vh]">
  <img
    alt="Background"
    class="absolute inset-0 w-full h-[50vh] object-cover"
    height="400"
    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
    style="aspect-ratio: 1200/400; object-fit: cover;"
    width="1200"
  />
  <div class="absolute inset-0 flex items-end justify-center">
    <img
      alt="Profile"
      class="rounded-full border-4 border-white shadow-lg"
      height="160"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
      style="aspect-ratio: 160/160; object-fit: cover;"
      width="160"
    />
    
  </div>
</div>
<div class="container mx-auto px-4 ">
  <div class="text-center space-y-4">
    <h1 class="text-3xl font-bold md:text-4xl lg:text-5xl">John Doe</h1>
    <p class="text-gray-500 dark:text-gray-400 text-lg md:text-xl">Software Engineer at Acme Inc.</p>
    <div class="flex justify-center gap-4">
      <button class="border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
        Follow
      </button>
      <button class="border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path>
        </svg>
        Message
      </button>
    </div>
  </div>
  <div class="mt-8 md:mt-8 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-2">
    <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-4">
      <h3 class="text-lg font-semibold">About</h3>
      <p class="text-gray-500 dark:text-gray-400">
        John is a passionate software engineer with a strong background in full-stack web development. He has been working at Acme Inc. for the past 5 years, where he has contributed to the development of several award-winning web applications.
      </p>
    </div>

    <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-4">
      <h3 class="text-lg font-semibold">interests</h3>
      <div class="flex flex-wrap gap-2">
        <span class="border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1">JavaScript</span>
        <span class="border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1">React</span>
        <span class="border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1">Node.js</span>
        <span class="border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1">SQL</span>
        <span class="border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1">Git</span>
        <span class="border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1">Agile</span>
      </div>
    </div>
  </div>
</div>

      
      
      
      
      
      </>
    </div>





import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Suspense } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchContent } from "../ReduxTool/CreateSlice";
import UserContext from "../Contex/CreateContex";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

function Blogview() {
  const { userDataFromSignup, bloglistfil, setBloglistfil, activeCategory, setActiveCategory } = useContext(UserContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [likeAction, setLikeAction] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("http://localhost:3015/user/bloglist", {
          params: { page, limit: 4 },
        });
        const value = response.data.blogs;
        console.log("blogview", value);
        if (page === 1) {
          setBloglistfil(value);
        } else {
          setBloglistfil((prev) => [...prev, ...value]);
        }
        setHasMore(value.length > 0);
      } catch (error) {
        console.log("Error retrieving blog data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, [page, likeAction, activeCategory]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
      return;
    }
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  const likeandUnlike = async (e, blogid) => {
    e.preventDefault();
    const userId = userDataFromSignup._id;
    console.log("userid is :-", userId + " and blogid is:-", blogid);
    try {
      const response = await axios.put("http://localhost:3015/user/like", {
        userId,
        blogid,
      });
      if (response.data.success) {
        console.log("liked");
        setLikeAction(!likeAction);
        return;
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const AuthorProfile = (e, id) => {
    e.preventDefault();
    dispatch(fetchContent(id));
    navigate(`/author/${id}`);
  };

  return (
    <div className="max-w-[85rem] py-10 sm:px-6 lg:px-2 lg:py-5">
      {/* Grid */}
      <div className="grid lg:grid-cols-1 gap-5">
        {/* Card */}
        <Suspense fallback={<loading />}>
          {bloglistfil.length === 0 ? (
            <>no data</>
          ) : (
            bloglistfil.map((ele, ind) => (
              <Link
                to={`/blog/${ele._id}`}
                className="group sm:flex rounded-xl bg-[#f9f9f5] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 border shadow-lg border-slate-200 hover:border-purple-600 duration-500"
                key={ind}
              >
                {ele.image ? (
                  <div className="flex-shrink-0 relative rounded-xl shadow-lg shadow-gray-400 overflow-hidden w-full lg:h-80 max-sm:w-full max-sm:h-[350px] sm:w-[250px] sm:h-full border border-white">
                    <img
                      className="size-full absolute top-0 start-0 object-cover"
                      src={ele.image}
                      alt="Image Description"
                    />
                  </div>
                ) : (
                  <div></div>
                )}
                <div className="grow">
                  <div className="p-4 flex flex-col h-full sm:p-6">
                    <div className="mb-3">
                      <p className="inline-flex items-center gap-1.5 py-1.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                        {ele.topic}
                      </p>
                    </div>
                    <div>
                      <h1 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                        {ele.title}
                      </h1>
                      <p className="mt-2 text-slate-500 text-lg">
                        {ele.description.split(" ").slice(0, 30).join(" ")}
                        {ele.description.split(" ").length > 20 ? "..." : ""}
                      </p>
                    </div>
                    <div className="mt-5 sm:mt-auto">
                      {/* Avatar */}
                      <div className="flex justify-between mt-2">
                        <button className="flex items-center" onClick={(e) => AuthorProfile(e, ele.author._id)}>
                          <div className="flex-shrink-0">
                            <img
                              className="size-[46px] rounded-full object"
                              src={ele.author.profilePicture}
                              alt="Image Description"
                              style={{ aspectRatio: "160/160", objectFit: "cover" }}
                            />
                          </div>
                          <div className="ms-2.5 sm:ms-4">
                            <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                              {ele.author.firstName}
                            </h4>
                            <p className="text-xs text-gray-500">{ele.createdAt.slice(0, 10)}</p>
                          </div>
                        </button>
                        <div className="flex gap-9 pt-7">
                          <button onClick={(e) => likeandUnlike(e, ele._id)}>
                            {ele.likes && userDataFromSignup._id && ele.likes.find((ele) => ele._id === userDataFromSignup._id) ? (
                              <span className="text-blue-600 duration-700">
                                <ThumbUpAltIcon fontSize="medium" />
                              </span>
                            ) : (
                              <span className="duration-700">
                                <ThumbUpOffAltIcon fontSize="medium" />
                              </span>
                            )}{" "}
                            {ele.likes.length}
                          </button>
                          <p>Save</p>
                        </div>
                      </div>
                      {/* End Avatar */}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
          {isLoading && <loading />}
        </Suspense>
      </div>
      {/* End Grid */}
    </div>
  );
}

function loading() {
  return <h2>loading...</h2>;
}

export default Blogview;








  );
};

export default Header;
