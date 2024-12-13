import React from "react";
import { baseUrl } from "../../../lib/helper";
import PostCards from "../../uiComponent/PostCard";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { Link } from "react-router-dom";
import { postData } from "../../../data/projectData";



const PostSection = () => {
  return (
    <section className="lg:px-40 md:px-20 px-10 py-8">
      <h1 className="capitalize  font-bold lg:text-4xl text-2xl">All Post</h1>
      <div className="my-8">
        {postData.map((data) => (
          <Link to={"/blog-post"}><PostCards data={data} /></Link>
        ))}
      </div>
      {/* -------------------pagination-------------------- */}
      <div id="pagination" className="flex items-center justify-center gap-x-6">
        <div className="flex capitalize items-center gap-x-1 cursor-pointer  hover:scale-95 duration-300">
          <FaLessThan className="text-gray-600 hover:text-black" size={12} />
          <p className="font-semibold text-gray-600">prev </p>
        </div>
        <div className="flex capitalize items-center gap-x-1 cursor-pointer hover:scale-95 duration-300">
          <p className="font-semibold ">next</p> <FaGreaterThan size={12} />
        </div>
      </div>
    </section>
  );
};

export default PostSection;
