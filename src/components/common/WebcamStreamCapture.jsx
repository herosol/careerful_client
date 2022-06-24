import React, { useRef, useState, useCallback, useEffect } from "react";
import Webcam from "react-webcam";
import httpBlob from "../../helpers/http-blob";

const WebcamStreamCapture = ({ questionNo }) => {
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

  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm"
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.target = "_blank";
      a.download = `question-${questionNo}.webm`;
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  useEffect(() => {
    let videoFile = new File([recordedChunks], `question-${questionNo}.mp4`, {
      lastModified: new Date().getTime(),
      type: "video/mp4"
    });
    console.log(videoFile);
    const formData = new FormData();
    formData.append("video", videoFile);
    formData.append("questionNo", questionNo);
    httpBlob
      .post("/test", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
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
      {recordedChunks.length > 0 && (
        <button type="button" onClick={handleDownload}>
          Download
        </button>
      )}
    </>
  );
};

export default WebcamStreamCapture;
