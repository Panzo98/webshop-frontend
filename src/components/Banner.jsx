import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative">
      <div className="w-full">
        <Image
          src="/banner.png"
          alt="banner"
          width={2880}
          height={1436}
          placeholder="blur"
          blurDataURL="data:image/png;base64,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"
          className="h-6/12 lg:h-[calc(100vh-6rem)] w-full object-contain  lg:object-cover"
        />
      </div>
      <div className="flex flex-col p-5 lg:p-10 bg-secundary-color lg:absolute  lg:bottom-[7.25rem]  lg:left-[47.5%] w-full scale-animation lg:w-[40rem] rounded-[10px] lg:transition lg:duration-500 lg:ease-linear">
        <span className="font-poppins text-xs lg:text-base font-semibold leading-6 tracking-widest text-left text-text-color">
          New Arrival
        </span>
        <span className="font-poppins text-xs lg:text-5xl font-bold leading-4 lg:leading-[65px] tracking-normal text-left text-primary-color">
          Discover Our New Collection
        </span>
        <span className="font-poppins text-xs lg:text-base font-medium lg:leading-6 tracking-normal text-left text-text-color">
          Experience the latest additions to our exclusive collection.
        </span>
        <Link
          href="/shop"
          className="mt-2 lg:mt-12 bg-primary-color hover:bg-primary-hover-color active:bg-primary-active-color transition duration-500 text-white text-xl text-center py-1 lg:py-6 w-6/12 lg:w-4/12 font-bold items-right"
        >
          BUY NOW
        </Link>
      </div>
    </div>
  );
}