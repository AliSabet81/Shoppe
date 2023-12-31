import Cookies  from 'js-cookie';
import axios from "axios"

const baseURL = 'http://localhost:3333/api'

export const instance = axios.create({
    baseURL,
    timeout : 30000
})

instance.defaults.headers.common["Authorization"] = Cookies.get("token")