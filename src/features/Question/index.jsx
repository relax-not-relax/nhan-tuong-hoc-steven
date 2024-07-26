import React from "react";
import "./styles.scss";
import { QuestionData } from "./QuestionData";
import qicon from "../../images/qicon.svg";

function QuestionFeature() {
  return (
    <div className="my-question">
      <div className="my-question__section-1 lg:h-[40vh] md:h-[35vh] h-[30vh]">
        <div className="my-question__section-1-bg lg:h-[40vh] md:h-[35vh] h-[30vh]"></div>
        <div className="my-question__section-1-content lg:h-[40vh] md:h-[35vh] h-[30vh] flex justify-center items-end container mx-auto">
          <div className="w-full 2xl:px-40 xl:px-12 lg:px-8 md:px-8 px-8 pb-8 2xl:pb-20 xl:pb-12 lg:pb-12 md:pb-10">
            <h2 className="text-left text-white 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl text-lg font-bold">
              CÁC CÂU HỎI THƯỜNG GẶP
            </h2>
          </div>
        </div>
      </div>
      <div className="my-question__section-2 h-fit">
        <div className="container mx-auto grid max-w-2xl grid-cols-1 gap-x-8 md:gap-y-8 gap-y-4 lg:mx-0 lg:max-w-none lg:grid-cols-3 2xl:px-72 2xl:py-16 xl:px-48 xl:py-12 lg:px-16 lg:py-8 md:px-32 md:py-8 min-[376px]:px-16 min-[376px]:py-8 px-8 py-6">
          {QuestionData.map((q, index) => {
            return (
              <div className="flex lg:max-w-xl flex-col items-start justify-start my-question__section-2-card 2xl:h-[500px] xl:h-[400px] lg:h-[350px] md:h-[300px] min-[376px]:h-[250px] h-[230px] relative">
                <div className="absolute w-full h-full q-card">
                  <div className="q-card-front absolute w-full h-full p-8 grid justify-items-center content-between">
                    <div className="grid justify-items-center">
                      <img
                        src={qicon}
                        alt=""
                        className="h-auto 2xl:w-[70px] xl:w-[60px] lg:w-[50px] md:w-[40px] min-[376px]:w-[30px] w-[25px]"
                      />
                      <h4 className="pt-4 text-white font-bold 2xl:text-2xl xl:text-xl md:text-lg min-[376px]:text-base text-sm">
                        {q.question}
                      </h4>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#fff"
                      className="2xl:size-12 xl:size-10 md:size-10 size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  <div className="q-card-back bg-white border-2 border-black absolute w-full h-full p-2 md:p-6">
                    {index === QuestionData.length - 1 ? ( // Kiểm tra xem đây có phải là object cuối cùng không
                      <ul className="2xl:text-lg xl:text-lg md:text-base text-sm text-black text-justify">
                        {q.answer.split("\n").map((line) => (
                          <li>{line}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="2xl:text-lg xl:text-lg md:text-base text-sm text-black text-justify">
                        {q.answer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default QuestionFeature;
