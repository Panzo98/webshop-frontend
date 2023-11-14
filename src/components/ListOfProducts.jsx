import React from "react";
import SingleProductCard from "./SingleProductCard";
import Filter from "./Filter";

export default function ListOfProducts() {
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
    {
      id: 9,
      title: "Syltherine",
      image: "/product-image.png",
      description: "Stylish cafe chair",
      price: 2500.0,
      discount: 30,
    },
    {
      id: 10,
      title: "Syltherine",
      image: "/product-image.png",
      description: "Stylish cafe chair",
      price: 2500.0,
      discount: 25,
    },
    {
      id: 11,
      title: "Syltherine",
      image: "/product-image.png",
      description: "Stylish cafe chair",
      price: 2500.0,
      discount: 20,
    },
    {
      id: 12,
      title: "Syltherine",
      image: "/product-image.png",
      description: "Stylish cafe chair",
      price: 2500.0,
      discount: 0,
    },
    {
      id: 13,
      title: "Syltherine",
      image: "/product-image.png",
      description: "Stylish cafe chair",
      price: 2500.0,
      discount: 0,
    },
    {
      id: 14,
      title: "Syltherine",
      image: "/product-image.png",
      description: "Stylish cafe chair",
      price: 2500.0,
      discount: 30,
    },
    {
      id: 15,
      title: "Syltherine",
      image: "/product-image.png",
      description: "Stylish cafe chair",
      price: 2500.0,
      discount: 30,
    },
    {
      id: 16,
      title: "Syltherine",
      image: "/product-image.png",
      description: "Stylish cafe chair",
      price: 2500.0,
      discount: 30,
    },
  ];
  return (
    <div className="flex flex-col items-center mt-16">
      {/* <div className="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 gap-4 xl:gap-12"> */}
      <div className="flex flex-row justify-between flex-wrap px-96">
        {products.map((product, index) => {
          return <SingleProductCard key={index} product={product} />;
        })}
      </div>
      <div className="flex m-16">
        <button className="mr-4 bg-primary-color text-white text-base font-poppins font-bold px-6 py-4 flex justify-center items-center rounded-xl hover:text-white hover:bg-primary-hover-color duration-300 ">
          1
        </button>
        <button className="mr-4 bg-secundary-color text-black text-base font-poppins f px-6 py-4 flex justify-center items-center rounded-xl hover:text-white hover:bg-primary-hover-color duration-300 ">
          2
        </button>
        <button className="mr-4 bg-secundary-color text-black text-base font-poppins px-6 py-4 flex justify-center items-center rounded-xl hover:text-white hover:bg-primary-hover-color duration-300 ">
          3
        </button>
        <button className="bg-secundary-color text-black text-base font-poppins  px-6 py-4 flex justify-center items-center rounded-xl hover:text-white hover:bg-primary-hover-color duration-300 ">
          Next
        </button>
      </div>
    </div>
  );
}
