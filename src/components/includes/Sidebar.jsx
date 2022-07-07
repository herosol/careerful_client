import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ toggle, active }) => {
  const [show, setShow] = useState("");
  const toggleLink = (id) => {
    if (show === id) {
      setShow("");
    } else {
      setShow(id);
    }
  };
  const data = {
    title: "Career Guide.",
    list: [
      {
        id: 1,
        btn: "Home",
        btn_link: "/"
      },
      {
        id: 2,
        btn: "About us",
        btn_link: "/about"
      },
      {
        id: 3,
        btn: "Careers",
        btn_link: "/careers"
      },
      {
        id: 4,
        btn: "Opened Jobs",
        btn_link: "/open-jobs"
      },
      {
        id: 5,
        btn: "Job Profile",
        btn_link: "/job-profile"
      },
      {
        id: 6,
        btn: "Video Interview",
        btn_link: "/video-interview"
      },
      {
        id: 7,
        btn: "Booking",
        btn_link: "/booking"
      },
      {
        id: 7,
        btn: "Events",
        btn_link: "/events"
      }
    ],
    sm_list: [
      {
        id: 1,
        btn: "FAQ's & Support Center",
        btn_link: "/faq"
      },
      {
        id: 2,
        btn: "For Universities",
        btn_link: "/for-universities"
      },
      {
        id: 3,
        btn: "For Employers",
        btn_link: "/for-employers"
      },
      {
        id: 4,
        btn: "Terms And Conditions",
        btn_link: "/terms-conditions"
      },
      {
        id: 5,
        btn: "Privacy Policy",
        btn_link: "/privacy-policy"
      },
      {
        id: 6,
        btn: "Disclaimer",
        btn_link: "/disclaimer"
      }
    ]
  };
  return (
    <>
      <aside id="sidebar" className={active ? "active" : ""}>
        <div className="inside">
          <h3 className="color">{data.title}</h3>
          <ul className="list size_3">
            {data.list.map((val) => {
              return (
                <li key={val.id}>
                  <Link to={val.btn_link} onClick={toggle}>
                    {val.btn}
                  </Link>
                </li>
              );
            })}
            <li className="d-lg-none">
              <NavLink to="?" onClick={() => toggleLink(1)}>
                Explore
              </NavLink>
              {show === 1 && (
                <div className="sub">
                  <div className="nav_sub_blk">
                    <div className="ico">
                      <img src="/images/icon-briefcase.svg" alt="" />
                    </div>
                    <div className="txt">
                      <h5>Career Options</h5>
                      <p>
                        Career on-demand opportunities available for you to
                        apply now.
                      </p>
                    </div>
                  </div>
                  <div className="nav_sub_blk">
                    <div className="ico">
                      <img src="/images/icon-profile-add.svg" alt="" />
                    </div>
                    <div className="txt">
                      <h5>Career Path set</h5>
                      <p>
                        Career on-demand opportunities available for you to
                        apply now.
                      </p>
                    </div>
                  </div>
                  <div className="nav_sub_blk">
                    <div className="ico">
                      <img src="/images/icon-message-edit.svg" alt="" />
                    </div>
                    <div className="txt">
                      <h5>Job profiles</h5>
                      <p>
                        Career on-demand opportunities available for you to
                        apply now.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li className="d-lg-none">
              <NavLink to="?" onClick={() => toggleLink(2)}>
                Learn
              </NavLink>
              {show === 2 && (
                <div className="sub">
                  <div className="nav_sub_blk">
                    <div className="ico">
                      <img src="/images/icon-profile-2user.svg" alt="" />
                    </div>
                    <div className="txt">
                      <h5>UK corporate culture</h5>
                      <p>
                        Career on-demand opportunities available for you to
                        apply now.
                      </p>
                    </div>
                  </div>
                  <div className="nav_sub_blk">
                    <div className="ico">
                      <img src="/images/icon-briefcase-tick.svg" alt="" />
                    </div>
                    <div className="txt">
                      <h5>recruitment process</h5>
                      <p>
                        Career on-demand opportunities available for you to
                        apply now.
                      </p>
                    </div>
                  </div>
                  <div className="nav_sub_blk">
                    <div className="ico">
                      <img src="/images/icon-message-text.svg" alt="" />
                    </div>
                    <div className="txt">
                      <h5>CV & cover letter</h5>
                      <p>
                        Career on-demand opportunities available for you to
                        apply now.
                      </p>
                    </div>
                  </div>
                  <div className="nav_sub_blk">
                    <div className="ico">
                      <img src="/images/icon-user-tag.svg" alt="" />
                    </div>
                    <div className="txt">
                      <h5>interview preperation</h5>
                      <p>
                        Career on-demand opportunities available for you to
                        apply now.
                      </p>
                    </div>
                  </div>
                  <div className="nav_sub_blk">
                    <div className="ico">
                      <img src="/images/icon-clipboard-text2.svg" alt="" />
                    </div>
                    <div className="txt">
                      <h5>assessment center</h5>
                      <p>
                        Career on-demand opportunities available for you to
                        apply now.
                      </p>
                    </div>
                  </div>
                  <div className="nav_sub_blk">
                    <div className="ico">
                      <img src="/images/icon-judge.svg" alt="" />
                    </div>
                    <div className="txt">
                      <h5>assessment center</h5>
                      <p>
                        Career on-demand opportunities available for you to
                        apply now.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li className="d-lg-none">
              <NavLink to="?" onClick={() => toggleLink(3)}>
                Practice
              </NavLink>
              {show === 3 && (
                <div className="sub">
                  <div className="nav_sub_blk">
                    <div className="ico">
                      <img src="/images/icon-keyboard-open.svg" alt="" />
                    </div>
                    <div className="txt">
                      <h5>online test</h5>
                      <p>
                        Career on-demand opportunities available for you to
                        apply now.
                      </p>
                    </div>
                  </div>
                  <div className="nav_sub_blk">
                    <div className="ico">
                      <img src="/images/icon-briefcase-timer.svg" alt="" />
                    </div>
                    <div className="txt">
                      <h5>on demand interviews</h5>
                      <p>
                        Career on-demand opportunities available for you to
                        apply now.
                      </p>
                    </div>
                  </div>
                  <div className="nav_sub_blk">
                    <div className="ico">
                      <img src="/images/icon-book.svg" alt="" />
                    </div>
                    <div className="txt">
                      <h5>assessment center</h5>
                      <p>
                        Career on-demand opportunities available for you to
                        apply now.
                      </p>
                    </div>
                  </div>
                  <div className="nav_sub_blk">
                    <div className="ico">
                      <img src="/images/icon-monitor-mobile.svg" alt="" />
                    </div>
                    <div className="txt">
                      <h5>coding test</h5>
                      <p>
                        Career on-demand opportunities available for you to
                        apply now.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
          <ul className="sm_list">
            <li className="d-lg-none">
              <Link to="/signin" onClick={toggle}>
                Signup/Login
              </Link>
            </li>
            {data.sm_list.map((val) => {
              return (
                <li key={val.id}>
                  <Link to={val.btn_link} onClick={toggle}>
                    {val.btn}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
