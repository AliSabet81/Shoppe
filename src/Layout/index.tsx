import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

const Layout = () => {
    return ( 
    <div className="px-24 py-16 mx-auto">
        <Header/>
        <Outlet/>
        <Footer/>
    </div> );
}
 
export default Layout;