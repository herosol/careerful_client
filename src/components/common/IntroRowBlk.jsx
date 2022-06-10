import React from "react";
import { Link } from "react-router-dom";
import ImageControl from "../common/ImageControl";
import Text from "../common/Text";

const IntroRowBlk = ({ btnView, content }) => {
  return (
    <>
      <div className="flex_row intro_row row">
        <div className="col col-lg-6">
          <div className="fig">
            <ImageControl
              folder="images"
              src={content.image1}
              specificWidth="800p_"
              isLazy={true}
            />
          </div>
        </div>
        <div className="col col-lg-6">
          <div className="txt">
            <h6 className="tag">
              <Text string={content.banner_tag} />
            </h6>
            <h2 className="heading">
              <Text string={content.banner_heading} />
            </h2>
            <p className="para">
              <Text string={content.banner_detail} parse={true} />
            </p>
            {btnView ? (
              <div className="btn_blk">
                <Link to={content.banner_button_link} className="site_btn long">
                  <Text string={content.banner_button_title} />
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroRowBlk;
