import React from "react";

function Search_post() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row shadow-lg shadow-blue-100  mt-2">
      <div className="flex w-full flex-col p-8 lg:w-2/5">
        <p className="my-4 text-3xl leading-relaxed text-yellow-500 md:text-5xl md:leading-snug">
          Create Your thoughts ...
        </p>
        <p className="my-1 ms-2 font-sans text-2xl md:my-4 md:text-lg lg:text-4xl text-blue-600">
          {" "}
          Build Your <span className="text-black font-semibold">Blog</span>{" "}
        </p>
        <p className="my-1 ms-2 font-sans text-2xl md:my-4 md:text-lg lg:text-4xl">
          Find Your inner{" "}
          <span className="text-blue-600 font-semibold"> Bites</span>
        </p>
        <div className="max-w-4xl space-y-4 p-4 lg:mt-5">
          
        </div>
      </div>
      <div className="flex w-full flex-col justify-center lg:-mt-12 lg:w-3/5 max-sm:hidden">
        <div className="container">
          <div className="relative flex w-full min-w-0 flex-col break-words">
            <div className="flex-auto p-5 lg:p-10">
              <img
                src="https://user-images.githubusercontent.com/54521023/152731049-cc744a56-1d6f-4945-9566-0fa3b7ad1d24.png"
                alt="contact image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search_post;
