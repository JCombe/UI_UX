import React from "react";
import { LandingCategories } from "../../../Data/Data";

const CategoryComp = ({ category }: any) => {
  return (
    <div
      className={`flex flex-col max-w-xs rounded-lg ${
        category.id === 0 && "rounded-bl-5xl"
      } ${
        category.id + 1 === LandingCategories.length && "rounded-br-5xl"
      } bg-white text-center items-center justify-center p-8 m-4 shadow-sm hover:shadow-lg cursor-pointer transition-all`}
    >
      <div className="min-w-min rounded-full text-white p-2 bg-gradient-to-r from-purple-600 to-blue-500 mb-4">
        {category.icon}
      </div>
      <span className="text-2xl mb-4 min-w-max">{category.title}</span>
      <p className="text-sm opacity-40 max-w-xs">{category.descr}</p>
    </div>
  );
};

export default CategoryComp;
