import http from "../http-common";

class BrandService{

    getAll(){
        return http.get("/brand")
    }

    getById(id){
        return http.get(`/brand/${id}`)
    }
}

export default new BrandService();