import React from "react";
import JobProfileBlk from "../../common/JobProfileBlk";

const JobProfileList = ({ data, profiles }) => {
  return (
    <>
      <section id="job_profile_list">
        <div className="contain">
          <div className="flex_row main_row row">
            {profiles.map((p) => {
              return (
                <div className="col col-lg-4 col-md-6" key={p.id}>
                  <JobProfileBlk profile={p} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default JobProfileList;
