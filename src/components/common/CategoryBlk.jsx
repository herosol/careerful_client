import React from "react";
import ImageControl from "./ImageControl";
import Text from "./Text";

const CategoryBlk = ({ val }) => {
  return (
    <>
      <div className="category_blk">
        <div className="ico">
          <ImageControl src={val.image} folder="images" />
        </div>
        <div className="txt">
          <h5>
            <Text string={val.title} />
          </h5>
        </div>
      </div>
    </>
  );
};

export default CategoryBlk;
