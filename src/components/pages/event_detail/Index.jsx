import React, { useEffect } from "react";
import Data from "../../dummy";
import Detail from "./Detail";
import { useParams } from "react-router-dom";

import { fetchEventDetail } from "../../../states/actions/fetchEventDetail";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";

const EventDetail = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchEventDetail.content);
  const isLoading = useSelector((state) => state.fetchEventDetail.isLoading);
  const { event } = data;

  useEffect(() => {
    dispatch(fetchEventDetail(id));
  }, []);

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Detail data={Data.event_detail} show={props.popup} event={event} />
        </>
      )}
    </>
  );
};

export default EventDetail;
