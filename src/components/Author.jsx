import React from 'react';

const Author = () => {
  return (
    <div className="container mx-auto p-6 max-w-5xl">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
        <img
          src="https://via.placeholder.com/162x205"
          alt="Andrew Johnson"
          className="w-40 h-52 object-cover rounded-md"
        />
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Hey there, I’m Andrew Johnson and welcome to my Blog
          </h1>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-400">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-500">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-yellow-400 to-purple-600 mb-10"></div>

      {/* Posts Section */}
      <h2 className="text-2xl font-bold mb-6">My Posts</h2>
      <div className="space-y-6">
        {/* Post 1 */}
        <div className="flex flex-col md:flex-row bg-white shadow-md rounded-md overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Post Image"
            className="w-full md:w-1/3 object-cover"
          />
          <div className="p-4">
            <p className="text-indigo-600 uppercase text-sm font-semibold mb-2">
              Business
            </p>
            <h3 className="text-lg font-bold mb-2">
              Font sizes in UI design: The complete guide to follow
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Post 2 */}
        <div className="flex flex-col md:flex-row bg-white shadow-md rounded-md overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Post img"
            className="w-full md:w-1/3 object-cover"
          />
          <div className="p-4">
            <p className="text-indigo-600 uppercase text-sm font-semibold mb-2">
              Economy
            </p>
            <h3 className="text-lg font-bold mb-2">
              How to build rapport with your web design clients
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
