import React from "react";
import CustomButton from "../../uiComponent/CustomButton";
import { FaGreaterThan } from "react-icons/fa";
import { baseUrl } from "../../../lib/helper";

const LandingPage = () => {
  return (
    <section className="min-h-full flex lg:px-20 px-8 lg:flex-row flex-col-reverse py-8  items-center max-w-screen w-screen bg-[#F4F0F8]">
      {/* ----info section--- */}
      <div className=" lg:px-8 px-0 lg:w-[54%] w-full   flex flex-col gap-3">
        <p className="uppercase text-2xl tracking-widest">Featured post</p>
        <h1 className="font-bold text-4xl">
          step-by-step guide to choosing a great font pairs
        </h1>
        <p>
          by <strong className="text-[#6836ed]">John Doe</strong> | May 2023
        </p>
        <p className="text-gray-600">
          Duis aite irure dolor in reprehendeit in voliptate velit esse cillim
          dolore eu fugiat nulla pariatur. Excepteur sint occaacat cupidatat non
          prodent.
        </p>
        <CustomButton
          className={"w-1/2 py-[10px!important] justify-center"}
          btnName={"read more"}
          btnIcon={<FaGreaterThan />}
        />
      </div>
      {/* ---image section-- */}
      <img
      className="rounded-xl lg:w-auto lg:h-auto W-11/12  lg:rounded-md my-8"
        src={`${baseUrl()}/assets/client-first-images/man-in-white-dress-shirt-sitting-on-black-rolling-chair-while-facing-black-computer-set-and-smiling-840996.svg`}
        alt="men-sittig-on-table"
      />
    </section>
  );
};

export default LandingPage;
