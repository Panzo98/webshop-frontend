import React from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { APP_NAME } from "@/assets/appVariables";

export default function Navbar({ isCartOpen, setIsCartOpen }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  const cart = useSelector((state) => state.cartReducer.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const check = async () => {
  //   try {
  //     let response = await axios.get(`${process.env.API_URL}/users/check`, {
  //       headers: { Authorization: localStorage.getItem("token") },
  //     });
  //     dispatch({ type: "USER_LOGIN", payload: response.data.user });
  //   } catch (error) {
  //     handleLogOut();
  //     localStorage.removeItem("token");
  //   }
  // };

  // const handleLogOut = () => {
  //   dispatch({ type: "USER_LOGOUT" });
  // };

  useEffect(() => {
    // check();
  }, []);

  return (
    <div className="flex grow py-7 px-14 shadow justify-between bg-white items-center fixed w-full z-50 top-0">
      <div>
        <Link href="/" className="text-4xl font-bold">
          {APP_NAME}
        </Link>
      </div>
      <div className="text-base hidden lg:w-1/4 md:w-1/2 lg:flex justify-between">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="w-1/12 justify-center flex">
        <Link href={isLoggedIn ? "/profile" : "/login"}>
          {/* Ikonu za profil / login  */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            className="cursor-pointer hidden lg:flex"
            fill="none"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <circle cx="12" cy="6" r="4" fill="#000000" />
              <path
                d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
                fill="#000000"
              />
            </g>
          </svg>
        </Link>

        <div
          id="navMenu"
          className={`lg:hidden flex flex-col ${
            isMenuOpen ? "active" : ""
          } cursor-pointer`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`w-[32px] h-[3px] rounded-full bg-black transition-all duration-600 ease-in-out transform ${
              isMenuOpen ? "translate-y-[3px] rotate-45 scale-x-1.41" : ""
            }`}
          ></span>
          <span
            className={`w-[32px] h-[3px] rounded-full bg-black my-1 transition-all duration-600 ease-in-out ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-[32px] h-[3px] rounded-full bg-black transition-all duration-600 ease-in-out transform ${
              isMenuOpen ? "translate-y-[-11px] -rotate-45 scale-x-1.41" : ""
            }`}
          ></span>
        </div>

        <div className="relative">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className="cursor-pointer hidden lg:flex"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            {/* Ikonu za korpu */}
            <path
              d="M25.2355 19.1926H8.95234L9.76991 17.5273L23.3543 17.5027C23.8137 17.5027 24.2074 17.1746 24.2894 16.7207L26.1707 6.19062C26.2199 5.91445 26.1461 5.63008 25.9656 5.41406C25.8764 5.30775 25.7652 5.22211 25.6396 5.16309C25.514 5.10407 25.377 5.07308 25.2383 5.07227L7.95702 5.01484L7.80937 4.32031C7.7164 3.87734 7.31718 3.55469 6.86328 3.55469H2.63867C2.38267 3.55469 2.13716 3.65638 1.95614 3.8374C1.77513 4.01841 1.67343 4.26393 1.67343 4.51992C1.67343 4.77592 1.77513 5.02143 1.95614 5.20245C2.13716 5.38346 2.38267 5.48516 2.63867 5.48516H6.08124L6.72656 8.55312L8.31523 16.2449L6.26992 19.5836C6.1637 19.727 6.09972 19.8972 6.08523 20.075C6.07073 20.2528 6.10629 20.4312 6.18788 20.5898C6.35195 20.9152 6.68281 21.1203 7.04921 21.1203H8.7664C8.40032 21.6065 8.20258 22.1988 8.20312 22.8074C8.20312 24.3551 9.46093 25.6129 11.0086 25.6129C12.5562 25.6129 13.8141 24.3551 13.8141 22.8074C13.8141 22.1977 13.6117 21.6043 13.2508 21.1203H17.6559C17.2898 21.6065 17.092 22.1988 17.0926 22.8074C17.0926 24.3551 18.3504 25.6129 19.898 25.6129C21.4457 25.6129 22.7035 24.3551 22.7035 22.8074C22.7035 22.1977 22.5012 21.6043 22.1402 21.1203H25.2383C25.7687 21.1203 26.2035 20.6883 26.2035 20.1551C26.2019 19.8994 26.0993 19.6546 25.9179 19.4743C25.7366 19.294 25.4913 19.1927 25.2355 19.1926ZM8.35898 6.91797L24.1035 6.96992L22.5613 15.6051L10.1937 15.627L8.35898 6.91797ZM11.0086 23.6715C10.5328 23.6715 10.1445 23.2832 10.1445 22.8074C10.1445 22.3316 10.5328 21.9434 11.0086 21.9434C11.4844 21.9434 11.8726 22.3316 11.8726 22.8074C11.8726 23.0366 11.7816 23.2564 11.6196 23.4184C11.4575 23.5805 11.2378 23.6715 11.0086 23.6715ZM19.898 23.6715C19.4223 23.6715 19.034 23.2832 19.034 22.8074C19.034 22.3316 19.4223 21.9434 19.898 21.9434C20.3738 21.9434 20.7621 22.3316 20.7621 22.8074C20.7621 23.0366 20.6711 23.2564 20.509 23.4184C20.347 23.5805 20.1272 23.6715 19.898 23.6715Z"
              fill="black"
            />
          </svg>
          {cart.length > 0 && (
            <span
              className="absolute w-4 h-4 rounded-full bg-red-600 hidden lg:flex justify-center items-center text-white text-[8px] font-extrabold -top-1 right-0 select-none cursor-pointer"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              {cart.length}
            </span>
          )}
        </div>
      </div>
      {/* Collapsible menu */}
      {isMenuOpen && (
        <div className="lg:hidden  bg-white w-48 py-2 px-4 shadow">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </div>
  );
}
