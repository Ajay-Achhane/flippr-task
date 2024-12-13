import React from "react";
import LandingPage from "../components/sections/blogpage/LandingPage";
import PostSection from "../components/sections/blogpage/PostSection";
import CategorySection from "../components/sections/homepage/CategorySection";
import JoinTeamSection from "../components/sections/homepage/JoinTeamSection";

const Blog = () => {
  return (
    <>
      <LandingPage />
      <PostSection />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">All Category</h2>
        <CategorySection />
      </div>
      <JoinTeamSection/>
    </>
  );
};

export default Blog;
