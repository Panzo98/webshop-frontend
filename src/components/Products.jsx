import React from "react";
import SingleProductCard from "./SingleProductCard";

export default function Products() {
  const products = [
    {
      id: 1,
      title: "Syltherine",
      image: "/product-image.png",
      description: "Stylish cafe chair",
      price: 2500.0,
      discount: 30,
    },
    {
      id: 2,
      title: "Syltherine",
      image: "/product-image.png",
      description: "Stylish cafe chair",
      price: 2500.0,
      discount: 25,
    },
    {
      id: 3,
      title: "Syltherine",
      image: "/product-image.png",
      description: "Stylish cafe chair",
      price: 2500.0,
      discount: 20,
    },
    {
      id: 4,
      title: "Syltherine",
      image: "/product-image.png",
      description: "Stylish cafe chair",
      price: 2500.0,
      discount: 0,
    },
    {
      id: 5,
      title: "Syltherine",
      image: "/product-image.png",
      description: "Stylish cafe chair",
      price: 2500.0,
      discount: 0,
    },
    {
      id: 6,
      title: "Syltherine",
      image: "/product-image.png",
      description: "Stylish cafe chair",
      price: 2500.0,
      discount: 30,
    },
    {
      id: 7,
      title: "Syltherine",
      image: "/product-image.png",
      description: "Stylish cafe chair",
      price: 2500.0,
      discount: 30,
    },
    {
      id: 8,
      title: "Syltherine",
      image: "/product-image.png",
      description: "Stylish cafe chair",
      price: 2500.0,
      discount: 30,
    },
  ];
  const handleShowMore = () => {
    alert("Show more products");
  };
  return (
    <div className="flex flex-col items-center">
      <span className="font-poppins text-3xl font-bold leading-48px tracking-0 text-left text-text-color mb-8">
        Our Products
      </span>
      <div className="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-4 xl:gap-12">
        {products.map((product, index) => {
          return <SingleProductCard key={index} product={product} />;
        })}
      </div>
      <button
        onClick={handleShowMore}
        className="text-primary-color text-base font-poppins font-bold leading-150% border-2 border-primary-color px-20 py-3 hover:text-white hover:bg-primary-color duration-300 mb-16 mt-8"
      >
        Show More
      </button>
    </div>
  );
}
