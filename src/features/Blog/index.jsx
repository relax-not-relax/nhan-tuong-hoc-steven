import React, { useEffect, useState } from "react";
import "./styles.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { BlogData } from "./BlogData";
import { PostCard } from "./PostCard";
import blog from "../../images/blog-3.jpg";
import logo from "../../images/logo_bg.png";
import PopularPost from "./PopularPost";
import { CategoriesData } from "./CategoriesData";
import CategoryPost from "./CategoryPost";
import blogAPI from "../../api/blogApi";
import formatNormalDate from "../../utils/formatNormalDate";
import { Button } from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export function BlogFeature() {
  const navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link, { replace: true });
    scroll.scrollToTop();
  };

  const [topics, setTopics] = useState([]);
  const [features, setFeatures] = useState([]);
  const [totalPages, setTotalPages] = useState(0); // Tổng số trang
  const [currentPage, setCurrentPage] = useState(0); // Trang hiện tại
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // Hàm chuyển trang
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      const pageSet = page - 1;
      searchParams.set("pageNumber", pageSet);
      setSearchParams(searchParams);
    }
  };

  // Tạo danh sách các nút phân trang
  const generatePagination = () => {
    const pages = [];
    const maxVisiblePages = 1; // Số trang hiển thị ở giữa (trước/sau trang hiện tại)

    if (totalPages <= 1) {
      pages.push(
        <button
          key={1}
          className={`w-10 h-10 flex justify-center items-center border-2 rounded-full border-[#005245] text-[#005245] font-medium`}
        >
          1
        </button>
      );
      return pages;
    }

    // Hiển thị trang đầu tiên
    pages.push(
      <button
        key={1}
        onClick={() => handlePageChange(1)}
        className={`w-10 h-10 flex justify-center items-center border-2 rounded-full ${currentPage === 1
            ? "border-[#005245] text-[#005245] font-medium"
            : "text-gray-700"
          }`}
      >
        1
      </button>
    );

    // Hiển thị dấu "..." nếu cần
    if (currentPage > maxVisiblePages + 1) {
      pages.push(
        <span
          key="start-dots"
          className="w-10 h-10 flex justify-center items-center"
        >
          ...
        </span>
      );
    }

    // Hiển thị các trang ở giữa
    const start = Math.max(2, currentPage - maxVisiblePages);
    const end = Math.min(totalPages - 1, currentPage + maxVisiblePages);

    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-10 h-10 flex justify-center items-center border-2 rounded-full ${currentPage === i
              ? "border-[#005245] text-[#005245] font-medium"
              : "text-gray-700"
            }`}
        >
          {i}
        </button>
      );
    }

    // Hiển thị dấu "..." nếu cần
    if (currentPage < totalPages - maxVisiblePages) {
      pages.push(
        <span
          key="end-dots"
          className="w-10 h-10 flex justify-center items-center"
        >
          ...
        </span>
      );
    }

    // Hiển thị trang cuối cùng
    pages.push(
      <button
        key={totalPages}
        onClick={() => handlePageChange(totalPages)}
        className={`w-10 h-10 flex justify-center items-center border-2 rounded-full ${currentPage === totalPages
            ? "border-[#005245] text-[#005245] font-medium"
            : "text-gray-700"
          }`}
      >
        {totalPages}
      </button>
    );

    return pages;
  };

  useEffect(() => {
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
    setIsLoading(true);
    const fetchBlogs = async () => {
      const pageSize = searchParams.get("pageSize") || 8;
      const pageNumber = searchParams.get("pageNumber") || 0;
      const sort = searchParams.get("sort") || "id,desc";
      try {
        const res = await blogAPI.getBlogs({
          pageNumber: pageNumber,
          pageSize: pageSize,
          sort: sort,
        });
        setBlogs(res.data.content);
        setTotalPages(res.data.totalPages);
        const number = res.data.pageable.pageNumber + 1;
        setCurrentPage(number);
        setIsLoading(false);
      } catch (error) {
        console.log("Failed to get blogs: ", error);
      }
    };

    fetchTopics();
    fetchFeatures();
    fetchBlogs();
  }, [searchParams]);

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
          {isLoading && blogs.length === 0 ? (
            <div className="flex-auto xl:w-2/5 sm:w-[30%] flex flex-row justify-center items-center h-24">
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
            </div>
          ) : (
            <div className="flex-auto xl:w-2/5 sm:w-[30%] gap-y-4 gap-x-4 grid sm:grid-cols-2 grid-cols-1 flex justify-start flex-wrap sm:pe-12">
              {blogs.map((val, index) => (
                <PostCard
                  key={index}
                  blog={val}
                  urlTarget={`thu-vien/${val.postProperties.id}`}
                />
              ))}
            </div>
          )}

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
                  <a
                    href="thu-vien/chu-de/bai-viet-noi-bat"
                    class="text-slate-600"
                  >
                    Xem tất cả
                  </a>
                </div>
                <div class="divide-y divide-slate-200">
                  {features.length === 0 ? (
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
                    <>
                      {features.map((val) => (
                        <PopularPost
                          key={val.postProperties.id}
                          urlTarget={`thu-vien/${val.postProperties.id}`}
                          thumbnail={val.postProperties.thumnail}
                          title={val.postProperties.title}
                          releaseDate={formatNormalDate(
                            val.postProperties.createTime
                          )}
                        />
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
            <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg max-w-lg sm:mt-12 mt-6">
              <div class="p-4">
                <h5 class="text-slate-800 xl:text-2xl sm:text-xl font-semibold lg:mb-4 sm:mb-2">
                  Khám phá
                </h5>
                <div class="divide-y divide-slate-200">
                  {topics.length === 0 ? (
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
                    <>
                      {topics.map((val, index) => (
                        <CategoryPost
                          key={val.id}
                          category={val}
                          index={index}
                        />
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-2 mb-24">
        {/* Nút Previous */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-10 h-10 flex justify-center items-center border rounded-full ${currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "text-gray-700"
            }`}
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </button>

        {/* Các nút phân trang */}
        {generatePagination()}

        {/* Nút Next */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-10 h-10 flex justify-center items-center border rounded-full ${currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "text-gray-700"
            }`}
        >
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default BlogFeature;
