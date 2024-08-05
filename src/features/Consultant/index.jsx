import React from "react";
import trochuyen from "../../images/trochuyen.png";
import tim from "../../images/tim.svg";
import cap from "../../images/cap.svg";
import dao from "../../images/dao.svg";
import chiphi from "../../images/chiphi.png";
import decor2 from "../../images/decor_2-2.png";
import decor4 from "../../images/decor-4.png";
import { StepData } from "./StepData";
import step1 from "../../images/step1.png";
import step2 from "../../images/step2.png";
import step3 from "../../images/step3.png";
import step4 from "../../images/step4.png";
import "./styles.scss";

function ConsultantFeature() {
  const stepImgs = [step1, step2, step3, step4];
  return (
    <div className="my-consultant">
      <div className="my-consultant__section-1 h-screen">
        <div className="my-consultant__section-1-bg h-screen"></div>
        <div className="py-14 min-[376px]:py-8 sm:py-0 h-screen my-consultant__section-1-content flex justify-center items-center">
          <div className="container px-4 min-[376px]:px-9 lg:px-24 xl:px-32 mx-auto flex-wrap sm:flex columns-3xs justify-between 2xl:pt-0 xl:pt-8">
            <div className="flex-1 w-full sm:w-3/5 grid justify-items-start h-auto content-center md:mt-0 min-[376px]:mt-4 mt-10">
              <h3 className="text-base min-[376px]:text-base md:text-2xl xl:text-3xl text-white xl:mb-1 lg:mb-4 md:mb-8 min-[376px]:mb-4 mb-2 my-consultant__section-1-content-title-1 prevent-select">
                TƯ VẤN 1-1
              </h3>
              <h2 className="xl:text-7xl md:text-5xl min-[376px]:text-4xl text-4xl xl:mt-6 my-consultant__section-1-content-title-2">
                Cùng Steven
              </h2>
              <p className="text-start xl:w-[600px] xl:mt-8 xl:text-xl text-white lg:mt-4 xl:mt-4 mt-2">
                Bạn đang cần một người tư vấn định hướng để giúp bạn có được góc
                nhìn mới hơn cho những vấn đề khó khăn trong cuộc sống? Mình ở
                đây để lắng nghe và hỗ trợ bạn.
              </p>
              <button
                type="button"
                className="prevent-select my-consultant__section-1-content-btn text-sm min-[376px]:text-sm sm:text-xl md:text-lg xl:text-xl md:py-3 md:px-5 xl:py-[0.6rem] xl:px-7 min-[376px]:py-2 min-[376px]:px-3 py-2 px-3 xl:mt-8 lg:mt-4 md:mt-10 min-[376px]:mt-4 mt-4"
              >
                Đặt lịch tại đây
              </button>
            </div>
            <div className="flex-1 grid justify-items-center sm:justify-items-end columns-3xs content-center mt-8 min-[376px]:mt-8 sm:mt-8 md:mt-0">
              <img src={trochuyen} alt="" className="w-4/6 sm:w-4/5" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 min-[376px]:py-12 md:py-16 xl:py-24 h-fit my-consultant__section-2 flex justify-center items-center">
        <div className="container mx-auto px-0 min-[376px]:px-9 lg:px-24 xl:px-40">
          <div className="grid justify-items-center">
            <h3 className="uppercase text-base min-[376px]:text-base md:text-2xl xl:text-3xl text-white font-bold md:mb-4 mb-2">
              Giới Thiệu Về Tư Vấn 1 - 1
            </h3>
            <p className="text-sm min-[376px]:text-sm sm:text-xl md:text-lg xl:text-xl text-[#e7c99d] font-bold xl:mb-10 md:mb-8 mb-6 min-[376px]:px-0 px-2">
              Mình sẽ nhận tư vấn nhân tướng và luận giải Tử Vi cho những lĩnh
              vực sau
            </p>
            <div className="mx-auto px-0 grid max-w-2xl grid-cols-1 gap-y-4 lg:mx-0 lg:max-w-none lg:grid-cols-3 my-consultant__section-2-content">
              <div className="grid content-center">
                <div className="xl:w-[300px] xl:h-[300px] lg:w-[250px] lg:h-[250px] md:w-[400px] md:h-[250px] min-[376px]:w-[300px] w-[250px] h-[200px] my-consultant__section-2-content-1 grid justify-items-center content-center">
                  <img src={tim} alt="" className="w-[16%] sm:w-[20%] h-auto" />
                  <p className="text-justify sm:px-8 px-6 xl:text-lg sm:text-base mt-6">
                    Tâm lý, tình cảm và các mối quan hệ xung quanh.
                  </p>
                </div>
              </div>
              <div className="grid content-center">
                <div className="xl:w-[300px] xl:h-[400px] lg:w-[250px] lg:h-[350px] md:w-[400px] md:h-[350px] min-[376px]:w-[300px] w-[250px] h-[250px] my-consultant__section-2-content-2 grid justify-items-center content-center">
                  <img src={cap} alt="" className="w-[16%] sm:w-[20%] h-auto" />
                  <p className="text-justify sm:px-8 px-6 xl:text-lg sm:text-base mt-6">
                    Công việc, sự nghiệp và các quyết định khi tìm người cộng
                    tác.
                  </p>
                  <button
                    type="button"
                    className="prevent-select my-consultant__section-1-content-btn text-sm min-[376px]:text-sm sm:text-xl md:text-lg xl:text-xl md:py-3 md:px-5 xl:py-[0.6rem] xl:px-7 min-[376px]:py-2 min-[376px]:px-3 py-2 px-3 sm:mt-6 min-[376px]:mt-4 mt-4"
                  >
                    Đăng ký
                  </button>
                </div>
              </div>
              <div className="grid content-center">
                <div className="xl:w-[300px] xl:h-[300px] lg:w-[250px] lg:h-[250px] md:w-[400px] md:h-[250px] min-[376px]:w-[300px] w-[250px] h-[200px] my-consultant__section-2-content-3 grid justify-items-center content-center">
                  <img src={dao} alt="" className="w-[16%] sm:w-[20%] h-auto" />
                  <p className="text-justify sm:px-8 px-6 xl:text-lg sm:text-base mt-6">
                    Các kế hoạch chỉnh sửa thẩm mỹ, làm đẹp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-consultant__section-3 h-fit">
        <div className="h-full my-consultant__section-3-bg"></div>
        <div className="py-8 min-[376px]:py-8 md:py-16 xl:py-24 h-auto my-consultant__section-3-content flex justify-center items-center">
          <div className="container xl:px-32 mx-auto">
            <div className="grid justify-items-center">
              <div className="w-[85%] sm:w-[70%] xl:h-48 min-[376px]:h-[530px] md:h-48 h-[450px] rounded-3xl bg-white fee-banner relative xl:hover:h-[470px] lg:hover:h-[380px] md:hover:h-[400px]">
                <img
                  src={chiphi}
                  alt=""
                  className="xl:w-64 md:w-40 min-[376px]:w-36 w-36 h-auto absolute top-[-3%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                />
                <div className="fee-banner-content grid justify-items-center sm:py-0 min-[376px]:py-0 py-4 xl:h-[140px] md:h-[100px] min-[376px]:h-full h-full md:w-[100%] min-[376px]:w-[100%] w-[100%] absolute top-[0] min-[376px]:top-[5%] xl:top-[55%] md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] overflow-hidden xl:hover:h-[400px] lg:hover:h-[330px] md:hover:h-[370px] md:hover:top-[50%]">
                  <div className="fee-banner-content-first grid justify-items-center sm:h-auto min-[376px]:h-[60px] h-[80px]">
                    <p className="xl:text-3xl md:text-2xl min-[376px]:text-lg text-lg font-semibold text-[#A14A21]">
                      1.000.000 ₫
                    </p>
                    <img
                      src={decor2}
                      alt=""
                      className="xl:w-[65%] md:w-[55%] min-[376px]:w-[60%] w-[60%] h-auto"
                    />
                    <p className="xl:text-2xl md:text-xl min-[376px]:text-base text-sm font-bold min-[376px]:px-0 px-2">
                      1 phiên tư vấn / 45 phút thông qua Zalo video call
                    </p>
                  </div>
                  <div className="fee-banner-content-second xl:mt-4 md:mt-3 w-[80%]">
                    <ul className="list-disc">
                      <li className="xl:text-lg min-[376px]:text-base text-sm font-medium">
                        Luận giải, làm rõ và tháo gỡ những khó khăn, khuất mắc
                        trong cuộc sống.
                      </li>
                      <li className="xl:text-lg min-[376px]:text-base text-sm font-medium">
                        Hướng dẫn cụ thể cách hóa giải các tướng xấu.
                      </li>
                      <li className="xl:text-lg min-[376px]:text-base text-sm font-medium">
                        Tư vấn miễn phí nếu bạn đang có nhu cầu chỉnh sửa thẩm
                        mỹ.
                      </li>
                      <li className="xl:text-lg min-[376px]:text-base text-sm font-medium">
                        Hướng dẫn cách chọn quần áo và phụ kiện phù hợp với diện
                        tướng cá nhân.
                      </li>
                      <li className="xl:text-lg min-[376px]:text-base text-sm font-medium">
                        Tư vấn cách cải thiện phong thủy dương trạch.
                      </li>
                      <li className="xl:text-lg min-[376px]:text-base text-sm font-medium">
                        Hướng dẫn cách gia tăng vận may, cải thiện thần khí giúp
                        cuộc sống an vui hơn, thịnh vượng hơn.
                      </li>
                    </ul>
                    <p className="xl:text-lg min-[376px]:text-base text-sm text-center text-[#a14a21] mt-2 font-bold italic">
                      Bạn cần hỗ trợ vui lòng liên hệ: 0938.439.554 (Zalo)
                    </p>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="prevent-select my-consultant__section-1-content-btn text-sm min-[376px]:text-sm sm:text-xl md:text-lg xl:text-xl md:py-3 md:px-5 xl:py-[0.6rem] xl:px-7 min-[376px]:py-2 min-[376px]:px-3 py-2 px-3 xl:mt-8 md:mt-10 min-[376px]:mt-4 mt-4"
              >
                Đặt lịch tại đây
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-consultant__section-4 h-fit flex justify-center items-center sm:pt-20 sm:pb-20 pt-0 pb-8">
        <div className="container px-4 min-[376px]:px-9 lg:px-24 xl:px-24 mx-auto flex-wrap sm:flex columns-3xs justify-between h-auto">
          <div className="flex-1 grid sm:justify-items-start justify-items-center columns-3xs content-center md:mb-0">
            <img src={decor4} alt="" className="w-[80%] sm:w-full" />
          </div>
          <div className="flex-2 w-full sm:w-3/5 grid justify-items-center h-auto content-center md:mt-0 min-[376px]:mt-8 mt-8 sm:ml-12 ml-0">
            <h3 className="uppercase text-base min-[376px]:text-base md:text-xl xl:text-2xl text-white font-bold sm:mb-2 mb-0">
              Người tư vấn
            </h3>
            <h3 className="uppercase text-base min-[376px]:text-base md:text-2xl xl:text-3xl text-[#e7c99d] font-bold sm:mb-4 mb-4">
              Steven – Chuyên gia Nhân tướng học
            </h3>
            <p className="text-justify text-white sm:mt-2 lg:text-base text-sm">
              Mình có nhiều năm nghiên cứu, đào tạo và ứng dụng Nhân Tướng Học
              vào đa dạng các lĩnh vực trong cuộc sống. Sau hàng trăm bài viết,
              video chia sẻ và luận giải nhân tướng, mình quyết định triển khai
              tư vấn chuyên sâu để giúp đỡ được nhiều người hơn.
              <br />
              Khi đến với mình, bạn không nên{" "}
              <span className="font-bold">đặt tâm thế đi xem bói </span>
              vì mục đích của Huyền Học là giúp nhìn nhận, đánh giá, tháo gỡ các
              vấn đề bế tắc. Thế mạnh của mình là tư vấn các nội dung liên quan
              đến{" "}
              <span className="font-bold">
                {" "}
                khởi nghiệp, giải quyết khó khăn trong công việc, cộng tác trong
                kinh doanh và đầu tư
              </span>
              . Hãy chia sẻ với mình câu chuyện của bạn và mình sẽ rất vui khi
              được là người đồng hành cùng bạn.
            </p>
          </div>
        </div>
      </div>
      <div className="my-consultant__section-5 h-fit sm:py-16 py-8">
        <h3 className="uppercase text-base min-[376px]:text-base md:text-2xl xl:text-3xl text-white font-bold sm:mb-20 min-[376px]:mb-10 mb-16 flex justify-center items-center">
          Các bước đăng ký
        </h3>
        <div className="container mx-auto grid max-w-2xl min-[376px]:grid-cols-2 grid-cols-1 gap-x-4 sm:gap-x-8 sm:gap-y-28 min-[376px]:gap-y-16 gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-4 sm:grid-cols-2 2xl:px-72 2xl:py-16 xl:px-52 xl:py-12 lg:px-16 lg:py-8 md:px-8 md:py-8 min-[376px]:px-8 min-[376px]:py-8 px-8 py-6">
          {StepData.map((s, index) => {
            return (
              <div className="w-full lg:h-[330px] sm:h-[300px] min-[376px]:h-[250px] h-[230px] relative rounded-[20px] border-2 border-[#e4b361]">
                <img
                  src={stepImgs[index]}
                  alt=""
                  className="lg:w-[70%] sm:w-[60%] min-[376px]:w-[55%] w-[40%] h-auto absolute top-[-3%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                />
                <div className="w-full h-full flex justify-center items-center xl:pt-24 lg:pt-20 sm:pt-24 lg:pb-8 sm:pb-8 min-[376px]:pt-12 min-[376px]:pb-4 pt-16 pb-8">
                  <div className="grid justify-items-center content-between h-full">
                    <div className="lg:px-4 sm:px-2 px-2">
                      <h4 className="xl:text-xl lg:text-base md:text-lg text-sm font-bold text-white mb-2">
                        {s.title}
                      </h4>
                      <p className="text-white xl:text-base lg:text-sm sm:text-base text-sm">
                        {s.description}
                      </p>
                    </div>
                    <div className="w-full lg:px-16 sm:px-16 min-[376px]:px-8 px-24">
                      <div className="w-full h-[3px] bg-[#e4b361]"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center 2xl:px-72 xl:px-52 lg:px-16 md:px-32 min-[376px]:px-16 px-8">
          <div className="lg:w-fit md:w-[80vw] w-[90vw] flex items-center justify-start h-auto bg-[#4E4836] rounded-full border-[#DBAF6D] border-2 mt-8 ">
            <div className="2xl:p-4 xl:p-4 md:p-3 p-3 bg-[#4E4836] rounded-full border-2 border-[#DBAF6D]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="phone-volume"
                className="h-auto 2xl:w-[50px] xl:w-[40px] md:w-[30px] min-[376px]:w-[40px] w-[30px]"
              >
                <path
                  fill="#fff"
                  d="M19.41,13c-.22,0-.45-.07-.67-.12a9.86,9.86,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.46a13.17,13.17,0,0,1-2.67-2,13.17,13.17,0,0,1-2-2.67l.46-.21a2,2,0,0,0,1-2.48,10.47,10.47,0,0,1-.39-1.32c-.05-.22-.09-.45-.12-.67a3,3,0,0,0-3-2.49H5a3,3,0,0,0-2.24,1,3,3,0,0,0-.73,2.4,19.07,19.07,0,0,0,5.41,11,19.07,19.07,0,0,0,11,5.41,2.56,2.56,0,0,0,.39,0,3,3,0,0,0,2-.76,3,3,0,0,0,1-2.24v-3A3,3,0,0,0,19.41,13Zm.49,6a1,1,0,0,1-.33.74,1,1,0,0,1-.82.25,17.16,17.16,0,0,1-9.87-4.84A17.16,17.16,0,0,1,4,5.25a1,1,0,0,1,.25-.82A1,1,0,0,1,5,4.1h3a1,1,0,0,1,1,.78c0,.27.09.55.15.82a11,11,0,0,0,.46,1.54l-1.4.66a1,1,0,0,0-.52.56,1,1,0,0,0,0,.76,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.56-.52l.63-1.4a12.41,12.41,0,0,0,1.58.46c.26.06.54.11.81.15a1,1,0,0,1,.78,1ZM14,2c-.23,0-.47,0-.7,0a1,1,0,0,0,.17,2L14,4a6,6,0,0,1,6,6c0,.18,0,.35,0,.53a1,1,0,0,0,.91,1.08h.08a1,1,0,0,0,1-.91c0-.23,0-.47,0-.7A8,8,0,0,0,14,2Zm2,8a1,1,0,0,0,2,0,4,4,0,0,0-4-4,1,1,0,0,0,0,2A2,2,0,0,1,16,10Z"
                ></path>
              </svg>
            </div>
            <p className="2xl:text-xl xl:text-lg md:text-base min-[376px]:text-sm text-xs xl:px-4 md:px-4 min-[376px]:px-4 px-2 text-white font-bold text-left">
              Nếu bạn cần hỗ trợ về đăng ký, vui lòng liên hệ Team Đào tạo qua
              Zalo:{" "}
              <span className="text-[#E7C99D] underline">
                <a href="+84 938439554">093.843.9554</a>
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsultantFeature;
