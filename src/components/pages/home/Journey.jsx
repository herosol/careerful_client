import React, { useState } from "react";
import Slider from "react-slick";
import FaqBlk from "./FaqBlk";
import Text from "../../common/Text";
import ImageControl from "../../common/ImageControl";

const Journey = ({ data, content, sec7s, sec8s }) => {
  const [slider, setSlider] = useState();
  const [thumbs, setThumbs] = useState();
  const settings = {
    arrows: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  const settings_thumb = {
    arrows: false,
    infinite: true,
    fade: true,
    draggable: false,
    swipe: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <section id="journey">
        <div className="contain">
          <div className="content text-center">
            <h2 className="heading">
              <Text string={content.syj_heading} />
            </h2>
          </div>
          <div className="flex_row main_row row">
            <div className="col col-lg-6 pe-lg-5">
              <div id="slick-journey" className="faq_lst">
                <Slider
                  {...settings}
                  asNavFor={thumbs}
                  ref={(slider1) => setSlider(slider1)}
                >
                  {sec7s.map((val) => {
                    return (
                      <div className="item" key={val.id}>
                        <FaqBlk faq={val} />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
            <div className="col col-lg-6 ps-lg-5">
              <div id="slick-journey-thumbs">
                <Slider
                  {...settings_thumb}
                  asNavFor={slider}
                  ref={(slider2) => setThumbs(slider2)}
                >
                  {sec8s.map((val) => {
                    return (
                      <div className="item" key={val.id}>
                        <div className="fig">
                          <ImageControl
                            src={val.image}
                            folder="images"
                            isThumb={true}
                          />
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Journey;
