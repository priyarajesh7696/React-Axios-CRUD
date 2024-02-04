import axios from "axios"
const API_URL = 'https://6599b048652b843dea531376.mockapi.io/API'


const AxiosService = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/data",
    headers:{
        "Content-Type":"application/json"
    }
})

export default AxiosService