import React, { useState } from "react";
import { Link } from "react-router-dom";
import Text from "../../common/Text";
import { getBackgroundImageUrl } from "../../../helpers/helpers";
import FormProcessingSpinner from "../../common/FormProcessingSpinner";

const Logon = ({ data, content, isFormProcessing, handleSignin }) => {
  const { log, side } = data;
  const [showPass, setShowPass] = useState(false);
  const [formVal, setFormVal] = useState({
    email: "",
    password: ""
  });
  const inputHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormVal({ ...formVal, [name]: value });
  };
  const passBtn = () => {
    setShowPass(!showPass);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignin(formVal);
  };
  return (
    <>
      <section
        id="logon"
        style={{
          backgroundImage: `url(${getBackgroundImageUrl(content.image1)})`
        }}
      >
        <div className="contain">
          <div className="flex_row main_row row">
            <div className="col col-lg-4">
              <div className="content">
                <h6 className="tag">
                  <Text string={content.banner_tag} />
                </h6>
                <h2 className="heading">
                  <Text string={content.banner_heading} />
                </h2>
                <p>
                  <Text string={content.banner_detail} />
                </p>
                <div className="account">
                  {side.account}
                  <Link to={side.account_link}>{side.account_link_txt}</Link>
                </div>
              </div>
            </div>
            <div className="col col-lg-5">
              <div className="in_col">
                <form action="" method="POST" onSubmit={handleSubmit}>
                  <div className="log_blk">
                    <div className="txt">
                      <h2>
                        <Text string={content.right_heading} />
                      </h2>
                      <p>
                        <Text string={content.right_tagline} />
                      </p>
                    </div>
                    <div className="form_row row">
                      <div className="col-sm-12">
                        <h5>Email</h5>
                        <div className="form_blk">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            value={formVal.email}
                            onChange={inputHandle}
                            className="input"
                            placeholder="eg: sample@gmail.com"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <h5>Password</h5>
                        <div className="form_blk pass_blk">
                          <input
                            type={!showPass ? "password" : "text"}
                            name="password"
                            id="password"
                            value={formVal.password}
                            onChange={inputHandle}
                            className="input"
                            placeholder="eg: PassLogin%7"
                          />
                          <i
                            className={
                              !showPass ? "icon-eye" : "icon-eye-slash"
                            }
                            onClick={passBtn}
                          ></i>
                        </div>
                      </div>
                    </div>
                    <div className="btn_blk form_btn form_blk">
                      <button
                        type="submit"
                        className="site_btn block"
                        disabled={isFormProcessing}
                      >
                        Sign In
                      </button>
                    </div>
                    <div className="forgot">
                      {log.forget}
                      <Link to={log.forget_link}>{log.forget_link_txt}</Link>
                    </div>
                    <div className="account mt-2">
                      {side.account}
                      <Link to={side.account_link} className="color">
                        {side.account_link_txt}
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Logon;
