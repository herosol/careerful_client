import React, { useState } from "react";
import Button from "./Button";

function ContactForm({ content, handleContactSubmit }) {
  const [formVal, setFormVal] = useState({
    name: "",
    email: "",
    msg: ""
  });
  const inputHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormVal({ ...formVal, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleContactSubmit(formVal);
  };
  return (
    <>
      <form action="" method="POST" onSubmit={handleSubmit}>
        <div className="form_row row">
          <div className="col-sm-12">
            <h6 className="require">{content.cu_form_1_heading}</h6>
            <div className="form_blk">
              <input
                type="text"
                name="name"
                id="name"
                value={formVal.name}
                onChange={inputHandle}
                className="input"
                placeholder={content.cu_form_1_field_heading}
              />
            </div>
          </div>
          <div className="col-sm-12">
            <h6 className="require">{content.cu_form_2_heading}</h6>
            <div className="form_blk">
              <input
                type="text"
                name="email"
                id="email"
                value={formVal.email}
                onChange={inputHandle}
                className="input"
                placeholder={content.cu_form_2_field_heading}
              />
            </div>
          </div>
          <div className="col-sm-12">
            <h6 className="require">{content.cu_form_3_heading}</h6>
            <div className="form_blk">
              <textarea
                name="msg"
                id="msg"
                value={formVal.msg}
                onChange={inputHandle}
                className="input"
                placeholder={content.cu_form_3_field_heading}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="btn_blk form_btn">
          <Button
            className="long"
            text={content.cu_form_button_text}
            size="lg block"
            type="submit"
          ></Button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
