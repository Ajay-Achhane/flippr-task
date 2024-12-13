import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { baseUrl } from '../../../lib/helper';
import CustomButton from '../../uiComponent/CustomButton';

const StorySection = () => {
  return (
    <section className="relative container mx-auto px-4 py-16">
      <div className=" flex flex-col lg:flex-row">
        <div className="relative lg:w-[800px] w-full ">
          <img
            src={`${baseUrl()}/assets/client-first-images/close-up-photography-of-man-wearing-sunglasses-1212984.svg`}
            alt="Three friends enjoying a scenic view"
            className="rounded-lg lg:w-[800px] "
          />
        </div>
        <div data-aos="zoom-in-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine" className="lg:max-w-xl max-w-full right-0  lg:absolute top-[240px] bg-[whitesmoke] lg:px-5 lg:py-20 h-fit ">
          <span className="text-gray-600 uppercase tracking-wider text-sm font-semibold">
            How We Started
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-4">
            It started out as a simple idea and evolved into our passion
          </h2>
          <p className="text-gray-600 mb-6">
            Our journey began with a shared love for storytelling. What started as casual conversations 
            among friends grew into a platform where writers from all walks of life could share their 
            experiences and insights, inspiring readers worldwide.
          </p>
          <CustomButton className={"text-xl py-2 "} btnName={" Discover our story"} btnIcon={<FaArrowRight/>}/>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
