import React from "react";
import { Link } from "react-router-dom";
import ImageControl from "../../common/ImageControl";
import Text from "../../common/Text";

const Blog = ({ blog }) => {
  return (
    <div className="col col-lg-4 col-md-6">
      <div className="job_profile_blk">
        <div className="fig">
          <Link to={`/blog-detail/${blog.id}`}>
            <ImageControl
              folder="blogs"
              src={blog.image}
              specificWidth="400p_"
            />
          </Link>
        </div>
        <div className="txt">
          <h4>
            <Link to={`/blog-detail/${blog.id}`}>
              <Text string={blog.title} length={50} />
            </Link>
          </h4>
          <Text string={blog.description} parse={true} length={150} />
          <div className="btn_blk">
            <Link
              className="site_btn text learn"
              to={`/blog-detail/${blog.id}`}
            >
              Read More
              <i className="arrow" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
