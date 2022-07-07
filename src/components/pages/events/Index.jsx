import React, { useEffect } from "react";
import Data from "../../dummy";
import AllEvents from "./AllEvents";

import { fetchEvents } from "../../../states/actions/fetchEvents";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";

const Events = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchEvents.content);
  const isLoading = useSelector((state) => state.fetchEvents.isLoading);
  const isSearching = useSelector((state) => state.fetchEvents.isSearching);
  const events = useSelector((state) => state.fetchEvents.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <AllEvents data={Data.events} events={events} />
        </>
      )}
    </>
  );
};

export default Events;
