import axiosClientServer from "./axiosClientServer";

const userAPI = {
    get: () => {
        return axiosClientServer.get('/user');
    }
}

export default userAPI;