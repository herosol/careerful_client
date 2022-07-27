import React, { useEffect } from "react";

import { fetchBlogDetail } from "../../../states/actions/fetchBlogDetail";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";
import { ToastContainer } from "react-toastify";
import Text from "../../common/Text";
import { useParams } from "react-router-dom";
import ImageControl from "../../common/ImageControl";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchBlogDetail.content);
  const isLoading = useSelector((state) => state.fetchBlogDetail.isLoading);
  const { blog } = data;
  useEffect(() => {
    dispatch(fetchBlogDetail({ id }));
  }, []);

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <ToastContainer />
          <section className="blog_detail">
            <div className="contain">
              <div className="content">
                <h1 className="heading">
                  <Text string={blog.title} />
                </h1>
              </div>
              <div className="fig">
                <ImageControl
                  folder="blogs"
                  src={blog.image}
                  specificWidth="1000p_"
                />
              </div>
              <div className="txt">
                <Text string={blog.description} parse={true} />
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default Detail;
