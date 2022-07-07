import React from "react";
import CompanyBlk from "./CompanyBlk";
import Text from "./Text";

function Companies({ data, content, companies }) {
  return (
    <>
      <section id="companies">
        <div className="contain">
          <div className="content text-center">
            <h6 className="tag">
              <Text string={content.opc_tag} />
            </h6>
            <h2>
              <Text string={content.opc_heading} />
            </h2>
          </div>
          <div className="flex_row main_row row center">
            {companies.map((c) => {
              return (
                <div className="col col-lg-4 col-md-6" key={c.id}>
                  <CompanyBlk company={c} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Companies;
