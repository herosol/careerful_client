import React from "react";
import Data from "../../dummy";
import Banner from "./Banner";
import Brands from "./Brands";
import Steps from "./Steps";
// import Intro from "./Intro";
import Journey from "./Journey";
import Categories from "../../common/Categories";
import Sponsor from "./Sponsor";
import Folio from "./Folio";

const Home = () => {
  const { banner, brands, steps, journey, categories, sponsor, folio } =
    Data.home;
  return (
    <>
      <Banner data={banner} />
      <Brands data={brands} />
      <Steps data={steps} />
      {/* <Intro data={intro} /> */}
      <Journey data={journey} />
      <Categories data={categories} />
      <Sponsor data={sponsor} />
      <Folio data={folio} />
    </>
  );
};

export default Home;
