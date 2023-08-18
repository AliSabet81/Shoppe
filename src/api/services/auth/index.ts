import Cookies from 'js-cookie';
import { ILoginData, IRegisterData } from "../../../types";
import { instance } from "../../constant";


export const RegisterService =async (data : IRegisterData) => {
    const res = await instance.post("/auth/register",data)
    return res.data
}

export const LoginService =async (data : ILoginData) => {
    const res = await instance.post("/auth/login",data)
    return res.data
}

export const UserValidateService =async () => {
    const res = await instance.get("/auth/UserValidate")
    return res.data
}