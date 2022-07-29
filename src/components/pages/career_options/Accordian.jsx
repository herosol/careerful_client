import React from "react";
import Text from "../../common/Text";

const Accordian = ({ heading }) => {
  return (
    <div className="faq_blk" key={heading.id}>
      <h5 className="fancy">
        <div>
          <Text string={heading.title} />
        </div>
      </h5>
      <div className="txt">
        <p>
          <Text string={heading.detail} />
        </p>
      </div>
    </div>
  );
};

export default Accordian;
