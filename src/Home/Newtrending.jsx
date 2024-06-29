import React, { useEffect, useState } from "react";

function Newtrending() {
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
    <div className="lg:px-10 ">
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white underline">
            <span className="text-red-500">T</span>rending{" "}
            <span className="text-blue-500">News</span>
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            {news.map((article, index) => (
              <a href={article.url} key={index} className="lg:flex"  >
                <img
                  className="object-cover w-full h-56 rounded-lg lg:w-64"
                  src={article.urlToImage}
                  alt=""
                />
                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  <a
                    href="#"
                    className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                  >
                    {article.title}
                  </a>
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    On: {article.publishedAt.slice(0, 7)}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Newtrending;
