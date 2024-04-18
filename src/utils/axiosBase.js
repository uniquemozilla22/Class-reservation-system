import axios from 'axios'

const baseHTTP= (token) =>axios.create({
    baseURL:import.meta.env.VITE_BACKEND_LINK,
    headers:{
        Authorization:token
    } 
})


export default baseHTTP;