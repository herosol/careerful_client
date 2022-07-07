import React from "react";
import { Link } from "react-router-dom";
import ImageControl from "../../common/ImageControl";
import Text from "../../common/Text";
import RegisterBlk from "./RegisterBlk";
import * as helpers from "../../../helpers/helpers";

const EventDetailBlk = ({ event, reg_blk }) => {
  return (
    <>
      <div className="event_detail">
        <h2>
          <Text string={event.title} />
        </h2>
        <div className="btm">
          <div className="time">
            {helpers.eventDateFormat(event.event_date)} @{" "}
            {helpers.eventTimeFormat(event.time_from)} -{" "}
            {helpers.eventTimeFormat(event.time_to)}
          </div>
          <div className="type small">
            <img
              src={process.env.PUBLIC_URL + "/images/icon-video2.svg"}
              alt=""
            />
            {helpers.doFirstUpperRestLower(event.event_type)} Event
          </div>
          {/* <div className="price color">{price}</div> */}
        </div>
        <div className="fig">
          <ImageControl
            src={event.image}
            folder="events"
            specificWidth="1000p_"
          />
        </div>
        <div className="txt">
          <Text string={event.description} parse={true} />
        </div>
        <div className="btn_blk mt-5 mb-5">
          <Link to="?" className="site_btn text">
            <i className="plus"></i> Add to Google Calendar
          </Link>
          <Link to="?" className="site_btn text">
            <i className="plus"></i> Add to iCalendar
          </Link>
        </div>
        <RegisterBlk {...reg_blk} />
      </div>
    </>
  );
};

export default EventDetailBlk;
