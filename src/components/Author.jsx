import React from 'react';
import { baseUrl } from '../lib/helper';
import { postData } from '../data/projectData';
import PostCards from './uiComponent/PostCard';
import { Link } from 'react-router-dom';
import CustomButton from './uiComponent/CustomButton';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Author = () => {
  return (
    <div className="container mx-auto p-6 max-w-6xl">
      {/* Header Section */}
      <section className="flex items-center lg:flex-row-reverse justify-center gap-x-10 p-3 bg-[#F4F0F8] ">
      {/* ----info section--- */}
      <div className=" lg:px-8 px-0 lg:w-[54%] w-full   flex flex-col gap-3">
        <h1 className="font-bold text-4xl">
         Hey there , I'am Andrew jhonson and welcome to my Blog
        </h1>
        
        <p className="text-gray-600">
          Duis aite irure dolor in reprehendeit in voliptate velit esse cillim
          dolore eu fugiat nulla pariatur. Excepteur sint occaacat cupidatat non
          prodent. Duis aite irure dolor in reprehendeit in voliptate velit esse cillim
          dolore eu fugiat nulla pariatur. Excepteur sint occaacat cupidatat non
          prodent.
        </p>
        <div className='items-cente flex gap-x-3 text-gray-700'><FaFacebook/> <FaTwitter/> <FaInstagram/><FaLinkedin/>
          </div>
       
      </div>
      {/* ---image section-- */}
      <img
      className="rounded-xl lg:w-auto lg:h-auto W-11/12  lg:rounded-md my-8"
      src={`${baseUrl()}/assets/client-first-images/close-up-photography-of-man-wearing-sunglasses-1212984 (2).svg`}
        alt="men-sittig-on-table"
      />
    </section>

      {/* Divider */}
      <div className="h-5 bg-gradient-to-r from-yellow-400 via-yellow-400 to-purple-600 mb-10"></div>

      {/* Posts Section */}
      <h1 className="capitalize  font-bold lg:text-4xl text-2xl">All Post</h1>
      <div className="my-8">
        {postData.map((data) => (
          <Link to={"/blog-post"}><PostCards data={data} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Author;
