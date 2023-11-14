import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { API_URL } from "@/assets/appVariables";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [repassword, setRepassword] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePassword1, setHidePassword1] = useState(true);
  const Register = async (e) => {
    e.preventDefault();
    //TODO provjera polja
    try {
      let response = await axios.post(`${API_URL}/users/create-new-user`, {
        username,
        password,
        repassword,
        name,
        surname,
        email,
        storeId: 1,
      });
      alert(response.data.message);
      dispatch({ type: "USER_LOGIN", payload: response.data.user });
      localStorage.setItem("token", response.data.token);
      router.push("/");
    } catch (error) {
      alert(error.response.data.error);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="min-h-[calc(100vh-6rem)] items-center justify-center flex">
      <form
        className="flex flex-col items-center shadow-xl border-[#00000010] border px-9 py-12 rounded-xl md:w-[400px] w-11/12 my-4"
        onSubmit={Register}
      >
        <h3 className="outline-none border-none leading-4 text-2xl font-bold">
          Register Here
        </h3>
        <label className="color-[#080710] mt-3 self-start">Name</label>
        <input
          value={name}
          className="h-12 w-full rounded px-2 mt-2 text-sm font-light outline-1 outline-black border  border-[#00000036]"
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        ></input>
        <label className="color-[#080710] mt-3 self-start">Surname</label>
        <input
          value={surname}
          className="h-12 w-full rounded px-2 mt-2 text-sm font-light outline-1 outline-black border  border-[#00000036]"
          onChange={(e) => setSurname(e.target.value)}
          type="text"
          placeholder="Surname"
        ></input>
        <label className="color-[#080710] mt-3 self-start">Username*</label>
        <input
          value={username}
          className="h-12 w-full rounded px-2 mt-2 text-sm font-light outline-1 outline-black border  border-[#00000036]"
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Email or Username"
          onKeyDown={handleKeyPress}
        ></input>
        <label className="color-[#080710] mt-3 self-start">Password*</label>
        <div className="w-full flex flex-col -mb-5">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 w-full rounded px-2 mt-2 text-sm font-light outline-1 outline-black border  border-[#00000036]"
            type={hidePassword ? "password" : "text"}
            placeholder="Password"
          ></input>

          <svg
            width="26"
            height="20"
            onClick={() => setHidePassword(!hidePassword)}
            className="relative self-end right-4 opacity-[0.20] hover:opacity-100 transition duration-500 -top-9 w-7 h-5 cursor-pointer"
          >
            {!hidePassword ? (
              <path
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.30147 15.5771C4.77832 14.2684 3.6904 12.7726 3.18002 12C3.6904 11.2274 4.77832 9.73158 6.30147 8.42294C7.87402 7.07185 9.81574 6 12 6C14.1843 6 16.1261 7.07185 17.6986 8.42294C19.2218 9.73158 20.3097 11.2274 20.8201 12C20.3097 12.7726 19.2218 14.2684 17.6986 15.5771C16.1261 16.9282 14.1843 18 12 18C9.81574 18 7.87402 16.9282 6.30147 15.5771ZM12 4C9.14754 4 6.75717 5.39462 4.99812 6.90595C3.23268 8.42276 2.00757 10.1376 1.46387 10.9698C1.05306 11.5985 1.05306 12.4015 1.46387 13.0302C2.00757 13.8624 3.23268 15.5772 4.99812 17.0941C6.75717 18.6054 9.14754 20 12 20C14.8525 20 17.2429 18.6054 19.002 17.0941C20.7674 15.5772 21.9925 13.8624 22.5362 13.0302C22.947 12.4015 22.947 11.5985 22.5362 10.9698C21.9925 10.1376 20.7674 8.42276 19.002 6.90595C17.2429 5.39462 14.8525 4 12 4ZM10 12C10 10.8954 10.8955 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8955 14 10 13.1046 10 12ZM12 8C9.7909 8 8.00004 9.79086 8.00004 12C8.00004 14.2091 9.7909 16 12 16C14.2092 16 16 14.2091 16 12C16 9.79086 14.2092 8 12 8Z"
              />
            ) : (
              <path
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L14.032 8.55382C13.4365 8.20193 12.7418 8 12 8C9.79086 8 8 9.79086 8 12C8 12.7418 8.20193 13.4365 8.55382 14.032L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L9.96803 15.4462C10.5635 15.7981 11.2582 16 12 16C14.2091 16 16 14.2091 16 12C16 11.2582 15.7981 10.5635 15.4462 9.96803L19.7071 5.70711ZM12.518 10.0677C12.3528 10.0236 12.1792 10 12 10C10.8954 10 10 10.8954 10 12C10 12.1792 10.0236 12.3528 10.0677 12.518L12.518 10.0677ZM11.482 13.9323L13.9323 11.482C13.9764 11.6472 14 11.8208 14 12C14 13.1046 13.1046 14 12 14C11.8208 14 11.6472 13.9764 11.482 13.9323ZM15.7651 4.8207C14.6287 4.32049 13.3675 4 12 4C9.14754 4 6.75717 5.39462 4.99812 6.90595C3.23268 8.42276 2.00757 10.1376 1.46387 10.9698C1.05306 11.5985 1.05306 12.4015 1.46387 13.0302C1.92276 13.7326 2.86706 15.0637 4.21194 16.3739L5.62626 14.9596C4.4555 13.8229 3.61144 12.6531 3.18002 12C3.6904 11.2274 4.77832 9.73158 6.30147 8.42294C7.87402 7.07185 9.81574 6 12 6C12.7719 6 13.5135 6.13385 14.2193 6.36658L15.7651 4.8207ZM12 18C11.2282 18 10.4866 17.8661 9.78083 17.6334L8.23496 19.1793C9.37136 19.6795 10.6326 20 12 20C14.8525 20 17.2429 18.6054 19.002 17.0941C20.7674 15.5772 21.9925 13.8624 22.5362 13.0302C22.947 12.4015 22.947 11.5985 22.5362 10.9698C22.0773 10.2674 21.133 8.93627 19.7881 7.62611L18.3738 9.04043C19.5446 10.1771 20.3887 11.3469 20.8201 12C20.3097 12.7726 19.2218 14.2684 17.6986 15.5771C16.1261 16.9282 14.1843 18 12 18Z"
              />
            )}
          </svg>
        </div>
        <label className="color-[#080710] mt-3 self-start">
          Repeat Password*
        </label>
        <div className="w-full flex flex-col -mb-5">
          <input
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
            className="h-12 w-full rounded px-2 mt-2 text-sm font-light outline-1 outline-black border  border-[#00000036]"
            type={hidePassword1 ? "password" : "text"}
            placeholder="Repeat Password"
          ></input>
          <svg
            width="26"
            height="20"
            onClick={() => setHidePassword1(!hidePassword1)}
            className="relative self-end right-4 opacity-[0.20] hover:opacity-100 transition duration-500 -top-9 w-7 h-5 cursor-pointer"
          >
            {!hidePassword1 ? (
              <path
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.30147 15.5771C4.77832 14.2684 3.6904 12.7726 3.18002 12C3.6904 11.2274 4.77832 9.73158 6.30147 8.42294C7.87402 7.07185 9.81574 6 12 6C14.1843 6 16.1261 7.07185 17.6986 8.42294C19.2218 9.73158 20.3097 11.2274 20.8201 12C20.3097 12.7726 19.2218 14.2684 17.6986 15.5771C16.1261 16.9282 14.1843 18 12 18C9.81574 18 7.87402 16.9282 6.30147 15.5771ZM12 4C9.14754 4 6.75717 5.39462 4.99812 6.90595C3.23268 8.42276 2.00757 10.1376 1.46387 10.9698C1.05306 11.5985 1.05306 12.4015 1.46387 13.0302C2.00757 13.8624 3.23268 15.5772 4.99812 17.0941C6.75717 18.6054 9.14754 20 12 20C14.8525 20 17.2429 18.6054 19.002 17.0941C20.7674 15.5772 21.9925 13.8624 22.5362 13.0302C22.947 12.4015 22.947 11.5985 22.5362 10.9698C21.9925 10.1376 20.7674 8.42276 19.002 6.90595C17.2429 5.39462 14.8525 4 12 4ZM10 12C10 10.8954 10.8955 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8955 14 10 13.1046 10 12ZM12 8C9.7909 8 8.00004 9.79086 8.00004 12C8.00004 14.2091 9.7909 16 12 16C14.2092 16 16 14.2091 16 12C16 9.79086 14.2092 8 12 8Z"
              />
            ) : (
              <path
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L14.032 8.55382C13.4365 8.20193 12.7418 8 12 8C9.79086 8 8 9.79086 8 12C8 12.7418 8.20193 13.4365 8.55382 14.032L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L9.96803 15.4462C10.5635 15.7981 11.2582 16 12 16C14.2091 16 16 14.2091 16 12C16 11.2582 15.7981 10.5635 15.4462 9.96803L19.7071 5.70711ZM12.518 10.0677C12.3528 10.0236 12.1792 10 12 10C10.8954 10 10 10.8954 10 12C10 12.1792 10.0236 12.3528 10.0677 12.518L12.518 10.0677ZM11.482 13.9323L13.9323 11.482C13.9764 11.6472 14 11.8208 14 12C14 13.1046 13.1046 14 12 14C11.8208 14 11.6472 13.9764 11.482 13.9323ZM15.7651 4.8207C14.6287 4.32049 13.3675 4 12 4C9.14754 4 6.75717 5.39462 4.99812 6.90595C3.23268 8.42276 2.00757 10.1376 1.46387 10.9698C1.05306 11.5985 1.05306 12.4015 1.46387 13.0302C1.92276 13.7326 2.86706 15.0637 4.21194 16.3739L5.62626 14.9596C4.4555 13.8229 3.61144 12.6531 3.18002 12C3.6904 11.2274 4.77832 9.73158 6.30147 8.42294C7.87402 7.07185 9.81574 6 12 6C12.7719 6 13.5135 6.13385 14.2193 6.36658L15.7651 4.8207ZM12 18C11.2282 18 10.4866 17.8661 9.78083 17.6334L8.23496 19.1793C9.37136 19.6795 10.6326 20 12 20C14.8525 20 17.2429 18.6054 19.002 17.0941C20.7674 15.5772 21.9925 13.8624 22.5362 13.0302C22.947 12.4015 22.947 11.5985 22.5362 10.9698C22.0773 10.2674 21.133 8.93627 19.7881 7.62611L18.3738 9.04043C19.5446 10.1771 20.3887 11.3469 20.8201 12C20.3097 12.7726 19.2218 14.2684 17.6986 15.5771C16.1261 16.9282 14.1843 18 12 18Z"
              />
            )}
          </svg>
        </div>
        <label className="color-[#080710] mt-3 self-start">E-Mail*</label>
        <input
          value={email}
          className="h-12 w-full rounded px-2 mt-2 text-sm font-light outline-1 outline-black border  border-[#00000036]"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="E-Mail"
          onKeyDown={handleKeyPress}
        ></input>
        <label className="color-[#080710] mt-3 self-start">Phone Number</label>
        <input
          value={phoneNumber}
          className="h-12 w-full rounded px-2 mt-2 text-sm font-light outline-1 outline-black border  border-[#00000036]"
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="text"
          placeholder="Phone Number"
        ></input>
        <button className="mt-5 w-full bg-primary-color hover:bg-primary-hover-color active:bg-primary-active-color transition duration-500 text-white py-4 text-lg font-bold rounded cursor-pointer">
          Sign Up
        </button>
        <div className="mt-7 flex">
          <span className="text-sm text-[#000000cc]">
            Already have an account?
            <Link
              href="/login"
              className="font-bold underline underline-offset-2 text-black"
            >
              {" "}
              Login here
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}
