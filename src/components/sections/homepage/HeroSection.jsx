import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import CustomButton from "../../uiComponent/CustomButton";
import { baseUrl } from "../../../lib/helper";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src={`${baseUrl()}/assets/client-first-images/man-in-black-suit-wearing-eye-glasses-sitting-on-gray-sofa-using-macbook-3772622.svg`}
          alt="Hero background"
          className="object-cover brightness-[0.3] h-full w-full"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl lg:ml-16 flex flex-col gap-y-4">
          <p className="uppercase font-light tracking-wide text-white "
          >
            posted on{" "}
            <strong className="font-bold tracking-wider">startup</strong>
          </p>
          <h1 className="lg:text-5xl text-3xl font-semibold tracking-wide leading-tight text-white mb-4">
            Step-by-step guide to choosing great font pairs
          </h1>
          <p className="capitalize text-white">
            By <b className="text-[#FFD050] font-bold">James west</b> | May 23
            ,2022
          </p>
          <p className="text-gray-200 mb-6">
            Duis aite irure dolor in reprehendeit in voliptate velit esse cillim
            dolore eu fugiat nulla pariatur. Excepteur sint occaacat cupidatat
            non prodent.
          </p>
          <CustomButton btnName={"get started"} btnIcon={<FaGreaterThan />} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
