import React from "react";
import Text from "../../common/Text";

function Steps({ content }) {
  return (
    <>
      <section id="steps">
        <div className="contain text-center">
          <div className="content">
            <h2 className="heading">
              <Text string={content.muj_heading} />
            </h2>
          </div>
          <div className="flex_row main_row row">
            <div className="col col-lg-3 col-md-6" key={1}>
              <div className="inner">
                <div className="num">{1}</div>
                <div className="txt">
                  <h4>
                    <Text string={content.muj_heading1} />
                  </h4>
                  <p>
                    <Text string={content.muj_detail1} />
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6" key={2}>
              <div className="inner">
                <div className="num">{2}</div>
                <div className="txt">
                  <h4>
                    <Text string={content.muj_heading2} />
                  </h4>
                  <p>
                    <Text string={content.muj_detail2} />
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6" key={3}>
              <div className="inner">
                <div className="num">{3}</div>
                <div className="txt">
                  <h4>
                    <Text string={content.muj_heading3} />
                  </h4>
                  <p>
                    <Text string={content.muj_detail3} />
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6" key={4}>
              <div className="inner">
                <div className="num">{4}</div>
                <div className="txt">
                  <h4>
                    <Text string={content.muj_heading4} />
                  </h4>
                  <p>
                    <Text string={content.muj_detail4} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Steps;
