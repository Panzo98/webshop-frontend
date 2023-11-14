import React from "react";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  //TODO povuci sa backenda
  const categories = [
    { title: "Dining", image: "/category1.png" },
    { title: "Living", image: "/category2.png" },
    { title: "Bedroom", image: "/category3.png" },
  ];
  return (
    <div className="w-full px-2 lg:px-[10%] py-10 lg:py-[8rem] flex flex-col items-center">
      <span className="font-poppins text-3xl font-bold leading-48px tracking-0 text-left text-text-color">
        Browse The Range
      </span>
      <span className="font-poppins text-md lg:text-xl  text-gray-500 tracking-0 text-center font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </span>
      <div className="mt-16 flex w-full flex-wrap justify-center  gap-14">
        {categories.map((category, index) => {
          return (
            <CategoryCard
              key={index}
              image={category.image}
              text={category.title}
            />
          );
        })}
      </div>
    </div>
  );
}
