import React from "react";
import { Link } from "react-router-dom";
import ImageControl from "../common/ImageControl";
import Text from "./Text";
const JobProfileBlk = ({ profile }) => {
  return (
    <div className="job_profile_blk">
      <div className="fig">
        <Link to={`/job-profile-detail/${profile.id}`}>
          <ImageControl
            src={profile.image}
            folder="job_profile"
            specificWidth="300p_"
          />
        </Link>
      </div>
      <div className="txt">
        <h4>
          <Link to={`/job-profile-detail/${profile.id}`}>
            <Text string={profile.title} />
          </Link>
        </h4>
        <p>
          <Text string={profile.short_desc} />
        </p>
        <div className="btn_blk">
          <Link
            to={`/job-profile-detail/${profile.id}`}
            className="site_btn text learn"
          >
            Read More
            <i className="arrow"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobProfileBlk;
