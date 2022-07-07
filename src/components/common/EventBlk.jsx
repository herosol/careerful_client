import React from "react";
import { Link } from "react-router-dom";
import * as helpers from "../../helpers/helpers";
import Text from "./Text";
import ImageControl from "../../components/common/ImageControl";

const EventBlk = ({ event }) => {
  return (
    <>
      <div className="event_blk">
        <div className="date">
          <small>{helpers.onlyDayThreeletters(event.event_date)}</small>
          {helpers.onlyDateTwoletters(event.event_date)}
        </div>
        <div className="txt">
          <div className="time small">
            {helpers.eventDateFormat(event.event_date)} @{" "}
            {helpers.eventTimeFormat(event.time_from)} -{" "}
            {helpers.eventTimeFormat(event.time_to)}
          </div>
          <h4 className="title mb-0">
            <Link to={`/event-detail/${event.id}`}>
              <Text string={event.title} />
            </Link>
          </h4>
          <div className="type small">
            <img
              src={process.env.PUBLIC_URL + "/images/icon-video2.svg"}
              alt=""
            />
            {helpers.doFirstUpperRestLower(event.event_type)} Event
          </div>
          <p>
            <Text string={event.description} parse={true} length={320} />
          </p>
          <div className="btn_blk">
            <Link to={`/event-detail/${event.id}`} className="site_btn text">
              Register Now
              <i className="arrow"></i>
            </Link>
          </div>
        </div>
        <div className="fig">
          <figure>
            <Link to={`/event-detail/${event.id}`}>
              <ImageControl
                src={event.image}
                folder="events"
                specificWidth="500p_"
              />
            </Link>
          </figure>
        </div>
      </div>
    </>
  );
};

export default EventBlk;
