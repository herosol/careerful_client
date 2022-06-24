import React, { useEffect } from "react";
import Data from "../../dummy";
import Cover from "../../common/Cover";
import Accordion from "./Accordion";

import { fetchFaq } from "../../../states/actions/fetchFaq";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";

const Faq = () => {
  const { cover, accordion } = Data.faq;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchFaq.content);
  const isLoading = useSelector((state) => state.fetchFaq.isLoading);
  const { content, faqs } = data;

  useEffect(() => {
    dispatch(fetchFaq());
  }, []);

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Cover data={cover} content={content} />
          <Accordion data={accordion} faqs={faqs} />
        </>
      )}
    </>
  );
};

export default Faq;
