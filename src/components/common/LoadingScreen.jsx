import { React } from "react";

export default function LoadingScreen({ isLoading }) {
  return (
    <>
      <div className="upperlay"></div>
      <div id="pageloader" className={!isLoading && "hidden"}>
        <span className="loader"></span>
      </div>
    </>
  );
}
