import React, { useEffect } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

function HomeFeature() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  const navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link, { replace: true });
    scroll.scrollToTop();
  };

  return (
    <div className="home-option">
      <div className="my-home h-screen px-4 min-[376px]:px-0 sm:px-0">
        <div className="h-2/6 sm:h-3/5"></div>
        <h1 className="drop-shadow-[0_35px_35px_rgba(78, 72, 54, 1)] text-2xl min-[376px]:text-3xl sm:text-4xl lg:text-5xl xl:text-7xl my-home-title prevent-select">
          Nhân tướng học steven
        </h1>
        <div className="container mx-auto flex flex-wrap min-[376px]:flex-nowrap sm:flex-nowrap justify-center mt-2 min-[376px]:mt-4 md:mt-10">
          <button
            type="button"
            className="prevent-select my-home-btn-1 text-sm min-[376px]:text-sm sm:text-lg md:text-lg xl:text-xl py-2 px-3 min-[376px]:py-2 min-[376px]:px-3 md:py-3 md:px-5 xl:py-[0.6rem] xl:px-7 mb-2 min-[375px]:mb-0"
            onClick={() => handleNavigate("/khoa-hoc")}
          >
            Đăng ký khóa học
          </button>
          <div className="w-2 min-[376px]:w-4 sm:w-10 md:w-4 xl:w-10"></div>
          <button
            type="button"
            className=" prevent-select my-home-btn-1 text-sm min-[376px]:text-sm sm:text-lg md:text-lg xl:text-xl px-5 min-[376px]:px-5 md:px-8 xl:py-[0.6rem] xl:px-10 mb-2 min-[375px]:mb-0"
            onClick={() => handleNavigate("/tu-van")}
          >
            Đặt lịch tư vấn
          </button>
        </div>
      </div>
      <div className="py-10 min-[376px]:py-12 md:py-16 xl:py-24 h-fit my-home__section-2 flex justify-center items-center">
        <div className="container mx-auto px-4 min-[376px]:px-9 sm:px-0">
          <div className="grid justify-items-center">
            <img src={eye} alt="" className="h-32 object-cover mb-5" />
            <span className="text-xl min-[376px]:text-xl md:text-3xl xl:text-4xl my-home__section-2-title-1 prevent-select">
              “Mình là Steven,
            </span>
            <span className="text-xl min-[376px]:text-xl md:text-3xl xl:text-4xl my-home__section-2-title-2 mb-4 sm:mb-8 md:mb-6 xl:mb-8 prevent-select">
              thích tắm biển và luận tướng dạo”
            </span>
            <p className="text-sm min-[376px]:text-sm sm:text-xl md:text-lg xl:text-xl w-11/12 md:w-9/12 lg:w-8/12 text-white mb-8 sm:mb-14 md:mb-10 xl:mb-14 prevent-select">
              Mình đang dần thay đổi bản thân tích cực hơn nhờ biết đến Huyền
              Học. Vì vậy mình dành nhiều thời gian để nghiên cứu, ứng dụng và
              chia sẻ những điều mình học được đến các bạn.
            </p>
            <button
              type="button"
              className="prevent-select my-home__section-2-btn text-sm min-[376px]:text-sm sm:text-xl md:text-lg xl:text-xl py-2 px-3 min-[376px]:py-2 min-[376px]:px-3 md:py-3 md:px-5 xl:py-[0.6rem] xl:px-7"
              onClick={() => handleNavigate("/lien-he")}
            >
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </div>
      <div className="h-fit my-home__section-3">
        <div className="h-[60vh] my-home__section-3-bg"></div>
        <div className="py-14 min-[376px]:py-8 sm:py-0 h-fit my-home__section-3-content flex justify-center items-center">
          <div className="container mx-auto px-4 min-[376px]:px-9 lg:px-24 xl:px-40">
            <div className="grid justify-items-start mb-4 min-[376px]:mb-8 sm:mb-16">
              <h3 className="text-base min-[376px]:text-base md:text-xl xl:text-2xl text-white xl:mb-2 prevent-select">
                Theo dõi Steven tại
              </h3>
              <div className="my-home__section-3-content-title h-[2rem] min-[376px]:h-[2rem] md:h-12 lg:h-10 xl:h-14">
                <div
                  className="title-decoration w-28 min-[376px]:w-30 md:w-48 xl:w-64 xl:h-6 lg:h-4 md:h-6 sm:h-4 min-[376px]:h-4 h-4"
                  data-aos="slide-right"
                  data-aos-once="true"
                ></div>
                <h2 className="text-white text-xl min-[376px]:text-xl md:text-4xl xl:text-5xl title-text prevent-select">
                  <span className="font-bold">Các nền tảng </span>chính thức
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-7 content-center justify-items-center lg:px-8 md:px-2 xl:px-16">
              <div className="justify-self-center">
                <div className="social-el p-3 sm:p-10 xl:p-10 md:p-8 w-14 h-14 min-[376px]:w-16 min-[376px]:h-16 md:w-32 xl:w-36 md:h-32 xl:h-36">
                  <a
                    href="https://www.youtube.com/@nhantuonghocsteven"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={youtube} alt="" className="w-24 h-auto" />
                  </a>
                </div>

                <p className="xl:mt-12 md:mt-8 min-[376px]:mt-2 mt-1 text-white text-sm min-[376px]:text-sm sm:text-2xl xl:text-2xl md:text-xl">
                  Youtube
                </p>
              </div>
              <div className="justify-self-center">
                <div className="social-el p-3 sm:p-10 xl:p-10 md:p-8 w-14 h-14 min-[376px]:w-16 min-[376px]:h-16 md:w-32 xl:w-36 md:h-32 xl:h-36">
                  <a
                    href="https://www.tiktok.com/@nt_steven89"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={tiktok} alt="" className="w-24 h-auto" />
                  </a>
                </div>

                <p className="xl:mt-12 md:mt-8 min-[376px]:mt-2 mt-1 text-white text-sm min-[376px]:text-sm sm:text-2xl xl:text-2xl md:text-xl">
                  TikTok
                </p>
              </div>
              <div className="justify-self-center">
                <div className="social-el p-3 sm:p-10 xl:p-10 md:p-8 w-14 h-14 min-[376px]:w-16 min-[376px]:h-16 md:w-32 xl:w-36 md:h-32 xl:h-36">
                  <a
                    href="https://www.facebook.com/profile.php?id=100086759123604"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={facebook} alt="" className="w-24 h-auto" />
                  </a>
                </div>

                <p className="xl:mt-12 md:mt-8 min-[376px]:mt-2 mt-1 text-white text-sm min-[376px]:text-sm sm:text-2xl xl:text-2xl md:text-xl">
                  Facebook
                </p>
              </div>
              <div className="justify-self-center">
                <div className="social-el p-3 sm:p-10 xl:p-10 md:p-8 w-14 h-14 min-[376px]:w-16 min-[376px]:h-16 md:w-32 xl:w-36 md:h-32 xl:h-36">
                  <a
                    href="https://www.instagram.com/nthsteven/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={ins} alt="" className="w-24 h-auto" />
                  </a>
                </div>

                <p className="xl:mt-12 md:mt-8 min-[376px]:mt-2 mt-1 text-white text-sm min-[376px]:text-sm sm:text-2xl xl:text-2xl md:text-xl">
                  Instagram
                </p>
              </div>
              <div className="justify-self-center">
                <div className="social-el p-3 sm:p-10 xl:p-10 md:p-8 w-14 h-14 min-[376px]:w-16 min-[376px]:h-16 md:w-32 xl:w-36 md:h-32 xl:h-36">
                  <a
                    href="https://www.threads.net/@nthsteven"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={threads} alt="" className="w-24 h-auto" />
                  </a>
                </div>

                <p className="xl:mt-12 md:mt-8 min-[376px]:mt-2 mt-1 text-white text-sm min-[376px]:text-sm sm:text-2xl xl:text-2xl md:text-xl">
                  Threads
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-fit my-home__section-4 flex justify-center items-center py-0 min-[376px]:py-14 sm:py-32 pb-12 min-[376px]:pb-12">
        <div className="container px-4 min-[376px]:px-9 lg:px-24 xl:px-40 mx-auto flex-wrap sm:flex columns-3xs justify-between">
          <div className="flex-none w-full sm:w-3/5 grid justify-items-start h-auto content-center">
            <h3 className="text-base min-[376px]:text-base md:text-xl xl:text-2xl text-white xl:mb-2 prevent-select">
              Dành cho bạn
            </h3>
            <div className="my-home__section-3-content-title h-[2rem] min-[376px]:h-[2rem] md:h-12 lg:h-10 xl:h-14">
              <div
                className="title-decoration w-16 min-[376px]:w-16 md:w-28 xl:w-36 xl:h-6 lg:h-4 md:h-6 sm:h-4 min-[376px]:h-4 h-4"
                data-aos="slide-up"
                data-aos-once="true"
              ></div>
              <h2 className="text-white text-xl min-[376px]:text-xl md:text-4xl xl:text-5xl title-text prevent-select">
                <span className="font-bold">Tâm sự </span>cùng Steven
              </h2>
            </div>
            <p className="text-sm min-[376px]:text-sm sm:text-xl md:text-lg xl:text-xl text-white text-start md:w-10/12 xl:w-4/5 py-4 min-[376px]:py-4 md:py-6 xl:py-8 prevent-select">
              Nơi bạn có thể thoải mái tâm sự chia sẻ, đồng thời nhận được sự tư
              vấn và định hướng cho các vấn đề chưa thể giải quyết và những lựa
              chọn khó khăn trong cuộc sống.
            </p>
            <button
              type="button"
              className="prevent-select my-home__section-4-btn text-sm min-[376px]:text-sm sm:text-xl md:text-lg xl:text-xl md:py-3 md:px-5 xl:py-[0.6rem] xl:px-7 min-[376px]:py-2 min-[376px]:px-3 py-2 px-3"
              onClick={() => handleNavigate("/tu-van")}
            >
              Đặt lịch tại đây
            </button>
          </div>
          <div className="flex-1 grid justify-items-center sm:justify-items-end columns-3xs content-center mt-8 min-[376px]:mt-8 sm:mt-8 md:mt-0">
            <img src={trochuyen} alt="" className="w-4/6 sm:w-full" />
          </div>
        </div>
      </div>
      <div className="my-home__section-5">
        <div className="my-home__section-5-content flex justify-center items-center py-8 px-4 min-[376px]:py-12 min-[376px]:px-0 lg:py-16 lg:px-0 md:px-0 md:py-12 xl:px-0 xl:py-16">
          <div className="container mx-auto px-0 min-[376px]:px-9 lg:px-24 xl:px-40">
            <div className="grid justify-items-center">
              <h3 className="text-base min-[376px]:text-base md:text-xl xl:text-2xl text-white xl:mb-2 prevent-select">
                Khám phá
              </h3>
              <div className="my-home__section-5-content-title h-[2rem] min-[376px]:h-[2rem] md:h-12 xl:h-14 lg:h-10">
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
                className="prevent-select my-home__section-5-btn text-sm min-[376px]:text-sm sm:text-xl md:text-lg xl:text-xl md:py-3 md:px-12 xl:py-[0.6rem] xl:px-16 min-[376px]:py-2 min-[376px]:px-5 py-2 px-5"
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
