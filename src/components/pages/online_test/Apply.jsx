import React, { useEffect } from "react";

import { fetchTestCategyDetail } from "../../../states/actions/fetchTestCategyDetail";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";
import { ToastContainer } from "react-toastify";
import Text from "../../common/Text";
import { useParams } from "react-router-dom";
import ImageControl from "../../common/ImageControl";
import { Link } from "react-router-dom";

const Apply = () => {
  const { catId } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchTestCategyDetail.content);
  const isLoading = useSelector(
    (state) => state.fetchTestCategyDetail.isLoading
  );
  const { main, category } = data;
  useEffect(() => {
    dispatch(fetchTestCategyDetail({ catId }));
  }, []);

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <ToastContainer />
          <section className="blog_detail test_ban">
            <div className="contain">
              <div className="content">
                <h1 className="heading">
                  <Text string={main.page_heading} parse={true} />
                </h1>
              </div>
              <div className="txt">
                <Text string={category.page_description} parse={true} />
                <p>&nbsp;</p>
                <div className="btn_blk">
                  <Link
                    className="site_btn green_btn long"
                    to={`/test/apply/${catId}`}
                  >
                    Start the test
                  </Link>
                </div>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <h4>Your results</h4>
                <table>
                  <tbody>
                    <tr>
                      <th>Date</th>
                      <th>Score</th>
                      <th>Status</th>
                      <th>Timespent</th>
                    </tr>
                    <tr>
                      <td>05/07/2022 01.30PM</td>
                      <td>100</td>
                      <td>Passed</td>
                      <td>25sec</td>
                    </tr>
                    <tr>
                      <td>05/07/2022 01.30PM</td>
                      <td>100</td>
                      <td>Passed</td>
                      <td>25sec</td>
                    </tr>
                    <tr>
                      <td>05/07/2022 01.30PM</td>
                      <td>100</td>
                      <td>Passed</td>
                      <td>25sec</td>
                    </tr>
                    <tr>
                      <td>05/07/2022 01.30PM</td>
                      <td>100</td>
                      <td>Passed</td>
                      <td>25sec</td>
                    </tr>
                    <tr>
                      <td>05/07/2022 01.30PM</td>
                      <td>100</td>
                      <td>Passed</td>
                      <td>25sec</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default Apply;
