import React, { useEffect, useState } from "react";

import { fetchAssessmentCenter } from "../../../states/actions/fetchAssessmentCenter";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";
import Text from "../../common/Text";
import ImageControl from "../../common/ImageControl";
import { Link } from "react-router-dom";

const AssessmentCenter = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchAssessmentCenter.content);
  const isLoading = useSelector(
    (state) => state.fetchAssessmentCenter.isLoading
  );
  const { content, sec2s } = data;
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    dispatch(fetchAssessmentCenter());
  }, []);

  useEffect(() => {
    setSelectedTab(sec2s?.[0] === undefined ? 0 : sec2s[0].id);
  }, [data]);

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <section id="job-profile-individual" className="recruitment_banner">
            <div className="contain">
              <div className="banner_crums">
                <Link to="/">Home</Link>
                <img src="/images/arrow-right.svg" alt="" />
                <h6>Assessment Center</h6>
              </div>
              <div className="flex flex_recruitment">
                <div className="colL">
                  <div className="image">
                    <ImageControl
                      folder="images"
                      src={content.image1}
                      specificWidth="800p_"
                    />
                  </div>
                </div>
                <div className="colR">
                  <h2 className="heading">
                    <Text string={content.banner_heading} parse={true} />
                  </h2>
                  <Text string={content.banner_detail} parse={true} />
                  <div className="btn_blk">
                    <Link
                      className="site_btn long"
                      to={content.left_banner_button_link}
                    >
                      <Text string={content.left_banner_button_title} />
                    </Link>
                    <Link
                      className="site_btn long green_btn"
                      to={content.right_banner_button_link}
                    >
                      <Text string={content.right_banner_button_title} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="recruitment_tabs">
            <div className="contain mini_contain">
              <ul className="nav nav-tabs">
                {sec2s &&
                  sec2s.map((sec, index) => (
                    <li
                      className={selectedTab === sec.id ? "active" : ""}
                      key={index}
                    >
                      <a className="a" onClick={() => setSelectedTab(sec.id)}>
                        {sec.title}
                      </a>
                    </li>
                  ))}
              </ul>
              <div className="tab-content recruitment_txt">
                {sec2s &&
                  sec2s.map((sec, index) => (
                    <div
                      id="research-employer"
                      className={
                        selectedTab === sec.id
                          ? "tab-pane active in"
                          : "tab-pane"
                      }
                      key={index}
                    >
                      <Text string={sec.detail} parse={true} />
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default AssessmentCenter;
