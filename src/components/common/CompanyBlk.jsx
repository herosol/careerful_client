import React from "react";
import ImageControl from "./ImageControl";
import Text from "./Text";

const CompanyBlk = ({ company }) => {
  return (
    <>
      <div className="inner">
        <div className="ico">
          <ImageControl
            src={company.image}
            folder="partner_companies"
            isThumb={true}
          />
        </div>
        <div className="txt">
          <h5>
            <Text string={company.title} />
          </h5>
          <p>
            <Text string={company.short_desc} />
          </p>
        </div>
      </div>
    </>
  );
};

export default CompanyBlk;
