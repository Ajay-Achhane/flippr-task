import React from "react";
import CategoryLanding from "../components/sections/category/CategoryLanding";
import { categoryData, postData } from "../data/projectData";
import PostCards from "../components/uiComponent/PostCard";
import { Link, useParams } from "react-router-dom";

const Category = () => {
  const {category} = useParams()
  console.log(category)
  return (
    <>
      <CategoryLanding categoryName={category} />
      <section className="mt-20 max-w-[95vw] mx-auto">
        <div className="flex justify-evenly ">
          <div className="w-[70%!important]">
            {postData.slice(0, 4).map((data) => (
              <PostCards
                fontAreaStyle={"lg:w-[90%!imporant]"}
                className={"gap-y-6"}
                data={data}
              />
            ))}
          </div>
          <div>
            <h3 className="font-bold text-2xl">Category</h3>
            <div className="flex items-center gap-y-3 mt-5 flex-col">
              {categoryData.map((cate, idx) => (
               <Link to={`/blog/${cate.title}`} key={idx}> <CategoryListCard className={category.toLowerCase()===cate.title.toLowerCase() && "active"} data={cate}  /></Link>
              ))}
            </div>
            <div>
              <h2 className="text-3xl mt-11">Read All</h2>
              <div className="grid grid-col-4 gap-3 mt-6">
               <div className="border-2 w-full px-4 py-2 col-span-2 rounded-2xl border-[#FFD050]">
                  Business
                </div>
                <div className="border-2 w-full px-4 py-2 col-span-1 rounded-2xl border-[#FFD050]">
                  Experience
                </div>
                <div className="border-2 w-full px-4 py-2 rounded-2xl border-[#FFD050]">
                  screen
                </div>
                <div className="border-2 w-full px-4 py-2 rounded-2xl border-[#FFD050]">
                  Techonolgy
                </div>
                <div className="border-2 w-full px-4 py-2 rounded-2xl border-[#FFD050]">
                  Marketing
                </div>
                <div className="border-2 col-span-2 w-full px-4 py-2 rounded-2xl border-[#FFD050]">
                  Marketing life
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;

const CategoryListCard = ({ data, index,className }) => {
  return (
    <div className={`flex pl-4 py-2 border max-w-56 min-w-56 hover:bg-[#FFD050] gap-x-2 cursor-pointer duration-300  items-start justify-start ${className}`}>
      <div className=" size-12 flex items-center justify-center bg-[#fef6f0] rounded-md">
        <img src={data?.icon} alt={data?.title} />
      </div>
      <h3 className="text-2xl font-medium ">{data?.title}</h3>
    </div>
  );
};