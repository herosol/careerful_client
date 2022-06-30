import React, { useEffect } from "react";
import Data from "../../dummy";
import Register from "./Register";
import { ToastContainer } from "react-toastify";

import {
  createAccount,
  fetchSignup
} from "../../../states/actions/fetchSignup";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";

const Signup = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchSignup.content);
  const isLoading = useSelector((state) => state.fetchSignup.isLoading);
  const isFormProcessing = useSelector(
    (state) => state.fetchSignup.isFormProcessing
  );
  const { content } = data;

  useEffect(() => {
    dispatch(fetchSignup());
  }, []);

  const handleSubmitAction = (formData) => {
    dispatch(createAccount(formData));
  };

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <ToastContainer />
          <Register
            data={Data.signup}
            content={content}
            handleSubmitAction={handleSubmitAction}
            isFormProcessing={isFormProcessing}
          />
        </>
      )}
    </>
  );
};

export default Signup;
