import axios from "axios";

const api = axios.create({
    //baseURL: "https://611cc14ba18e850017decc23.mockapi.io/",
    baseURL: "http://localhost:8090",
});

export default api;