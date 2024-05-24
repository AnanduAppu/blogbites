import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Categories from "./Categories";

import noimgnews from '../assets/NoimgNews.jpg'

function BlogRightSidebar() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b569e7535bfc43bc9fd029b7bc69cdc0"
    )
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="sticky ">
      <div className="flex flex-col space-y-8 sticky">
        {/* Categories Section */}
        <Categories/>

        {/* Trending News Section */}
        <div className="bg-white p-4 rounded-lg m-2 border-2 border-gray-400 shadow-lg shadow-blue-200 ">
          <h2 className="text-lg font-semibold mb-4">Trending News</h2>
          <div className="grid grid-cols-1 gap-4">
            {/* Trending News Cards */}

            {news.slice(0, 3).map((article, index) => (
              <a
                key={index}
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center border border-gray-400 rounded-md mb-4 cursor-pointer"
              >
                <img
                  src={article.urlToImage?article.urlToImage:noimgnews}
                  alt="Trending News Image"
                  className="w-24 h-24 object-cover rounded-md mr-4"
                />
                <div>
                  <h3 className="text-base font-semibold ">{article.title}</h3>
                </div>
              </a>
            ))}
            <Link to="/news">view all</Link>
          </div>
        </div>

        {/* Online Friend List Section */}
        <div className="bg-white p-2 rounded-lg shadow-lg shadow-green-200 border-2 border-gray-400 m-2">
          <h2 className="text-lg font-semibold mb-4">Online Friends</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                alt="Friend Avatar"
                className="w-10 h-10 object-cover rounded-full mr-2 border-2 border-green-500"
              />
              <span className="text-sm">Friend Name</span>
            </li>
            <li className="flex items-center">
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                alt="Friend Avatar"
                className="w-10 h-10 object-cover rounded-full mr-2 border-2 border-green-500"
              />
              <span className="text-sm">Friend Name</span>
            </li>
            <li className="flex items-center">
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                alt="Friend Avatar"
                className="w-10 h-10 object-cover rounded-full mr-2 border-2 border-green-500"
              />
              <span className="text-sm">Friend Name</span>
            </li>
            {/* Add more online friends here */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BlogRightSidebar;
