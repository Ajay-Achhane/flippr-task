import moment from "moment";
import React from "react";
import { baseUrl } from "../../../lib/helper";

const BlogUserTile = ({ user }) => {
  return (
    <div className="flex items-center gap-x-2">
      <img src={user?.profileImg} alt={user?.name} />
      <div>
        <h2 className="text-lg text-[#6836ed] font-bold">{user?.name}</h2>
        <p className="font-medium text-gray-500">
          posted on {moment(user?.date).format("Do MMMM YYYY")}
        </p>
      </div>
    </div>
  );
};

const BlogHeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto m-6 px-8">
      <div className="lg:w-[80%] w-full mx-auto">
        <BlogUserTile
          user={{
            name: "Andrew Jhonson",
            date: new Date("01-27-2022"),
            profileImg: `${baseUrl()}/assets/client-first-images/blogUserProfile.svg`,
          }}
        />
        <h2 className="font-bold my-5 text-3xl lg:w-[55%] md:w-[35%] w-[75%]">
          Step-by-step guide to choosing great font pair
        </h2>
        <div className="flex items-center gap-x-2 bg-[#fef6f0] pr-4  pl-2 py-1 rounded-xl w-fit m-3">
          <img
            src={`${baseUrl()}/assets/client-first-icons/economy.svg`}
            alt="startUp"
          />
          <p className="capitalize  font-medium text-black tracking-wide ">
            startup
          </p>
        </div>
      </div>
      <img className="aspect-video object-cover my-12" src={`${baseUrl()}/assets/client-first-images/photo-of-woman-wearing-eyeglasses-3184405.svg`} alt="pic" />
    </div>
  );
};

export default BlogHeroSection;
