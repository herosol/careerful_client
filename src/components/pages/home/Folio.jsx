import React from "react";
import OwlCarousel from "react-owl-carousel";
import FolioBlk from "../../common/FolioBlk";
import Text from "../../common/Text";

function Folio({ data, content, testimonials }) {
  const option = {
    margin: 0,
    loop: true,
    dots: true,
    nav: false,
    smartSpeed: 1000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      580: {
        items: 2
      },
      991: {
        items: 3
      },
      1200: {
        nav: true
      }
    }
  };
  return (
    <>
      <section id="folio">
        <div className="contain">
          <div className="content text-center">
            <h2>
              <Text string={content.testimonials_headig} />
            </h2>
          </div>
          <OwlCarousel
            id="owl-folio"
            className="owl-carousel owl-theme"
            {...option}
          >
            {testimonials.map((t) => {
              return <FolioBlk key={t.id} {...t} />;
            })}
          </OwlCarousel>
        </div>
      </section>
    </>
  );
}

export default Folio;
