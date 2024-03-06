import axios from "axios"
import { apiKey } from "./apiKey"

export const getGPU = () => {
    var GPUList = []
    const resp = axios.get(`${apiKey}GPU`).then(resp => (GPUList = resp.data)).catch(err => alert(err))
    return resp
}

export const getCPU = () => {
    var GPUList = []
    const resp = axios.get(`${apiKey}CPU`).then(resp => (GPUList = resp.data)).catch(err => alert(err))
    return resp
}