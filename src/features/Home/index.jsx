import React from "react";
import "./styles.scss";
import eye from "../../images/eye.png";
import youtube from "../../images/yt-white.png";
import tiktok from "../../images/tt-white.png";
import facebook from "../../images/fb-white.png";
import ins from "../../images/ins-white.png";
import threads from "../../images/threads-white.png";
import trochuyen from "../../images/trochuyen.png";
import blog1 from "../../images/blog-1.jpg";
import blog2 from "../../images/blog-2.jpg";
import blog3 from "../../images/blog-3.jpg";
import avatar from "../../images/avatar.jpg";

function HomeFeature() {
  return (
    <div>
      <div className="my-home px-4 min-[376px]:px-0 sm:px-0">
        <div className="h-3/5"></div>
        <h1 className="text-2xl min-[376px]:text-3xl sm:text-6xl xl:text-8xl my-home-title">
          Nhân tướng học steven
        </h1>
        <div className="container mx-auto flex flex-wrap min-[376px]:flex-nowrap sm:flex-nowrap justify-center mt-10">
          <button
            type="button"
            className="my-home-btn-1 text-base min-[376px]:text-base sm:text-3xl py-3 px-4 min-[376px]:py-3 min-[376px]:px-4 sm:py-5 sm:px-7 mb-2 min-[375px]:mb-0"
          >
            Đăng ký khóa học
          </button>
          <div className="w-2 min-[376px]:w-4 sm:w-10 hidden min-[375px]:block"></div>
          <button
            type="button"
            className="my-home-btn-2 text-base sm:text-3xl py-3 px-8 min-[376px]:py-3 min-[376px]:px-8 sm:py-5 sm:px-12"
          >
            Đặt lịch tư vấn
          </button>
        </div>
      </div>
      <div className="py-14 min-[376px]:py-24 sm:py-0 h-fit sm:h-screen my-home__section-2 flex justify-center items-center">
        <div className="container mx-auto px-4 min-[376px]:px-9 sm:px-0">
          <div className="grid justify-items-center">
            <img
              src={eye}
              alt=""
              srcset=""
              className="h-32 object-cover mb-5"
            />
            <span className="text-xl min-[376px]:text-2xl md:text-5xl lg:text-6xl my-home__section-2-title-1">
              “Mình là Steven,
            </span>
            <span className="text-xl min-[376px]:text-2xl md:text-5xl lg:text-6xl my-home__section-2-title-2 mb-4 sm:mb-14">
              thích tắm biển và luận tướng dạo”
            </span>
            <p className="text-sm min-[376px]:text-base sm:text-2xl w-11/12 md:w-9/12 lg:w-8/12 text-white mb-14 sm:mb-28">
              Mình đang dần thay đổi bản thân tích cực hơn nhờ biết đến Huyền
              Học. Vì vậy mình dành nhiều thời gian để nghiên cứu, ứng dụng và
              chia sẻ những điều mình học được đến các bạn.
            </p>
            <button
              type="button"
              className="my-home__section-2-btn text-base sm:text-2xl"
            >
              Đăng ký khóa học
            </button>
          </div>
        </div>
      </div>
      <div className="h-fit sm:h-screen my-home__section-3">
        <div className="h-fit sm:h-screen my-home__section-3-bg"></div>
        <div className="py-14 min-[376px]:py-24 sm:py-0 h-fit sm:h-screen my-home__section-3-content flex justify-center items-center">
          <div className="container mx-auto px-4 min-[376px]:px-9 xl:px-0">
            <div className="grid justify-items-start mb-24">
              <h3 className="text-base min-[376px]:text-xl md:text-2xl lg:text-3xl text-white mb-4">
                Theo dõi Steven tại
              </h3>
              <div className="my-home__section-3-content-title h-10 min-[376px]:h-12 md:h-14 lg:h-16">
                <div className="title-decoration w-32 min-[376px]:w-40 md:w-64 lg:w-80"></div>
                <h2 className="text-white text-2xl min-[376px]:text-3xl md:text-5xl lg:text-6xl title-text">
                  <span className="font-bold">Các nền tảng </span>chính thức
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-7 content-center justify-items-center">
              <div className="justify-self-center">
                <div className="social-el p-3 sm:p-10 w-14 h-14 min-[376px]:w-16 min-[376px]:h-16 md:w-32 lg:w-44 md:h-32 lg:h-44">
                  <a
                    href="https://www.youtube.com/@nhantuonghocsteven"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={youtube} alt="" className="w-24 h-auto" />
                  </a>
                </div>

                <p className="mt-12 text-white text-sm min-[376px]:text-base sm:text-2xl">
                  Youtube
                </p>
              </div>
              <div className="justify-self-center">
                <div className="social-el p-3 sm:p-10 w-14 h-14 min-[376px]:w-16 min-[376px]:h-16 md:w-32 lg:w-44 md:h-32 lg:h-44">
                  <a
                    href="https://www.tiktok.com/@nt_steven89"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={tiktok} alt="" className="w-24 h-auto" />
                  </a>
                </div>

                <p className="mt-12 text-white text-sm min-[376px]:text-base sm:text-2xl">
                  TikTok
                </p>
              </div>
              <div className="justify-self-center">
                <div className="social-el p-3 sm:p-10 w-14 h-14 min-[376px]:w-16 min-[376px]:h-16 md:w-32 lg:w-44 md:h-32 lg:h-44">
                  <a
                    href="https://www.facebook.com/profile.php?id=100086759123604"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={facebook} alt="" className="w-24 h-auto" />
                  </a>
                </div>

                <p className="mt-12 text-white text-sm min-[376px]:text-base sm:text-2xl">
                  Facebook
                </p>
              </div>
              <div className="justify-self-center">
                <div className="social-el p-3 sm:p-10 w-14 h-14 min-[376px]:w-16 min-[376px]:h-16 md:w-32 lg:w-44 md:h-32 lg:h-44">
                  <a
                    href="https://www.instagram.com/nthsteven/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={ins} alt="" className="w-24 h-auto" />
                  </a>
                </div>

                <p className="mt-12 text-white text-sm min-[376px]:text-base sm:text-2xl">
                  Instagram
                </p>
              </div>
              <div className="justify-self-center">
                <div className="social-el p-3 sm:p-10 w-14 h-14 min-[376px]:w-16 min-[376px]:h-16 md:w-32 lg:w-44 md:h-32 lg:h-44">
                  <a
                    href="https://www.threads.net/@nthsteven"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={threads} alt="" className="w-24 h-auto" />
                  </a>
                </div>

                <p className="mt-12 text-white text-sm min-[376px]:text-base sm:text-2xl">
                  Threads
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen px-4 min-[376px]:px-9 xl:px-0 my-home__section-4 flex justify-center items-center">
        <div className="container mx-auto flex-wrap sm:flex columns-3xs justify-between">
          <div className="flex-none w-full sm:w-3/5 grid justify-items-start h-auto content-center">
            <h3 className="text-base min-[376px]:text-xl md:text-2xl lg:text-3xl text-white mb-4">
              Dành cho bạn
            </h3>
            <div className="my-home__section-3-content-title h-10 min-[376px]:h-12 md:h-14 lg:h-16">
              <div className="title-decoration w-20 min-[376px]:w-24 md:w-36 lg:w-48"></div>
              <h2 className="text-white text-2xl min-[376px]:text-3xl md:text-5xl lg:text-6xl title-text">
                <span className="font-bold">Tâm sự </span>cùng Steven
              </h2>
            </div>
            <p className="mt-4 sm:mt-14 text-sm min-[376px]:text-base sm:text-2xl text-white text-start md:w-9/12 lg:w-3/5 mb-8 sm:mb-12">
              Nơi bạn có thể thoải mái tâm sự chia sẻ, đồng thời nhận được sự tư
              vấn và định hướng cho các vấn đề chưa thể giải quyết và những lựa
              chọn khó khăn trong cuộc sống.
            </p>
            <button
              type="button"
              className="my-home__section-4-btn text-base sm:text-2xl sm:mb-0 mb-12"
            >
              Đặt lịch tại đây
            </button>
          </div>
          <div className="flex-1 grid justify-items-center sm:justify-items-end columns-3xs content-center">
            <img src={trochuyen} alt="" className="w-4/6 sm:w-full" />
          </div>
        </div>
      </div>
      <div className="my-home__section-5">
        <div className="my-home__section-5-content flex justify-center items-center py-24 md:py-32 px-9 xl:px-0">
          <div className="container mx-auto">
            <div className="grid justify-items-center">
              <h3 className="text-base min-[376px]:text-xl md:text-2xl lg:text-3xl text-white mb-4">
                Khám phá
              </h3>
              <div className="my-home__section-5-content-title h-10 min-[376px]:h-12 md:h-14 lg:h-16">
                <div className="title-decoration w-24 min-[376px]:w-24 md:w-36 lg:w-56"></div>
                <h2 className="text-white text-2xl min-[376px]:text-3xl md:text-5xl lg:text-6xl title-text">
                  <span className="font-bold">Thư viện </span>bài viết
                </h2>
              </div>
              <p className="mt-4 sm:mt-14 text-sm min-[376px]:text-base sm:text-2xl text-white text-center md:w-9/12 lg:w-2/5 xl:w-4/12 mb-0 sm:mb-8">
                Kho kiến thức nhân tướng dành cho các thành viên yêu thích luận
                tướng dạo.
              </p>
              <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 mb-12 sm:mb-24">
                <article class="flex max-w-xl flex-col items-start justify-between my-blog">
                  <div
                    className="w-full h-72 mb-4 rounded-3xl"
                    style={{
                      background: `url(${blog1})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div class="flex items-center gap-x-4 text-xs">
                    <time datetime="2020-03-16" class="text-white">
                      12/06/2024
                    </time>
                  </div>
                  <div class="group relative">
                    <h3 class="mt-3 text-lg font-semibold leading-6 text-white text-start">
                      <a href="/">
                        <span class="absolute inset-0"></span>
                        Boost your conversion rate
                      </a>
                    </h3>
                    <p class="mt-5 line-clamp-3 text-sm leading-6 text-white text-start">
                      Illo sint voluptas. Error voluptates culpa eligendi. Hic
                      vel totam vitae illo. Non aliquid explicabo necessitatibus
                      unde. Sed exercitationem placeat consectetur nulla
                      deserunt vel. Iusto corrupti dicta.
                    </p>
                  </div>
                  <div class="relative mt-8 flex items-center gap-x-4">
                    <img
                      src={avatar}
                      alt=""
                      class="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div class="text-sm leading-6">
                      <p class="font-semibold text-white text-start">
                        <a href="/">
                          <span class="absolute inset-0"></span>
                          Steven Tran
                        </a>
                      </p>
                    </div>
                  </div>
                </article>

                <article class="flex max-w-xl flex-col items-start justify-between my-blog">
                  <div
                    className="w-full h-72 mb-4 rounded-3xl"
                    style={{
                      background: `url(${blog2})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div class="flex items-center gap-x-4 text-xs">
                    <time datetime="2020-03-16" class="text-white">
                      12/06/2024
                    </time>
                  </div>
                  <div class="group relative">
                    <h3 class="mt-3 text-lg font-semibold leading-6 text-white text-start">
                      <a href="/">
                        <span class="absolute inset-0"></span>
                        Boost your conversion rate
                      </a>
                    </h3>
                    <p class="mt-5 line-clamp-3 text-sm leading-6 text-white text-start">
                      Illo sint voluptas. Error voluptates culpa eligendi. Hic
                      vel totam vitae illo. Non aliquid explicabo necessitatibus
                      unde. Sed exercitationem placeat consectetur nulla
                      deserunt vel. Iusto corrupti dicta.
                    </p>
                  </div>
                  <div class="relative mt-8 flex items-center gap-x-4">
                    <img
                      src={avatar}
                      alt=""
                      class="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div class="text-sm leading-6">
                      <p class="font-semibold text-white text-start">
                        <a href="/">
                          <span class="absolute inset-0"></span>
                          Steven Tran
                        </a>
                      </p>
                    </div>
                  </div>
                </article>

                <article class="flex max-w-xl flex-col items-start justify-between my-blog">
                  <div
                    className="w-full h-72 mb-4 rounded-3xl"
                    style={{
                      background: `url(${blog3})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div class="flex items-center gap-x-4 text-xs">
                    <time datetime="2020-03-16" class="text-white">
                      12/06/2024
                    </time>
                  </div>
                  <div class="group relative">
                    <h3 class="mt-3 text-lg font-semibold leading-6 text-white text-start">
                      <a href="/">
                        <span class="absolute inset-0"></span>
                        Boost your conversion rate
                      </a>
                    </h3>
                    <p class="mt-5 line-clamp-3 text-sm leading-6 text-white text-start">
                      Illo sint voluptas. Error voluptates culpa eligendi. Hic
                      vel totam vitae illo. Non aliquid explicabo necessitatibus
                      unde. Sed exercitationem placeat consectetur nulla
                      deserunt vel. Iusto corrupti dicta.
                    </p>
                  </div>
                  <div class="relative mt-8 flex items-center gap-x-4">
                    <img
                      src={avatar}
                      alt=""
                      class="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div class="text-sm leading-6">
                      <p class="font-semibold text-white text-start">
                        <a href="/">
                          <span class="absolute inset-0"></span>
                          Steven Tran
                        </a>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <button
                type="button"
                className="my-home__section-5-btn text-base sm:text-2xl"
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

export default HomeFeature;
