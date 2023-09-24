import React from "react";
import ProductsDisplay from "../../components/product/products";
import Slider from "../../components/slider/Slider";

export const Home = () => {
  return (
    <div>
      {" "}
      <Slider />
      <ProductsDisplay />
    </div>
  );
};
