import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import image from "../assets/45f4898e-d559-4cc6-bccd-97c9cba7bce2.png";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../Contex/CreateContex";



function SignupPage() {
  const navigate = useNavigate()
 const {setuserDataFromSignup} = useContext(UserContext)
  const imageUrl = `url(${image})`;

  const [formData, setFormData] = useState({
    firstName: "",
    username: "",
    email: "",
    dob: "",
    region: "North America",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    username: false,
    email: false,
    dob: false,
    gender: false,
    password: false,
    confirmPassword: false,
  });

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch countries from API
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);


  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = { ...errors };
    let hasError = false;

    // Check for required fields and validate
    for (const key in formData) {
      if (formData[key].trim() === '') {
        newErrors[key] = true;
        hasError = true;
      } else {
        newErrors[key] = false;
      }
    }

    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      newErrors.password = true;
      newErrors.confirmPassword = true;
      hasError = true;
    }

    // Update errors state
    setErrors(newErrors);

    // If there are no errors, proceed with form submission
    if (!hasError) {
      
      try {
        console.log('Form submitted:', formData);
        const email = formData.email
       const response = await axios.post("http://localhost:3015/user/signupOtp",
       {email},
       {withCredentials:true});

       if(response.data.success){
        setuserDataFromSignup(formData)
        navigate('otpverify');
        toast.success("otp send successfull")
       
       }else{
        toast.error("server issue")
       }

      } catch (error) {
        toast.error(`user already exist`)
      }
  
    }
  };

  return (
    <div
      className="w-full px-4 lg:grid lg:gap-0 lg:px-6 lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]"
      id="signup"
    >
      {/* Image Div */}
      <div className="hidden lg:flex w-full ms-20 my-28 ">
        <img
          alt="Image"
          className="object-cover rounded-xl w-full"
          height="400"
          src={image}
          width="600"
        />
      </div>

      {/* Form Div */}
      <div className="order-2 flex w-full p-6 items-center lg:order-1 lg:min-h-[500px] lg:p-10 xl:min-h-[800px] mx-5">
        <div className="mx-auto space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Already have an account?
              <a href="#" className="underline">
                Sign in
              </a>
            </p>
          </div>
          <form className="space-y-4"  onSubmit={(e)=>handleSubmit(e)}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="first-name" className="block">
                  First name
                </label>
                <input
                  id="firstName"
                  className={`w-full h-12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                  onChange={handleInputChange}
                  value={formData.firstName}
                  required
                 
                />
                 {errors.firstName && <p className="text-red-500">Fill this input</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="username" className="block">
                  Username
                </label>
                <input
                  id="username"
                  className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  onChange={handleInputChange}
                  value={formData.username}
                  required
                />
                 {errors.username && <p className="text-red-500">Fill this input</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block">
                  Email
                </label>
                <input
                  id="email"
                  placeholder="m@example.com"
                  className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  onChange={handleInputChange}
                  value={formData.email}
                  required
                  type="email"
                />
                {errors.email && <p className="text-red-500">Fill this input</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="dob" className="block">
                  Date of birth
                </label>
                <input
                  id="dob"
                  className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  onChange={handleInputChange}
                    value={formData.dob}
                    required
                    type="date"
                />
                {errors.dob && <p className="text-red-500">Fill this input</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="region" className="block">
                  Region
                </label>
                <select
                  id="region"
                  className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  onChange={handleInputChange}
                    value={formData.region}
                    required
                >
                   {countries.map(country => (
                    <option key={country.code} value={country.name}>{country.name}</option>
                  ))}
                </select>
                {errors.region && <p className="text-red-500">Fill this input</p>}
              </div>
              <div className="space-y-2">
                <label className="block">Gender</label>
                <div className="space-x-4">
                  <label className="inline-block">
                    <input
                      id="gender"
                      name="gender"
                      required
                      type="radio"
                      value="male"
                      onChange={handleInputChange}
                    />
                    <span className="ml-1">Male</span>
                  </label>
                  <label className="inline-block">
                    <input
                     id="gender"
                     name="gender"
                     required
                     type="radio"
                     value="female"
                     onChange={handleInputChange}
                    />
                    <span className="ml-1">Female</span>
                  </label>
                  <label className="inline-block">
                    <input
                  id="gender"
                  name="gender"
                  required
                  type="radio"
                  value="other"
                  onChange={handleInputChange}
                    />
                    <span className="ml-1">not prefarable</span>
                  </label>
                </div>
                {errors.gender && <p className="text-red-500">Select gender</p>}
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block">
                Password
              </label>
              <input
                id="password"
                className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
                onChange={handleInputChange}
                value={formData.password}
                required
                type="password"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="confirm-password" className="block">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
                onChange={handleInputChange}
                value={formData.confirmPassword}
                required
              />
             
              {errors.confirmPassword && <p className="text-red-500">Password is not same</p>}
            </div>
            <button className="w-full py-2 px-4 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600"
           
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
