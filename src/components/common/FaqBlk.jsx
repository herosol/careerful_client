import React, { useState } from "react";
import Text from "./Text";

function FaqBlk(f) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={show ? "faq_blk active" : "faq_blk"}>
        <h5 className="fancy" onClick={() => setShow(!show)}>
          <Text string={f.question} />
        </h5>
        {show && (
          <div className="txt">
            <p>
              <Text string={f.answer} parse={true} />
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default FaqBlk;
