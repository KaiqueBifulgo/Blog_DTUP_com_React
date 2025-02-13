import axios from "axios";

const blogDtup = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {"content-type": "application/json"}
})

export default blogDtup;