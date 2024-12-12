import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

PopularPost.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  urlTarget: PropTypes.string.isRequired
};

function PopularPost({ thumbnail, title, releaseDate, urlTarget }) {
  return (
    <a href={urlTarget}>
      <div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
        <div class="flex items-center gap-x-3">
          <img
            src={thumbnail}
            alt={thumbnail}
            class="relative inline-block xl:h-16 xl:w-16 sm:w-12 sm:h-12 w-8 h-8 rounded-full object-cover object-center"
          />
          <div>
            <h6 class="text-slate-800 font-semibold xl:text-lg text-start line-clamp-1">
              {title}
            </h6>
            <p class="text-slate-600 text-sm text-start">{releaseDate}</p>
          </div>
        </div>
      </div>
    </a>

  );
}

export default PopularPost;
