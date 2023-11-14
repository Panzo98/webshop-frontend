import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import ShareYourSetup from "@/components/ShareYourSetup";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function index() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_CART_FROM_LOCALSTORAGE" });
  }, []);

  return (
    <div>
      <Banner />
      <Categories />
      <Products />
      <ShareYourSetup />
    </div>
  );
}
