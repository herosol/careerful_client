import React, { useEffect } from "react";
import Blog from "./Blog";

import {
  fetchBlogs,
  searchBlogsData
} from "../../../states/actions/fetchBlogs";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";
import { ToastContainer } from "react-toastify";
import Text from "../../common/Text";

const Blogs = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchBlogs.content);
  const isLoading = useSelector((state) => state.fetchBlogs.isLoading);
  const isSearching = useSelector((state) => state.fetchBlogs.isSearching);
  const blogs = useSelector((state) => state.fetchBlogs.blogs);
  const { content, cats } = data;
  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  const searchBlogs = (cat_id) => {
    let formData = { cat_id };
    dispatch(searchBlogsData(formData));
  };

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <ToastContainer />
          <section id="job_intro">
            <div className="contain">
              <div className="content">
                <h1 className="heading">
                  <Text string={content.banner_heading} parse={true} />
                </h1>
                <p className="size_5">
                  <Text string={content.banner_detail} />
                </p>
              </div>
            </div>
          </section>
          <section id="job_profile_list">
            <div className="contain">
              <ul className="tag_list blog_tag">
                {cats &&
                  cats.map((cat) => (
                    <li>
                      <span
                        onClick={() => {
                          searchBlogs(cat.id);
                        }}
                      >
                        {cat.title}
                      </span>
                    </li>
                  ))}
              </ul>
              <div className="flex_row main_row row">
                {isSearching
                  ? "fetching..."
                  : blogs.length > 0
                  ? blogs.map((blog) => <Blog blog={blog} />)
                  : "No blog found."}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Blogs;
