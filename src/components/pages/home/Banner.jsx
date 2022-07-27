import React from "react";
import ImageControl from "../../common/ImageControl";
import SearchBar from "../../common/SearchBar";
import Text from "../../common/Text";
import { getBackgroundImageUrl } from "../../../helpers/helpers";

function Banner({ data, content, candidates_images }) {
  return (
    <>
      <section id="banner">
        <div className="contain">
          <div className="flex_blk">
            <div className="content">
              {/* <h6 className="tag">{data.tag}</h6> */}
              <h1 className="heading">
                <Text string={content.banner_heading} parse={true} />
              </h1>
              <p className="size_5">
                <Text string={content.banner_tagline} />
              </p>
              <SearchBar content={content} />
              <div className="users_blk">
                <strong>
                  <Text string={content.banner_no_of_candidates} />
                </strong>
                <ul>
                  {candidates_images.map((val, index) => {
                    return (
                      <li key={index}>
                        <div className="ico">
                          <ImageControl
                            src={val}
                            folder="images"
                            isThumb={true}
                          />
                        </div>
                      </li>
                    );
                  })}
                  <li key={6}>
                    <div className="ico">
                      <img src="/images/users/6.jpg" alt="User Icon" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div id="video_blk">
              <div className="vid_blk">
                <video autoPlay loop muted playsInline>
                  <source
                    src={getBackgroundImageUrl(content.video)}
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
