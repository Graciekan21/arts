import axios from "axios";

axios.defaults.baseURL ='https://learnapi-91da03df4b64.herokuapp.com'
// axios.defaults.baseURL = 'https://8000-graciekan21-learnapi-uh3mpkq66ly.ws.codeinstitute-ide.net' 
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true 