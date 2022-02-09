import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "ee6fd1f6-c9f4-4ba7-b3e1-857fdc3c1496"
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId){
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }
}


