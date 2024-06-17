function edithBlogs() {
  return (

<div class="container relative mx-auto mt-5 flex h-full max-w-6xl flex-col justify-between px-10 xl:px-0">
  <h2 class="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Edit Blog</h2>

  <div class="w-full">
    <div class="mb-10 max-sm:mb-5 flex w-full flex-col sm:flex-row">
      <div class="mb-10 w-full max-sm:mb-2.5 sm:mb-0 sm:w-1/2">
        <div class="relative ml-0 mr-0 h-full sm:mr-10">
          <span class="absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-indigo-500"></span>
          <div class="relative h-full rounded-lg border-2 border-indigo-500 bg-white p-1">
            <textarea id="message" rows="4" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Write your thoughts here..."></textarea>
          </div>
        </div>
     
    <div class=" flex w-[97%] max-sm:w-[100%] flex-col border border-green-500 sm:flex-row rounded-md">
      <textarea id="message" rows="15" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Write your thoughts here..."></textarea>
    </div>
  </div>
</div>





  )
}

export default edithBlogs