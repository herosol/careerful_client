import React from "react";
import CategoryBlk from "./CategoryBlk";
import Text from "./Text";

function Categories({ data, content }) {
  return (
    <>
      <section id="categories">
        <div className="contain">
          <div className="content text-center">
            <h6 className="tag">
              <Text string={content.cats_tag} />
            </h6>
            <h2>
              <Text string={content.cats_heading} />
            </h2>
          </div>
          <div className="flex_row main_row">
            {data.block.map((val) => {
              return (
                <div className="col" key={val.id}>
                  <CategoryBlk {...val} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Categories;
