import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '09d72581-43df-4af7-ba8b-857414772232'},
});
export const userAPI = {
    getUsers(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response=>response.data);},
    follow(userId){
        return instance.post(`follow/${userId}`)
            .then(response=>response.data);
    },
    unfollow(userId){
       return  instance.delete(`follow/${userId}`)
           .then(response=>response.data);
    },
    getProfile(userId){
        return instance.get(`profile/${userId}`);
    },
}

export const authAPI = {
 me(){
     return instance.get(`auth/me`);
    },
}