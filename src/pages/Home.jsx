import React from "react";
import AuthorsSection from "../components/sections/homepage/AuthorsSection";
import StorySection from "../components/sections/homepage/StorySection";
import HeroSection from "../components/sections/homepage/HeroSection";
import FeaturedSection from "../components/sections/homepage/FeaturedSection";
import AboutSection from "../components/sections/homepage/AboutSection";
import CategorySection from "../components/sections/homepage/CategorySection";
import JoinTeamSection from "../components/sections/homepage/JoinTeamSection";
import TestimonialSection from "../components/sections/homepage/TestimonialSection";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Content */}
      <FeaturedSection />

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* About & Mission Section */}
        <AboutSection />

        {/* Categories Section */}
        <div className="text-center mb-12 mt-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Choose A Category
          </h2>
        </div>
        <CategorySection />

        <StorySection />

        <AuthorsSection />

        <TestimonialSection />

        {/* Join Team Section */}
        <JoinTeamSection />
      </div>
    </div>
  );
};

export default Home;
