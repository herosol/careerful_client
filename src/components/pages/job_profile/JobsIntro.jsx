import React from "react";
import Text from "../../common/Text";

const JobsIntro = ({ content }) => {
  return (
    <>
      <section id="job_intro">
        <div className="contain">
          <div className="content">
            <h1 className="heading">
              <Text string={content.banner_heading} parse={true} />
            </h1>
            <p className="size_5">
              <Text string={content.banner_detail} />
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobsIntro;
