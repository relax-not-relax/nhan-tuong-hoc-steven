import React from "react";
import PropTypes from "prop-types";
import BlogData from "./BlogData";
import BlogDetailsComment from "./BlogDetailsComment";
import formatNormalDate from "../../utils/formatNormalDate";
import processOembedTags from "../../utils/processOembedTags";
import blogAPI from "../../api/blogApi";
import logo from "../../images/logo_bg.png";
import { useNavigate } from "react-router-dom";

BlogDetailsContent.propTypes = {
  blog: PropTypes.object.isRequired,
};

function BlogDetailsContent({ blog }) {
  const processedContent = processOembedTags(blog.postProperties.content);

  const [relatedBlog, setRelatedBlog] = React.useState([]);
  const [isLoadingRelated, setIsLoadingRelated] = React.useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    setIsLoadingRelated(true);
    const fetchRelatedBlogs = async () => {
      try {
        const res = await blogAPI.getBlogsByTopic({
          topicId: blog.postProperties.topic.id,
        });
        setRelatedBlog(res.data.content);
        setIsLoadingRelated(false);
      } catch (error) {
        console.log("Failed to get related: ", error);
        setIsLoadingRelated(false);
      }
    };

    fetchRelatedBlogs();
  }, [blog.postProperties.topic.id]);

  const handleSelectHashtag = async (id) => {
    try {
      const res = await blogAPI.getHashtagById({ id: id });
      navigate(
        `/thu-vien/chu-de?topic=${res.data.topic_id}&hashtag=${res.data.hash_tag_id}&pageNumber=0&pageSize=8&sort=id,desc`
      );
    } catch (error) {
      console.log("Failed to get hashtag: ", error);
    }
  };

  return (
    <div className="text-start">
      <nav aria-label="breadcrumb" className="w-max">
        <ol className="flex w-full flex-wrap items-center rounded-md bg-slate-50 px-4 py-2">
          <li className="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
            <a
              href="/thu-vien?pageNumber=0&pageSize=8&sort=id,desc"
              className="text-base"
            >
              Thư viện
            </a>
            <span class="pointer-events-none mx-2 text-slate-800">/</span>
          </li>
          <li className="flex cursor-pointer items-center text-sm text-black transition-colors duration-300 hover:text-slate-800">
            <a
              href={`/thu-vien/chu-de?topic=${blog.postProperties.topic.id}&pageNumber=0&pageSize=8&sort=id,desc`}
              className="text-base font-semibold"
            >
              {blog.postProperties.topic.name}
            </a>
          </li>
        </ol>
      </nav>
      <h1 className="text-start md:text-3xl text-2xl mt-4 font-semibold">
        {blog.postProperties.title}
      </h1>
      <div className="flex flex-row justify-start items-center mt-3 md:gap-x-4 gap-x-2">
        <div className="flex flex-row items-center gap-x-2">
          <img
            alt="Tania Andrew"
            src={logo}
            className="relative inline-block h-8 w-8 rounded-full"
          />
          <span className="text-slate-800 font-semibold text-start md:text-base text-sm">
            Steven
          </span>
        </div>

        <div className="w-1 h-1 bg-[#005245] rounded-full"></div>
        <p className="text-slate-800 font-semibold text-start md:text-base text-sm">
          {blog.postProperties.topic.name}
        </p>
        <div className="w-1 h-1 bg-[#005245] rounded-full"></div>
        <span className="text-slate-600 text-start md:text-base text-sm">
          {formatNormalDate(blog.postProperties.createTime)}
        </span>
        <div className="w-1 h-1 bg-[#005245] rounded-full"></div>
        <div className="flex flex-row items-center gap-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
            />
          </svg>

          <span className="text-slate-800 font-normal text-start md:text-base text-sm">
            (0)
          </span>
        </div>
      </div>
      <p className="text-start mt-4 text-gray-500 italic md:text-base text-sm">
        {blog.postProperties.shortDescription}
      </p>
      <img
        className="object-cover object-center w-full rounded-lg md:h-96 h-64 mt-12"
        src={blog.postProperties.thumnail}
        alt="nature"
      />
      <div
        className="ckeditor-content mt-4"
        dangerouslySetInnerHTML={{ __html: processedContent }}
      />
      <hr className="my-8" />
      <div className="flex flex-wrap gap-x-3">
        {blog.postProperties.hashTag.map((hashtag) => {
          return (
            <div key={hashtag.id}>
              <button
                class="rounded-full border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-[#005245] hover:border-[#005245] focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                onClick={() => {
                  handleSelectHashtag(hashtag.id);
                }}
              >
                {hashtag.name}
              </button>
            </div>
          );
        })}
      </div>
      <hr className="my-8" />
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-xl font-semibold">Bài viết cùng chủ đề</h3>
        <button
          class="rounded-full border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Xem tất cả
        </button>
      </div>
      {isLoadingRelated && relatedBlog.length === 0 ? (
        <div className="w-full h-32 flex flex-row justify-center items-center">
          <svg
            class="text-gray-300 animate-spin"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path
              d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
              stroke="currentColor"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
              stroke="currentColor"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-gray-900"
            ></path>
          </svg>
        </div>
      ) : (
        <div className="flex flex-wrap grid md:grid-cols-3 grid-cols-2 gap-x-3 gap-y-4 mt-6">
          {relatedBlog.map((blog) => {
            return (
              <a href={`thu-vien/${blog.id}`} key={blog.postProperties.id}>
                <div>
                  <img
                    className="object-cover object-center w-full rounded-md md:h-40 h-24"
                    src={blog.postProperties.thumnail}
                    alt="nature"
                  />
                  <p className="mt-2 text-base font-medium">
                    {blog.postProperties.title}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      )}
      <hr className="my-8" />
      <BlogDetailsComment blog={blog} />
    </div>
  );
}

export default BlogDetailsContent;
