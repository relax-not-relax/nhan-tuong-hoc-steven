import buildQueryParams from "../utils/buildQueryParams";
import axiosClientServer from "./axiosClientServer";

const blogAPI = {
  getTopic: () => {
    return axiosClientServer.get("/topic?page=0&size=100");
  },
  getTopicById: ({ id }) => {
    return axiosClientServer.get(`/topic/${id}`);
  },
  getHashtagById: ({ id }) => {
    return axiosClientServer.get(`/hash-tag/${id}`);
  },
  getBlogFeature: ({ pageNumber, pageSize, sort }) => {
    return axiosClientServer.get(
      `/post/featured?page=${pageNumber}&size=${pageSize}&sort=${sort}`
    );
  },
  getBlogs: ({ pageNumber, pageSize, topic, hashtag, sort }) => {
    const params = {
      page: pageNumber,
      size: pageSize,
      topic: topic,
      hashtag: hashtag,
      sort: sort,
    };
    const queryParams = buildQueryParams(params);
    return axiosClientServer.get(`/post${queryParams}`);
  },
  getBlogById: ({ blogId }) => {
    return axiosClientServer.get(`/post/${blogId}`);
  },
  getBlogsByTopic: ({ topicId }) => {
    return axiosClientServer.get(
      `/post?topic=${topicId}&page=0&size=6&sort=id,desc`
    );
  },
  getComments: ({ postId }) => {
    return axiosClientServer.get(`/comment/${postId}`);
  },
  createComment: (data) => {
    return axiosClientServer.post("/comment", data);
  },
  createReply: (data) => {
    return axiosClientServer.post("/comment/reply", data);
  },
};

export default blogAPI;
