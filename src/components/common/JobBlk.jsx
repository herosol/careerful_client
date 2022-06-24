import React from "react";
import { Link } from "react-router-dom";
import ImageControl from "../common/ImageControl";
import Text from "../common/Text";

const JobBlk = ({ admin, job }) => {
  return (
    <>
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
                    src={process.env.PUBLIC_URL + "/images/icon-map-marker.svg"}
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
              <Link to="/">
                <img
                  src={process.env.PUBLIC_URL + "/images/icon-edit.svg"}
                  alt=""
                />
              </Link>
            </div>
          ) : (
            <div className="act_btn">
              <Link to="/">
                <img
                  src={process.env.PUBLIC_URL + "/images/icon-shuffle.svg"}
                  alt=""
                />
              </Link>
              <Link to="/">
                <img
                  src={process.env.PUBLIC_URL + "/images/icon-bookmark.svg"}
                  alt=""
                />
              </Link>
            </div>
          )}
        </div>
        {admin ? (
          <div className="btm">
            <div className="form_row row">
              <div className="col-xl col-lg-4 col-md-6">
                <h5>Online Test</h5>
                <div className="form_blk">
                  <select name="" id="" className="input">
                    <option value="">Select</option>
                    <option value="">Option 01</option>
                    <option value="">Option 02</option>
                    <option value="">Option 03</option>
                    <option value="">Option 04</option>
                  </select>
                </div>
              </div>
              <div className="col-xl col-lg-4 col-md-6">
                <h5>Interview</h5>
                <div className="form_blk">
                  <select name="" id="" className="input">
                    <option value="">Select</option>
                    <option value="">Option 01</option>
                    <option value="">Option 02</option>
                    <option value="">Option 03</option>
                    <option value="">Option 04</option>
                  </select>
                </div>
              </div>
              <div className="col-xl col-lg-4 col-md-6">
                <h5>2nd round interview</h5>
                <div className="form_blk">
                  <select name="" id="" className="input">
                    <option value="">Select</option>
                    <option value="">Option 01</option>
                    <option value="">Option 02</option>
                    <option value="">Option 03</option>
                    <option value="">Option 04</option>
                  </select>
                </div>
              </div>
              <div className="col-xl col-lg-4 col-md-6">
                <h5>final round interview</h5>
                <div className="form_blk">
                  <select name="" id="" className="input">
                    <option value="">Select</option>
                    <option value="">Option 01</option>
                    <option value="">Option 02</option>
                    <option value="">Option 03</option>
                    <option value="">Option 04</option>
                  </select>
                </div>
              </div>
              <div className="col-xl col-lg-4 col-md-6">
                <h5>offer</h5>
                <div className="form_blk">
                  <select name="" id="" className="input">
                    <option value="">Select</option>
                    <option value="">Option 01</option>
                    <option value="">Option 02</option>
                    <option value="">Option 03</option>
                    <option value="">Option 04</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default JobBlk;
