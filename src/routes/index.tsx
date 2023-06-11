import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
const Layout = React.lazy(()=>import('../Layout'))
const HomeScreen = React.lazy(()=>import('../screens/home'))
const AuthScreen = React.lazy(()=>import('../screens/auth'))
const LoginSceen = React.lazy(()=>import('../screens/auth/Login'))
const RegisterScreen = React.lazy(()=>import('../screens/auth/Register'))


export const ROUTES = {
    Home : "/",
    Shop : "/Shop",
    Auth : "/auth",
    Login : "/auth/login",
    Register:"/auth/register"
}

export const Router = createBrowserRouter([
    {
        path : "/",
        element : <Suspense><Layout/></Suspense> ,
        children:[
            {
                path:ROUTES.Home,
                element: <Suspense><HomeScreen/></Suspense> 
            },
            {
                path:ROUTES.Auth,
                element: <Suspense><AuthScreen/></Suspense> ,
                children:[
                    {
                        path:ROUTES.Login,
                        element: <Suspense><LoginSceen/></Suspense> 
                    },
                    {
                        path:ROUTES.Register,
                        element: <Suspense><RegisterScreen/></Suspense> 
                    }
                ]
            }
        ]
    }
])