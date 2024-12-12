import React from "react";
import PropTypes from "prop-types";
import { useSnackbar } from "notistack";
import blogAPI from "../../api/blogApi";
import placeAva from "../../images/place_ava.png";
import accountAPI from "../../api/accountApi";

BlogDetailsComment.propTypes = {
  blog: PropTypes.object.isRequired,
};

function BlogDetailsComment({ blog }) {
  const [commentValues, setCommentValues] = React.useState({});
  const ACCESS_TOKEN = sessionStorage.getItem("accessTokenNths");
  const isLogin = ACCESS_TOKEN ? true : false;
  const [user, setUser] = React.useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const [comments, setComments] = React.useState([]);
  const [isLoadingComments, setIsLoadingComments] = React.useState(true);

  const fetchComments = async () => {
    try {
      const res = await blogAPI.getComments({ postId: blog.postProperties.id });
      setComments(res.data);
      setIsLoadingComments(false);
    } catch (error) {
      setIsLoadingComments(false);
      console.log("Failed to get comments: ", error);
    }
  }

  const fetchUser = async () => {
    try {
      const res = await accountAPI.get();
      setUser(res.data);
    } catch (error) {
      console.log("Failed to get user: ", error);
    }
  }

  React.useEffect(() => {
    setIsLoadingComments(true);
    if (isLogin) {
      fetchUser();
    }
    fetchComments();
  }, [isLogin]);

  const handleInput = (event, id) => {
    const textarea = event.target;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }

    const value = textarea.value.trim(); // Loại bỏ khoảng trắng thừa

    setCommentValues((prev) => ({
      ...prev,
      [id]: value.length > 0 ? textarea.value : "", // Chỉ lưu nếu giá trị hợp lệ
    }));
  };

  const submitComment = async () => {
    if (!isLogin) {
      enqueueSnackbar("Bạn cần đăng nhập để bình luận!", {
        variant: "warning",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      return;
    }
    const comment = commentValues["main"] || "";
    if (comment.trim().length === 0) {
      enqueueSnackbar("Vui lòng nhập bình luận hợp lệ!", {
        variant: "warning",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      return;
    }

    try {
      const res = await blogAPI.createComment({
        "postId": blog.postProperties.id,
        "content": commentValues.main,
      });
      enqueueSnackbar(res.message, {
        variant: "success",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      setCommentValues({});
      setIsLoadingComments(true);
      fetchComments();
    } catch (error) {
      enqueueSnackbar("LỖI: Bình luận không được đăng tải!", {
        variant: "error",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      enqueueSnackbar("Vui lòng thử lại!", {
        variant: "warning",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    }
  }

  const submitReply = async (id) => {
    if (!isLogin) {
      enqueueSnackbar("Bạn cần đăng nhập để bình luận!", {
        variant: "warning",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      return;
    }
    const comment = commentValues[`reply-${id}`] || "";
    if (comment.trim().length === 0) {
      enqueueSnackbar("Vui lòng nhập bình luận hợp lệ!", {
        variant: "warning",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      return;
    }

    try {
      const res = await blogAPI.createReply({
        "commentParentId": id,
        "postId": blog.postProperties.id,
        "content": comment
      });
      enqueueSnackbar(res.message, {
        variant: "success",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      setIsLoadingComments(true);
      setCommentValues({});
      fetchComments();
    } catch (error) {
      console.log("Failed to reply: ", error);
      enqueueSnackbar("LỖI: Bình luận không được đăng tải!", {
        variant: "error",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      enqueueSnackbar("Vui lòng thử lại!", {
        variant: "warning",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    }
  }

  return (
    <div>
      <h3 className="text-xl font-semibold">Bình luận</h3>
      {isLogin ? (
        <div className="flex flex-row gap-x-3 justify-start items-start mt-6 mb-8">
          <img
            alt="Tania Andrew"
            src={!user ? placeAva : user.avatar}
            className="h-10 w-10 rounded-full object-cover object-center"
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
                onClick={submitComment}
              >
                Đăng tải
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row gap-x-3 justify-start items-start mt-6 mb-8">
          <p className="text-gray-500 text-lg italic">Vui lòng đăng nhập để bình luận bài viết!</p>
        </div>
      )}

      <div className="mb-24">
        <h4 className="text-lg font-semibold mb-6">Tất cả bình luận</h4>
        {isLoadingComments ? (
          <div className="w-full h-32 flex flex-row justify-center items-center">
            <svg
              class="text-gray-300 animate-spin"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path
                d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                stroke="currentColor"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                stroke="currentColor"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-gray-900"
              ></path>
            </svg>
          </div>
        ) : (
          <>
            {comments.length === 0 ? (
              <p className="text-start mt-4 text-gray-500 italic md:text-base text-sm">Bài viết chưa có bình luận!</p>
            ) : (
              <>
                {comments.map((comment) => {
                  return (
                    <div key={comment.comment.id} className="mb-8">
                      <div className="flex flex-row gap-x-2 justify-start items-start">
                        <img
                          alt="Tania Andrew"
                          src={comment.comment.user_id.avatar}
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
                        {comment.comment.replyComment.length > 0 && (
                          <>
                            {comment.comment.replyComment.map((reply) => {
                              return (
                                <div key={reply.replyComment_id} className="mb-2">
                                  <div className="flex flex-row gap-x-2 justify-start items-start">
                                    <img
                                      alt="Tania Andrew"
                                      src={reply.user_id.avatar}
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
                          </>
                        )}

                        <div className="mt-8 flex flex-row justify-start items-start gap-x-2">
                          <img
                            alt="Tania Andrew"
                            src={!user ? placeAva : user.avatar}
                            className="h-9 w-9 rounded-full object-cover object-center"
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
                            onClick={() => {
                              submitReply(comment.comment.id);
                            }}
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
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default BlogDetailsComment;
