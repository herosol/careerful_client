import React, { useEffect } from "react";

import { fetchJobProfileDetail } from "../../../states/actions/fetchJobProfileDetail";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";
import { ToastContainer } from "react-toastify";
import Text from "../../common/Text";
import { Link, useParams } from "react-router-dom";
import ImageControl from "../../common/ImageControl";
import { numberWithCommas } from "../../../helpers/helpers";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchJobProfileDetail.content);
  const isLoading = useSelector(
    (state) => state.fetchJobProfileDetail.isLoading
  );
  const { profile } = data;
  useEffect(() => {
    dispatch(fetchJobProfileDetail({ id }));
  }, []);

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <ToastContainer />
          <section id="job-profile-individual">
            <div className="contain">
              <div className="banner_crums">
                <Link to="/job-profile">Home: Job Profile</Link>
                <img src="/images/arrow-right.svg" alt="" />
                <h6>
                  <Text string={profile.title} />
                </h6>
              </div>
              <div className="txt">
                <h2 className="fancy">
                  <Text string={profile.title} />
                </h2>
                <h5>
                  {profile.designation}, {profile.title}
                </h5>
                <p>
                  <Text string={profile.short_desc} />
                </p>
              </div>
              <div className="banner_tabel">
                <div className="flex">
                  <h6>Average Salary (a Year)</h6>
                  <h6>Degree Requirement</h6>
                  <h6>Working Hours (per Week)</h6>
                  <h6>Location</h6>
                </div>
                <div className="flex">
                  <div className="opt_tbl">
                    <img src="/images/dollar-circle.svg" alt="" />
                    <span>
                      ${numberWithCommas(profile.avg_salary_min)} - $
                      {numberWithCommas(profile.avg_salary_max)}
                    </span>
                  </div>
                  <div className="opt_tbl">
                    <img src="/images/teacher1.svg" alt="" />
                    <span>
                      <Text string={profile.degree_requirements} />
                    </span>
                  </div>
                  <div className="opt_tbl">
                    <img src="/images/clock1.svg" alt="" />
                    <span>
                      {profile.working_hour_min} Hrs -{" "}
                      {profile.working_hour_max} Hrs
                    </span>
                  </div>
                  <div className="opt_tbl">
                    <img src="/images/location-tick1.svg" alt="" />
                    <span>
                      <Text string={profile.location} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="txt_individual">
            <div className="contain">
              <div className="txt">
                <h5>
                  <Text string={profile.bold_heading} />
                </h5>
                <div className="border-line" />
                <Text string={profile.long_description} parse={true} />
                <p>&nbsp;</p>
                <div className="btn_blk">
                  <Link className="site_btn" to={`/job-profile-detail/${id}`}>
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default Detail;
