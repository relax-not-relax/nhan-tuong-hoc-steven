import React from "react";
import PropTypes from "prop-types";

CategoryPost.propTypes = {
  category: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

function CategoryPost({ category, amount }) {
  return (
    <div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
      <div class="flex items-center gap-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-4"
          color="bg-black"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>

        <h6 class="text-slate-800 font-semibold lg:text-lg text-base text-start line-clamp-1">
          {category}
        </h6>
      </div>
      <h6 class="text-slate-600 font-medium">({amount})</h6>
    </div>
  );
}

export default CategoryPost;
