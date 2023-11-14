import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function index() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn]);
  return (
    <div>
      <button onClick={() => dispatch({ type: "USER_LOGOUT" })}>LOGOUT</button>
    </div>
  );
}
