import React, { useEffect } from "react";
import Data from "../../dummy";
import PageIntro from "../../common/PageIntro";
import Vision from "./Vision";
import Faqs from "./Faqs";
import Companies from "../../common/Companies";
import Strip from "../../common/Strip";

import { fetchWorkWithUs } from "../../../states/actions/fetchWorkWithUs";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";

const Work = () => {
  const { page_intro, vision, faq, strip } = Data.work;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchWorkWithUs.content);
  const isLoading = useSelector((state) => state.fetchWorkWithUs.isLoading);
  const { content, faqs, companies } = data;

  useEffect(() => {
    dispatch(fetchWorkWithUs());
  }, []);

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <PageIntro data={page_intro} content={content} />
          <Vision data={vision} content={content} />
          <Faqs data={faq} faqs={faqs} content={content} />
          <Companies content={content} companies={companies} />
          <Strip data={strip} content={content} />
        </>
      )}
    </>
  );
};
export default Work;
