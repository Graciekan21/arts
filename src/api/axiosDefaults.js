import axios from "axios";

axios.defaults.baseURL = 'https://arts-afro-4626ca68624f.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true 