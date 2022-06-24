import React from "react";
import FaqBlk from "../../common/FaqBlk";
import Text from "../../common/Text";

const Faqs = ({ data, content, faqs }) => {
  return (
    <>
      <section id="faq_about" className="p-0">
        <div className="contain">
          <div className="content text-center">
            <h6 className="tag">
              <Text string={content.faq_tag} />
            </h6>
            <h2>
              <Text string={content.faq_heading} />
            </h2>
          </div>
          <div className="faq_lst">
            {faqs.map((f) => {
              return <FaqBlk key={f.id} {...f} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
