import React, { useContext, useEffect, useState, useRef } from "react";
import logoimg from "../assets/logoOnly.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import UserContext from "../Contex/CreateContex";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { fetchContent } from "../ReduxTool/CreateSlice";
import { gsap } from "gsap";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

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
            { y: "0%", duration: 1.5, ease: "back", zIndex: 20 } // Ending state
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
        className={`bg-gray-200 border border-gray-300 relative w-full dark:bg-gray-900 ${
          isSticky
            ? "sticky top-0 bg-gray-600 bg-opacity-30 backdrop-blur-md h-5"
            : ""
        }`}
      >
        {isSticky ? (
          <div className="text-center font-bold cursor-pointer text-lg " onClick={scrollToTop}><KeyboardDoubleArrowUpIcon/></div>
        ) : (
          <div className="w-full flex justify-between items-center py-4">
            <div className="w-[20%] flex justify-center items-center">
              
                <Link
                  to="/"
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                  ref={headerRef}
                >
                  <img src={logoimg} className="h-8 w-12" alt="BG Logo " />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white max-sm:hidden">
                    BLOG <span className="text-blue-500">BITES</span>
                  </span>
                </Link>
             
            </div>
            <div className="flex w-[75%] justify-end m-auto">
              <form
                action="/search"
                className="max-w-[490px] w-full px-2 dropdown"
                tabIndex={0}
                role="search"
              >
                <div className="relative">
                  <input
                    type="text"
                    name="q"
                    onChange={getValue}
                    ref={inputRef}
                    className={`border h-12 border-gray-200 shadow-lg w-full shadow-blue-200 p-4 rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200`}
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
                      className="dropdown-content z-20 menu p-2 shadow bg-base-100 rounded-box border border-gray-500 w-[100%]"
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

              <Link
                type="button"
                to="/profile"
                className="flex text-sm bg-gray-800 shadow-lg rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 hover:shadow-blue-300 duration-500"
                id="user-menu-button"
                ref={proButtonRef}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={userDataFromSignup.profilePicture}
                  alt="user photo"
                />
              </Link>

              <button className="mx-2">
                <NotificationsIcon />
              </button>
              <button
                className="ms-8 max-sm:ms-2 hover:text-red-500 duration-500"
                onClick={(e) => handleSignOut(e)}
              >
                <LogoutIcon />
              </button>
            </div>
          </div>
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default BlogNavbar;
