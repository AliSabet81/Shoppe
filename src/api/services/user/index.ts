import { instance } from "../../constant"

export const GetUserNameService =async () => {
    const res = await instance.get("/user/UserInfo")
    return res.data
}