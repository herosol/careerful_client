import React from "react";
import Text from "./Text";
import ImageControl from "./ImageControl";

const PageIntro = ({ content }) => {
  return (
    <>
      <section id="about">
        <div className="contain text-center">
          <div className="content">
            <h1 className="heading">
              <Text string={content.banner_heading} parse={true} />
            </h1>
            <p className="size_5">
              <Text string={content.banner_detail} />
            </p>
          </div>
          <div className="fig">
            <ImageControl
              src={content.image1}
              folder="images"
              specificWidth="800p_"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PageIntro;
