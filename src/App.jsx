import { useState } from 'react'
import {Routes,Route} from 'react-router-dom';
import UserContext from './Contex/CreateContex';
import About from './Login&signup/About';
import Contact from './Login&signup/Contact';
import Loginpage from './Login&signup/Loginpage'
import OpenPage from './Login&signup/OpenPage'
import SignupPage from './Login&signup/SignupPage'



function App() {
  const [showSignup, setShowSignup] = useState(true);

  const data= {showSignup, setShowSignup}

  return (
    < >
   <UserContext.Provider value={data}>

   <Routes>
      <Route path='/open' element={<OpenPage/>}>
          <Route path='signup' element={<SignupPage/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          
      </Route>

  <Route path='/Login' element={<Loginpage/>}/>
     

   </Routes>
   </UserContext.Provider>
    </>
    
    
    )
}

export default App
