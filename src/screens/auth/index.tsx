import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ROUTES } from "../../routes";

const Auth = () => {
    const [Auth,setAuth] = useState(true)
    return ( 
        <div className="mx-auto flex flex-col gap-16 items-center h-auth mt-6 mb-24 sm:my-32" >
            <h1 className=" text-3xl font-medium">My account</h1>
            <div className="bg-slate-200 grid grid-cols-2 p-1 gap-2 rounded-lg h-10 sm:h-16 w-full">
                <Link onClick={()=> setAuth(true)} className={`rounded-lg flex justify-center items-center text-lg sm:text-xl ${Auth ? "bg-white" : "bg-slate-200"}`} to={ROUTES.Login}>Sign In</Link>
                <Link onClick={()=> setAuth(false)} className={`rounded-lg flex justify-center items-center text-lg sm:text-xl ${Auth ? "bg-slate-200 " : " bg-white"}`} to={ROUTES.Register}>Sign Up</Link>
            </div>
            <Outlet/>
        </div>
     );
}
 
export default Auth;