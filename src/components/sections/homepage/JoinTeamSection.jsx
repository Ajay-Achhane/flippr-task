import React from "react";
import CustomButton from "../../uiComponent/CustomButton";

const JoinTeamSection = () => {
  return (
    <div data-aos="zoom-in" className="text-center py-16 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">
        Join our team to be a part of our story
      </h2>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
      <CustomButton className={'m-auto'} btnName={"Join Us"} />
    </div>
  );
};

export default JoinTeamSection;
