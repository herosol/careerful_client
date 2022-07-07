import React, { useEffect } from "react";
import Data from "../../dummy";
import PageIntro from "../../common/PageIntro";
import Vision from "./Vision";
import Faqs from "./Faqs";
import Companies from "../../common/Companies";
import Strip from "../../common/Strip";

import { fetchPartnerWithUs } from "../../../states/actions/fetchPartnerWithUs";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";

const Partner = () => {
  const { page_intro, vision, faq, strip } = Data.partner;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchPartnerWithUs.content);
  const isLoading = useSelector((state) => state.fetchPartnerWithUs.isLoading);
  const { content, faqs, companies } = data;

  useEffect(() => {
    dispatch(fetchPartnerWithUs());
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
          <Companies companies={companies} content={content} />
          <Strip data={strip} content={content} />
        </>
      )}
    </>
  );
};
export default Partner;
