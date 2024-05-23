import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../Contex/CreateContex'

function Categories() {

   const {activeCategory, setActiveCategory}=useContext(UserContext)  

   //const [activeCategory, setActiveCategory] = useState('all');

  //  if(activeCategory ==='all'){
  //   setBloglistfil(bloglist)
  //  }


const FilterCategories = (e, category) => {
  e.preventDefault();
  setActiveCategory(category);
  // const filteredBlogs = category === 'all'
  //   ? bloglist
  //   : bloglist.filter(blogs => blogs.topic.toLowerCase() === category.toLowerCase());

  // console.log("this is :", filteredBlogs);
  // setBloglistfil(filteredBlogs);
};



  return (
    <div>
        <div className="bg-white rounded-lg shadow-md mx-2">
          <div className="w-full rounded-lg border-2 border-gray-400 p-4 max-w-sm shadow-lg shadow-purple-300">
            <h2 className="font-os text-lg font-bold">Categories</h2>
            <ul className="flex items-start flex-wrap mt-4">
            {['all', 'ai', 'technology', 'health', 'education', 'history', 'business'].map(category => (
              <li key={category} className="flex mx-1 cursor-pointer">
                <a
                  onClick={(e) => FilterCategories(e, category)}
                  className={`p-2 px-3 mb-4 rounded font-medium border ${
                    activeCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-purple-400/25 text-purple-800 hover:bg-transparent hover:border-purple-800'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </a>
              </li>
            ))}
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Categories