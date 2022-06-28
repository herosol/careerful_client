import React, { useEffect } from "react";
import Data from "../../dummy";
import Interview from "./Interview";
import httpBlob from "../../../helpers/http-blob";

import {
  saveVideoStep,
  finishInterview
} from "../../../states/actions/fetchVideoInterview";
import { useDispatch, useSelector } from "react-redux";

const VideoInterview = () => {
  const dispatch = useDispatch();

  const saveVideo = (formData) => {
    dispatch(saveVideoStep(formData));
  };

  const handleFinishProcess = (formData) => {
    dispatch(finishInterview(formData));
  };

  useEffect(() => {
    localStorage.setItem("interview_session_id", "");
  }, []);

  return (
    <>
      <Interview
        data={Data.interview}
        saveVideo={saveVideo}
        handleFinishProcess={handleFinishProcess}
      />
    </>
  );
};

export default VideoInterview;
