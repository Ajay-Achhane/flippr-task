import React from "react";

const CategoryCard = ({ data, index }) => {
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      key={index}
      className={`p-6 aspect-video border-t-2 border-r-2 transition-all  hover:shadow-lg duration-300 hover:scale-95 cursor-pointer  hover:bg-yellow-400 hover:text-gray-900
          bg-white border border-gray-200 hover:border-gray-300
      `}
    >
      <div className="flex flex-col items-start">
        <div className="mb-4 p-1 size-12 flex items-center justify-center bg-[#fef6f0] rounded-md">
          <img src={data?.icon} alt={data?.title} />
        </div>
        <h3 className="self-start text-2xl font-semibold mb-2">
          {data?.title}
        </h3>
        <p className="text-sm text-gray-600">{data?.description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
