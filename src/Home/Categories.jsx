import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../Contex/CreateContex'

function Categories() {

   const {activeCategory, setActiveCategory}=useContext(UserContext)  




const FilterCategories = (e, category) => {
  e.preventDefault();
  setActiveCategory(category);

};



  return (
    <div>
        <div className=" bg-[#d3fffc] w-full bg-opacity-70 backdrop-filter backdrop-blur-lg border border-x-4 border-y-2 border-gray-300 dark:bg-gray-900 rounded-lg ">
          <div className="w-full rounded-lg   p-4 max-w-sm ">
            <h2 className="font-os text-lg font-bold">Categories</h2>
            <ul className="flex items-start flex-wrap mt-2">
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