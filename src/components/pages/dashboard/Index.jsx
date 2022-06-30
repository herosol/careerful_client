import React, { useEffect } from "react";
import Data from "../../dummy";
import Account from "./Account";

import { fetchDashboard } from "../../../states/actions/fetchDashboard";
import { useSelector, useDispatch } from "react-redux";
import LoadingScreen from "../../common/LoadingScreen";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import { ToastContainer } from "react-toastify";

const Dashboard = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchDashboard.content);
  const isLoading = useSelector((state) => state.fetchDashboard.isLoading);
  const jobs = useSelector((state) => state.fetchDashboard.jobs);
  useEffect(() => {
    dispatch(fetchDashboard());
  }, []);

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <ToastContainer />
          <Account data={Data.dashboard} jobs={jobs} />
        </>
      )}
    </>
  );
};

export default Dashboard;
