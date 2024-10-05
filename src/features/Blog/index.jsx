import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { BlogData } from "./BlogData";
import { PostCard } from "./PostCard";
import blog from "../../images/blog-3.jpg";
import logo from "../../images/logo_bg.png";
import PopularPost from "./PopularPost";
import { CategoriesData } from "./CategoriesData";
import CategoryPost from "./CategoryPost";

export function BlogFeature() {
  const navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link, { replace: true });
    scroll.scrollToTop();
  };
  return (
    <div className="my-blog">
      <div className="my-blog__section-1">
        <div className="my-blog__section-1-content flex justify-center items-center py-8 px-4 min-[376px]:py-12 min-[376px]:px-0 lg:py-16 lg:px-0 md:px-0 md:py-12 xl:px-0 xl:py-16">
          <div className="container mx-auto px-0 min-[376px]:px-9 lg:px-24 xl:px-40">
            <div className="grid justify-items-center">
              <h3 className="text-xl min-[376px]:text-xl md:text-3xl xl:text-5xl my-blog__section-1-title-1 prevent-select text-white font-bold">
                “Mình là Steven,
              </h3>
              <span className="text-xl min-[376px]:text-xl md:text-3xl xl:text-4xl my-blog__section-1-title-2 mb-4 sm:mb-8 md:mb-6 xl:mb-8 prevent-select text-white">
                thích tắm biển và luận tướng dạo”
              </span>
              <p className="text-sm min-[376px]:text-sm sm:text-xl md:text-lg xl:text-xl w-11/12 md:w-9/12 lg:w-8/12 text-white mb-8 sm:mb-14 md:mb-10 xl:mb-14 prevent-select">
                Mình đang dần thay đổi bản thân tích cực hơn nhờ biết đến Huyền
                Học. Vì vậy mình dành nhiều thời gian để nghiên cứu, ứng dụng và
                chia sẻ những điều mình học được đến các bạn.
              </p>
              <button
                type="button"
                className=" prevent-select my-blog__section-1-btn-1 text-sm min-[376px]:text-sm sm:text-xl md:text-lg xl:text-xl py-2 px-3 min-[376px]:py-2 min-[376px]:px-3 md:py-3 md:px-5 xl:py-[0.6rem] xl:px-7"
                onClick={() => handleNavigate("/lien-he")}
              >
                Tìm hiểu thêm
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-blog__section-2 h-fit flex justify-center items-center sm:pt-20 sm:pb-8 pt-8 pb-2">
        <div className="container px-2 min-[376px]:px-4 lg:px-10 2xl:px-32 mx-auto flex sm:flex-nowrap flex-wrap columns-3xs justify-between h-auto">
          <div className="flex-auto xl:w-2/5 sm:w-[30%] gap-y-4 xl:gap-x-0 gap-x-4 grid sm:grid-cols-2 grid-cols-1 flex justify-start flex-wrap">
            {BlogData.map((val, index) => (
              <PostCard
                key={index}
                thumbnail={val.thumbnail}
                releaseDate={val.releaseDate}
                title={val.title}
                content={val.content}
              />
            ))}
          </div>
          <div className="flex-1 xl:ps-0 sm:ps-4 sm:mt-0 mt-8">
            <div class="relative grid xl:h-[35rem] lg:h-[30rem] sm:h-[25rem] max-w-lg flex-col items-end justify-center overflow-hidden rounded-lg bg-white">
              <div
                class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-center"
                style={{ backgroundImage: `url(${blog})` }}
              >
                <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/70"></div>
              </div>
              <div class="relative text-center lg:p-6 lg:px-6 lg:py-14 sm:px-4 sm:py-8 px-4 py-6">
                <h2 class="sm:mb-6 mb-2 xl:text-xl lg:text-lg sm:text-base font-medium text-white">
                  Mình đang dần thay đổi bản thân tích cực hơn nhờ biết đến
                  Huyền Học. Vì vậy mình dành nhiều thời gian để nghiên cứu, ứng
                  dụng và chia sẻ những điều mình học được đến các bạn.
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
                  {BlogData.slice(0, 5).map((val, index) => (
                    <PopularPost
                      key={index}
                      thumbnail={val.thumbnail}
                      title={val.title}
                      releaseDate={val.releaseDate}
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
                  {CategoriesData.map((val, index) => (
                    <CategoryPost
                      key={index}
                      category={val.category}
                      amount={val.amount}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center sm:pb-20 pb-8">
        <div class="flex space-x-1">
          <button class="rounded-full border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-[#005245] hover:border-slate-800 focus:text-white focus:bg-[#005245] focus:border-slate-800 active:border-slate-800 active:text-white active:bg-[#005245] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
            Prev
          </button>
          <button class="min-w-9 rounded-full border border-slate-300 py-2 px-3.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-[#005245] hover:border-slate-800 focus:text-white focus:bg-[#005245] focus:border-slate-800 active:border-slate-800 active:text-white active:bg-[#005245] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
            1
          </button>
          <button class="min-w-9 rounded-full border border-slate-300 py-2 px-3.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-[#005245] hover:border-slate-800 focus:text-white focus:bg-[#005245] focus:border-slate-800 active:border-slate-800 active:text-white active:bg-[#005245] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
            2
          </button>
          <button class="min-w-9 rounded-full border border-slate-300 py-2 px-3.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-[#005245] hover:border-slate-800 focus:text-white focus:bg-[#005245] focus:border-slate-800 active:border-slate-800 active:text-white active:bg-[#005245] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
            3
          </button>
          <button class="min-w-9 rounded-full border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-[#005245] hover:border-slate-800 focus:text-white focus:bg-[#005245] focus:border-slate-800 active:border-slate-800 active:text-white active:bg-[#005245] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogFeature;
