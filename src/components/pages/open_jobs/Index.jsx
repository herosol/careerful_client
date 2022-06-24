import React, { useEffect } from "react";
import Data from "../../dummy";
import JobList from "./JobList";

import { fetchJobs, searchJobsData } from "../../../states/actions/fetchJobs";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";

const OpenJobs = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchJobs.content);
  const isLoading = useSelector((state) => state.fetchJobs.isLoading);
  const isSearching = useSelector((state) => state.fetchJobs.isSearching);
  const jobs = useSelector((state) => state.fetchJobs.jobs);
  const { content, cities, cats, types, degree_req } = data;
  useEffect(() => {
    dispatch(fetchJobs());
  }, []);

  //   useEffect(() => {
  //     console.log(data);
  //   }, [data]);
  const searchJobs = (filters) => {
    dispatch(searchJobsData(filters));
  };

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <JobList
            data={Data.open_jobs}
            jobs={jobs}
            cities={cities}
            cats={cats}
            types={types}
            degree_req={degree_req}
            searchJobs={searchJobs}
            isSearching={isSearching}
          />
        </>
      )}
    </>
  );
};

export default OpenJobs;
