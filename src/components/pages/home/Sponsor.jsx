import React from "react";
import Text from "../../common/Text";
import ImageControl from "../../common/ImageControl";

function Sponsor({ content, sponsors }) {
  return (
    <>
      <section id="sponsor">
        <div className="contain text-center">
          <div className="content">
            <h2>
              <Text string={content.spons_heading} />
            </h2>
          </div>
          <ul className="brand_lst">
            {sponsors.map((s) => {
              return (
                <li key={s.id}>
                  <div className="ico">
                    <ImageControl
                      folder="visasponsors"
                      src={s.image}
                      specificWidth="200p_"
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Sponsor;
