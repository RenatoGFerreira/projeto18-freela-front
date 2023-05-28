import axios from "axios";

const BASE_URL = "http://localhost:5000"



function getViagens(){
    const promise = axios.get(`${BASE_URL}/viagens`)
    return promise
}

function getInfoViagens(id){
    const promise = axios.get(`${BASE_URL}/checkinpage/${id}`)
    return promise
}

function getInfoTicket(id){
    const promise = axios.get(`${BASE_URL}/confirmpage/${id}`)
    return promise
}



const apiViagens = { getViagens, getInfoViagens, getInfoTicket}
export default apiViagens