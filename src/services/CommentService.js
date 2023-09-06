import http from "../http-common";

class CommentService{
    getById(id){
        return http.get(`comment/${id}`);
    }
    getByScooterId(scooterId){
        return http.get(`comment?scooterId=${scooterId}`);
    }
    create(data){
        return http.post("comment",data);
    }
    update(id, data){
        return http.put(`comment/${id}`,data);
    }
    delete(id){
        return http.delete(`comment/${id}`);
    }
}

export default new CommentService();