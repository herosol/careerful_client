import React, { useEffect } from "react";
import Data from "../../dummy";
import Settings from "./Settings";

import {
  fetchProfileSettings,
  saveProfileSettingsAction,
  changePasswordAction
} from "../../../states/actions/fetchProfileSettings";
import { useSelector, useDispatch } from "react-redux";
import LoadingScreen from "../../common/LoadingScreen";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import { ToastContainer } from "react-toastify";

const Profile = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchProfileSettings.content);
  const isLoading = useSelector(
    (state) => state.fetchProfileSettings.isLoading
  );
  const isFormProcessing = useSelector(
    (state) => state.fetchProfileSettings.isFormProcessing
  );
  const isPassChangeProcessing = useSelector(
    (state) => state.fetchProfileSettings.isPassChangeProcessing
  );
  const mem = useSelector((state) => state.fetchProfileSettings.mem);
  useEffect(() => {
    dispatch(fetchProfileSettings());
  }, []);

  const saveProfileSettings = (formData) => {
    dispatch(saveProfileSettingsAction(formData));
  };

  const changePassword = (formData) => {
    dispatch(changePasswordAction(formData));
  };

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <ToastContainer />
          <Settings
            data={Data.settings}
            mem={mem}
            isFormProcessing={isFormProcessing}
            saveProfileSettings={saveProfileSettings}
            changePassword={changePassword}
            isPassChangeProcessing={isPassChangeProcessing}
          />
        </>
      )}
    </>
  );
};
export default Profile;
