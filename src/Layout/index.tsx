import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

const Layout = () => {
    return ( 
    <div className="px-4 overflow-x-hidden sm:px-24 py-4 sm:py-16 mx-auto">
        <Header/>
        <Outlet/>
        <Footer/>
    </div> );
}
 
export default Layout;