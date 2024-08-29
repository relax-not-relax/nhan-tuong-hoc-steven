import React, { useEffect } from "react";
import eye from "../../images/eye.png";
import face from "../../images/face.svg";
import book from "../../images/book.svg";
import line from "../../images/line.svg";
import mail from "../../images/mail.svg";
import phone from "../../images/dt.svg";
import more1 from "../../images/more_1.png";
import more2 from "../../images/tuvan_bnn.png";
import more3 from "../../images/more_2.png";
import { AdditionData } from "./AdditionData";
import { animateScroll as scroll } from "react-scroll";
import "./styles.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

function ContactFeature() {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out" });
  }, []);
  const moreImgs = [more1, more2, more3];

  const navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link, { replace: true });
    scroll.scrollToTop();
  };

  return (
    <div className="my-contact">
      <div className="my-contact__section-1 h-screen">
        <div className="h-screen my-contact__section-1-bg"></div>
        <div className="h-screen my-contact__section-1-content flex justify-center items-center">
          <div className="grid justify-items-center">
            <div className="sm:w-[200px] sm:h-[200px] min-[376px]:w-[150px] min-[376px]:h-[150px] w-[120px] h-[120px]">
              <img src={eye} alt="" className="w-full" />
            </div>
            <h2 className="mt-6 md:mt-10 xl:text-5xl md:text-4xl min-[376px]:text-2xl text-xl text-white">
              <span className="text-[#e7c99d]">“</span>Mình là Steven
              <span className="text-[#e7c99d]">,</span>
            </h2>
            <h2 className="xl:text-5xl md:text-4xl min-[376px]:text-2xl text-xl text-[#e7c99d] mt-2">
              thích tắm biển và luận tướng dạo”
            </h2>
          </div>
        </div>
      </div>
      <div className="h-fit my-contact__section-2 relative">
        <div className="decor 2xl:w-[400px] 2xl:h-[400px] sm:w-[350px] sm:h-[350px] w-[200px] h-[200px] absolute top-0 right-0">
          <img src={face} alt="" srcset="" className="w-full h-auto" />
        </div>
        <div className="decor 2xl:w-[400px] 2xl:h-[400px] sm:w-[350px] sm:h-[350px] w-[200px] h-[200px] absolute bottom-0 left-0">
          <img src={book} alt="" srcset="" className="w-full h-auto" />
        </div>
        <div className="container mx-auto px-4 min-[376px]:px-9 lg:px-24 2xl:px-16 sm:py-24 py-12 content relative right-0 h-fit flex justify-center items-center">
          <div className="grid justify-items-center">
            <h4 className="text-white uppercase font-semibold 2xl:text-4xl lg:text-3xl text-xl">
              Chào mừng bạn đến với
            </h4>
            <h3 className="text-[#e7c99d] uppercase font-semibold 2xl:text-5xl lg:text-4xl text-2xl mt-2">
              Nhân tướng học Steven
            </h3>
            <p className="2xl:px-24 text-white font-medium 2xl:text-xl lg:text-lg min-[376px]:text-base text-sm sm:text-center text-justify sm:mt-10 mt-6">
              Mình là Steven, mình từng dành rất nhiều thời gian để học tập và
              nghiên cứu các bộ môn Huyền Học, đặc biệt là Nhân Tướng Học. Mình
              luôn muốn chia sẻ và lan toản niềm đam mê này đến với các bạn.
            </p>
            <p className="2xl:px-24 text-white font-medium 2xl:text-xl lg:text-lg min-[376px]:text-base text-sm sm:text-center text-justify mt-4">
              Mình xây dựng Nhân Tướng Học Steven và mong đây không chỉ là nơi
              bạn có thể tìm hiểu về nhân tướng, mà còn có thể thoải mái chia sẻ
              những khuất mắc trong công việc, tình cảm hoặc những nội dung phức
              tạp trong cuộc sống. Mình sẽ giúp bạn nhìn nhận vấn đề một cách
              khách quan hơn dưới góc nhìn của Huyền Học. Từ đó vận mệnh của bạn
              sẽ được cải thiện một cách tích cực hơn.
            </p>
            <p className="2xl:px-24 text-white font-medium 2xl:text-xl lg:text-lg min-[376px]:text-base text-sm sm:text-center text-justify mt-4">
              Ngoài ra, Nhân Tướng Học Steven còn là nơi bạn có thể tham khảo
              những khóa học nhân tướng từ cơ bản đến chuyên sâu, khóa học sẽ
              phù hợp với những bạn có cùng sở thích nghiên cứu Huyền Học giống
              Steven hoặc những bạn đang hoạt động trong lĩnh vực nhân sự, kinh
              doanh, thẩm mỹ,...
            </p>
            <p className="2xl:px-24 text-white font-medium 2xl:text-xl lg:text-lg min-[376px]:text-base text-sm sm:text-center text-justify mt-4">
              Hy vọng các bạn sẽ tìm thấy nhiều điều bổ ích tại Nhân Tướng Học
              Steven, và mình rất vui được đồng hành cùng các bạn.
            </p>
            <p className="text-white font-medium 2xl:text-xl lg:text-lg min-[376px]:text-base text-sm sm:text-center text-justify mt-4 italic">
              - Steven -
            </p>
            <div className="w-[300px] h-[40px] sm:mt-8 mt-6">
              <img src={line} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 min-[376px]:py-10 md:py-16 xl:py-24 h-fit my-contact__section-3 flex justify-center items-center">
        <div className="container mx-auto px-4 min-[376px]:px-9 lg:px-24 2xl:px-40">
          <div className="grid justify-items-start">
            <div className="my-contact__section-3-content-title h-[2rem] min-[376px]:h-[2rem] md:h-12 lg:h-10 xl:h-14 mb-4 min-[376px]:mb-2 sm:mb-8">
              <div
                className="title-decoration w-[85px] min-[376px]:w-[85px] md:w-[155px] xl:w-[205px] xl:h-6 lg:h-4 md:h-6 sm:h-4 min-[376px]:h-4 h-4"
                data-aos="slide-right"
                data-aos-once="true"
              ></div>
              <h2 className="text-white text-xl min-[376px]:text-xl md:text-4xl xl:text-5xl title-text prevent-select">
                <span className="font-bold">Thông tin </span>liên hệ
              </h2>
            </div>
            <div className="container mx-auto flex-wrap sm:flex columns-3xs justify-between gap-4">
              <div className="contact-info flex-1 w-full sm:h-[150px] min-[321px]:h-[100px] h-fit flex justify-start items-center">
                <img
                  src={mail}
                  alt=""
                  className="2xl:w-[60px] 2xl:h-[60px] xl:w-[45px] xl:h-[45px] sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] xl:ms-12 sm:ms-4 min-[321px]:ms-6 ms-2"
                />
                <div className="grid justify-items-start ps-4">
                  <p className="text-start">
                    <span className="font-bold 2xl:text-lg sm:text-sm min-[321px]:text-xs text-sm min-[321px]:text-black text-white">
                      Luận tướng dạo:{" "}
                    </span>
                    <a
                      href="mailto:nhantuonghocsteven@gmail.com"
                      className="2xl:text-lg sm:text-sm min-[321px]:text-xs text-sm min-[321px]:text-black text-white"
                    >
                      nhantuonghocsteven@gmail.com
                    </a>
                  </p>
                  <p className="text-start">
                    <span className="font-bold 2xl:text-lg sm:text-sm min-[321px]:text-xs text-sm min-[321px]:text-black text-white">
                      Hỗ trợ học viên:{" "}
                    </span>
                    <a
                      href="mailto:daotao.nthsteven@gmai.com"
                      className="2xl:text-lg sm:text-sm min-[321px]:text-xs text-sm min-[321px]:text-black text-white"
                    >
                      daotao.nthsteven@gmai.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-info flex-1 w-full sm:h-[150px] h-[100px] flex justify-start items-center">
                <img
                  src={phone}
                  alt=""
                  className="2xl:w-[60px] 2xl:h-[60px] xl:w-[45px] xl:h-[45px] sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] xl:ms-12 sm:ms-4 min-[321px]:ms-6 ms-2"
                />
                <p className="2xl:text-lg sm:text-sm min-[321px]:text-xs text-sm min-[321px]:text-black text-white text-start ps-4 pe-6">
                  Team chuyên giải đáp thắc mắc, hỗ trợ học viên và khách hàng
                  qua số điện thoại Zalo:{" "}
                  <a
                    href="+84 938439554"
                    className="font-bold 2xl:text-lg sm:text-sm min-[321px]:text-xs text-sm min-[321px]:text-black text-white"
                  >
                    0938 439 554
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="my-contact__section-3-content-title h-[2rem] min-[376px]:h-[2rem] md:h-12 lg:h-10 xl:h-14 my-6 min-[376px]:my-8 sm:my-12">
              <div
                className="title-decoration w-[90px] min-[376px]:w-[90px] md:w-40 xl:w-[215px] xl:h-6 lg:h-4 md:h-6 sm:h-4 min-[376px]:h-4 h-4"
                data-aos="slide-right"
                data-aos-once="true"
              ></div>
              <h2 className="text-white text-xl min-[376px]:text-xl md:text-4xl xl:text-5xl title-text prevent-select">
                <span className="font-bold">Khám phá </span>thêm
              </h2>
            </div>
            <div className="container mx-auto grid max-w-2xl sm:grid-cols-3 grid-cols-1 xl:gap-x-28 sm:gap-x-12 gap-y-6 lg:max-w-none">
              {AdditionData.map((a, index) => {
                return (
                  <div
                    key={index}
                    className="w-full h-auto bg-white more-content pb-4"
                    onClick={() => handleNavigate(a.link)}
                  >
                    <img
                      src={moreImgs[index]}
                      alt=""
                      className="w-full h-auto more-content-img"
                    />
                    <div className="flex justify-between mt-4 px-8">
                      <h4 className="lg:text-2xl font-semibold">{a.title}</h4>
                      <div className="grid justify-items-center content-center more-content-icon sm:px-2 sm:py-1 px-2 py-2 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="3"
                          stroke="#fff"
                          class="size-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactFeature;
