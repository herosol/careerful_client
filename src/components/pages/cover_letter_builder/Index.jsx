import React, { useEffect } from "react";

import { fetchCoverLetterBuilder } from "../../../states/actions/fetchCoverLetterBuilder";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";
import Text from "../../common/Text";
import ImageControl from "../../common/ImageControl";
import { Link } from "react-router-dom";

const CoverLetterBuilder = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchCoverLetterBuilder.content);
  const isLoading = useSelector(
    (state) => state.fetchCoverLetterBuilder.isLoading
  );
  const { content, sec2sLeft } = data;

  useEffect(() => {
    dispatch(fetchCoverLetterBuilder());
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
                  <div className="right_cv_intro">
                    <div className="main_cv_intro">
                      <p>
                        <strong contentEditable="true">James Anderson</strong>
                      </p>
                      <p contentEditable="true">james.anderson89@gmail.com</p>
                      <p contentEditable="true">+4477345567</p>
                    </div>
                  </div>
                  <div className="main_cv_intro">
                    <p>
                      <strong contentEditable="true">Joss buttler</strong>
                    </p>
                    <p contentEditable="true">jassbuttler22@gmail.com</p>
                    <p contentEditable="true">+4477345567</p>
                  </div>
                  <div className="date">
                    <p contentEditable="true">22.07.2022</p>
                  </div>
                  <div className="cv_title">
                    <p contentEditable="true">Dear Sir/Madam,</p>
                  </div>
                  <form action className="builder_cv_new">
                    <p>
                      <strong contentEditable="true">
                        Cover letter for my intern UX designer position{" "}
                      </strong>
                    </p>
                    <div className="form_blk">
                      <textarea
                        name
                        id
                        className="input"
                        placeholder="Please describe about your course details"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form_blk">
                      <textarea
                        name
                        id
                        className="input"
                        placeholder="Please describe about your course details"
                        defaultValue={""}
                      />
                    </div>
                    <div className="add_more_field_btn">
                      <div className="btn_blk">
                        <a className="site_btn small round light" href="?">
                          + Add paragraph
                        </a>
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
export default CoverLetterBuilder;
