import { IRegisterData } from "../../../types";
import { instance } from "../../constant";


export const RegisterService =async (data : IRegisterData) => {
    const res = await instance.post("/api/register",data)
    return res.data
}