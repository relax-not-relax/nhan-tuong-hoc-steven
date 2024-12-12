import React from "react";
import PropTypes from "prop-types";
import formatNormalDate from "../../utils/formatNormalDate";
import logo from "../../images/logo_bg.png";

PostCard.propTypes = {
  blog: PropTypes.object.isRequired,
  urlTarget: PropTypes.string.isRequired,
};

export function PostCard({ blog, urlTarget }) {
  return (
    <a href={urlTarget}>
      <div class="cursor-pointer group relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full hover:shadow-lg transition-shadow duration-300">
        <div class="relative xl:h-56 h-48 m-2.5 overflow-hidden text-white rounded-md">
          <img
            class="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110 object-cover object-center w-full xl:h-56 h-48"
            src={blog.postProperties.thumnail}
            alt={blog.postProperties.thumnail}
          />
        </div>
        <div class="p-4">
          <h6 class="mb-2 text-slate-800 xl:text-xl sm:text-lg text-base font-semibold text-start line-clamp-1">
            {blog.postProperties.title}
          </h6>
          <div class="rounded-full bg-[#005245] py-1 px-3 border border-transparent text-sm text-white transition-all shadow-sm w-fit mb-3">
            {blog.postProperties.topic.name}
          </div>
          <p class="text-slate-600 leading-normal font-light text-start line-clamp-3 sm:text-base text-sm">
            {blog.postProperties.shortDescription}
          </p>
        </div>

        <div class="flex items-center justify-between p-4">
          <div class="flex items-center">
            <img
              alt="Tania Andrew"
              src={logo}
              className="relative inline-block h-8 w-8 rounded-full"
            />
            <div class="flex flex-col ml-3 text-sm">
              <span class="text-slate-800 font-semibold text-start">
                Steven
              </span>
              <span class="text-slate-600 text-start">
                {formatNormalDate(blog.postProperties.createTime)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
