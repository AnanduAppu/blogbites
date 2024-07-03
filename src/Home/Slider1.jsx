import React, { useState, useEffect, useRef } from "react";
import img1 from "../assets/slides/0.svg";
import img2 from "../assets/slides/img1.png";
import img3 from "../assets/slides/img2.png";
import { gsap } from 'gsap';
import "./slider1.css";
const Slider1 = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const slideDiv = useRef();

  useEffect(() => {
    gsap.fromTo(slideDiv.current,
      { y: "-10%", duration: 3,ease: "power1.out", },
      { y: "0%", duration: 1.5, ease: "back" }
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      updateSlider();
    }, 2500);
    return () => clearInterval(interval);
  }, [imageIndex]);

  const updateSlider = () => {
    const images = document.querySelectorAll(".slider-images img");
    const backgrounds = document.querySelectorAll(".background");

    if (images.length === 0 || backgrounds.length === 0) {
      console.error("Images or backgrounds not found");
      return;
    }

    images.forEach((image, index) => {
      image.classList.remove("active", "previous", "next", "inactive");
      if (index === imageIndex) {
        image.classList.add("active");
      } else if (index === (imageIndex - 1 + images.length) % images.length) {
        image.classList.add("previous");
      } else if (index === (imageIndex + 1) % images.length) {
        image.classList.add("next");
      } else {
        image.classList.add("inactive");
      }
    });

    backgrounds.forEach((background) => {
      background.style.opacity = 0;
    });

    if (images[imageIndex].classList.contains("active")) {
      backgrounds[imageIndex].style.opacity = 1;
    }

    setImageIndex((imageIndex + 1) % images.length);
  };

  return (
    <div className="relative overflow-hidden rounded-lg border border-gray-400 border-x-2 border-y-2 shadow-lg shadow-gray-200" ref={slideDiv}>
      <section className="relative flex lg:justify-between max-sm:justify-center items-center min-h-[500px] max-sm:min-h-[300px] bg-[radial-gradient(50%_50%_at_50%_50%,#C7F6D0_0%,#7CB686_92.19%)] overflow-hidden z-10">
        <div className="relative w-1/2 max-w-[525px] px-8 max-sm:px-0 max-sm:py-0 py-16 left-24 max-sm:left-3 max-sm:w-full ">
          <div className="logo">
            <h1 className="text-white text-5xl max-sm:text-3xl font-bold mb-2">
              WELCOME <span className="text-blue-600 border border-x-2 shadow-lg shadow-gray-600 p-1"> BLOGGY</span>
            </h1>
          </div>
          <div className="flex flex-col justify-center h-full">
            <div>
              <h2 className="text-white text-5xl max-sm:text-3xl font-bold mb-2">
                Where Every Byte Tells a Story
              </h2>
              <p className="text-white text-lg font-normal mb-7">
                Where every post is a flavorful treat for the mind and soul
              </p>
            </div>
          </div>
        </div>
        <div className="slider-images max-sm:hidden relative w-1/2 h-full top-0 ">
          <img
            className="slider-image slImg absolute top-0 left-0 filter blur-0 transition-all duration-1000 ease-in-out opacity-0"
            src={img1}
            alt="Image 1"
          />
          <img
            className="slider-image slImg absolute top-0 left-0 filter blur-0 transition-all duration-1000 ease-in-out opacity-0"
            src={img2}
            alt="Image 2"
          />
          <img
            className="slider-image slImg absolute top-0 left-0 filter blur-0 transition-all duration-1000 ease-in-out opacity-0"
            src={img3}
            alt="Image 3"
          />
        </div>
        <div id="backgrounds" className="absolute w-full h-full top-0 z-[-1]">
          <div
            className="background absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-2000 ease-in-out"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #C7F6D0 0%, #7CB686 92.19%)",
            }}
          ></div>
          <div
            className="background absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-2000 ease-in-out"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #D1E4F6 0%, #5F9CCF 100%)",
            }}
          ></div>
          <div
            className="background absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-2000 ease-in-out"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #FFB7B2 0%, #ED746E 100%)",
            }}
          ></div>
          <div
            className="background absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-2000 ease-in-out"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #D7D7D7 0%, #979797 100%)",
            }}
          ></div>
          <div
            className="background absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-2000 ease-in-out"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #6B6B6B 0%, #292929 100%)",
            }}
          ></div>
        </div>
      </section>
    </div>
  );
};

export default Slider1;
