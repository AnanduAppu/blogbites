import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import UserContext from "./Contex/CreateContex";
import About from "./Login&signup/About";
import Contact from "./Login&signup/Contact";
import Loginpage from "./Login&signup/Loginpage";
import OpenPage from "./Login&signup/OpenPage";
import SignupPage from "./Login&signup/SignupPage";
import { toast, Toaster } from "react-hot-toast";
import Otpsignup from "./Login&signup/otpsignup";
import Interests from "./Login&signup/Interest";
import AddPhoto from "./Login&signup/AddPhoto";
import Loginform from "./Login&signup/loginform";
import Resetpass1 from "./Login&signup/Resetpass1";
import ResetPass2 from "./Login&signup/ResetPass2";
import Asemble from "./Home/Asemble";
import { Provider } from 'react-redux';
import store from './ReduxTool/Store';
import BlogNavbar from "./Home/Blognav";
import Newtrending from "./Home/Newtrending";
import BlogPage from "./Home/BlogPage";
import ProfileAssemble from "./Profile/ProfileAssemble";
import { jwtDecode } from "jwt-decode";
import { isEqual } from "lodash";
import axios from "axios";
import HomeProtect from "./protectedRoute/HomeProtect";
import MyblogsActivities from "./Profile/MyblogsActivities";
import Myblogs from "./Profile/Myblogs";
import LikedBlogs from "./Profile/LikedBlogs";
import OtherUserProfile from "./Home/OtherUserProfile";

function App() {
  // this state controll open page templates
  const [showSignup, setShowSignup] = useState(true);
 
  //user state which take user details from sign up page
  const [userDataFromSignup, setuserDataFromSignup] = useState({});
  const [myBlogs,setmyBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const cookieToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)userToken\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
      );

      if (!cookieToken) {
        toast.error("Token not found");
        return;
      }

      console.log(cookieToken);
      const cookieData = jwtDecode(cookieToken);
      const id = cookieData.id;

      try {
        const [response1, response2] = await Promise.all([
          axios.post("http://localhost:3015/user/useraccess", { email: id }, { withCredentials: true }),
          axios.post("http://localhost:3015/user/userblogs", { email: id })
        ]);

       
      if (!response1.data.successful || !response2.data.successful) {
        console.log(response1.data.error , response2.data.error, "error");
        return;
      }
      const userData = response1.data.Data;
      const blogData = response2.data.blogdata;
    console.log(blogData)
      if (!isEqual(userDataFromSignup, userData) || !isEqual(myBlogs, blogData)) {
        setuserDataFromSignup(userData);
        setmyBlogs(blogData);
        console.log("your blog datas are:",blogData)
        
      }

      } catch (error) {
        console.log("error is find", error);
      }
    };
    fetchData();
   
  }, [userDataFromSignup,myBlogs]);

  //it takes email from resetpass1 page and send to resetpass2 page
  const [resetEmail, setResetemail] = useState("");



  // here we creating a useEffect function to retrieve all blog datas from server
  const [bloglist, setBloglist] = useState([]);
  const [bloguser,setBlogUser] = useState({})
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:3015/user/bloglist");
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
  }, [bloglist]);

  

 

  const data = {
    showSignup,
    setShowSignup,
    userDataFromSignup,
    setuserDataFromSignup,
    resetEmail,
    setResetemail,
    bloglist,
    setBloglist,
    myBlogs, setmyBlogs,
    bloguser,setBlogUser
  };

  return (
    <>
      <Toaster />
      <Provider store={store}>
      <UserContext.Provider value={data}>
        <Routes>
          <Route path="/open" element={<OpenPage />}>
            <Route path="signup" element={<SignupPage />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="signup/otpverify" element={<Otpsignup />} />
            <Route path="signup/otpverify/interest" element={<Interests />} />
            <Route
              path="signup/otpverify/interest/addpics"
              element={<AddPhoto />}
            />
          </Route>

          <Route path="/login" element={<Loginpage />}>
            <Route index element={<Loginform />} />
            <Route path="/login/emailvarify" element={<Resetpass1 />} />
            <Route path="/login/emailvarify/otp" element={<ResetPass2 />} />
          </Route>

          <Route path="/" element={<HomeProtect element={<BlogNavbar />} />}>
            <Route index element={<Asemble />} />
            <Route path="/news" element={<Newtrending />} />
            <Route path="/blog/:blogid" element={<BlogPage />} />
            <Route path="/author/:userid" element={<OtherUserProfile />} />
            <Route path="/profile" element={<ProfileAssemble />}>
              <Route index element={<Myblogs/>} />
              <Route path="/profile/likedblogs" element={<LikedBlogs/>} />
            </Route>
          </Route>

          
        </Routes>
      </UserContext.Provider>
      </Provider>
    </>
  );
}

export default App;
