import React, { useEffect } from "react";
import Data from "../../dummy";
import JobsIntro from "./JobsIntro";
import JobProfileList from "./JobProfileList";
// import Categories from "../../common/Categories";
import { fetchJobProfile } from "../../../states/actions/fetchJobProfile";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";

const JobProfile = () => {
  const { intro, list } = Data.job_profile;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchJobProfile.content);
  const isLoading = useSelector((state) => state.fetchJobProfile.isLoading);
  const { content, faqs } = data;

  useEffect(() => {
    dispatch(fetchJobProfile());
  }, []);

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <JobsIntro content={content} />
          <JobProfileList data={list} />
          {/* <Categories data={categories} /> */}
        </>
      )}
    </>
  );
};

export default JobProfile;
