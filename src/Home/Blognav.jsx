import React, { useContext, useEffect, useState, useRef } from "react";
import logoimg from "../assets/logoOnly.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import UserContext from "../Contex/CreateContex";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { fetchContent } from "../ReduxTool/CreateSlice";
import { gsap } from "gsap";

const BlogNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [results, setResults] = useState([]);
  const { userDataFromSignup } = useContext(UserContext);

  const headerRef = useRef(null);
  const inputRef = useRef(null);
  const buttonRef = useRef(null);
  const proButtonRef = useRef(null);
  const navRef = useRef(null);

  const [isSticky, setIsSticky] = useState(false);
  const animationPlayedRef = useRef(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        // Adjust the value to your desired scroll position
        if (navRef.current && !animationPlayedRef.current) {
          setIsSticky(true);
          gsap.fromTo(
            navRef.current,
            { y: "-100%", duration: 1.5 }, // Starting state
            { y: "0%", duration: 1.5, ease: "bounce", zIndex: 20 } // Ending state
          );
          animationPlayedRef.current = true; // Mark the animation as played
        }
      } else {
        setIsSticky(false);
        animationPlayedRef.current = false;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bubblesRef = useRef([]);
  useEffect(() => {
    // Ensure the element is mounted before running the animation
 

    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: "-100%", duration: 2 }, // Starting state
        { y: "0%", duration: 2, ease: "bounce", zIndex: 20 } // Ending state
      );
    }

    const tl = gsap.timeline();
    tl.fromTo(
      inputRef.current,
      { width: "0%" },
      { width: "100%", duration: 1, ease: "power2.inOut" }
    )
      .fromTo(
        buttonRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.inOut" }
      )
      .fromTo(
        proButtonRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.inOut" }
      );
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This will add smooth scrolling animation
    });
  };

  const viewProfile = (event, id) => {
    event.preventDefault();
    dispatch(fetchContent(id));
    navigate(`/author/${id}`);
    setSearchOpen(false);
  };

  const getValue = async (e) => {
    e.preventDefault();

    const value = e.target.value;
    if (value.trim() === "") {
      setResults([]);
      setSearchOpen(false);
      return;
    }

    setSearchOpen(true);

    try {
      const response = await axios.get(
        "http://localhost:3015/user/searchFriends",
        { params: { q: value } }
      );
      console.log(response.data.friends);
      setResults(response.data.friends);
    } catch (error) {}
  };

  const handleClickOutside = (event) => {
    if (
      isMenuOpen &&
      !document.getElementById("user-dropdown").contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      const responds = await axios.delete("http://localhost:3015/user/logout", {
        withCredentials: true,
      });
      if (responds.data.success) {
        toast.success(responds.data.message);
        window.location.reload();
        navigate("/login");
      }
    } catch (error) {
      console.log("the error is", error);
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`bg-gray-200 border border-gray-300 relative  dark:bg-gray-900 ${
          isSticky
            ? "sticky top-0  bg-gray-600 bg-opacity-30 backdrop-blur-md h-10"
            : ""
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          {isSticky ? (
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-3 rtl:space-x-reverse w-[20%] bg-transparent border-none p-0 cursor-pointer"
              ref={headerRef}
            >
              <img src={logoimg} className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white max-sm:hidden">
                BLOG <span className="text-blue-500">BITES</span>
              </span>
            </button>
          ) : (
            
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse w-[20%]"
              ref={headerRef}
            >
              <img src={logoimg} className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white max-sm:hidden">
                BLOG <span className="text-blue-500">BITES</span>
              </span>
            </Link>
           
         
          )}

          <div className="flex justify-end items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse  w-[80%] ">
            {/* Search bar */}
            <form
              action="/search"
              className="max-w-[480px] w-full px-4 dropdown"
              tabIndex={0}
              role="search"
            >
              <div className="relative    ">
                <input
                  type="text"
                  name="q"
                  onChange={getValue}
                  ref={inputRef}
                  className={`border ${ isSticky?`h-10`:`h-12`} border-gray-200 shadow-lg  shadow-blue-200 p-4 rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200`}
                  placeholder="search"
                />
                <button type="submit">
                  <svg
                    className="text-teal-400 h-5 w-5 absolute top-3.5 right-3 fill-current dark:text-teal-300"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    style={{ enableBackground: "new 0 0 56.966 56.966" }}
                    xmlSpace="preserve"
                    ref={buttonRef}
                  >
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path>
                  </svg>
                </button>

                {isSearchOpen && (
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-20 menu p-2 shadow bg-base-100 rounded-box border border-gray-500 w-[100%] "
                  >
                    {results.length === 0 ? (
                      <>no result</>
                    ) : (
                      results.map((user, ind) => (
                        <div
                          className="p-3 flex items-center justify-between border-t rounded-sm hover:bg-gray-200"
                          key={ind}
                        >
                          <div className="flex items-center">
                            <img
                              className="rounded-full h-10 w-10"
                              src={user.profilePicture}
                              alt={`Avatar of ${user.username}`}
                            />
                            <div className="ml-2 flex flex-col">
                              <div className="leading-snug text-sm text-gray-900 font-bold">
                                {user.username}
                              </div>
                              <div className="leading-snug text-xs text-gray-600">
                                !{user.region}
                              </div>
                            </div>
                          </div>
                          <button
                            className="h-8 px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100"
                            onClick={(e) => viewProfile(e, user._id)}
                          >
                            View
                          </button>
                        </div>
                      ))
                    )}
                  </ul>
                )}
              </div>
            </form>

            <button
              type="button"
              className="lg:hidden flex text-sm bg-gray-800 shadow-lg rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              ref={proButtonRef}

            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-10 h-8 rounded-full"
                src={userDataFromSignup.profilePicture}
                alt="user photo"
              />
            </button>

            {/* Dropdown menu */}
            {isMenuOpen && (
              <div
                className="z-20 absolute right-0 mt-64 max-sm:mt-72 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 duration-700"
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    {userDataFromSignup.username}
                  </span>
                  <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                    {userDataFromSignup.email}
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={(e) => handleSignOut(e)}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default BlogNavbar;
