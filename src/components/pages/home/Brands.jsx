import React from "react";
import ImageControl from "../../common/ImageControl";

function Brands({ partners }) {
  return (
    <>
      <section id="brands">
        <div className="contain text-center">
          <ul className="brand_lst">
            {partners.map((p) => {
              return (
                <li key={p.id}>
                  <div className="ico">
                    <ImageControl
                      src={p.image}
                      alt={p.image}
                      folder="partners"
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

export default Brands;
