import React, { useEffect, useState } from "react";

import { fetchCvCoverLetter } from "../../../states/actions/fetchCvCoverLetter";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";
import Text from "../../common/Text";
import ImageControl from "../../common/ImageControl";
import { Link } from "react-router-dom";

const CvCoverLetter = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchCvCoverLetter.content);
  const isLoading = useSelector((state) => state.fetchCvCoverLetter.isLoading);
  const { content } = data;

  useEffect(() => {
    dispatch(fetchCvCoverLetter());
  }, []);

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <section id="cover" className="testi_banner">
            <div className="contain">
              <div className="flex_box">
                <div className="content">
                  <h1 className="fancy">
                    <Text string={content.banner_heading} />
                  </h1>
                  <p />
                </div>
              </div>
            </div>
          </section>
          <section id="vision" className="cover_builder">
            <div className="contain">
              <div className="flex_row main_row row center">
                <div className="col col-lg-3 col-md-6">
                  <Link to={content.left_sec_card_link}>
                    <div className="vision_blk">
                      <div className="ico">
                        <ImageControl folder="images" src={content.image1} />
                      </div>
                      <div className="txt">
                        <h4>{content.left_sec_heading}</h4>
                        <Text string={content.left_sec_detail} parse={true} />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col col-lg-3 col-md-6">
                  <Link to={content.right_sec_card_link}>
                    <div className="vision_blk">
                      <div className="ico">
                        <ImageControl folder="images" src={content.image2} />
                      </div>
                      <div className="txt">
                        <h4>{content.right_sec_heading}</h4>
                        <Text string={content.right_sec_detail} parse={true} />
                      </div>
                    </div>
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
export default CvCoverLetter;
