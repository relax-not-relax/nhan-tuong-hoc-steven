import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

CategoryPost.propTypes = {
  category: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

function CategoryPost({ category, index }) {
  const navigate = useNavigate();

  const toggleAccordion = (index) => {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    // SVG for Down icon
    const downSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    `;

    // SVG for Up icon
    const upSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
      </svg>
    `;

    // Toggle the content's max-height for smooth opening and closing
    if (content.style.maxHeight && content.style.maxHeight !== "0px") {
      content.style.maxHeight = "0";
      icon.innerHTML = upSVG;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.innerHTML = downSVG;
    }
  };

  return (
    <div class="flex items-center justify-start last:pb-0">
      <div className="w-full">
        <button
          onClick={() => {
            toggleAccordion(index);
          }}
          class="w-full flex justify-between items-center py-5 text-slate-800"
        >
          <span className="text-base font-semibold">{category.name}</span>
          <span
            id={`icon-${index}`}
            class="text-slate-800 transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div
          id={`content-${index}`}
          class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div class="pb-5 flex flex-wrap gap-2">
            <button
              class="rounded-full border border-slate-300 py-1 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-[#005245] hover:border-[#005245] focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={() => {
                navigate(
                  `/thu-vien/chu-de?topic=${category.id}&pageNumber=0&pageSize=8&sort=id,desc`
                );
              }}
            >
              Tất cả
            </button>
            {category.hashTags.map((hashtag) => {
              return (
                <div key={hashtag.id}>
                  <button
                    class="rounded-full border border-slate-300 py-1 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-[#005245] hover:border-[#005245] focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    onClick={() => {
                      navigate(
                        `/thu-vien/chu-de?topic=${category.id}&hashtag=${hashtag.id}&pageNumber=0&pageSize=8&sort=id,desc`
                      );
                    }}
                  >
                    {hashtag.name}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPost;
