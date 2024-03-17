import { useState } from "react";
import image1 from "../assets/profileimgselection/7xm.xyz200910.jpg";
import image2 from "../assets/profileimgselection/7xm.xyz555796.jpg";
import image3 from "../assets/profileimgselection/7xm.xyz618074.jpg";
import image4 from "../assets/profileimgselection/7xm.xyz928703.jpg";
import image5 from "../assets/profileimgselection/7xm.xyz958378.jpg";

function getRandomImage() {
  const images = [image1, image2, image4, image3, image5];

  const randomIndex = Math.floor(Math.random() * images.length);

  return images[randomIndex];
}

function AddPhoto() {
  const [randomImage] = useState(getRandomImage());
  return (
    <div className="mb-24">
      <div className="w-full mt-20 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-52 h-52 mb-3 rounded-full shadow-lg"
            src={randomImage}
            alt="Random character image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Bonnie Green
          </h5>
          <div className="flex mt-4 md:mt-6">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add Photo
            </a>
            <a
              href="#"
              className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Forward
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPhoto;
