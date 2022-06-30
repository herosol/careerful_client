import React, { useEffect } from "react";
import Data from "../../dummy";
import JobList from "./JobList";

import {
  fetchJobs,
  searchJobsData,
  saveJobAction
} from "../../../states/actions/fetchJobs";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";
import { ToastContainer } from "react-toastify";

const OpenJobs = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchJobs.content);
  const isLoading = useSelector((state) => state.fetchJobs.isLoading);
  const isSearching = useSelector((state) => state.fetchJobs.isSearching);
  const isJobSaving = useSelector((state) => state.fetchJobs.isJobSaving);
  const jobs = useSelector((state) => state.fetchJobs.jobs);
  const { content, cities, cats, types, degree_req } = data;
  useEffect(() => {
    dispatch(fetchJobs());
  }, []);

  const searchJobs = (filters) => {
    dispatch(searchJobsData(filters));
  };

  const saveJob = (formData) => {
    dispatch(saveJobAction(formData));
  };

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <ToastContainer />
          <JobList
            data={Data.open_jobs}
            jobs={jobs}
            cities={cities}
            cats={cats}
            types={types}
            degree_req={degree_req}
            searchJobs={searchJobs}
            isSearching={isSearching}
            saveJob={saveJob}
            isJobSaving={isJobSaving}
          />
        </>
      )}
    </>
  );
};

export default OpenJobs;
