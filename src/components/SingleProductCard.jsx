import React, { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";

export default function SingleProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleClick = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  return (
    <div
      className="flex flex-col w-[250px] relative hover:scale-[1.03] duration-300 mb-20"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#3a3a3a] bg-opacity-70  duration-300 z-10">
          <button
            className="bg-white text-primary-color px-14 py-3 font-medium text-base font-poppins leading-150% hover:text-white hover:bg-primary-color duration-300"
            onClick={handleClick}
          >
            Add to Cart
          </button>
        </div>
      )}
      {product.discount > 0 ? (
        <div className="absolute font-medium flex rounded-full h-12 w-12 bg-discount-color right-3 top-3 items-center justify-center text-white">
          -{product.discount}%
        </div>
      ) : (
        <div className="absolute font-medium flex rounded-full h-12 w-12 bg-new-color right-3 top-3 items-center justify-center text-white">
          NEW
        </div>
      )}
      <Image
        src={product.image}
        alt="product-image"
        width={250}
        height={300}
        className="object-cover  w-full"
      />
      <div className="px-4 pt-4 pb-8 bg-[#f4f5f7] flex flex-col">
        <span className="text-text-color font-poppins text-xl font-semibold tracking-0 text-left">
          {product.title}
        </span>
        <span className="text-gray-400 text-xs font-poppins font-medium leading-24px tracking-0 text-left py-2">
          {product.description}
        </span>
        <div className="flex justify-between">
          <span className="text-text-color font-poppins text-xl font-semibold tracking-0 text-left">
            {"$ "}
            {product.price *
              (product.discount === 0 ? 1 : product.discount / 100)}
          </span>
          {product.discount === 0 ? null : (
            <span className="text-gray-400  font-poppins font-normal leading-150% line-through">
              {"$ "}
              {product.price}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
