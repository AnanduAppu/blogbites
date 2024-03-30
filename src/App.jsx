import { useState } from "react";
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
import UserProfile from "./Profile/Userprofile";
import Assemble from "./Profile/Assemble";



function App() {
  // this state controll open page templates
  const [showSignup, setShowSignup] = useState(true);

  //user state which take user details from sign up page
  const [userDataFromSignup, setuserDataFromSignup] = useState({});

  //it takes email from resetpass1 page and send to resetpass2 page 
  const [resetEmail,setResetemail]=useState('')

  const data = {
    showSignup,
    setShowSignup,
    userDataFromSignup,
    setuserDataFromSignup,
    resetEmail,setResetemail
  };

  return (
    <>
      <Toaster />
      <UserContext.Provider value={data}>
        <Routes>
          <Route path="/open" element={<OpenPage />}>
            <Route path="signup" element={<SignupPage />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="signup/otpverify" element={<Otpsignup />} />
            <Route path="signup/otpverify/interest" element={<Interests />} />
            <Route path="addpics" element={<AddPhoto />} />
          </Route>

          <Route path="/login" element={<Loginpage />}>
            <Route index element={<Loginform />} />
            <Route path="/login/emailvarify" element={<Resetpass1/>} />
            <Route path="/login/emailvarify/otp" element={<ResetPass2/>} />
          </Route>


          <Route path="/home" element={<Asemble/>}/>

          <Route path="/profile" element={<Assemble/>}/>
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
