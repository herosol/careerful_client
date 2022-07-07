import React from "react";
import Text from "../../common/Text";
import ImageControl from "../../common/ImageControl";

const Vision = ({ data, content }) => {
  return (
    <>
      <section id="vision">
        <div className="contain">
          <div className="content text-center">
            <h6 className="tag">
              <Text string={content.ov_tag} />
            </h6>
            <h2>
              <Text string={content.ov_heading} />
            </h2>
          </div>
          <div className="flex_row main_row row center">
            <div className="col col-lg-3 col-md-6" key={1}>
              <div className="vision_blk">
                <div className="ico">
                  <ImageControl folder="images" src={content.image2} />
                </div>
                <div className="txt">
                  <h4>
                    <Text string={content.dc_card_heading1} />
                  </h4>
                  <p>
                    <Text string={content.dc_card_detail1} />
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6" key={2}>
              <div className="vision_blk">
                <div className="ico">
                  <ImageControl folder="images" src={content.image3} />
                </div>
                <div className="txt">
                  <h4>
                    <Text string={content.dc_card_heading2} />
                  </h4>
                  <p>
                    <Text string={content.dc_card_detail2} />
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6" key={3}>
              <div className="vision_blk">
                <div className="ico">
                  <ImageControl folder="images" src={content.image4} />
                </div>
                <div className="txt">
                  <h4>
                    <Text string={content.dc_card_heading3} />
                  </h4>
                  <p>
                    <Text string={content.dc_card_detail3} />
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6" key={4}>
              <div className="vision_blk">
                <div className="ico">
                  <ImageControl folder="images" src={content.image5} />
                </div>
                <div className="txt">
                  <h4>
                    <Text string={content.dc_card_heading4} />
                  </h4>
                  <p>
                    <Text string={content.dc_card_detail4} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;
