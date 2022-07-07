import React from "react";

const TopBar = ({
  data,
  firstStepDone,
  secondStepDone,
  thirdStepDone,
  setTopStep
}) => {
  return (
    <>
      <ul className="top_bar">
        <li
          className={firstStepDone ? "active" : ""}
          onClick={() => setTopStep(1)}
          style={{ cursor: "pointer" }}
        >
          <div className="icon">{data[0].num}</div>
          <strong>{data[0].text}</strong>
        </li>
        <li
          className={secondStepDone ? "active" : ""}
          onClick={() => setTopStep(2)}
          style={{ cursor: "pointer" }}
        >
          <div className="icon">{data[1].num}</div>
          <strong>{data[1].text}</strong>
        </li>
        <li
          className={thirdStepDone ? "active" : ""}
          onClick={() => setTopStep(3)}
          style={{ cursor: "pointer" }}
        >
          <div className="icon">{data[2].num}</div>
          <strong>{data[2].text}</strong>
        </li>
      </ul>
    </>
  );
};

export default TopBar;
