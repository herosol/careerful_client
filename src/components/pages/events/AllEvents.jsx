import React, { useState } from "react";
import EventBlk from "../../common/EventBlk";

const AllEvents = ({ data, events }) => {
  const [formVal, setFormVal] = useState({
    searchkeyword: "",
    location: "",
    sort: ""
  });
  const inputHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormVal({ ...formVal, [name]: value });
  };
  return (
    <>
      <section id="events">
        <div className="contain">
          <form
            action=""
            method="POST"
            onSubmit={inputHandle}
            className="main_form"
          >
            <div className="inside">
              <div className="form_blk">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/icon-search-normal.svg"
                  }
                  alt=""
                  className="ico"
                />
                <input
                  type="text"
                  name="searchkeyword"
                  id="searchkeyword"
                  value={formVal.searchkeyword}
                  onChange={inputHandle}
                  className="input"
                  placeholder="Search for events"
                />
              </div>
              <div className="form_blk border-end-0">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/icon-location-minus.svg"
                  }
                  alt=""
                  className="ico"
                />
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={formVal.location}
                  onChange={inputHandle}
                  className="input"
                  placeholder="In a location"
                />
              </div>
              <button type="submit" className="site_btn blank stroke">
                Find Event
              </button>
              <div className="form_blk flex-grow-0">
                <button
                  type="button"
                  className="filter_btn d-flex align-align-items-center lh-1"
                >
                  <img
                    src={process.env.PUBLIC_URL + "/images/icon-slider.svg"}
                    alt=""
                    className="ico"
                  />
                  Hide Filters
                </button>
              </div>
              <select
                name="list"
                id="list"
                value={formVal.list}
                onChange={inputHandle}
                className="input w-auto ps-0"
              >
                <option value="">List</option>
                <option value="">Option 01</option>
                <option value="">Option 02</option>
                <option value="">Option 03</option>
                <option value="">Option 04</option>
              </select>
            </div>
          </form>
          <ul className="tag_list">
            <li>
              <span>Virtual Events</span>
            </li>
            <li>
              <span>Social Events</span>
            </li>
            <li>
              <span>Company Events</span>
            </li>
            <li>
              <span>Awesome Events</span>
            </li>
          </ul>
          <div className="br"></div>
          <div className="sort_blk size_4 mb-4">
            <select
              name="sort"
              id="sort"
              value={formVal.sort}
              onChange={inputHandle}
              className="input w-auto p-0 border-0"
            >
              <option value="">Now - March 22, 2023</option>
              <option value="">Now - March 22, 2023</option>
              <option value="">Now - March 22, 2023</option>
              <option value="">Now - March 22, 2023</option>
              <option value="">Now - March 22, 2023</option>
            </select>
          </div>
          {events.map((event) => {
            return <EventBlk event={event} key={event.id} />;
          })}
          <div
            className="btn_blk justify-content-between mt-5"
            style={{ display: "none" }}
          >
            <button type="button" className="site_btn text prev_btn">
              <i className="chevron-left"></i> Previous Event
            </button>
            <button type="button" className="site_btn text next_btn">
              Next Event <i className="chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllEvents;
