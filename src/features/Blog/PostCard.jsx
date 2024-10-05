import React from "react";
import PropTypes from "prop-types";

PostCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export function PostCard({ thumbnail, releaseDate, title, content }) {
  return (
    <a href="/" className="w-fit">
      <div class="cursor-pointer group relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg xl:w-96 hover:shadow-lg transition-shadow duration-300">
        <div class="relative xl:h-56 m-2.5 overflow-hidden text-white rounded-md">
          <img
            class="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
            src={thumbnail}
            alt={thumbnail}
          />
        </div>
        <div class="p-4">
          <h6 class="mb-2 text-slate-800 xl:text-xl sm:text-lg text-base font-semibold xl:h-16 sm:h-12 text-start line-clamp-2">
            {title}
          </h6>
          <p class="text-slate-600 leading-normal font-light text-start line-clamp-3 sm:text-base text-sm">
            {content}
          </p>
        </div>

        <div class="flex items-center justify-between p-4">
          <div class="flex items-center">
            <img
              alt="Tania Andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
              class="relative inline-block h-8 w-8 rounded-full"
            />
            <div class="flex flex-col ml-3 text-sm">
              <span class="text-slate-800 font-semibold text-start">
                Lewis Daniel
              </span>
              <span class="text-slate-600 text-start">{releaseDate}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
