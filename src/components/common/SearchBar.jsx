import React, { useState } from "react";
import Data from "../dummy";
import Text from "./Text";

const SearchBar = ({ content }) => {
  const { icon, icon_alt, btn, flag, flag_alt } = Data.srch_bar;
  const [formVal, setFormVal] = useState({
    search: ""
  });
  const inputHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormVal({ ...formVal, [name]: value });
  };
  return (
    <>
      <form action="/open-jobs" method="GET" id="srch_bar">
        <div className="inside input">
          <div className="flag_blk d-inline-flex align-items-center">
            UK <img src={flag} alt={flag_alt} />
          </div>
          <div className="form_blk">
            <img src={icon} alt={icon_alt} />
            <input
              type="text"
              name="search"
              id="search"
              value={formVal.search}
              onChange={inputHandle}
              className="input"
              placeholder={content.banner_field_heading}
              autoComplete="off"
            />
          </div>
          <button type="submit" className="site_btn">
            <Text string={content.banner_button_text} />
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
