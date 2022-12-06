import axios from "axios";


const instance = axios.create({
    baseURl : 'http://localhost:8080'
})

export default instance