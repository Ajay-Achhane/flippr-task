import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import { baseUrl } from "../../../lib/helper";
import CustomButton from "../../uiComponent/CustomButton";

const FeaturedSection = () => {
  return (
    <section className="max-w-7xl py-16 container mx-auto px-4">
      <div className="grid md:grid-cols-1 lg:grid-cols-3 grid-cols-1 gap-8">
        <div className="p-5 lg:col-span-2">
          <h1 className="text-2xl font-semibold mb-4">Featured Post</h1>
          <div
            data-aos="zoom-in-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="p-6 border bg-white rounded-lg shadow-md w-fit overflow-hidden"
          >
            <img
              src={`${baseUrl()}/assets/client-first-images/white-concrete-building-1838640.svg`}
              alt=""
              className="mb-4 aspect-video object-cover w-11/12/"
            />
            <h2 className="text-2xl font-semibold mb-2">
              How to write better test cases
            </h2>
            <p className="text-gray-600">
              Learn the essential techniques for creating effective test cases
            </p>
            <CustomButton btnName={"Read More"} btnIcon={<FaGreaterThan />} />
          </div>
        </div>
        <div className="space-y-6 p-5 lg:col-span-1">
          <h2 className="text-2xl font-semibold mb-4">All Posts</h2>
          <div data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" className="max-h-[34rem] no-scrollbar overflow-y-scroll">
            {[1, 2, 3, 5, 5, 87, 87, 78, 78, 7, 7, 7, 7, 7, 7, 7].map(
              (item) => (
                <div
                  key={1}
                  className="bg-white border-b hover:bg-[#ffd05069] cursor-pointer duration-200 overflow-hidden"
                >
                  <div className="p-4 flex gap-4">
                    <div>
                      <div className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded w-fit mb-2">
                        Article
                      </div>
                      <h1 className="text-[1.5em] font-bold  mb-1">
                        8 figma design system that you can download free today
                      </h1>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
