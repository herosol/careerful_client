import React from "react";
import ContactForm from "./ContactForm";
import Text from "./Text";

const ContactUs = ({ content, handleContactSubmit }) => {
  return (
    <>
      <section id="contact">
        <div className="contain">
          <div className="flex_row main_row row">
            <div className="col col-lg-6">
              <div className="txt">
                <h6 className="tag">
                  <Text string={content.cu_tag} />
                </h6>
                <h2>
                  <Text string={content.cu_heading} />
                </h2>
                <p>
                  <Text string={content.cu_desc} />
                </p>
                <ul className="info_list">
                  <li key={1}>
                    <img src="/images/icon-location.svg" />
                    <a>
                      <Text string={content.cu_address} />
                    </a>
                  </li>
                  <li key={2}>
                    <img src="/images/icon-sms-tracking.svg" />
                    <a href={`mailto:${content.cu_email}`}>
                      <Text string={content.cu_email} />
                    </a>
                  </li>
                  <li key={3}>
                    <img src="/images/icon-call-incoming.svg" />
                    <a href={`tel:${content.cu_phone}`}>
                      <Text string={content.cu_phone} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="in_col">
                <ContactForm
                  content={content}
                  handleContactSubmit={handleContactSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
