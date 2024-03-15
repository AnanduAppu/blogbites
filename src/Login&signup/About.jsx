import React from 'react'
import { Link } from 'react-router-dom'
import myavatar from '../assets/myavatar.png'
import aboutimg from '../assets/aboutpage.png'
function About() {
  return (
    <div className="grid gap-6 lg:gap-12 xl:gap-20 min-h-[1000px] lg:min-h-[1500px]">
    <div className="mx-auto max-w-5xl space-y-4 p-4 lg:p-0">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Us</h1>
        <p className="mx-auto max-w-2xl text-gray-500 dark:text-gray-400">
          Welcome to our blog. We aim to provide you with the most interesting and insightful content on the web.
        </p>
      </div>
    </div>
    <div className="mx-auto grid max-w-5xl items-center gap-6 px-4 lg:grid-cols-2 lg:gap-10">
      <img
        alt="Profile picture"
        className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center sm:w-full"
        height="400"
        src={myavatar}
        width="400"
      />
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">About the Author</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Hi, I'm Ananadu. I'm passionate about sharing my experiences and insights with the world. I believe that
            everyone has a story to tell, and I'm here to help you find your voice.
          </p>
        </div>
      </div>
    </div>
    <div className="mx-auto grid max-w-5xl items-center gap-6 px-4 lg:grid-cols-2 lg:gap-10">
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-gray-500 dark:text-gray-400">
            At Acme Blog, our mission is to provide our readers with high-quality, engaging, and informative content.
            We strive to cover a wide range of topics, from technology and business to travel and lifestyle, ensuring
            that there's something for everyone. We are committed to delivering fresh perspectives, inspiring stories,
            and practical advice that adds value to your life.
          </p>
        </div>
      </div>
      <img
        alt="Profile picture"
        className=" sm:w-full"
        height="400"
        src={aboutimg}
        width="900"
      />
    </div>
    <div className="mx-auto flex flex-col min-h-[400px] items-center justify-center gap-2 px-4 md:gap-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
      <p className="text-sm text-center text-gray-500 md:text-base dark:text-gray-400">
        Have a question or feedback? Contact us at
        <Link className="underline" href="#">
          contact@acmeblog.com
        </Link>
      </p>
    </div>
  </div>
  )
}

export default About