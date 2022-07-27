import React, { useState } from "react";
import Text from "../../common/Text";

function FaqBlk({ faq }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={show ? "faq_blk active" : "faq_blk"}>
        <h5 className="fancy" onClick={() => setShow(!show)}>
          <Text string={faq.title} />
        </h5>
        {show && (
          <div className="txt">
            <p>
              <Text string={faq.detail} />
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default FaqBlk;
