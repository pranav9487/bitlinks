import React from 'react'

const page = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className='flex justify-center items-center h-[90vh]'>
      <div className="max-w-2xl p-8 rounded-lg shadow-lg bg-gray-800 ">
        <h1 className="text-4xl font-bold mb-6 text-center text-purple-400">About Bitlinks</h1>
        <p className="text-lg leading-relaxed text-gray-300">
          Bitlinks is a modern URL shortening service designed for simplicity and efficiency. 
          Our platform allows you to transform long, cumbersome URLs into short, memorable links 
          that are easy to share across social media, emails, and other platforms. 
          Beyond just shortening, Bitlinks provides basic analytics to help you track the performance 
          of your links, giving you insights into clicks and engagement. 
          Our goal is to make your online sharing experience smoother and more effective.
        </p>
        </div>
        </div>
      </div>
    
  )
}

export default page
