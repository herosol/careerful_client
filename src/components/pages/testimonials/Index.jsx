import React, { useEffect } from "react";
import Testimonial from "./Testimonial";

import { fetchTestimonials } from "../../../states/actions/fetchTestimonials";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";
import Text from "../../common/Text";
import ImageControl from "../../common/ImageControl";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchTestimonials.content);
  const isLoading = useSelector((state) => state.fetchTestimonials.isLoading);
  const { content, testimonials } = data;
  useEffect(() => {
    dispatch(fetchTestimonials());
  }, []);

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <section id="cover" className="testi_banner">
            <div className="contain">
              <div className="flex_box">
                <div className="content">
                  <h1 className="fancy">
                    <div>
                      <Text string={content.banner_heading} />
                    </div>
                  </h1>
                  <p />
                </div>
              </div>
            </div>
          </section>
          <section className="testi_sec">
            <div className="contain">
              {testimonials &&
                testimonials.map((t) => <Testimonial testimonial={t} />)}
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default Testimonials;
