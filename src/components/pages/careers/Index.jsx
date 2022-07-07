import React, { useEffect } from "react";
import Data from "../../dummy";
import CareerPath from "./CareerPath";
import Vision from "./Vision";
import Strip from "./Strip";
import WorkAnalys from "./WorkAnalys";

import { fetchCareers } from "../../../states/actions/fetchCareers";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";

const Careers = () => {
  const { career_path, vision, work_analys, strip } = Data.careers;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchCareers.content);
  const isLoading = useSelector((state) => state.fetchCareers.isLoading);
  const { content } = data;

  useEffect(() => {
    dispatch(fetchCareers());
  }, []);

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <CareerPath data={career_path} content={content} />
          <Vision data={vision} content={content} />
          <Strip data={strip} content={content} />
          <WorkAnalys data={work_analys} content={content} />
        </>
      )}
    </>
  );
};

export default Careers;
