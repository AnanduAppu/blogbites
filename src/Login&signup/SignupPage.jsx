import React from 'react'
import image from'../assets/45f4898e-d559-4cc6-bccd-97c9cba7bce2.png'

function SignupPage() {
  const imageUrl = `url(${image})`;
  return (
    <div className="w-full px-4 lg:grid lg:gap-0 lg:px-6 lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]" id='signup' >
      {/* Image Div */}
      <div className="hidden lg:flex w-full ms-20 my-28">
        <img
          alt="Image"
          className="object-cover rounded-xl w-full"
          height="400"
          src={image}
          
          width="600"
        />
      </div>

      {/* Form Div */}
      <div className="order-2 flex w-full p-6 items-center lg:order-1 lg:min-h-[500px] lg:p-10 xl:min-h-[800px]">
        <div className="mx-auto space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Already have an account?
              <a href="#" className="underline">Sign in</a>
            </p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="first-name" className="block">First name</label>
                <input id="first-name" className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="username" className="block">Username</label>
                <input id="username" className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block">Email</label>
                <input id="email" placeholder="m@example.com" className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500" required type="email" />
              </div>
              <div className="space-y-2">
                <label htmlFor="dob" className="block">Date of birth</label>
                <input id="dob" className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500" required type="date" />
              </div>
              <div className="space-y-2">
                <label htmlFor="region" className="block">Region</label>
                <select id="region" className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500" required>
                  <option>North America</option>
                  <option>South America</option>
                  <option>Europe</option>
                  <option>Africa</option>
                  <option>Asia</option>
                  <option>Australia</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block">Gender</label>
                <div className="space-x-4">
                  <label className="inline-block">
                    <input id="gender-male" name="gender" required type="radio" value="male" />
                    <span className="ml-1">Male</span>
                  </label>
                  <label className="inline-block">
                    <input id="gender-female" name="gender" required type="radio" value="female" />
                    <span className="ml-1">Female</span>
                  </label>
                  <label className="inline-block">
                    <input id="gender-female" name="gender" required type="radio" value="female" />
                    <span className="ml-1">not prefarable</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block">Password</label>
              <input id="password" className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500" required type="password" />
            </div>
            <div className="space-y-2">
              <label htmlFor="confirm-password" className="block">Confirm Password</label>
              <input id="confirm-password" className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500" required type="password" />
            </div>
            <button className="w-full py-2 px-4 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage