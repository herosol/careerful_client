import React, { useEffect } from "react";

import { fetchTestCategories } from "../../../states/actions/fetchTestCategories";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";
import { ToastContainer } from "react-toastify";
import Text from "../../common/Text";
import { useParams } from "react-router-dom";
import ImageControl from "../../common/ImageControl";
import { Link } from "react-router-dom";

const Detail = () => {
  const { catId } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchTestCategories.content);
  const isLoading = useSelector((state) => state.fetchTestCategories.isLoading);
  const { main, categories } = data;
  useEffect(() => {
    dispatch(fetchTestCategories({ catId }));
  }, []);

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <ToastContainer />
          <section id="job_intro" className="numerical_sec">
            <div className="contain">
              <div className="content">
                <h1 className="heading">
                  <Text string={main.page_heading} parse={true} />
                </h1>
                <Text string={main.page_detail} parse={true} />
              </div>
            </div>
          </section>
          <section id="categories" className="bg_white">
            <div className="contain">
              <div className="flex_row main_row">
                {categories &&
                  categories.map((cat, index) => (
                    <Link to={`/test/apply/${cat.id}`}>
                      <div className="col" key={index}>
                        <div className="category_blk">
                          <div className="ico">
                            <ImageControl
                              src={cat.image}
                              folder="online_test_sub_categories"
                            />
                          </div>
                          <div className="txt">
                            <h5>
                              <Text string={cat.title} />
                            </h5>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default Detail;
