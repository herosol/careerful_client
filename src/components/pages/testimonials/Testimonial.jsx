import React from "react";
import ImageControl from "../../common/ImageControl";
import Text from "../../common/Text";

const Testimonial = ({ testimonial }) => {
  return (
    <div className="flex" key={testimonial.id}>
      <div className="col1 _col">
        <div className="inner">
          <div className="testi_user">
            <ImageControl folder="testimonials" src={testimonial.image} />
          </div>
          <h4>{testimonial.name}</h4>
          <ul>
            <li>
              <img src="/images/icon-teacher.svg" alt="" />
              <span>{testimonial.place}</span>
            </li>
            <li>
              <img src="/images/icon-briefcase.svg" alt="" />
              <span>
                {testimonial.designation} at {testimonial.work_at}
              </span>
            </li>
            <li>
              <img src="/images/location-tick.svg" alt="" />
              <span>{testimonial.location}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="col2 _col">
        <div className="inner">
          <p>
            <Text string={testimonial.detail} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
