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
  const {
    content,
    partners,
    sponsors,
    testimonials,
    sec6s,
    sec7s,
    sec8s,
    candidates_images
  } = data;

  useEffect(() => {
    console.log("Home Console");
  }, []);

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
          <Banner
            data={banner}
            content={content}
            candidates_images={candidates_images}
          />
          <Brands partners={partners} />
          <Steps content={content} />
          <Journey
            data={journey}
            content={content}
            sec7s={sec7s}
            sec8s={sec8s}
          />
          <Categories data={categories} content={content} sec6s={sec6s} />
          <Sponsor content={content} sponsors={sponsors} />
          <Folio data={folio} content={content} testimonials={testimonials} />
        </>
      )}
    </>
  );
};

export default Home;
