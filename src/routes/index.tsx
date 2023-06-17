import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../screens/Blogs/blogs";
import ErrorScreen from "../screens/404";
import AccountScreen from "../screens/account";
const Layout = React.lazy(()=>import('../Layout'))
const HomeScreen = React.lazy(()=>import('../screens/home'))
const AuthScreen = React.lazy(()=>import('../screens/auth'))
const LoginSceen = React.lazy(()=>import('../screens/auth/Login'))
const RegisterScreen = React.lazy(()=>import('../screens/auth/Register'))
const ShopScreen = React.lazy(()=>import('../screens/shop'))
const ContactScreen = React.lazy(()=>import('../screens/contact'))
const ForgetPasswordScreen = React.lazy(()=>import('../screens/auth/forget'))
const BlogsScreen = React.lazy(()=>import('../screens/Blogs'))
const OneBlogScreen = React.lazy(()=>import('../screens/Blogs/oneBlog'))
const PrivacyPolicyScreen = React.lazy(()=>import('../screens/PrivacyPolicy'))
const OurStory = React.lazy(()=>import('../screens/ourStory'))

export const ROUTES = {
    Home : "/",

    Shop : "/Shop",
    Product: "/shop/:id",

    Auth : "/auth",
    Login : "/auth/login",
    ForgetPassword:"/auth/forgetPassword",
    Register:"/auth/register",

    Blog: "/blog",
    Blogs: "/blog/:category",
    OneBlog: "/blog/:category/:id",

    Contact:"/contactUs",
    PrivacyPolicy: "/PrivacyPolicy",
    OurStory: "/aboutUs",

    Account: "/account",
    Dashboard : "/account/dashboard",
    Orders: "/account/orders",
    Downloads : "/account/doownloads",
    Addresses: "/account/addresses",
    Details: "/account/details",
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
            },
            {
                path:ROUTES.ForgetPassword,
                element: <Suspense><ForgetPasswordScreen/></Suspense> 
            },
            {
                path: ROUTES.Shop,
                element: <Suspense><ShopScreen/></Suspense>
            },
            {
                path: ROUTES.Contact,
                element: <Suspense><ContactScreen/></Suspense>
            },
            {
                path: ROUTES.Blog,
                element: <Suspense><BlogsScreen/></Suspense> ,
                children:[
                    {
                        path:ROUTES.Blogs,
                        element:<Blog/>
                    },
                    {
                        path:ROUTES.OneBlog,
                        element:<OneBlogScreen/>
                    }
                ]
            },
            {
                path: ROUTES.PrivacyPolicy,
                element: <Suspense><PrivacyPolicyScreen/></Suspense> 
            },
            {
                path: ROUTES.OurStory,
                element: <Suspense><OurStory/></Suspense>
            },
            {
                path: "/error",
                element: <ErrorScreen/>
            },
            {
                path:ROUTES.Account,
                element:<AccountScreen/>,
                // children:[
                //     {
                //         path:ROUTES.Dashboard
                //     },
                //     {
                //         path:ROUTES.Orders
                //     },
                //     {
                //         path:ROUTES.Downloads
                //     },
                //     {
                //         path:ROUTES.Addresses
                //     },
                //     {
                //         path:ROUTES.Dashboard
                //     },
                // ]
            }
        ]
    }
])