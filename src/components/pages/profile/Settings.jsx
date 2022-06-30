import React, { useState } from "react";
import ChangePass from "./ChangePass";

const Settings = ({ data, mem, isFormProcessing, saveProfileSettings }) => {
  const [formVal, setFormVal] = useState({
    fname: mem.mem_fname,
    lname: mem.mem_lname,
    phone: mem.mem_phone,
    email: mem.mem_email,
    language: mem.mem_language,
    ethnicity: mem.mem_ethnicity,
    sexual: mem.mem_sex,
    nationality: mem.mem_nationality,
    edu_current: mem.mem_current_status,
    edu_uni: mem.mem_university,
    edu_degree: mem.mem_subject,
    edu_graduation: mem.mem_graduate_year,
    job_type: mem.mem_opportunity,
    sector: mem.mem_industry
  });
  const {
    personal_info,
    opportunity_info,
    education_info,
    job_info,
    change_pass
  } = data;

  const handleInputChange = (e) => {
    e.preventDefault();
    setFormVal({ ...formVal, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = formVal;
    delete formData.email;
    saveProfileSettings(formData);
  };
  return (
    <>
      <section id="settings">
        <div className="contain-fluid">
          <form action="" method="POST" onSubmit={handleSubmit}>
            <h4 className="heading">{personal_info.heading}</h4>
            <div className="dp_blk upLoadDp">
              <div className="ico fill round">
                <img src={personal_info.dp} alt={personal_info.dp_alt} />
              </div>
              <div className="txt">
                <div className="btn_blk">
                  <button type="button" className="site_btn sm small">
                    Upload new
                  </button>
                  <input type="file" name="dp_image" id="dp_image" hidden />
                </div>
                <div className="small mt-3">
                  Acceptable only jpg, png <br /> The maximum file size is 500
                  kb and the minimum size is 80 kb.
                </div>
              </div>
            </div>
            <div className="form_row row">
              <div className="col-sm-4 col-xs-6">
                <h5>First Name</h5>
                <div className="form_blk">
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    value={formVal.fname}
                    onChange={handleInputChange}
                    className="input"
                    placeholder="eg: John"
                  />
                </div>
              </div>
              <div className="col-sm-4 col-xs-6">
                <h5>Last Name</h5>
                <div className="form_blk">
                  <input
                    type="text"
                    name="lname"
                    id="lname"
                    value={formVal.lname}
                    onChange={handleInputChange}
                    className="input"
                    placeholder="eg: Wick"
                  />
                </div>
              </div>
              <div className="col-sm-4 col-xs-6">
                <h5>Phone Number</h5>
                <div className="form_blk">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={formVal.phone}
                    onChange={handleInputChange}
                    className="input"
                    placeholder="eg: +92300 0000 000"
                  />
                </div>
              </div>
              <div className="col-sm-4 col-xs-6">
                <h5>Email Address</h5>
                <div className="form_blk">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formVal.email}
                    className="input"
                    placeholder="eg: sample@gmail.com"
                    readOnly={true}
                  />
                </div>
              </div>
              <div className="col-sm-4 col-xs-6" style={{ display: "none" }}>
                <h5>Date of Birth</h5>
                <div className="form_blk">
                  <input
                    type="text"
                    name="dob"
                    id="dob"
                    className="input"
                    placeholder="eg: 01-01-1998"
                  />
                </div>
              </div>
              <div className="col-sm-4 col-xs-6">
                <h5>Language</h5>
                <div className="form_blk">
                  <select
                    name="language"
                    id="language"
                    className="input"
                    value={formVal.language}
                    onChange={handleInputChange}
                  >
                    <option value="">Select</option>
                    <option value="english">English</option>
                    <option value="urdu">Urdu</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="br"></div>
            <div className="br"></div>
            <h4 className="heading">{opportunity_info.heading}</h4>
            <div className="form_row row">
              <div className="col-sm-4 col-xs-6">
                <h5>Ethnicity</h5>
                <div className="form_blk">
                  <select
                    value={formVal.ethnicity}
                    onChange={handleInputChange}
                    name="ethnicity"
                    id="ethnicity"
                    className="input"
                  >
                    <option value="">Select</option>
                    <option value="asian">Asain</option>
                    <option value="white">White</option>
                    <option value="black">Black</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6">
                <h5>Sexual orientation</h5>
                <div className="form_blk">
                  <select
                    value={formVal.sexual}
                    onChange={handleInputChange}
                    name="sexual"
                    id="sexual"
                    className="input"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6">
                <h5>Nationality</h5>
                <div className="form_blk">
                  <select
                    name="nationality"
                    id="nationality"
                    value={formVal.nationality}
                    onChange={handleInputChange}
                    className="input"
                  >
                    <option value="">Select</option>
                    <option value="pakistani">Pakistani</option>
                    <option value="austrailian">Austrailian</option>
                    <option value="american">American</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-12 col-xs-12">
                <h5>
                  Do you consider yourself to have a disability or learning
                  difficulties?
                </h5>
                <ul className="check_list">
                  <li>
                    <label for="disability_yes">
                      <input
                        type="radio"
                        name="disability"
                        id="disability_yes"
                      />
                      <span>Yes</span>
                    </label>
                  </li>
                  <li>
                    <label for="disability_no">
                      <input
                        type="radio"
                        name="disability"
                        id="disability_no"
                      />
                      <span>No</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="br"></div>
            <div className="br"></div>
            <h4 className="heading">{education_info.heading}</h4>
            <div className="form_row row">
              <div className="col-sm-4 col-xs-6">
                <h5>Current Status</h5>
                <div className="form_blk">
                  <select
                    name="edu_current"
                    id="edu_current"
                    value={formVal.edu_current}
                    onChange={handleInputChange}
                    className="input"
                  >
                    <option value="">Select</option>
                    <option value="student">student</option>
                    <option value="graduated">Graduated</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6">
                <h5>University</h5>
                <div className="form_blk">
                  <select
                    name="edu_uni"
                    id="edu_uni"
                    value={formVal.edu_uni}
                    onChange={handleInputChange}
                    className="input"
                  >
                    <option value="">Select</option>
                    <option value="UET">UET</option>
                    <option value="LUMBS">LUMBS</option>
                    <option value="COMSATS">COMSATS</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6">
                <h5>Degree subject</h5>
                <div className="form_blk">
                  <select
                    name="edu_degree"
                    id="edu_degree"
                    value={formVal.edu_degree}
                    onChange={handleInputChange}
                    className="input"
                  >
                    <option value="">Select</option>
                    <option value="computer science">Computer Science</option>
                    <option value="commerce">Commerce</option>
                    <option value="arts">Arts</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6">
                <h5>Graduation Year</h5>
                <input
                  type="text"
                  name="edu_graduation"
                  id="edu_graduation"
                  value={formVal.edu_graduation}
                  onChange={handleInputChange}
                  className="input"
                  placeholder="eg: 2020"
                />
              </div>
            </div>
            <div className="br"></div>
            <div className="br"></div>
            <h4 className="heading">{job_info.heading}</h4>
            <div className="form_row row">
              <div className="col-sm-4 col-xs-6">
                <h5>Opportunity type</h5>
                <div className="form_blk">
                  <select
                    name="job_type"
                    id="job_type"
                    value={formVal.job_type}
                    onChange={handleInputChange}
                    className="input"
                  >
                    <option value="">Select</option>
                    <option value="internship">Internship</option>
                    <option value="fresh">fresh</option>
                    <option value="experienced">Experienced</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6">
                <h5>Industry/Sector</h5>
                <div className="form_blk">
                  <select
                    name="sector"
                    id="sector"
                    value={formVal.sector}
                    onChange={handleInputChange}
                    className="input"
                  >
                    <option value="">Select</option>
                    <option value="IT">IT</option>
                    <option value="accounting">Accounting</option>
                    <option value="business">Business</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="btn_blk form_btn">
              <button
                type="submit"
                className="site_btn lg long"
                disabled={isFormProcessing}
              >
                Update Information
              </button>
            </div>
          </form>
          <div className="br"></div>
          <div className="br"></div>
          <ChangePass val={change_pass} />
        </div>
      </section>
    </>
  );
};
export default Settings;
