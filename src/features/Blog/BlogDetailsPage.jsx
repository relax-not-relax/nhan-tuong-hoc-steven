import React from "react";
import "./styles.scss";
import { useParams } from "react-router-dom";
import CategoryPost from "./CategoryPost";
import blog from "../../images/blog-3.jpg";
import logo from "../../images/logo_bg.png";
import PopularPost from "./PopularPost";
import BlogDetailsContent from "./BlogDetailsContent";
import blogAPI from "../../api/blogApi";
import formatNormalDate from "../../utils/formatNormalDate";

BlogDetailsPage.propTypes = {};

function BlogDetailsPage(props) {
  const [blogDetails, setBlogDetails] = React.useState(null);
  const { id } = useParams();
  const [topics, setTopics] = React.useState([]);
  const [features, setFeatures] = React.useState([]);

  React.useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await blogAPI.getBlogById({ blogId: id });
        setBlogDetails(res.data);
      } catch (error) {
        console.log("Failed to get blog: ", error);
      }
    };
    const fetchTopics = async () => {
      try {
        const res = await blogAPI.getTopic();
        setTopics(res.data.content);
      } catch (error) {
        console.log("Failed to get topics: ", error);
      }
    };
    const fetchFeatures = async () => {
      try {
        const resFeature = await blogAPI.getBlogFeature({
          pageNumber: 0,
          pageSize: 3,
          sort: "id,desc",
        });
        setFeatures(resFeature.data.content);
      } catch (error) {
        console.log("Failed to get features: ", error);
      }
    };

    fetchBlog();
    fetchTopics();
    fetchFeatures();
  }, [id]);

  // Check if `blogDetails` is null before rendering
  if (!blogDetails) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
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
    );
  }

  return (
    <div className="w-full fit blog-details">
      <div className="blog-details__section-1 lg:h-[20vh] md:h-[25vh] h-[30vh]">
        <div className="blog-details__section-1-bg lg:h-[20vh] md:h-[25vh] h-[30vh]"></div>
      </div>
      <div className="w-full h-fit mt-12 flex justify-start px-24"></div>
      <div className="container h-fit px-2 min-[376px]:px-4 lg:px-10 2xl:px-32 mx-auto flex sm:flex-nowrap flex-wrap columns-3xs justify-between h-auto">
        <div className="grow lg:w-[70%] md:w-[60%] w-full md:pe-8 pe-0">
          <BlogDetailsContent blog={blogDetails} />
        </div>
        <div className="flex-none lg:w-[30%] md:w-[40%] w-full xl:ps-0 sm:ps-4 sm:mt-0 mt-8">
          <div class="relative grid xl:h-[35rem] lg:h-[30rem] sm:h-[25rem] max-w-lg flex-col items-end justify-center overflow-hidden rounded-lg bg-white">
            <div
              class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-center"
              style={{ backgroundImage: `url(${blog})` }}
            >
              <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/70"></div>
            </div>
            <div class="relative text-center lg:p-6 lg:px-6 lg:py-14 sm:px-4 sm:py-8 px-4 py-6">
              <h2 class="sm:mb-6 mb-2 xl:text-xl lg:text-lg sm:text-base font-medium text-white">
                Mình đang dần thay đổi bản thân tích cực hơn nhờ biết đến Huyền
                Học. Vì vậy mình dành nhiều thời gian để nghiên cứu, ứng dụng và
                chia sẻ những điều mình học được đến các bạn.
              </h2>
              <h5 class="mb-4 xl:text-xl sm:text-lg font-semibold text-slate-300">
                Steven
              </h5>
              <img
                alt="Steven"
                src={logo}
                class="relative inline-block xl:h-32 xl:w-32 lg:h-24 lg:w-24 sm:h-16 sm:w-16 h-20 w-20 rounded-full border border-white"
              />
            </div>
          </div>
          <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg max-w-lg sm:mt-12 mt-6">
            <div class="p-4">
              <div class="mb-4 flex items-center justify-between">
                <h5 class="text-slate-800 xl:text-2xl sm:text-xl font-semibold">
                  Blog nổi bật
                </h5>
                <a
                  href="thu-vien/chu-de/bai-viet-noi-bat"
                  class="text-slate-600"
                >
                  Xem tất cả
                </a>
              </div>
              <div class="divide-y divide-slate-200">
                {features.map((val) => (
                  <PopularPost
                    key={val.postProperties.id}
                    urlTarget={`${val.postProperties.id}`}
                    thumbnail={val.postProperties.thumnail}
                    title={val.postProperties.title}
                    releaseDate={formatNormalDate(
                      val.postProperties.createTime
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
          <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg max-w-lg sm:mt-12 mt-6">
            <div class="p-4">
              <h5 class="text-slate-800 xl:text-2xl sm:text-xl font-semibold lg:mb-4 sm:mb-2">
                Khám phá
              </h5>
              <div class="divide-y divide-slate-200">
                {topics.map((val, index) => (
                  <CategoryPost key={val.id} category={val} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailsPage;
