import React from "react";
import { useSearchParams } from "react-router-dom";
import blogAPI from "../../api/blogApi";
import { useSnackbar } from "notistack";
import { PostCard } from "./PostCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

function FilteredBlogs(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = React.useState(true);
  const [blogs, setBlogs] = React.useState([]);
  const [totalPages, setTotalPages] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(0);
  const { enqueueSnackbar } = useSnackbar();
  const [topicSelected, setTopicSelected] = React.useState(null);
  const [hashTagSelected, setHashTagSelected] = React.useState(null);

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
        className={`w-10 h-10 flex justify-center items-center border-2 rounded-full ${
          currentPage === 1
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
          className={`w-10 h-10 flex justify-center items-center border-2 rounded-full ${
            currentPage === i
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
        className={`w-10 h-10 flex justify-center items-center border-2 rounded-full ${
          currentPage === totalPages
            ? "border-[#005245] text-[#005245] font-medium"
            : "text-gray-700"
        }`}
      >
        {totalPages}
      </button>
    );

    return pages;
  };

  React.useEffect(() => {
    setIsLoading(true);
    const fetchFilteredBlogs = async () => {
      const pageSize = searchParams.get("pageSize") || 8;
      const pageNumber = searchParams.get("pageNumber") || 0;
      const sort = searchParams.get("sort") || "id,desc";
      const topic = searchParams.get("topic") || null;
      const hashtag = searchParams.get("hashtag") || null;
      try {
        const res = await blogAPI.getBlogs({
          pageNumber: pageNumber,
          pageSize: pageSize,
          sort: sort,
          topic: topic,
          hashtag: hashtag,
        });
        try {
          const resTopic = await blogAPI.getTopicById({ id: topic });
          setTopicSelected(resTopic.data);
        } catch (error) {
          enqueueSnackbar("Chủ đề không khả dung!", {
            variant: "error",
            autoHideDuration: 4000,
            anchorOrigin: { vertical: "top", horizontal: "right" },
          });
        }
        if (hashtag) {
          try {
            const resHashtag = await blogAPI.getHashtagById({ id: hashtag });
            setHashTagSelected(resHashtag.data);
          } catch (error) {
            enqueueSnackbar("Hashtag không khả dung!", {
              variant: "error",
              autoHideDuration: 4000,
              anchorOrigin: { vertical: "top", horizontal: "right" },
            });
          }
        }
        setBlogs(res.data.content);
        setTotalPages(res.data.totalPages);
        const number = res.data.pageable.pageNumber + 1;
        setCurrentPage(number);
        setIsLoading(false);
      } catch (error) {
        enqueueSnackbar("Trang không khả dung!", {
          variant: "error",
          autoHideDuration: 4000,
          anchorOrigin: { vertical: "top", horizontal: "right" },
        });
      }
    };

    fetchFilteredBlogs();
  }, [searchParams, enqueueSnackbar]);

  if ((isLoading && blogs.length === 0) || !topicSelected) {
    return (
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
    );
  }

  return (
    <div>
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
            {hashTagSelected ? (
              <>
                <li className="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
                  <a
                    href={`/thu-vien/chu-de?topic=${topicSelected.id}&pageNumber=0&pageSize=8&sort=id,desc`}
                    className="text-base"
                  >
                    {topicSelected.name}
                  </a>
                </li>
                <span class="pointer-events-none mx-2 text-slate-800">/</span>
                <li className="flex cursor-pointer items-center text-sm text-black transition-colors duration-300 hover:text-slate-800">
                  <a href="#" className="text-base font-semibold">
                    {hashTagSelected.hash_tag_name}
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="flex cursor-pointer items-center text-sm text-black transition-colors duration-300 hover:text-slate-800">
                  <a href="#" className="text-base font-semibold">
                    {topicSelected.name}
                  </a>
                </li>
              </>
            )}
          </ol>
        </nav>
      </div>
      {blogs.length === 0 ? (
        <div className="w-full mt-8 flex flex-row justify-start items-center">
          <p className="text-gray-500 text-lg italic">
            Không có bài viết thuộc hashtag bạn đã chọn!
          </p>
        </div>
      ) : (
        <div className="flex-auto w-full gap-y-4 gap-x-4 grid sm:grid-cols-2 grid-cols-1 flex justify-start flex-wrap mt-8">
          {blogs.map((val, index) => (
            <PostCard
              key={index}
              blog={val}
              urlTarget={`${val.postProperties.id}`}
            />
          ))}
        </div>
      )}

      <div className="flex justify-center items-center space-x-2 my-24">
        {/* Nút Previous */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-10 h-10 flex justify-center items-center border rounded-full ${
            currentPage === 1
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
          className={`w-10 h-10 flex justify-center items-center border rounded-full ${
            currentPage === totalPages
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

export default FilteredBlogs;
