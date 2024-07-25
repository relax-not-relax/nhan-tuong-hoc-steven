import React, { useEffect } from "react";
import "./styles.scss";
import course from "../../images/course-el.png";
import course1 from "../../images/course-el-1.png";
import blog1 from "../../images/blog-1.jpg";
import blog2 from "../../images/blog-2.jpg";
import blog3 from "../../images/blog-3.jpg";
import avatar from "../../images/avatar.jpg";
import coban from "../../images/coban.png";
import nangcao from "../../images/nangcao.png";
import nguoi from "../../images/nguoi.svg";
import decor2 from "../../images/decor-2.png";
import but from "../../images/but.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function CourseFeature() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);
  return (
    <div className="my-course">
      <div className="my-course__section-1 h-screen">
        <div className="h-screen my-course__section-1-bg"></div>
        <div className="py-14 min-[376px]:py-8 sm:py-0 h-screen my-course__section-1-content flex justify-center items-center">
          <div className="container px-4 min-[376px]:px-9 lg:px-24 xl:px-40 mx-auto flex-wrap sm:flex columns-3xs justify-between 2xl:pt-0 xl:pt-8">
            <div className="flex-1 grid justify-items-center columns-3xs content-center md:mb-0">
              <img src={course} alt="" className="w-4/6 sm:w-4/5" />
            </div>
            <div className="flex-1 w-full sm:w-3/5 grid justify-items-center h-auto content-center md:mt-0 min-[376px]:mt-4 mt-4">
              <h3 className="text-base min-[376px]:text-base md:text-2xl xl:text-3xl text-white xl:mb-2 md:mb-8 min-[376px]:mb-4 mb-4 my-course__section-1-content-title-1 prevent-select">
                Khóa học Nhân tướng
              </h3>
              <h2 className="xl:text-7xl md:text-5xl min-[376px]:text-4xl text-4xl xl:mt-8 my-course__section-1-content-title-2">
                Sắc - Thanh
              </h2>
              <h2 className="xl:text-7xl md:text-5xl min-[376px]:text-4xl text-4xl xl:mt-5 my-course__section-1-content-title-2">
                Hình - Thần
              </h2>
              <button
                type="button"
                className="prevent-select my-course__section-1-content-btn text-sm min-[376px]:text-sm sm:text-xl md:text-lg xl:text-xl md:py-3 md:px-5 xl:py-[0.6rem] xl:px-7 min-[376px]:py-2 min-[376px]:px-3 py-2 px-3 xl:mt-8 md:mt-10 min-[376px]:mt-4 mt-4"
              >
                Đăng ký tại đây
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 min-[376px]:py-12 md:py-16 xl:py-24 h-fit my-course__section-2 flex justify-center items-center">
        <div className="container mx-auto px-4 min-[376px]:px-9 sm:px-0">
          <div className="grid justify-items-center">
            <img
              src={course1}
              alt=""
              srcset=""
              className="h-40 object-cover mb-5"
            />
            <span className="text-xl min-[376px]:text-xl md:text-3xl xl:text-4xl my-course__section-2-title-1 mb-4 sm:mb-8 md:mb-6 xl:mb-6 prevent-select">
              Nội dung khóa học
            </span>
            <p className="text-sm min-[376px]:text-sm sm:text-xl md:text-lg xl:text-xl w-11/12 md:w-9/12 lg:w-8/12 text-white mb-8 sm:mb-14 md:mb-10 xl:mb-8 prevent-select">
              Khóa học bao gồm những kiến thức Nhân Tướng từ cơ bản đến nâng
              cao, đầy đủ 4 yếu tố cốt lỗi nhất của bộ môn này: hình tướng, sắc
              tướng, thanh tướng & thần tướng. Toàn bộ kiến thức được đúc kết từ
              nghiên cứu chuyên sâu và khảo sát dựa trên thực tế’ nhằm giúp bạn
              phát triển kỹ năng phân tích và thấu hiểu về con người.
            </p>
            <p className="text-xl min-[376px]:text-lg md:text-3xl xl:text-2xl mb-4 sm:mb-8 md:mb-6 xl:mb-6 prevent-select text-white font-semibold">
              Hình thức tham gia: Online qua Zoom
            </p>
          </div>
        </div>
      </div>
      <div className="my-course__section-3 h-fit">
        <div className="h-full my-course__section-3-bg"></div>
        <div className="py-8 min-[376px]:py-8 md:py-16 xl:py-24 h-fit my-course__section-3-content">
          <div className="grid justify-items-center">
            <h3 className="text-xl min-[376px]:text-xl md:text-2xl xl:text-4xl text-white xl:mb-6 md:mb-4 min-[376px]:mb-4 mb-4 prevent-select font-semibold uppercase">
              Học phí
            </h3>
            <p className="text-base min-[376px]:text-base md:text-2xl xl:text-3xl text-[#e2bf8a] font-semibold mb-4 sm:mb-8 md:mb-16 xl:mb-6 min-[376px]:w-[65%] w-[65%] sm:w-auto prevent-select text-hl p-4">
              Ưu đãi khi đăng ký cùng lúc 2 khóa Cơ bản & Nâng cao: 9.000.000 đ
            </p>
            <div className="container xl:px-32 mx-auto flex-wrap sm:flex columns-3xs justify-between xl:mt-10">
              <div className="flex-1 grid justify-items-center sm:justify-items-center columns-3xs content-center mt-8 min-[376px]:mt-8 sm:mt-8 md:mt-0 lg:h-[300px] md:h-[350px]">
                <div className="w-[90%] h-72 min-[376px]:h-72 xl:h-48 md:h-48 mb-2 rounded-3xl bg-white fee-banner relative xl:hover:h-[350px] lg:hover:h-[300px] md:hover:h-[350px]">
                  <img
                    src={coban}
                    alt=""
                    className="xl:w-52 md:w-40 min-[376px]:w-36 w-36 h-auto fee-banner-content-img absolute top-[-3%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                  />
                  <div className="fee-banner-content grid justify-items-center sm:py-0 min-[376px]:py-4 py-4 xl:h-[120px] md:h-[100px] min-[376px]:h-full h-full md:w-[100%] min-[376px]:w-[100%] w-[100%] absolute md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] overflow-hidden xl:hover:h-[300px] lg:hover:h-[270px] md:hover:h-[320px] md:hover:top-[50%]">
                    <div className="fee-banner-content-first grid justify-items-center sm:h-auto min-[376px]:h-[90px] h-[90px]">
                      <p className="xl:text-3xl md:text-2xl min-[376px]:text-lg text-lg font-semibold text-[#A14A21]">
                        4.000.000 ₫
                      </p>
                      <img
                        src={decor2}
                        alt=""
                        className="md:w-[100%] min-[376px]:w-[60%] w-[60%] h-auto"
                      />
                      <p className="xl:text-2xl md:text-xl min-[376px]:text-lg text-lg font-medium">
                        4 buổi học, 2 tiếng / buổi
                      </p>
                    </div>
                    <div className="fee-banner-content-second xl:mt-4 md:mt-3 w-[80%]">
                      <ul className="list-disc">
                        <li className="xl:text-lg min-[376px]:text-base text-sm font-medium">
                          Tổng quan về Nhân tướng học
                        </li>
                        <li className="xl:text-lg min-[376px]:text-base text-sm font-medium">
                          Tố chất & phẩm chất cần có khi học Nhân tướng
                        </li>
                        <li className="xl:text-lg min-[376px]:text-base text-sm font-medium">
                          Các nguyên lý: âm dương, ngũ hành
                        </li>
                        <li className="xl:text-lg min-[376px]:text-base text-sm font-medium">
                          Tam đình
                        </li>
                        <li className="xl:text-lg min-[376px]:text-base text-sm font-medium">
                          Các diện tướng và các bộ vị trên gương mặt
                        </li>
                        <li className="xl:text-lg min-[376px]:text-base text-sm font-medium">
                          Các bộ tướng phổ biến
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 grid justify-items-center sm:justify-items-center columns-3xs content-center mt-8 min-[376px]:mt-8 sm:mt-8 md:mt-0 lg:h-[300px] md:h-[350px]">
                <div className="w-[90%] h-72 min-[376px]:h-[310px] xl:h-48 md:h-48 mb-2 rounded-3xl bg-white fee-banner relative xl:hover:h-[350px] lg:hover:h-[300px] md:hover:h-[350px]">
                  <img
                    src={nangcao}
                    alt=""
                    className="xl:w-52 md:w-40 min-[376px]:w-36 w-36 h-auto fee-banner-content-img absolute top-[-3%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                  />
                  <div className="fee-banner-content grid justify-items-center sm:py-0 min-[376px]:py-4 py-4 xl:h-[120px] md:h-[100px] md:w-[100%] absolute md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] overflow-hidden xl:hover:h-[300px] lg:hover:h-[270px] md:hover:h-[320px] md:hover:top-[50%]">
                    <div className="fee-banner-content-first grid justify-items-center sm:h-auto min-[376px]:h-[90px] h-[90px]">
                      <p className="xl:text-3xl md:text-2xl min-[376px]:text-lg text-lg font-semibold text-[#A14A21]">
                        6.000.000 ₫
                      </p>
                      <img
                        src={decor2}
                        alt=""
                        className="md:w-[100%] min-[376px]:w-[60%] w-[60%] h-auto"
                      />
                      <p className="xl:text-2xl md:text-xl min-[376px]:text-lg text-lg font-medium">
                        6 buổi học, 2 tiếng / buổi
                      </p>
                    </div>
                    <div className="fee-banner-content-second xl:mt-4 md:mt-3 min-[376px]:mt-0 mt-2 md:w-[80%] w-[80%]">
                      <ul className="list-disc">
                        <li className="xl:text-lg min-[376px]:text-base text-sm font-medium">
                          Đoán mệnh và các cung trên gương mặt
                        </li>
                        <li className="xl:text-lg min-[376px]:text-base text-sm font-medium">
                          Cách nhận biết các dấu hiệu trong nhân tướng
                        </li>
                        <li className="xl:text-lg min-[376px]:text-base text-sm font-medium">
                          Phương pháp luận Sắc tướng, Thanh tướng & Thần tướng
                        </li>
                        <li className="xl:text-lg min-[376px]:text-base text-sm font-medium">
                          Diện tướng và bộ vị chuyên sâu
                        </li>
                      </ul>
                    </div>
                    <p className="xl:text-base min-[376px]:text-sm text-sm xl:mt-1 text-[#A14A21] font-bold italic min-[376px]:w-[90%] w-[90%] min-[376px]:pb-2 sm:pb-0 min-[376px]:mt-4 mt-2 text-left mb-0 min-[376px]:mb-4 sm:mb-0">
                      ***Khoá Nâng cao chỉ dành cho các học viên đã hoàn thành
                      xong Khoá Cơ Bản
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="prevent-select my-course__section-1-content-btn text-sm min-[376px]:text-sm sm:text-xl md:text-lg xl:text-xl md:py-3 md:px-5 xl:py-[0.6rem] xl:px-7 min-[376px]:py-2 min-[376px]:px-3 py-2 px-3 xl:mt-8 min-[376px]:mt-0 mt-4"
            >
              Đăng ký tại đây
            </button>
          </div>
        </div>
      </div>
      <div className="h-fit my-course__section-4 flex justify-center items-center relative overflow-y-auto">
        <div className="relative container mx-auto my-course__section-4-content flex justify-center items-center h-fit overflow-y-auto 2xl:py-20 xl:py-16 lg:py-10 md:py-8 py-6">
          <div className="grid justify-items-center content-center relative">
            <div className="relative 2xl:w-[35vw] xl:w-[35vw] lg:w-[35vw] md:w-[40vw] min-[376px]:w-[60vw] w-[70vw] 2xl:h-[100px]">
              <img
                src={nguoi}
                alt=""
                className="relative h-auto 2xl:w-[200px] xl:w-[150px] lg:w-[130px] md:w-[130px] min-[376px]:w-[100px] w-[100px]"
              />
              <h3 className="absolute text-left w-full top-[50%] 2xl:left-[75%] xl:left-[75%] lg:left-[75%] md:left-[80%] min-[376px]:left-[75%] left-[75%] translate-x-[-50%] translate-y-[-50%] 2xl:text-5xl xl:text-4xl lg:text-2xl md:text-xl min-[376px]:text-lg text-lg font-bold text-[#A14A21]">
                Đối tượng học viên
              </h3>
            </div>
            <p className="text-left 2xl:w-[60vw] xl:w-[65vw] lg:w-[70vw] md:w-[70vw] min-[376px]:w-[60vw] w-[70vw] xl:text-lg 2xl:text-xl lg:text-base md:text-sm min-[376px]:text-sm text-sm xl:mt-4 lg:mt-4 md:mt-2 min-[376px]:mt-2">
              Dành cho người có đam mê nghiên cứu bộ môn Nhân tướng, người đang
              hoạt động trong các lĩnh vực tiếp xúc thường xuyên với con người
              như: tư vấn, nhân sự, quản lý, bán hàng, làm đẹp... hoặc bất cứ ai
              mong muốn phát triển kỹ năng nhận định và đánh giá con người trong
              các mối quan hệ xã hội, đồng thời cải thiện nhân tướng cho chính
              bản thân.
            </p>
            <div className="relative 2xl:w-[35vw] xl:w-[35vw] lg:w-[35vw] md:w-[40vw] min-[376px]:w-[60vw] w-[70vw] 2xl:h-[100px] xl:h-[75px] lg:h-[60px] md:h-[55px] min-[376px]:h-[50px] h-[40px] grid justify-items-center content-center">
              <h3 className="relative text-center w-full 2xl:text-5xl xl:text-4xl lg:text-2xl md:text-xl min-[376px]:text-lg text-lg font-bold text-[#A14A21]">
                Kết quả kỳ vọng
              </h3>
              <img
                src={but}
                alt=""
                className="absolute translate-x-[-50%] translate-y-[-50%] xl:right-[-20px] xl:bottom-[-35px] 2xl:bottom-[-40px] lg:right-[-20px] lg:bottom-[-30px] md:right-[-40px] md:bottom-[-30px] min-[376px]:right-[-30px] min-[376px]:bottom-[-30px] right-[-40px] bottom-[-30px] h-auto 2xl:w-[200px] xl:w-[150px] lg:w-[130px] md:w-[130px] min-[376px]:w-[100px] w-[100px]"
              />
            </div>
            <ul className="text-left list-none">
              <li>
                <p className="2xl:mb-2 text-left 2xl:w-[60vw] xl:w-[65vw] lg:w-[70vw] md:w-[70vw] min-[376px]:w-[60vw] w-[70vw] xl:text-lg 2xl:text-xl lg:text-base md:text-sm min-[376px]:text-sm text-sm mt-2">
                  <span className="font-bold">
                    1. Nhận định và phân tích nhanh về khuôn mặt:{" "}
                  </span>
                  Học viên sẽ được trang bị những kỹ năng cần thiết để nhận biết
                  và phân tích bất kỳ khuôn mặt nào, thông qua đó dự đoán được
                  vận mệnh, sức khỏe, tình cảm của một người.
                </p>
              </li>
              <li>
                <p className="2xl:mb-2 text-left 2xl:w-[60vw] xl:w-[65vw] lg:w-[70vw] md:w-[70vw] min-[376px]:w-[60vw] w-[70vw] xl:text-lg 2xl:text-xl lg:text-base md:text-sm min-[376px]:text-sm text-sm">
                  <span className="font-bold">
                    2. Tăng cường khả năng thấu hiểu đối phương trong giao tiếp:{" "}
                  </span>
                  Khóa học sẽ giúp học viên nâng cao khả năng nắm bắt tâm lý
                  trong giao tiếp, thông qua đó tùy chọn cách ứng xử cho phù hợp
                  với từng hoàn cảnh, con người cụ thể.
                </p>
              </li>
              <li>
                <p className="2xl:mb-2 text-left 2xl:w-[60vw] xl:w-[65vw] lg:w-[70vw] md:w-[70vw] min-[376px]:w-[60vw] w-[70vw] xl:text-lg 2xl:text-xl lg:text-base md:text-sm min-[376px]:text-sm text-sm">
                  <span className="font-bold">
                    3. Tăng cường khả năng phân tích và quản lý nhân sự:{" "}
                  </span>
                  Học viên sẽ được học cách phân tích và đánh giá nhanh chóng
                  năng lực của người đối diện, giúp họ đưa ra quyết định chính
                  xác trong việc lựa chọn nhân sự hay chọn người cộng tác.
                </p>
              </li>
              <li>
                <p className="2xl:mb-2 text-left 2xl:w-[60vw] xl:w-[65vw] lg:w-[70vw] md:w-[70vw] min-[376px]:w-[60vw] w-[70vw] xl:text-lg 2xl:text-xl lg:text-base md:text-sm min-[376px]:text-sm text-sm">
                  <span className="font-bold">
                    4. Tự hiểu và phát triển bản thân:{" "}
                  </span>
                  Khóa học sẽ giúp học viên hiểu rõ hơn về bản thân, từ đó phát
                  triển mạnh hơn các tố chất và kỹ năng cá nhân.
                </p>
              </li>
            </ul>
            <div className="lg:w-full md:w-[80vw] w-[90vw] flex items-center justify-start h-auto bg-[#4E4836] rounded-full border-[#DBAF6D] border-2 mt-8">
              <div className="2xl:p-4 xl:p-4 md:p-3 p-3 bg-[#4E4836] rounded-full border-2 border-[#DBAF6D]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="comments"
                  className="h-auto 2xl:w-[50px] xl:w-[40px] md:w-[30px] min-[376px]:w-[40px] w-[30px]"
                >
                  <path
                    fill="#fff"
                    d="M20.61,19.19A7,7,0,0,0,17.87,8.62,8,8,0,1,0,3.68,14.91L2.29,16.29a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,18H8.69A7,7,0,0,0,15,22h6a1,1,0,0,0,.92-.62,1,1,0,0,0-.21-1.09ZM8,15a6.63,6.63,0,0,0,.08,1H5.41l.35-.34a1,1,0,0,0,0-1.42A5.93,5.93,0,0,1,4,10a6,6,0,0,1,6-6,5.94,5.94,0,0,1,5.65,4c-.22,0-.43,0-.65,0A7,7,0,0,0,8,15ZM18.54,20l.05.05H15a5,5,0,1,1,3.54-1.46,1,1,0,0,0-.3.7A1,1,0,0,0,18.54,20Z"
                  ></path>
                </svg>
              </div>
              <p className="2xl:text-xl xl:text-lg md:text-base min-[376px]:text-sm text-xs xl:px-4 md:px-4 min-[376px]:px-4 px-2 text-white font-bold text-left">
                Tìm hiểu thêm về Khoá học tại{" "}
                <span className="text-[#E7C99D] underline">
                  <a href="/">Các câu hỏi thường gặp</a>
                </span>{" "}
                hoặc liên hệ Team Đào tạo qua Zalo:{" "}
                <span className="text-[#E7C99D] underline">
                  <a href="+84 938439554">093.843.9554</a>
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-course__section-5">
        <div className="my-course__section-5-content flex justify-center items-center py-8 px-4 min-[376px]:py-12 min-[376px]:px-0 lg:py-16 lg:px-0 md:px-0 md:py-12 xl:px-0 xl:py-16">
          <div className="container mx-auto px-0 min-[376px]:px-9 lg:px-24 xl:px-40">
            <div className="grid justify-items-center">
              <h3 className="text-base min-[376px]:text-base md:text-xl xl:text-2xl text-white xl:mb-2 prevent-select">
                Khám phá
              </h3>
              <div className="my-course__section-5-content-title h-[2rem] min-[376px]:h-[2rem] md:h-12 xl:h-14 lg:h-10">
                <div
                  className="title-decoration w-[4.7rem] min-[376px]:w-[4.7rem] md:w-[8.5rem] xl:w-44 xl:h-6 lg:h-4 md:h-6 sm:h-4 min-[376px]:h-4 h-4"
                  data-aos="slide-left"
                  data-aos-once="true"
                ></div>
                <h2 className="text-white text-xl min-[376px]:text-xl md:text-4xl xl:text-5xl title-text prevent-select">
                  <span className="font-bold">Thư viện </span>bài viết
                </h2>
              </div>
              <p className="text-sm min-[376px]:text-sm sm:text-xl md:text-lg xl:text-xl text-white text-center md:w-ull lg:w-2/5 xl:w-5/12 pt-4 min-[376px]:pt-4 md:pt-6 xl:pt-8 prevent-select">
                Kho kiến thức nhân tướng dành cho các thành viên yêu thích luận
                tướng dạo.
              </p>
              <div class="mx-auto mt-4 min-[376px]:mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:mb-12 md:mb-16 min-[376px]:mb-8 mb-8">
                <article class="flex max-w-xl flex-col items-start justify-start my-blog">
                  <div
                    className="w-full h-52 min-[376px]:h-56 xl:h-60 md:h-60 mb-2 rounded-3xl"
                    style={{
                      background: `url(${blog1})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="blog-content">
                    <div class="flex items-center gap-x-4 text-xs">
                      <time
                        datetime="2020-03-16"
                        class="text-white prevent-select"
                      >
                        12/06/2024
                      </time>
                    </div>
                    <div class="mt-2 group relative">
                      <h3 class="text-lg font-semibold leading-6 text-white text-start prevent-select">
                        <a href="/">
                          <span class="absolute inset-0 prevent-select"></span>
                          Boost your conversion rate
                        </a>
                      </h3>
                      <p class="mt-2 line-clamp-3 text-sm leading-6 text-white text-start prevent-select">
                        Illo sint voluptas. Error voluptates culpa eligendi. Hic
                        vel totam vitae illo. Non aliquid explicabo
                        necessitatibus unde. Sed exercitationem placeat
                        consectetur nulla deserunt vel. Iusto corrupti dicta.
                      </p>
                    </div>
                    <div class="relative mt-3 flex items-center gap-x-4">
                      <img
                        src={avatar}
                        alt=""
                        class="h-10 w-10 rounded-full bg-gray-50"
                      />
                      <div class="text-sm leading-6">
                        <p class="font-semibold text-white text-start prevent-select">
                          <a href="/">
                            <span class="absolute inset-0 prevent-select"></span>
                            Steven Tran
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </article>

                <article class="flex max-w-xl flex-col items-start justify-start my-blog">
                  <div
                    className="w-full h-52 min-[376px]:h-56 xl:h-60 md:h-60 mb-2 rounded-3xl"
                    style={{
                      background: `url(${blog2})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="blog-content">
                    <div class="flex items-center gap-x-4 text-xs">
                      <time
                        datetime="2020-03-16"
                        class="text-white prevent-select"
                      >
                        12/06/2024
                      </time>
                    </div>
                    <div class="mt-2 group relative">
                      <h3 class="text-lg font-semibold leading-6 text-white text-start prevent-select">
                        <a href="/">
                          <span class="absolute inset-0 prevent-select"></span>
                          Boost your conversion rate
                        </a>
                      </h3>
                      <p class="mt-2 line-clamp-3 text-sm leading-6 text-white text-start prevent-select">
                        Illo sint voluptas. Error voluptates culpa eligendi. Hic
                        vel totam vitae illo. Non aliquid explicabo
                        necessitatibus unde. Sed exercitationem placeat
                        consectetur nulla deserunt vel. Iusto corrupti dicta.
                      </p>
                    </div>
                    <div class="relative mt-3 flex items-center gap-x-4">
                      <img
                        src={avatar}
                        alt=""
                        class="h-10 w-10 rounded-full bg-gray-50"
                      />
                      <div class="text-sm leading-6">
                        <p class="font-semibold text-white text-start prevent-select">
                          <a href="/">
                            <span class="absolute inset-0 prevent-select"></span>
                            Steven Tran
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </article>

                <article class="flex max-w-xl flex-col items-start justify-start my-blog">
                  <div
                    className="w-full h-52 min-[376px]:h-56 xl:h-60 md:h-60 mb-2 rounded-3xl"
                    style={{
                      background: `url(${blog3})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="blog-content">
                    <div class="flex items-center gap-x-4 text-xs">
                      <time
                        datetime="2020-03-16"
                        class="text-white prevent-select"
                      >
                        12/06/2024
                      </time>
                    </div>
                    <div class="mt-2 group relative">
                      <h3 class="text-lg font-semibold leading-6 text-white text-start prevent-select">
                        <a href="/">
                          <span class="absolute inset-0 prevent-select"></span>
                          Boost your conversion rate
                        </a>
                      </h3>
                      <p class="mt-2 line-clamp-3 text-sm leading-6 text-white text-start prevent-select">
                        Illo sint voluptas. Error voluptates culpa eligendi. Hic
                        vel totam vitae illo. Non aliquid explicabo
                        necessitatibus unde. Sed exercitationem placeat
                        consectetur nulla deserunt vel. Iusto corrupti dicta.
                      </p>
                    </div>
                    <div class="relative mt-3 flex items-center gap-x-4">
                      <img
                        src={avatar}
                        alt=""
                        class="h-10 w-10 rounded-full bg-gray-50"
                      />
                      <div class="text-sm leading-6">
                        <p class="font-semibold text-white text-start prevent-select">
                          <a href="/">
                            <span class="absolute inset-0 prevent-select"></span>
                            Steven Tran
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <button
                type="button"
                className="prevent-select my-course__section-5-btn text-sm min-[376px]:text-sm sm:text-xl md:text-lg xl:text-xl md:py-3 md:px-12 xl:py-[0.6rem] xl:px-16 min-[376px]:py-2 min-[376px]:px-5 py-2 px-5"
              >
                Xem tất cả
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseFeature;
