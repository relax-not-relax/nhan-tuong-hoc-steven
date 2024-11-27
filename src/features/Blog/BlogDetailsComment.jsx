import React from "react";
import PropTypes from "prop-types";

BlogDetailsComment.propTypes = {
  blog: PropTypes.object.isRequired,
};

function BlogDetailsComment({ blog }) {
  const [commentValues, setCommentValues] = React.useState({});

  const handleInput = (event, id) => {
    const textarea = event.target;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }

    setCommentValues((prev) => ({
      ...prev,
      [id]: textarea.value,
    }));
  };

  return (
    <div>
      <h3 className="text-xl font-semibold">Bình luận</h3>
      <div className="flex flex-row gap-x-3 justify-start items-start mt-6 mb-8">
        <img
          alt="Tania Andrew"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
          className="h-10 w-10 rounded-full"
        />
        <div className="relative w-full">
          <textarea
            rows="3"
            value={commentValues["main"] || ""}
            onInput={(e) => handleInput(e, "main")} // Handle input for the main comment
            className="peer h-full min-h-[100px] w-full !resize-none rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
          ></textarea>
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Bình luận của bạn
          </label>
          <div className="flex w-full justify-end py-1.5">
            <button
              className="select-none bg-[#005245] rounded-md py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Đăng tải
            </button>
          </div>
        </div>
      </div>
      <div className="mb-24">
        <h4 className="text-lg font-semibold mb-6">Tất cả bình luận</h4>
        {blog.comments.map((comment, index) => {
          return (
            <div key={index} className="mb-8">
              <div className="flex flex-row gap-x-2 justify-start items-start">
                <img
                  alt="Tania Andrew"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                  className="h-9 w-9 rounded-full"
                />
                <div className="px-3 py-1 bg-gray-200 rounded-tr-lg rounded-br-lg rounded-bl-lg">
                  <p className="font-medium lg:text-lg text-base">
                    {comment.comment.user_id.fullName}
                  </p>
                  <p className="lg:text-base text-sm font-light text-gray-700">
                    {comment.comment.content}
                  </p>
                </div>
              </div>
              <div className="lg:ms-8 lg:ps-3 ms-4 px-2 border-l-2 mt-4">
                {comment.comment.replyComment.map((reply) => {
                  return (
                    <div key={reply.replyComment_id} className="mb-2">
                      <div className="flex flex-row gap-x-2 justify-start items-start">
                        <img
                          alt="Tania Andrew"
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                          className="h-9 w-9 rounded-full"
                        />
                        <div className="px-3 py-1 bg-gray-200 rounded-tr-lg rounded-br-lg rounded-bl-lg">
                          <p className="font-medium lg:text-lg text-base">
                            {reply.user_id.fullName}
                          </p>
                          <p className="lg:text-base text-sm font-light text-gray-700">
                            {reply.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="mt-8 flex flex-row justify-start items-start gap-x-2">
                  <img
                    alt="Tania Andrew"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                    className="h-9 w-9 rounded-full"
                  />
                  <textarea
                    rows="1"
                    value={commentValues[`reply-${comment.comment.id}`] || ""}
                    onInput={(e) =>
                      handleInput(e, `reply-${comment.comment.id}`)
                    }
                    className="peer h-full min-h-[50px] !resize-none rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all lg:w-[80%] min-[376px]:w-72 md:w-56 w-64"
                    placeholder=" "
                  ></textarea>
                  <button
                    class="rounded-full border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none sm:block hidden"
                    type="button"
                  >
                    Trả lời
                  </button>
                  <button
                    class="rounded-full border border-transparent py-2 px-1 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none sm:hidden block"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogDetailsComment;
