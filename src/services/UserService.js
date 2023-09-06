import http from "../http-common";

class UserService{
    getById(id){
        return http.get(`/user/${id}`);
    }

    save(data){
        return http.put(`/user`,data);
    }
}

export default new UserService();