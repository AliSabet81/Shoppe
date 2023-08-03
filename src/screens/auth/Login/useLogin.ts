import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { ILoginData } from "../../../types";
import { LoginService } from "../../../api/services/auth";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const UseLogin = () => {
    const [passwordType , setPasswordType] = useState<'password' | 'text'>('password')
    const navigate = useNavigate();

    const LoginSchema = yup.object({
        email : yup.string().required().email(),
        password : yup.string().required().min(8)
      })
      const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(LoginSchema),
        mode: "onSubmit"
      })
      const handleLogin = async (data:ILoginData) =>{
        const res = await LoginService(data);
        Cookies.set('token',res.token,{
          expires:30
        })
        navigate("/")
      }
    return {
        register,
        handleLogin,
        handleSubmit,
        errors,
        passwordType,
        setPasswordType
    };
}
 
export default UseLogin;