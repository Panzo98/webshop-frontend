import { APP_ADDRESS, APP_NAME, YEAR } from "@/assets/appVariables";
import React, { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const handleSubscribe = async (e) => {
    e.preventDefault();
    alert(`${email} subscribed!`);
  };
  return (
    <div className="px-3 py-6 lg:px-24 lg:py-12  w-full border-t border-gray-300">
      <div className="flex flex-col lg:flex-row justify-between text-sm">
        <div className="flex flex-col">
          <Link
            href="/"
            className="pb-2 lg:pb-8 font-poppins font-bold leading-36 tracking-normal text-center lg:text-left text-xl"
          >
            {APP_NAME}.
          </Link>
          <span className="font-poppins font-normal leading-6 tracking-normal text-center lg:text-left text-gray-600 lg:w-9/12">
            {APP_ADDRESS}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="pb-0 lg:pb-8 font-poppins text-2xl lg:text-sm mb-4 lg:mb-2 lg:font-medium leading-6 tracking-normal text-center lg:text-left text-gray-400 mt-8 lg:mt-0">
            Links
          </span>
          <div className="flex flex-col">
            <Link
              href="/"
              className="font-poppins font-medium leading-6 tracking-normal pb-2 lg:pb-5 text-center lg:text-left"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="font-poppins font-medium leading-6 tracking-normal pb-2 lg:pb-5 text-center lg:text-left"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="font-poppins font-medium leading-6 tracking-normal pb-2 lg:pb-5 text-center lg:text-left"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="font-poppins font-medium leading-6 tracking-normal pb-2 lg:pb-8 text-center lg:text-left"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="pb-0 lg:pb-8 font-poppins text-2xl lg:text-sm mb-4 lg:mb-2 lg:font-medium leading-6 tracking-normal text-center lg:text-left text-gray-400 mt-8 lg:mt-0">
            Help
          </span>
          <div className="flex flex-col">
            <Link
              href="/payment"
              className="font-poppins font-medium leading-6 tracking-normal pb-2 lg:pb-5 text-center lg:text-left"
            >
              Payment Options
            </Link>
            <Link
              href="/returns"
              className="font-poppins font-medium leading-6 tracking-normal pb-2 lg:pb-5 text-center lg:text-left"
            >
              Returns
            </Link>
            <Link
              href="/privacy"
              className="font-poppins font-medium leading-6 tracking-normal pb-2 lg:pb-5 text-center lg:text-left"
            >
              Privacy Policies
            </Link>
          </div>
        </div>
        <div className="flex flex-col ">
          <span className="pb-0 lg:pb-8 font-poppins text-2xl lg:text-sm mb-4 lg:mb-2 lg:font-medium leading-6 tracking-normal text-center lg:text-left text-gray-400 mt-8 lg:mt-0">
            Newsletter
          </span>
          <form
            className="flex flex-col lg:flex-row items-center pb-3 lg:pb-0"
            onSubmit={handleSubscribe}
          >
            <input
              value={email}
              className="h-8 w-6/12 lg:w-full px-1 text-sm font-light lg:border-b outline-none  lg:border-[#00000036]"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Your Email Address"
            ></input>
            {/* <button className="bg-primary-color hover:bg-primary-hover-color active:bg-primary-active-color transition duration-500 text-white font-bold rounded cursor-pointer">
              SUBSCRIBE
            </button> */}
            <button className="font-poppins font-medium leading-6 tracking-normal border-b outline-none  border-primary-color ml-0 lg:ml-6 mb-6 lg:mb-0">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <div className="pt-6 border-t border-gray-300 text-sm text-center lg:text-left">
        {YEAR} {APP_NAME}. All rights reserved
      </div>
    </div>
  );
}
