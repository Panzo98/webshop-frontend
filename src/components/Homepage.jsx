import React from "react";
import { useDispatch, useSelector } from "react-redux";

const dispatch = useDispatch();
const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
console.log(isLoggedIn);
export default function Homepage() {
  return <div>Homepage</div>;
}
