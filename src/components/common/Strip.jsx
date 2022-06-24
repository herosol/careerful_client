import React from "react";
import { Link } from "react-router-dom";
import Text from "./Text";

const Strip = ({ data, content }) => {
  return (
    <>
      <section id="strip">
        <div className="contain text-center">
          <div className="inside">
            <h2 className="heading">
              <Text string={content.iip_heading} />
            </h2>
            <p>
              <Text string={content.iip_tagline} />
            </p>
            <div className="btn_blk mt-5">
              <Link
                to={content.iip_button_link}
                className="site_btn long light"
              >
                <Text string={content.iip_button_title} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Strip;
