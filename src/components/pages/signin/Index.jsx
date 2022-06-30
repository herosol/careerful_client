import React, { useEffect } from "react";
import Data from "../../dummy";
import Logon from "./Logon";
import { ToastContainer } from "react-toastify";

import { signin, fetchSignin } from "../../../states/actions/fetchSignin";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";

const Signin = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchSignin.content);
  const isLoading = useSelector((state) => state.fetchSignin.isLoading);
  const isFormProcessing = useSelector(
    (state) => state.fetchSignin.isFormProcessing
  );
  const { content } = data;

  useEffect(() => {
    dispatch(fetchSignin());
  }, []);

  const handleSignin = (formData) => {
    dispatch(signin(formData));
  };

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <ToastContainer />
          <Logon
            data={Data.signin}
            content={content}
            isFormProcessing={isFormProcessing}
            handleSignin={handleSignin}
          />
        </>
      )}
    </>
  );
};

export default Signin;
