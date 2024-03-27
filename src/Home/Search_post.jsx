import React from 'react'

function Search_post() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row shadow-lg shadow-blue-100  mt-2">
    <div className="flex w-full flex-col p-8 lg:w-2/5">
      <p className="my-4 text-3xl leading-relaxed text-yellow-500 md:text-5xl md:leading-snug">Create Your thoughts ...</p>
      <p className="my-1 ms-2 font-sans text-2xl md:my-4 md:text-lg lg:text-4xl text-blue-600"> Build Your <span className="text-black font-semibold">Blog</span> </p>
      <p className="my-1 ms-2 font-sans text-2xl md:my-4 md:text-lg lg:text-4xl">Find Your inner <span className="text-blue-600 font-semibold"> Bites</span></p>
      <div className="max-w-4xl space-y-4 p-4 lg:mt-5">
        <div className="flex flex-col space-y-4">
          <textarea className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[80px] w-full rounded-lg border p-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="What's on your mind?"></textarea>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 20h.01"></path>
                <path d="M7 20v-4"></path>
                <path d="M12 20v-8"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="text-purple-500" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                <circle cx="12" cy="13" r="3"></circle>
              </svg>
            </div>
            <button className="ring-offset-background focus-visible:ring-ring hover:bg-primary/90 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-purple-500 px-4 py-2 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">Post</button>
          </div>
        </div>
      </div>
    </div>
    <div className="flex w-full flex-col justify-center lg:-mt-12 lg:w-3/5 max-sm:hidden">
      <div className="container">
        <div className="relative flex w-full min-w-0 flex-col break-words">
          <div className="flex-auto p-5 lg:p-10">
            <img src="https://user-images.githubusercontent.com/54521023/152731049-cc744a56-1d6f-4945-9566-0fa3b7ad1d24.png" alt="contact image" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Search_post