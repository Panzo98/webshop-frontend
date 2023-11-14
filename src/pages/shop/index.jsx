import Filter from "@/components/Filter";
import ListOfProducts from "@/components/ListOfProducts";
import ShopBanner from "@/components/ShopBanner";
import ShopFeaturesBanner from "@/components/ShopFeaturesBanner";
import React from "react";

export default function index() {
  return (
    <div>
      <ShopBanner />
      <Filter />
      <ListOfProducts />
      <ShopFeaturesBanner />
    </div>
  );
}
