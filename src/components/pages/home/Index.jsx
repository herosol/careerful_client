import React, { useEffect } from "react";
import Data from "../../dummy";
import Banner from "./Banner";
import Brands from "./Brands";
import Steps from "./Steps";
// import Intro from "./Intro";
import Journey from "./Journey";
import Categories from "../../common/Categories";
import Sponsor from "./Sponsor";
import Folio from "./Folio";

import { fetchHome } from "../../../states/actions/fetchHome";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";

const Home = () => {
  const { banner, brands, steps, journey, categories, sponsor, folio } =
    Data.home;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchHome.content);
  const isLoading = useSelector((state) => state.fetchHome.isLoading);
  const { content, partners, sponsors, testimonials } = data;

  useEffect(() => {
    dispatch(fetchHome());
  }, []);

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Banner data={banner} />
          <Brands partners={partners} />
          <Steps content={content} />
          <Journey data={journey} content={content} />
          <Categories data={categories} content={content} />
          <Sponsor content={content} sponsors={sponsors} />
          <Folio data={folio} content={content} testimonials={testimonials} />
        </>
      )}
    </>
  );
};

export default Home;
