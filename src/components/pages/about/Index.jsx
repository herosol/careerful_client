import React, { useEffect } from "react";
import Data from "../../dummy";
// import PageIntro from "../../common/PageIntro";
import WorkWithUs from "../../common/WorkWithUs";
import Vision from "../../common/Vision";
import Faqs from "./Faqs";
import ContactUs from "../../common/ContactUs";
import { ToastContainer } from "react-toastify";

import {
  fetchAboutUs,
  saveContact
} from "../../../states/actions/fetchAboutUs";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";

const About = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchAboutUs.content);
  const isLoading = useSelector((state) => state.fetchAboutUs.isLoading);
  const { content, faqs } = data;

  useEffect(() => {
    dispatch(fetchAboutUs());
  }, []);

  const handleContactSubmit = (formData) => {
    dispatch(saveContact(formData));
  };

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <ToastContainer />
          <WorkWithUs content={content} />
          <Vision content={content} />
          <Faqs content={content} faqs={faqs} />
          <ContactUs
            content={content}
            handleContactSubmit={handleContactSubmit}
          />
        </>
      )}
    </>
  );
};

export default About;
