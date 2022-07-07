import React from "react";
import { Link } from "react-router-dom";
import Text from "../../common/Text";
import ImageControl from "../../common/ImageControl";
const CareerPath = ({ data, content }) => {
  return (
    <>
      <section id="career">
        <div className="contain">
          <div className="flex_row main_row row">
            <div className="col-lg-5">
              <div className="flex_blk">
                <div className="txt">
                  <h1 className="heading">
                    <Text string={content.banner_heading} parse={true} />
                  </h1>
                  <p>
                    <Text string={content.banner_detail} />
                  </p>
                  <div className="btn_blk">
                    <Link to={content.banner_button_link} className="site_btn">
                      <Text string={content.banner_button_title} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fig">
          <ImageControl
            folder="images"
            src={content.image1}
            specificWidth="800p_"
          />
        </div>
      </section>
    </>
  );
};

export default CareerPath;
