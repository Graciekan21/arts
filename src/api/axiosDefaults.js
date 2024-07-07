import axios from "axios";

axios.defaults.baseURL ="https://learnapi-91da03df4b64.herokuapp.com/";//"https://8000-graciekan21-learnapi-uh3mpkq66ly.ws.codeinstitute-ide.net/";//`${window.location.origin}/`;//"https://learnapi-91da03df4b64.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create({
    baseURL: axios.defaults.baseURL,
    withCredentials: true,  // Include credentials in requests
  });
  
export const axiosRes = axios.create();