import React from "react";
import { baseUrl } from "../../../lib/helper";

const AboutLanding = () => {
  return (
    <section className="bg-[#F4F0F8] max-w-8xl pt-20  ">
      <div className="px-16 py-12 lg:absolute max-w-lg z-30  lg:top-[158px] top-[321px] left-[152px] bg-[white]">
        <p className="uppercase tracking-wider ">About us</p>
        <h3 className="text-4xl ">
          We are a team of content writera who share their learning
        </h3>
      </div>
      <div>
        <p className="max-w-3xl float-end pb-14 ">
          Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. consectetur adipiscing elit.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
          ipsum
        </p>
      </div>
      <div
        className="relative  h-[600px] w-full overflow-hidden  aboutUpBgPlacement aboutLine"
        style={{
          background: `url(${baseUrl()}/assets/client-first-images/close-up-photography-of-man-wearing-sunglasses-1212984.svg)`,
        }}
      >
        <div className="bg-[#FFD050]  absolute bottom-6 lg:left-[150px]  flex items-center max-w-8xl mx-auto py-3">
          <div className="flex justify-center items-center w-fit p-4 flex-col gap-1">
            <h2 className="font-extrabold text-2xl lg:text-4xl">12+</h2>
            <p className="capitalize font-semibold text-center">blog publish</p>
          </div>
          <div className="flex justify-center items-center w-fit p-4 flex-col gap-1">
            <h2 className="font-extrabold text-2xl lg:text-4xl">18K+</h2>
            <p className="capitalize font-semibold text-center">View on Finstweet </p>
          </div>
          <div className="flex justify-center items-center w-fit p-4 flex-col gap-1">
            <h2 className="font-extrabold text-2xl lg:text-4xl">30k+</h2>
            <p className="capitalize font-semibold text-center">Total active user</p>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default AboutLanding;
