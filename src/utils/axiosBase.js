


import axios from 'axios'
import { getItem } from './localStorage';

const baseHTTP= (token) =>axios.create({
    baseURL:"http://localhost:8080/",
    headers:{
        Authorization:token
    } 
})


export default baseHTTP;