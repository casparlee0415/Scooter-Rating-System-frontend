import axios from "axios";
import {baseURL} from "./base-http-common"

export default axios.create({
  baseURL: baseURL+"/scooterweb/api",
  headers: {
    "Content-type": "application/json"
  }
});