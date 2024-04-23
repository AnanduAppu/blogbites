import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


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
                  src={article.urlToImage}
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

        {/* Categories Section */}
        <div className="bg-white rounded-lg shadow-md mx-2">
          <div className="w-full rounded-lg border-2 border-gray-400 p-4 max-w-sm shadow-lg shadow-purple-300">
            <h2 className="font-os text-lg font-bold">Categories</h2>
            <ul className="flex items-start flex-wrap mt-4">
              <li className="flex mx-1">
                <a
                  href="category/all"
                  className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-purple-800"
                >
                  all
                </a>
              </li>
              <li className="flex mx-1">
                <a
                  href="category/react-js"
                  className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-purple-800"
                >
                  AI
                </a>
              </li>
              <li className="flex mx-1">
                <a
                  href="category/redux"
                  className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-purple-800"
                >
                  Fashion
                </a>
              </li>
              <li className="flex mx-1">
                <a
                  href="category/ui-design"
                  className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-purple-800"
                >
                  Travel
                </a>
              </li>
              <li className="flex mx-1">
                <a
                  href="category/user-experience"
                  className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-purple-800"
                >
                  Food
                </a>
              </li>
              <li className="flex mx-1">
                <a
                  href="category/productivity"
                  className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-purple-800"
                >
                  Business
                </a>
              </li>
              <li className="flex mx-1">
                <a
                  href="category/game"
                  className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-purple-800"
                >
                  Game
                </a>
              </li>
            </ul>
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
