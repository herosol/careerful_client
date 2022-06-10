import React, { useEffect } from "react";
import Data from "../../dummy";
import Cover from "../../common/Cover";
import TermsConditions from "./TermsConditions";

import { fetchTerms } from "../../../states/actions/fetchTerms";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";

const Terms = () => {
  const { cover } = Data.terms;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchTerms.content);
  const isLoading = useSelector((state) => state.fetchTerms.isLoading);
  const { content } = data;

  useEffect(() => {
    dispatch(fetchTerms());
  }, []);

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Cover data={cover} content={content} />
          <TermsConditions content={content} />
        </>
      )}
    </>
  );
};

export default Terms;
