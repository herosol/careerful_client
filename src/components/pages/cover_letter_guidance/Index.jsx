import React, { useEffect } from "react";

import { fetchCoverLetterGuidance } from "../../../states/actions/fetchCoverLetterGuidance";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";
import Text from "../../common/Text";
import ImageControl from "../../common/ImageControl";
import { Link } from "react-router-dom";

const CoverLetterGuidance = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchCoverLetterGuidance.content);
  const isLoading = useSelector(
    (state) => state.fetchCoverLetterGuidance.isLoading
  );
  const { content } = data;

  useEffect(() => {
    dispatch(fetchCoverLetterGuidance());
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
                    className="site_btn green_btn"
                    to={content.left_banner_button_link}
                  >
                    {content.left_banner_button_title}
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
export default CoverLetterGuidance;
