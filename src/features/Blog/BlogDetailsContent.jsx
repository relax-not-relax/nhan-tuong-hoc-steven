import React from "react";
import PropTypes from "prop-types";
import BlogData from "./BlogData";
import BlogDetailsComment from "./BlogDetailsComment";

BlogDetailsContent.propTypes = {
  blog: PropTypes.object.isRequired,
};

function BlogDetailsContent({ blog }) {
  return (
    <div className="text-start">
      <nav aria-label="breadcrumb" className="w-max">
        <ol className="flex w-full flex-wrap items-center rounded-md bg-slate-50 px-4 py-2">
          <li className="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
            <a href="/thu-vien" className="text-base">
              Thư viện
            </a>
            <span class="pointer-events-none mx-2 text-slate-800">/</span>
          </li>
          <li className="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
            <a href="#" className="text-base">
              {blog.topic}
            </a>
          </li>
        </ol>
      </nav>
      <h1 className="text-start md:text-3xl text-2xl mt-4 font-semibold">
        {blog.title}
      </h1>
      <div className="flex flex-row justify-start items-center mt-3 md:gap-x-4 gap-x-2">
        <div className="flex flex-row items-center gap-x-2">
          <img
            alt="Tania Andrew"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
            className="relative inline-block h-8 w-8 rounded-full"
          />
          <span className="text-slate-800 font-semibold text-start md:text-base text-sm">
            Lewis Daniel
          </span>
        </div>

        <div className="w-1 h-1 bg-[#005245] rounded-full"></div>
        <p className="text-slate-800 font-semibold text-start md:text-base text-sm">
          {blog.topic}
        </p>
        <div className="w-1 h-1 bg-[#005245] rounded-full"></div>
        <span className="text-slate-600 text-start md:text-base text-sm">
          {blog.releaseDate}
        </span>
        <div className="w-1 h-1 bg-[#005245] rounded-full"></div>
        <div className="flex flex-row items-center gap-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
            />
          </svg>

          <span className="text-slate-800 font-normal text-start md:text-base text-sm">
            (0)
          </span>
        </div>
      </div>
      <p className="text-start mt-4 text-gray-500 italic md:text-base text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit
        vestibulum vulputate. Mauris sit amet orci at erat fermentum tempus.
        Cras convallis eget massa ut congue. Integer ultrices, nisl et varius
        cursus, diam tortor elementum urna, non efficitur enim ante a dui. Donec
        quam nisl, ultrices vitae diam quis, ornare mattis urna. Pellentesque
        lobortis id nulla non congue. Pellentesque nisi elit, placerat vel
        sodales a, semper eu ex. Aenean a eros eu sem porttitor ornare. Donec
        nisl quam, commodo a risus vel, finibus aliquam augue.
      </p>
      <img
        className="object-cover object-center w-full rounded-lg md:h-96 h-64 mt-12"
        src={blog.thumbnail}
        alt="nature"
      />
      <p className="mt-8 md:text-base text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit
        vestibulum vulputate. Mauris sit amet orci at erat fermentum tempus.
        Cras convallis eget massa ut congue. Integer ultrices, nisl et varius
        cursus, diam tortor elementum urna, non efficitur enim ante a dui. Donec
        quam nisl, ultrices vitae diam quis, ornare mattis urna. Pellentesque
        lobortis id nulla non congue. Pellentesque nisi elit, placerat vel
        sodales a, semper eu ex. Aenean a eros eu sem porttitor ornare. Donec
        nisl quam, commodo a risus vel, finibus aliquam augue. Aenean libero mi,
        volutpat et vulputate nec, maximus sit amet dolor. Quisque gravida mi
        vitae elementum fermentum. Aenean ornare purus vitae sagittis posuere.
        Vivamus sit amet massa in felis convallis fermentum vitae in lectus.
        <br />
        Donec lobortis odio vel metus vehicula varius. Duis sit amet dui nulla.
        Vestibulum nibh mi, consequat vel arcu vitae, facilisis ornare arcu.
        Curabitur eu cursus mauris. Sed pharetra sollicitudin erat, sit amet
        mattis purus dapibus at. Nullam volutpat ultricies convallis.
        Pellentesque nec massa sit amet erat elementum interdum sodales non
        orci. Suspendisse non vulputate metus, sit amet dignissim ex. Aliquam
        mattis neque vel justo feugiat posuere. Pellentesque commodo placerat
        nunc, nec eleifend est tempus vel. Aenean tincidunt sem at justo
        pretium, malesuada eleifend turpis mollis. Quisque interdum, orci nec
        rhoncus eleifend, elit massa lacinia justo, in cursus diam lectus vel
        arcu. Sed fringilla, libero a elementum dapibus, leo nibh pellentesque
        erat, nec lobortis quam turpis faucibus magna. Cras pellentesque velit
        sed sem hendrerit cursus. Suspendisse suscipit mauris malesuada eros
        imperdiet semper. Sed vel accumsan neque.
        <br />
        Sed et mattis turpis. Morbi sagittis vitae magna eu blandit. Sed
        molestie nec metus non mollis. Phasellus quis nisl ac ligula maximus
        sagittis. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Donec viverra, tellus ac finibus
        malesuada, nibh ligula pharetra augue, at eleifend ex neque nec massa.
        Sed ac maximus augue. Duis ac ligula luctus, ornare erat non, varius
        urna. Pellentesque quis lectus id justo consequat sagittis ut eu dolor.
        Quisque bibendum faucibus tellus. Nulla sed leo eget urna suscipit
        eleifend sed ut sapien. Nullam imperdiet risus odio, ac feugiat sem
        condimentum ac. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Integer lacinia mauris sed sem bibendum,
        eget varius quam lobortis.
      </p>
      <hr className="my-8" />
      <div className="flex flex-wrap gap-x-3">
        {blog.hastags.map((hastag, index) => {
          return (
            <div key={index}>
              <button
                class="rounded-full border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-[#005245] hover:border-[#005245] focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                {hastag}
              </button>
            </div>
          );
        })}
      </div>
      <hr className="my-8" />
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-xl font-semibold">Bài viết cùng chủ đề</h3>
        <button
          class="rounded-full border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Xem tất cả
        </button>
      </div>
      <div className="flex flex-wrap grid md:grid-cols-3 grid-cols-2 gap-x-3 gap-y-4 mt-6">
        {BlogData.slice(0, 6).map((blog, index) => {
          return (
            <a href={`thu-vien/${blog.id}`} key={index}>
              <div>
                <img
                  className="object-cover object-center w-full rounded-md md:h-40 h-24"
                  src={blog.thumbnail}
                  alt="nature"
                />
                <p className="text-base font-medium">{blog.title}</p>
              </div>
            </a>
          );
        })}
      </div>
      <hr className="my-8" />
      <BlogDetailsComment blog={blog} />
    </div>
  );
}

export default BlogDetailsContent;
