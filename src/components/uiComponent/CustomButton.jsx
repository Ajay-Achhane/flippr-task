import React from "react";
import { BiArrowBack } from "react-icons/bi";

const CustomButton = ({className, btnName,btnIcon }) => {
  return (
    <div className={` capitalize bg-[#FFD050] w-fit flex items-center cursor-pointer hover:shadow-inner gap-2 hover:text-white mt-2 hover:border-[#FFD050] hover:bg-[#592EA9] duration-500 hover:scale-95  hover:shadow-[#232536] text-black font-bold py-2 px-4 rounded ${className}`}>
      {btnName} {btnIcon}
    </div>
  );
};

export default CustomButton;
