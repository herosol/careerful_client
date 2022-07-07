import React from "react";
import { Link } from "react-router-dom";
import Text from "./../../common/Text";

const Strip = ({ data, content }) => {
  return (
    <>
      <section id="strip">
        <div className="contain text-center">
          <div className="inside">
            <h2 className="heading">
              <Text string={content.syt_tag} />
            </h2>
            <p>
              <Text string={content.syt_heading} />
            </p>
            <div className="btn_blk mt-5">
              <Link
                to={content.syt_button_link}
                className="site_btn long light"
              >
                <Text string={content.syt_button_title} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Strip;
