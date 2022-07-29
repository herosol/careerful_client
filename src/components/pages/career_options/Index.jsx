import React, { useEffect } from "react";

import { fetchCareerOptions } from "../../../states/actions/fetchCareerOptions";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";
import Text from "../../common/Text";
import Accordian from "./Accordian";

const CareerOptions = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchCareerOptions.content);
  const isLoading = useSelector((state) => state.fetchCareerOptions.isLoading);
  const { content, heading1, heading2, heading3 } = data;

  useEffect(() => {
    dispatch(fetchCareerOptions());
  }, []);

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <section
            id="cover"
            style={{ backgroundImage: "url(/images/email_marketing.jpg)" }}
          >
            <div className="contain">
              <div className="flex_box">
                <div className="content">
                  <h1 className="fancy">
                    <div>
                      <Text string={content.banner_heading} parse={true} />
                    </div>
                  </h1>
                  <p />
                </div>
              </div>
            </div>
          </section>
          <section className="career_opt">
            <div className="contain">
              <div className="flex">
                <div className="colL">
                  <div className="inner">
                    <h4>
                      <Text string={content.heading_1} />
                    </h4>
                  </div>
                </div>
                <div className="colR">
                  <div className="faq_lst">
                    <div className="faq_blk">
                      <h5 className="fancy">
                        <div>Senior Technical Specialist - Service Now</div>
                      </h5>
                      <div className="txt">
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet, consetetur sadipscing elitr, sed
                          diam nonumy eirmod tempor invidunt.
                        </p>
                      </div>
                    </div>
                    <div className="faq_blk">
                      <h5 className="fancy">
                        <div>Senior Technical Specialist - Service Now</div>
                      </h5>
                      <div className="txt">
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet, consetetur sadipscing elitr, sed
                          diam nonumy eirmod tempor invidunt.
                        </p>
                      </div>
                    </div>
                    <div className="faq_blk">
                      <h5 className="fancy">
                        <div>Senior Technical Specialist - Service Now</div>
                      </h5>
                      <div className="txt">
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet, consetetur sadipscing elitr, sed
                          diam nonumy eirmod tempor invidunt.
                        </p>
                      </div>
                    </div>
                    <div className="faq_blk">
                      <h5 className="fancy">
                        <div>Senior Technical Specialist - Service Now</div>
                      </h5>
                      <div className="txt">
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet, consetetur sadipscing elitr, sed
                          diam nonumy eirmod tempor invidunt.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="colL">
                  <div className="inner">
                    <h4>
                      <Text string={content.heading_2} />
                    </h4>
                  </div>
                </div>
                <div className="colR">
                  <div className="faq_lst">
                    <div className="faq_blk">
                      <h5 className="fancy">
                        <div>Senior Technical Specialist - Service Now</div>
                      </h5>
                      <div className="txt">
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet, consetetur sadipscing elitr, sed
                          diam nonumy eirmod tempor invidunt.
                        </p>
                      </div>
                    </div>
                    <div className="faq_blk">
                      <h5 className="fancy">
                        <div>Senior Technical Specialist - Service Now</div>
                      </h5>
                      <div className="txt">
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet, consetetur sadipscing elitr, sed
                          diam nonumy eirmod tempor invidunt.
                        </p>
                      </div>
                    </div>
                    <div className="faq_blk">
                      <h5 className="fancy">
                        <div>Senior Technical Specialist - Service Now</div>
                      </h5>
                      <div className="txt">
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet, consetetur sadipscing elitr, sed
                          diam nonumy eirmod tempor invidunt.
                        </p>
                      </div>
                    </div>
                    <div className="faq_blk">
                      <h5 className="fancy">
                        <div>Senior Technical Specialist - Service Now</div>
                      </h5>
                      <div className="txt">
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet, consetetur sadipscing elitr, sed
                          diam nonumy eirmod tempor invidunt.
                        </p>
                      </div>
                    </div>
                    <div className="faq_blk">
                      <h5 className="fancy">
                        <div>Senior Technical Specialist - Service Now</div>
                      </h5>
                      <div className="txt">
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet, consetetur sadipscing elitr, sed
                          diam nonumy eirmod tempor invidunt.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="colL">
                  <div className="inner">
                    <h4>
                      <Text string={content.heading_3} />
                    </h4>
                  </div>
                </div>
                <div className="colR">
                  <div className="faq_lst">
                    <div className="faq_blk">
                      <h5 className="fancy">
                        <div>Senior Technical Specialist - Service Now</div>
                      </h5>
                      <div className="txt">
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet, consetetur sadipscing elitr, sed
                          diam nonumy eirmod tempor invidunt.
                        </p>
                      </div>
                    </div>
                    <div className="faq_blk">
                      <h5 className="fancy">
                        <div>Senior Technical Specialist - Service Now</div>
                      </h5>
                      <div className="txt">
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet, consetetur sadipscing elitr, sed
                          diam nonumy eirmod tempor invidunt.
                        </p>
                      </div>
                    </div>
                    <div className="faq_blk">
                      <h5 className="fancy">
                        <div>Senior Technical Specialist - Service Now</div>
                      </h5>
                      <div className="txt">
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet, consetetur sadipscing elitr, sed
                          diam nonumy eirmod tempor invidunt.
                        </p>
                      </div>
                    </div>
                    <div className="faq_blk">
                      <h5 className="fancy">
                        <div>Senior Technical Specialist - Service Now</div>
                      </h5>
                      <div className="txt">
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet, consetetur sadipscing elitr, sed
                          diam nonumy eirmod tempor invidunt.
                        </p>
                      </div>
                    </div>
                    <div className="faq_blk">
                      <h5 className="fancy">
                        <div>Senior Technical Specialist - Service Now</div>
                      </h5>
                      <div className="txt">
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet, consetetur sadipscing elitr, sed
                          diam nonumy eirmod tempor invidunt.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default CareerOptions;
