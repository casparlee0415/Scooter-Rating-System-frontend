import axios from "axios";

const baseURL="http://localhost:8089";

const http=axios.create({
    baseURL: baseURL,
    headers: {
      "Content-type": "application/json"
    }
});

export {http,baseURL};