import axiosClientServer from "./axiosClientServer"

const authenticationAPI = {
    register: (data) => {
        return axiosClientServer.post('/auth/register', data);
    },
    login: (data) => {
        return axiosClientServer.post('/auth/login', data);
    },
    logout: () => {
        return axiosClientServer.post('/auth/logout');
    }
}

export default authenticationAPI;