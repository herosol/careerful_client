import React from "react";

const FormProcessingSpinner = ({ isFormProcessing }) => {
  return (
    <>
      <i className={isFormProcessing ? "spinner" : "spinner hidden"}></i>
    </>
  );
};

export default FormProcessingSpinner;
