import React, { useEffect } from "react";
import Data from "../../dummy";
import Cover from "../../common/Cover";
import PrivacyPolicy from "./PrivacyPolicy";

import { fetchPrivacy } from "../../../states/actions/fetchPrivacy";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";

const Privacy = () => {
  const { cover } = Data.privacy;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchPrivacy.content);
  const isLoading = useSelector((state) => state.fetchPrivacy.isLoading);
  const { content } = data;

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  useEffect(() => {
    dispatch(fetchPrivacy());
  }, []);

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Cover data={cover} content={content} />
          <PrivacyPolicy content={content} />
        </>
      )}
    </>
  );
};

export default Privacy;
