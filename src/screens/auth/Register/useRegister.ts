import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";

interface IRegisterData {
    email:string,
    password:string,
    firstname:string,
    lastname:string
  }

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
      const handleRegister = (data:IRegisterData) =>{
        console.log(data);
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