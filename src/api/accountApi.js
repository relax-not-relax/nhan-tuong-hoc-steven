import axiosClientServer from "./axiosClientServer";

const accountAPI = {
  get: () => {
    return axiosClientServer.get("/user");
  },
};

export default accountAPI;
