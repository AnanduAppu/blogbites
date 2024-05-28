import React, { useState, useEffect, useRef } from "react";
import img1 from "../assets/slides/0.svg";
import img2 from "../assets/slides/img1.png";
import img3 from "../assets/slides/img2.png";
import { gsap } from 'gsap';


import "./slide.css";

const Slider = () => {
  const [imageIndex, setImageIndex] = useState(0);

const slideDiv = useRef()

useEffect(()=>{
  //const tl = gsap.timeline();
  gsap.fromTo(slideDiv.current, 
    { opacity: 0 }, 
    { opacity: 1, duration: 3, ease: 'power2.inOut' }
  );
},[])

  useEffect(() => {
    const interval = setInterval(() => {
      updateSlider();
    }, 2500);
    return () => clearInterval(interval);
  }, [imageIndex]);

  const updateSlider = () => {
    const images = document.querySelectorAll(".slider-images img");
    const backgrounds = document.querySelectorAll(".background");

    images.forEach((image) => {
      image.classList.remove("active", "previous", "next", "inactive");
    });

    images[imageIndex].classList.add("active");

    if (imageIndex - 1 >= 0) {
      images[imageIndex - 1].classList.add("previous");
    } else {
      images[images.length - 1].classList.add("previous");
    }

    if (imageIndex + 1 < images.length) {
      images[imageIndex + 1].classList.add("next");
    } else {
      images[0].classList.add("next");
    }

    images.forEach((image, index) => {
      if (
        index !== imageIndex &&
        index !== (imageIndex - 1 + images.length) % images.length &&
        index !== (imageIndex + 1) % images.length
      ) {
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
    <div className="bod  " ref={slideDiv}>
      <section className="slider-main my-1">
        <div className="containers">
          <div className="logo">
            <h1 className="heading-style-2 ">WELCOME  <span className="text-blue-600 border border-l-8 shadow-lg shadow-gray-600 border-black p-1"> BLOGGY</span></h1>
          </div>
          <div className="slider-content-wrap">
            <div className="slider-content">
              <h2 className="heading-style-2">
                Where Every Byte Tells a Story
              </h2>
              <p className="para">
                {" "}
                where every post is a flavorful treat for the mind and soul{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="slider-images max-sm:hidden ">
          <img
            className="slider-image slImg"
            src={img1}
            alt="headphone image"
          />
          <img
            className="slider-image slImg"
            src={img2}
            alt="headphone image"
          />
          <img
            className="slider-image slImg"
            src={img3}
            alt="headphone image"
          />
        </div>
        <div id="backgrounds" className="bgprops ">
          <div
            className="background"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #C7F6D0 0%, #7CB686 92.19%)",
            }}
          ></div>
          <div
            className="background"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #D1E4F6 0%, #5F9CCF 100%)",
            }}
          ></div>
          <div
            className="background"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #FFB7B2 0%, #ED746E 100%)",
            }}
          ></div>
          <div
            className="background"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #D7D7D7 0%, #979797 100%)",
            }}
          ></div>
          <div
            className="background"
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

export default Slider;
