import React from "react";
import ImageControl from "./ImageControl";
import Text from "./Text";

const FolioBlk = (t) => {
  return (
    <>
      <div className="folio_blk">
        <div className="ico fill round">
          <ImageControl src={t.image} folder="testimonials" isThumb={true} />
        </div>
        <div className="txt">
          <h4>
            <Text string={t.name} />
            <span>
              <Text string={t.place} />
            </span>
          </h4>
          <p>
            <Text string={t.detail} />
          </p>
          <div className="btn_blk">
            <button className="site_btn text learn">
              Read More <i className="arrow"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FolioBlk;
