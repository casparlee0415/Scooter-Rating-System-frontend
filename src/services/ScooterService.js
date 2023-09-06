import http from "../http-common";

class ScooterService{
    getAll(){
        return http.get("/scooter");
    }

    getByBrandId(brandId){
        
        return http.get(`/scooter?brandId=${brandId}`);
    }

    getById(id){
        return http.get(`/scooter/${id}`)
    }
}

export default new ScooterService();