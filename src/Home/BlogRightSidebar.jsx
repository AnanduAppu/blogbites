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
    <div >
      <div className="flex flex-col space-y-8">
        {/* Categories Section */}
        <Categories/>

        {/* Trending News Section */}
       
        <div className="bg-[#d3e6ff] px-3 py-2 bg-opacity-70 backdrop-filter backdrop-blur-lg border border-x-4 border-y-2 border-gray-300 dark:bg-gray-900 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Trending News</h2>
          <div className="grid grid-cols-1 gap-2">
            {/* Trending News Cards */}

            {news.slice(0, 3).map((article, index) => (
              <a
                key={index}
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center border bg-white p-1.4 border-gray-400 rounded-md mb-1 cursor-pointer"
              >
                <img
                  src={article.urlToImage?article.urlToImage:noimgnews}
                  alt="Trending News Image"
                  className="w-24 h-24 object-cover rounded-md mr-4"
                />
                <div>
                  <h3 className="text-base font-semibold px-5 py-3">{article.title}</h3>
                </div>
              </a>
            ))}
            <h1 className="text-center"> <Link to="/news"> view all</Link></h1>
          </div>
        </div>

        {/* Online Friend List Section */}
       
      </div>
    </div>
  );
}

export default BlogRightSidebar;
