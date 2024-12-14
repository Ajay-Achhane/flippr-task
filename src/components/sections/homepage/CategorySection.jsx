import React from "react";
import { categoryData } from "../../../data/projectData";
import CategoryCard from "../../uiComponent/CategoryCard";
import { Link } from "react-router-dom";

const CategorySection = () => {
  return (
    <div className="grid grid-cols-1  my-6 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {categoryData.map((category, idx) => (
       <Link to={`/blog/${category.title}`} key={idx}> <CategoryCard data={category}  /></Link>
      ))}
    </div>
  );
};

export default CategorySection;

