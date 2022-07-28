import React, { useEffect, useState } from "react";

import { fetchCvGuidance } from "../../../states/actions/fetchCvGuidance";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";
import Text from "../../common/Text";
import ImageControl from "../../common/ImageControl";
import { Link } from "react-router-dom";

const CvGuidance = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchCvGuidance.content);
  const isLoading = useSelector((state) => state.fetchCvGuidance.isLoading);
  const { content } = data;

  useEffect(() => {
    dispatch(fetchCvGuidance());
  }, []);

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <section className="blog_detail">
            <div className="contain">
              <div className="content">
                <h1 className="heading">
                  <Text string={content.banner_heading} parse={true} />
                </h1>
              </div>
              <div className="fig">
                <ImageControl
                  folder="images"
                  src={content.image1}
                  specificWidth="800p_"
                />
              </div>
              <div className="txt">
                <Text string={content.detail} parse={true} />
                <p>&nbsp;</p>
                <div className="btn_blk">
                  <Link
                    className="site_btn"
                    to={content.left_banner_button_link}
                  >
                    {content.left_banner_button_title}
                  </Link>
                  <Link
                    className="site_btn green_btn"
                    to={content.right_banner_button_link}
                  >
                    {content.right_banner_button_title}
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
export default CvGuidance;
