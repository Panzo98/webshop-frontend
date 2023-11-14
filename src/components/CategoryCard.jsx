import React from "react";
import Image from "next/image";

export default function CategoryCard({ image, text }) {
  const handleOpenCategory = () => {
    alert("Otvara shop sa filtriranom kategorijom");
  };
  return (
    <div className="flex flex-col items-center">
      <Image
        src={image}
        alt="categories"
        width={380}
        height={480}
        onClick={() => handleOpenCategory()}
        className="rounded-xl transition duration-300 ease-linear hover:scale-[1.03] mb-8 w-full h-full lg:h-[380px] object-cover cursor-pointer "
      />
      <span className="font-2xl text-text-color font-semibold cursor-pointer">
        {text}
      </span>
    </div>
  );
}
