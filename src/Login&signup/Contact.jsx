import React from 'react'


function Contact() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8 mt-10">
    <div className="mx-auto max-w-2xl space-y-8 border border-black p-5 rounded-md bg-cyan-10">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Want to get in touch? Fill out the form below to send me a message.
        </p>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
            <input id="name" type="text" placeholder="Enter your name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
            <input id="email" type="email" placeholder="Enter your email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Subject</label>
          <input id="subject" type="text" placeholder="Enter the subject" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
          <textarea id="message" placeholder="Enter your message" className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"></textarea>
        </div>
        <button className="px-2 py-2 border border-slate-400 bg-blue-600 text-white rounded-md font-semibold hover:text-black hover:bg-blue-300 duration-300">
          Send message
        </button>
      </div>
    </div>
  </div>
  )
}

export default Contact