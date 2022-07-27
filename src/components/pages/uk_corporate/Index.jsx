import React, { useEffect } from "react";

import { fetchUkCorporate } from "../../../states/actions/fetchUkCorporate";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";
import Text from "../../common/Text";
import ImageControl from "../../common/ImageControl";
import { Link } from "react-router-dom";

const UkCorporate = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchUkCorporate.content);
  const isLoading = useSelector((state) => state.fetchUkCorporate.isLoading);
  const { content } = data;
  useEffect(() => {
    dispatch(fetchUkCorporate());
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
                  src={content.image1}
                  folder="images"
                  specificWidth="800p_"
                />
              </div>
              <div className="txt">
                <Text string={content.detail} parse={true} />
                <p>&nbsp;</p>
                <div className="btn_blk">
                  <Link
                    className="site_btn"
                    to={content.sec2_banner_button_link}
                  >
                    <Text string={content.sec2_banner_button_title} />
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
export default UkCorporate;
