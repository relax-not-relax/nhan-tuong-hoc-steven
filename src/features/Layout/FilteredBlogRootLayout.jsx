import React from "react";
import blogAPI from "../../api/blogApi";
import CategoryPost from "../Blog/CategoryPost";
import blog from "../../images/blog-3.jpg";
import logo from "../../images/logo_bg.png";
import PopularPost from "../Blog/PopularPost";
import formatNormalDate from "../../utils/formatNormalDate";
import { Outlet } from "react-router-dom";

function FilteredBlogRootLayout(props) {
  const [topics, setTopics] = React.useState([]);
  const [features, setFeatures] = React.useState([]);

  React.useEffect(() => {
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
        const resFeature = await blogAPI.getBlogFeature();
        setFeatures(resFeature.data.content);
      } catch (error) {
        console.log("Failed to get features: ", error);
      }
    };

    fetchTopics();
    fetchFeatures();
  }, []);

  return (
    <div className="w-full fit blog-details">
      <div className="blog-details__section-1 lg:h-[20vh] md:h-[25vh] h-[30vh]">
        <div className="blog-details__section-1-bg lg:h-[20vh] md:h-[25vh] h-[30vh]"></div>
      </div>
      <div className="w-full h-fit mt-12 flex justify-start px-24"></div>
      <div className="container h-fit px-2 min-[376px]:px-4 lg:px-10 2xl:px-32 mx-auto flex sm:flex-nowrap flex-wrap columns-3xs justify-between h-auto">
        <div className="grow w-full md:pe-8 pe-0">
          <Outlet />
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
                <a href="/" class="text-slate-600">
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

export default FilteredBlogRootLayout;
