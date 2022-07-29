import React, { useEffect, useState } from "react";

import { fetchOnlineTest } from "../../../states/actions/fetchOnlineTest";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";
import Text from "../../common/Text";
import ImageControl from "../../common/ImageControl";
import { Link } from "react-router-dom";

const OnlineTest = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchOnlineTest.content);
  const isLoading = useSelector((state) => state.fetchOnlineTest.isLoading);
  const { content, tests } = data;

  useEffect(() => {
    dispatch(fetchOnlineTest());
  }, []);

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <section id="cover" className="testi_banner">
            <div className="contain">
              <div className="flex_box">
                <div className="content">
                  <h1 className="fancy">
                    <Text string={content.banner_heading} />
                  </h1>
                  <p />
                </div>
              </div>
            </div>
          </section>
          <section id="vision" className="cover_builder">
            <div className="contain">
              <div className="flex_row main_row row center">
                {tests &&
                  tests.map((test) => (
                    <div className="col col-lg-3 col-md-6">
                      <Link to={`/online-test/categories/${test.id}`}>
                        <div className="vision_blk">
                          <div className="ico">
                            <ImageControl
                              folder="online_test_categories"
                              src={test.image}
                            />
                          </div>
                          <div className="txt">
                            <h4>
                              <Text string={test.name} />
                            </h4>
                            <p>
                              <Text string={test.details} />
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default OnlineTest;
