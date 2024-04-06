import axios from 'axios'

const baseHTTP = axios.create({
    baseURL:"http://localhost:8080/",
    headers:{
        Authorization:""
    }
})


export default baseHTTP