import { useState, useEffect,useContext} from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import image from '../assets/Picsart_24-03-13_13-47-31-759.png';
import OpenNavbar from './OpenNavbar';
import SignupPage from './SignupPage';
import Usercontex from '../Contex/CreateContex';
import About from './About';
import Contact from './Contact';

useNavigate
function OpenPage() {
const navigate = useNavigate()
  const {showSignup, setShowSignup} = useContext(Usercontex);


  const handleGetStarted = () => {
    setShowSignup(false);
    navigate ('signup')
    
  };

  useEffect(() => {
    if (!showSignup) {
 
      const signupSection = document.getElementById('signup');
      signupSection.scrollIntoView({ behavior: 'smooth' });
      
    }
  }, [showSignup]);

  return (
    <>
      <OpenNavbar />
      <section className="mx-auto py-16" style={{ maxWidth: '1150px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="text-center md:text-left">
            <div className="font-rubik-gemstones text-3xl md:text-5xl leading-tight mb-5 text-slate-900">
              Create a unique and beautiful <span className="text-blue-600">Blogs</span>
            </div>
            <div className="mb-7 text-lg text-slate-900">
              There's no other place that combines such an excellent level of writing with a truly engaged and active community. Bloganity is truly where ideas are born, shared, and spread.
            </div>
            <div className="text-center md:text-left">
              {showSignup?<div className="bg-blue-600 text-lg cursor-pointer font-semibold inline-block px-10 py-3 rounded-md text-white hover:text-black hover:bg-blue-200 duration-300" onClick={handleGetStarted}>
                Get Started
              </div>: <h1 className='text-4xl font-semibold'>waiting for <span className='text-blue-700'> sign up... </span></h1> }
              
            </div>
          </div>
          <div className="flex justify-center md:justify-end mt-6">
            <div className="place-self-center bg-gradient-to-t from-red-200 to-green-50 rounded-full p-5">
              <img className="max-h-[450px] md:max-h-full" src={image} alt="" />
            </div>
          </div>
        </div>
      </section>
 
     <Outlet/>
    </>
  );
}

export default OpenPage;