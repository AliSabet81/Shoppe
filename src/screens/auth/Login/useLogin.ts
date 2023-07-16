import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { ILoginData } from "../../../types";

const UseLogin = () => {
    const [passwordType , setPasswordType] = useState<'password' | 'text'>('password')

    const LoginSchema = yup.object({
        email : yup.string().required().email(),
        password : yup.string().required().min(8)
      })
      const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(LoginSchema),
        mode: "onSubmit"
      })
      const handleLogin = (data:ILoginData) =>{
        console.log(data);
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