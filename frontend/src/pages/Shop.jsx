import React from "react";
import Hero from "../components/Hero/Hero";
import NewCollections from "../components/NewCollections/NewCollections";
import Offers from "../components/offers/Offers";
import Popular from "../components/popular/Popular";
import NewsLetter from "../components/NewsLetter/NewsLetter";
const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};
export default Shop;
