import React, { useEffect, useRef } from "react";
import logwall from "../assets/REGImages/logInimg1.jpg";
import svgImage1 from "../assets/svg/apple-svgrepo-com.svg";
import svgImage2 from "../assets/svg/broadcast-svgrepo-com.svg";
import svgImage3 from "../assets/svg/camera-svgrepo-com (2).svg";
import svgImage4 from "../assets/svg/cell-phone-svgrepo-com.svg";
import svgImage5 from "../assets/svg/notebook-svgrepo-com.svg";
import svgImage6 from "../assets/svg/monitor-svgrepo-com.svg";
import { Outlet } from "react-router-dom";
import { gsap } from "gsap";

function Loginpage() {
  const svgContainerRef = useRef(null);

  useEffect(() => {
    const svgs = svgContainerRef.current.querySelectorAll(".floating-svg");

    svgs.forEach((svg) => {
      gsap.to(svg, {
        y: "random(-50, 50)",
        x: "random(-50, 50)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: "random(2, 4)"
      });
    });
  }, []);

  return (
    <section className="flex flex-col md:flex-row h-screen items-center"  >
      <div className="relative bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen" style={{ backgroundColor: "rgb(167, 254, 235)" }}>
      <img src={logwall}alt="" />
        <div
          ref={svgContainerRef}
          className="absolute inset-0 w-full h-full"
        >
          <img src={svgImage1} alt="SVG 1" className="floating-svg absolute w-10 h-10 shadow-2xl  bottom-80 top-20 left-40" />
          <img src={svgImage2} alt="SVG 2" className="floating-svg absolute w-20 h-20 shadow-2xl bottom-60 top-40 left-80" />
          <img src={svgImage3} alt="SVG 3" className="floating-svg absolute w-10 h-20 shadow-2xl  top-10  right-40" />
          <img src={svgImage4} alt="SVG 4" className="floating-svg absolute w-20 h-20 shadow-2xl  top-60 right-60" />
          <img src={svgImage6} alt="SVG 6" className="floating-svg absolute w-20 h-20 top-96 b0ttom-0 right-10 " />
          <img src={svgImage4} alt="SVG 4" className="floating-svg absolute w-20 h-20 shadow-2xl bottom-40 top-90 right-60" />
          <img src={svgImage6} alt="SVG 6" className="floating-svg absolute w-20 h-20 top-90 b0ttom-0 right-60 " />
          <img src={svgImage4} alt="SVG 4" className="floating-svg absolute w-20 h-20 shadow-2xl bottom-40 top-90 right-50 left-40" />
          <img src={svgImage6} alt="SVG 6" className="floating-svg absolute w-20 h-20 top-60 b0ttom-40 right-60  left-52" />
    
        </div>
      </div>
      <Outlet />
    </section>
  );
}

export default Loginpage;
