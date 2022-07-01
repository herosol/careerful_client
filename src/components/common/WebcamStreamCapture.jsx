import React, { useRef, useState, useCallback, useEffect } from "react";
import Webcam from "react-webcam";

const WebcamStreamCapture = ({ questionNo, saveVideo }) => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm"
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  // const handleDownload = useCallback(() => {
  //   if (recordedChunks.length) {
  //     const blob = new Blob(recordedChunks, {
  //       type: "video/webm"
  //     });
  //     const url = URL.createObjectURL(blob);
  //     const a = document.createElement("a");
  //     document.body.appendChild(a);
  //     a.style = "display: none";
  //     a.href = url;
  //     a.target = "_blank";
  //     a.download = `question-${questionNo}.webm`;
  //     a.click();
  //     window.URL.revokeObjectURL(url);
  //     setRecordedChunks([]);
  //   }
  // }, [recordedChunks]);

  useEffect(() => {
    if (recordedChunks.length) {
      let videoFile = new File([recordedChunks], `question-${questionNo}.mp4`, {
        lastModified: new Date().getTime(),
        type: "video/mp4"
      });

      const formData = new FormData();
      formData.append(
        "interview_session_id",
        localStorage.getItem("interview_session_id")
      );
      formData.append("video", videoFile);
      formData.append("questionNo", questionNo);
      formData.append("authToken", localStorage.getItem("authToken"));
      // console.log(formData);
      // console.log(videoFile);
      saveVideo(formData);
    }
  }, [recordedChunks]);

  return (
    <>
      <Webcam audio={true} ref={webcamRef} />
      {capturing ? (
        <button type="button" onClick={handleStopCaptureClick}>
          Stop Capture
        </button>
      ) : (
        <button type="button" onClick={handleStartCaptureClick}>
          Start Capture
        </button>
      )}
    </>
  );
};

export default WebcamStreamCapture;
