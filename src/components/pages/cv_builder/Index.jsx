import React, { useEffect } from "react";

import { fetchCvBuilder } from "../../../states/actions/fetchCvBuilder";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";
import Text from "../../common/Text";
import ImageControl from "../../common/ImageControl";
import { Link } from "react-router-dom";

const CvBuilder = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchCvBuilder.content);
  const isLoading = useSelector((state) => state.fetchCvBuilder.isLoading);
  const { content, sec2sLeft } = data;

  useEffect(() => {
    dispatch(fetchCvBuilder());
  }, []);

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <section className="cv_build">
            <div className="outer_cv">
              <div className="colL">
                <div className="inner">
                  <h4>
                    <Text string={content.banner_heading} />
                  </h4>
                  <p>
                    <Text string={content.banner_detail} />
                  </p>
                  <div className="gap_line" />
                  <div className="cv_type">
                    {sec2sLeft &&
                      sec2sLeft.map((sec) => (
                        <div className="inner_type">
                          <h5>
                            <Text string={sec.title} />
                          </h5>
                          <p>
                            <Text string={sec.detail} />
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="colR">
                <div className="cv_head">
                  <h4>Preview</h4>
                  <div className="btn_blk">
                    <a className="site_btn green_btn" href="?">
                      Save
                    </a>
                    <a className="site_btn stroke blank" href="?">
                      Download
                    </a>
                    <a className="site_btn purple_btn" href="?">
                      Submit for Review
                    </a>
                  </div>
                </div>
                <div className="cv_form">
                  <div className="main_intro text-center">
                    <h2 className="heading">James Anderson</h2>
                    <p>james.anderson89@gmail.com | +4477345567</p>
                  </div>
                  <form action method>
                    <div className="main_field_blk">
                      <div className="blk_out">
                        <div className="inner_field_blk">
                          <h4 className="heading">EDUCATION</h4>
                          <div className="field_flex">
                            <div className="col_sm_9">
                              <div className="form_blk_new">
                                <input
                                  type="text"
                                  name
                                  defaultValue
                                  placeholder="University name"
                                  className="dim_field bold_text"
                                />
                              </div>
                            </div>
                            <div className="col_sm_3 flex">
                              <div className="form_blk_new">
                                <input
                                  type="text"
                                  name
                                  defaultValue
                                  placeholder="YYYY"
                                  className="dim_field bold_text year_field"
                                />
                              </div>
                              <span>-</span>
                              <div className="form_blk_new">
                                <input
                                  type="text"
                                  name
                                  defaultValue
                                  placeholder="YYYY"
                                  className="dim_field bold_text year_field"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form_blk_new">
                            <input
                              type="text"
                              name
                              defaultValue
                              placeholder="Course name"
                              className="dim_field bold_text"
                            />
                          </div>
                          <div className="form_blk_new">
                            <textarea
                              name
                              id
                              className="dim_field light_text"
                              placeholder="Please describe about your course details"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="add_more_field_btn">
                          <div className="btn_blk">
                            <a className="site_btn small round light" href="?">
                              + Add Education
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="blk_out">
                        <div className="inner_field_blk">
                          <h4 className="heading">Professional experince</h4>
                          <div className="field_flex">
                            <div className="col_sm_9">
                              <div className="form_blk_new">
                                <input
                                  type="text"
                                  name
                                  defaultValue
                                  placeholder="Company name"
                                  className="dim_field bold_text"
                                />
                              </div>
                            </div>
                            <div className="col_sm_3 flex">
                              <div className="form_blk_new">
                                <input
                                  type="text"
                                  name
                                  defaultValue
                                  placeholder="YYYY"
                                  className="dim_field bold_text year_field"
                                />
                              </div>
                              <span>-</span>
                              <div className="form_blk_new">
                                <input
                                  type="text"
                                  name
                                  defaultValue
                                  placeholder="YYYY"
                                  className="dim_field bold_text year_field"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form_blk_new">
                            <input
                              type="text"
                              name
                              defaultValue
                              placeholder="Job title"
                              className="dim_field bold_text"
                            />
                          </div>
                          <div className="form_blk_new">
                            <textarea
                              name
                              id
                              className="dim_field light_text"
                              placeholder="Please describe about your responsibilties and duties in this position "
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="add_more_field_btn">
                          <div className="btn_blk">
                            <a className="site_btn small round light" href="?">
                              + Add Experince
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="blk_out">
                        <div className="inner_field_blk">
                          <h4 className="heading">Skills</h4>
                          <div className="form_blk_new gap_bot">
                            <h6>Languages :</h6>
                            <select name id className="input">
                              <option value>Select language</option>
                            </select>
                          </div>
                          <div className="form_blk_new gap_bot">
                            <h6>IT skills :</h6>
                            <select name id className="input">
                              <option value>Select language</option>
                            </select>
                          </div>
                        </div>
                        <div className="add_more_field_btn">
                          <div className="btn_blk">
                            <a className="site_btn small round light" href="?">
                              + Add Skills
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="blk_out">
                        <div className="inner_field_blk">
                          <input
                            type="text"
                            name
                            defaultValue
                            placeholder="Volunteering :"
                            className="dim_field bold_text"
                          />
                        </div>
                        <div className="add_more_field_btn">
                          <div className="btn_blk">
                            <a className="site_btn small round light" href="?">
                              + Add Volunteering{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="blk_out">
                        <div className="inner_field_blk">
                          <input
                            type="text"
                            name
                            defaultValue
                            placeholder="Interest :"
                            className="dim_field bold_text"
                          />
                        </div>
                        <div className="add_more_field_btn">
                          <div className="btn_blk">
                            <a className="site_btn small round light" href="?">
                              + Add Interest{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="blk_out">
                        <div className="inner_field_blk">
                          <h4 className="heading">References </h4>
                          <div className="field_flex">
                            <div className="col_sm_9">
                              <div className="form_blk_new">
                                <input
                                  type="text"
                                  name
                                  defaultValue
                                  placeholder="Person name"
                                  className="dim_field bold_text"
                                />
                              </div>
                            </div>
                            <div className="col_sm_3 flex">
                              <div className="form_blk_new">
                                <input
                                  type="text"
                                  name
                                  defaultValue
                                  placeholder="YYYY"
                                  className="dim_field bold_text year_field"
                                />
                              </div>
                              <span>-</span>
                              <div className="form_blk_new">
                                <input
                                  type="text"
                                  name
                                  defaultValue
                                  placeholder="YYYY"
                                  className="dim_field bold_text year_field"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form_blk_new">
                            <textarea
                              name
                              id
                              className="dim_field light_text"
                              placeholder="Person’s job title and company"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="add_more_field_btn">
                          <div className="btn_blk">
                            <a className="site_btn small round light" href="?">
                              + Add Reference
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default CvBuilder;
