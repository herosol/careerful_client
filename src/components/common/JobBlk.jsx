import React from "react";
import { Link } from "react-router-dom";
import ImageControl from "../common/ImageControl";
import Text from "../common/Text";

import { saveJobStat } from "../../states/actions/fetchDashboard";
import { useSelector, useDispatch } from "react-redux";

const JobBlk = ({ admin, job, saveJob, isJobSaving }) => {
  const dispatch = useDispatch();
  const isStatUpdating = useSelector(
    (state) => state.fetchDashboard.isStatUpdating
  );

  const handleSaveJob = (id) => {
    saveJob({ id: id });
  };

  const handleJobStatUpdate = (formData) => {
    dispatch(saveJobStat(formData));
  };
  return (
    <>
      {job && (
        <div className={admin ? "job_blk edit" : "job_blk"}>
          <div className="top">
            <div className="ico fill">
              <ImageControl src={job.image} folder="jobs" isThumb={true} />
            </div>
            <div className="title">
              <h4 className="mb-0">
                <a href={job.job_link} target="_blank">
                  <Text string={job.title} />
                </a>
              </h4>
              <div className="company">
                <a href={job.company_link} target="_blank">
                  <Text string={job.company_name} />
                </a>
              </div>
              {admin ? (
                ""
              ) : (
                <ul className="mini_lst">
                  <li>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/icon-map-marker.svg"
                      }
                      alt=""
                    />
                    <Text string={job.city} />
                  </li>
                  <li>
                    <img
                      src={process.env.PUBLIC_URL + "/images/icon-hat.svg"}
                      alt=""
                    />
                    <Text string={`Degree In ${job.degree_in}`} />
                  </li>
                  <li>
                    <img
                      src={process.env.PUBLIC_URL + "/images/icon-dollar.svg"}
                      alt=""
                    />
                    {job.min_salary} - {job.max_salary} / Yearly
                  </li>
                </ul>
              )}
            </div>
            {admin ? (
              <div className="act_btn">
                <Link to="/dashboard">
                  <img
                    src={process.env.PUBLIC_URL + "/images/icon-edit.svg"}
                    alt=""
                  />
                </Link>
              </div>
            ) : (
              <div className="act_btn">
                <button
                  type="button"
                  onClick={() => handleSaveJob(job.id)}
                  disabled={isJobSaving}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/images/icon-bookmark.svg"}
                    alt=""
                  />
                </button>
              </div>
            )}
          </div>
          {admin ? (
            <div className="btm">
              <div className="form_row row">
                <div className="col-xl col-lg-4 col-md-6">
                  <h5>Online Test</h5>
                  <div className="form_blk">
                    <select
                      disabled={isStatUpdating}
                      defaultValue={job.online_test}
                      name="online_test"
                      className="input"
                      onChange={(e) =>
                        handleJobStatUpdate({
                          saved_id: job.saved_id,
                          field: "online_test",
                          value: e.target.value
                        })
                      }
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">no</option>
                    </select>
                  </div>
                </div>
                <div className="col-xl col-lg-4 col-md-6">
                  <h5>Interview</h5>
                  <div className="form_blk">
                    <select
                      disabled={isStatUpdating}
                      defaultValue={job.interview}
                      name="interview"
                      id=""
                      className="input"
                      onChange={(e) =>
                        handleJobStatUpdate({
                          saved_id: job.saved_id,
                          field: "interview",
                          value: e.target.value
                        })
                      }
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">no</option>
                    </select>
                  </div>
                </div>
                <div className="col-xl col-lg-4 col-md-6">
                  <h5>2nd round interview</h5>
                  <div className="form_blk">
                    <select
                      disabled={isStatUpdating}
                      defaultValue={job.second_round_interview}
                      name="second_round_interview"
                      id=""
                      className="input"
                      onChange={(e) =>
                        handleJobStatUpdate({
                          saved_id: job.saved_id,
                          field: "second_round_interview",
                          value: e.target.value
                        })
                      }
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">no</option>
                    </select>
                  </div>
                </div>
                <div className="col-xl col-lg-4 col-md-6">
                  <h5>final round interview</h5>
                  <div className="form_blk">
                    <select
                      disabled={isStatUpdating}
                      defaultValue={job.final_round_interview}
                      name="final_round_interview"
                      id=""
                      className="input"
                      onChange={(e) =>
                        handleJobStatUpdate({
                          saved_id: job.saved_id,
                          field: "final_round_interview",
                          value: e.target.value
                        })
                      }
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">no</option>
                    </select>
                  </div>
                </div>
                <div className="col-xl col-lg-4 col-md-6">
                  <h5>offer</h5>
                  <div className="form_blk">
                    <select
                      disabled={isStatUpdating}
                      defaultValue={job.offer}
                      name="offer"
                      id=""
                      className="input"
                      onChange={(e) =>
                        handleJobStatUpdate({
                          saved_id: job.saved_id,
                          field: "offer",
                          value: e.target.value
                        })
                      }
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">no</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
};

export default JobBlk;
