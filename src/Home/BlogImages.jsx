import React, { useState } from "react";
import "./Blogimg.css";

function BlogImages({ props }) {
  console.log("this is the image", props);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHorizontal, setIsHorizontal] = useState(true);

  const selectImage = (e, index) => {
    e.preventDefault();

    const img = props[index];
    const imgObj = new Image();
    imgObj.src = img;
    imgObj.onload = () => {
      setIsHorizontal(imgObj.width >= imgObj.height);
    };

    document.getElementById("my_modal_4").showModal();
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % props.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? props.length - 1 : prevSlide - 1
    );
  };

  return (
    <>
      <div className="h-[80vh] max-sm:h-[50vh] ">
        <ul className="c-accordion">
          {props.map((img, ind) => (
            <li
              key={ind}
              id={"A" + ind}
              className="c-accordion__item "
              style={{
                "--cover": `url(${img})`,
              }}
              onClick={(e) => selectImage(e, ind)}
            ></li>
          ))}
        </ul>
        <dialog id="my_modal_4" className="modal">
          <div
            className={`modal-box bg-blue-400 bg-opacity-20 backdrop-blur-md ${
              isHorizontal ? "w-11/12 max-w-5xl" : ""
            } object-cover overflow-hidden `}
          >
            <div className="carousel w-full">
              {props.map((img, ind) => (
                <div
                  key={ind}
                  id={`slide${ind}`}
                  className={`carousel-item relative w-full ${
                    currentSlide === ind ? "block" : "hidden"
                  }`}
                >
                  <img
                    src={img}
                    className="w-full max-h-[82vh] rounded-md"
                    alt=""
                  />
                {props.length > 1 && (
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <button onClick={prevSlide} className="btn btn-circle">
                    ❮
                  </button>
                  <button onClick={nextSlide} className="btn btn-circle">
                    ❯
                  </button>
                </div>
              )}
                </div>
              ))}
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </>
  );
}

export default BlogImages;
