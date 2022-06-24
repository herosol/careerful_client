import React from "react";
import FaqBlk from "../../common/FaqBlk";

const Accordion = ({ data, faqs }) => {
  return (
    <>
      <section id="faq">
        <div className="contain">
          <div className="faq_lst">
            {faqs.map((f) => {
              return <FaqBlk {...f} key={f.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Accordion;
