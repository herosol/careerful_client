import React from "react";
import { Link } from "react-router-dom";
import CategoryBlk from "../../common/CategoryBlk";
import ImageControl from "../../common/ImageControl";
import Text from "../../common/Text";

const WorkAnalys = ({ data, content }) => {
  return (
    <>
      <section id="work_analys">
        <div className="contain">
          <div className="flex_row main_row row">
            <div className="col-lg-6">
              <div className="txt">
                <h6 className="tag">
                  <Text string={content.wwu_tag} />
                </h6>
                <h2 className="heading">
                  <Text string={content.wwu_heading} parse={true} />
                </h2>
                <p>
                  <Text string={content.wwu_desc} />
                </p>
                <div className="btn_blk">
                  <Link to={content.wwu_button_link} className="site_btn long">
                    <Text string={content.wwu_button_title} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="grid_row sub_row">
                <div className="col">
                  <div className="category_blk" key={1}>
                    <div className="ico">
                      <ImageControl folder="images" src={content.image6} />
                    </div>
                    <div className="txt">
                      <h5>
                        <Text string={content.wwu_card_heading1} />
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="category_blk" key={2}>
                    <div className="ico">
                      <ImageControl folder="images" src={content.image7} />
                    </div>
                    <div className="txt">
                      <h5>
                        <Text string={content.wwu_card_heading2} />
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="category_blk" key={3}>
                    <div className="ico">
                      <ImageControl folder="images" src={content.image8} />
                    </div>
                    <div className="txt">
                      <h5>
                        <Text string={content.wwu_card_heading3} />
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="category_blk" key={4}>
                    <div className="ico">
                      <ImageControl folder="images" src={content.image9} />
                    </div>
                    <div className="txt">
                      <h5>
                        <Text string={content.wwu_card_heading4} />
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkAnalys;
