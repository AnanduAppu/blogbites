import { useState } from 'react'
import {Routes,Route} from 'react-router-dom';
import UserContext from './Contex/CreateContex';
import About from './Login&signup/About';
import Contact from './Login&signup/Contact';
import Loginpage from './Login&signup/Loginpage'
import OpenPage from './Login&signup/OpenPage'
import SignupPage from './Login&signup/SignupPage'
import { toast, Toaster } from "react-hot-toast";
import Otpsignup from './Login&signup/otpsignup';
import Interests from './Login&signup/Interest';
import AddPhoto from './Login&signup/AddPhoto';





function App() {

  // this state controll open page templates
  const [showSignup, setShowSignup] = useState(true);


  //user state which take user details from sign up page
  const [userDataFromSignup,setuserDataFromSignup ] = useState({})

  const data= {
    showSignup, setShowSignup,
    userDataFromSignup,setuserDataFromSignup
  }

  return (
    < >
    <Toaster/>
   <UserContext.Provider value={data}>

   <Routes>
   <Route path='/open' element={<OpenPage/>}>
          <Route path='signup' element={<SignupPage/>}/>
          <Route path='signup/otpverify' element={<Otpsignup/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='interest' element={<Interests/>}/>
          <Route path='addpics' element={<AddPhoto/>}/>


          
      </Route>

  <Route path='/Login' element={<Loginpage/>}/>
     

   </Routes>
   </UserContext.Provider>
    </>
    
    
    )
}

export default App
