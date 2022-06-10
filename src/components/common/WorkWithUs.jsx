import React from "react";
import IntroRowBlk from "./IntroRowBlk";

const WorkWithUs = ({ content }) => {
  return (
    <>
      <section id="work">
        <div className="contain">
          <IntroRowBlk content={content} btnView={true} />
        </div>
      </section>
    </>
  );
};

export default WorkWithUs;
