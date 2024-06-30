import axios from "axios";

axios.defaults.baseURL ="https://learnapi-91da03df4b64.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();