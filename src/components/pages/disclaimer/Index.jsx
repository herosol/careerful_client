import React, { useEffect } from "react";
import Data from "../../dummy";
import Cover from "../../common/Cover";
import Disclaimer from "./Disclaimer";

import { fetchDisclaimer } from "../../../states/actions/fetchDisclaimer";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";

const Disclaim = () => {
  const { cover } = Data.disclaim;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchDisclaimer.content);
  const isLoading = useSelector((state) => state.fetchDisclaimer.isLoading);
  const { content } = data;

  useEffect(() => {
    dispatch(fetchDisclaimer());
  }, []);

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Cover data={cover} content={content} />
          <Disclaimer content={content} />
        </>
      )}
    </>
  );
};

export default Disclaim;
