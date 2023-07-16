import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";
import { RegisterService } from "../../../api/services/auth";
import { IRegisterData } from "../../../types";



const UseRegister = () => {
    const [passwordType , setPasswordType] = useState<'password' | 'text'>('password')
    const Navigate = useNavigate()
    const LoginSchema = yup.object({
        email : yup.string().required().email(),
        password : yup.string().required().min(8),
        firstname: yup.string().required(),
        lastname: yup.string().required()
      })
      const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(LoginSchema),
        mode: "onSubmit"
      })
      const handleRegister = async (data:IRegisterData) =>{
        const res = await RegisterService(data)
        console.log(res)
        Navigate(ROUTES.Login)
      }
    return {
        register,
        handleRegister,
        handleSubmit,
        errors,
        passwordType,
        setPasswordType
    };
}
 
export default UseRegister;