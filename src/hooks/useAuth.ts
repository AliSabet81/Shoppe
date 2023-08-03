import { useEffect } from 'react';
import { useState } from 'react';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes';
const useAuth = () => {
    const navigate = useNavigate()
    const [isLogin , setIsLogin] = useState(false)
    useEffect(()=>{
        if (Cookies.get('token')) {
            setIsLogin(true)
            navigate(ROUTES.Account)
        } else {
            setIsLogin(false)
            navigate(ROUTES.Login)
        }
    },[navigate])
    return ( isLogin );
}
 
export default useAuth;