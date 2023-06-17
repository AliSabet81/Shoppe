import { Button } from "@mui/material";
import { useState } from "react";
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import Downloads from "./Downloads";
import Addresses from "./Addresses";
import Details from "./Details";

const AccountScreen = () => {
    const [active , setActive] = useState<string>("Dashboard")
    const Account = () => {
        switch (active) {
            case "Dashboard": return <Dashboard/>
            case "Orders": return <Orders/>
            case "Downloads": return <Downloads/>
            case "Addresses": return <Addresses/>
            case "Details": return <Details/>
        }
    }
    return ( 
        <div className="flex flex-col gap-16 mt-24 items-center">
            <h1 className="text-4xl font-medium">My Account</h1>
            <div className='flex gap-11 w-full border-b'>
                <Button onClick={()=>setActive("Dashboard")} className={active==="Dashboard" ? "!text-black" : "!text-gray-400"}>Dashboard</Button>
                <Button onClick={()=>setActive("Orders")} className={active==="Orders" ? "!text-black" : "!text-gray-400"}>Orders</Button>
                <Button onClick={()=>setActive("Downloads")} className={active==="Downloads" ? "!text-black" : "!text-gray-400"}>Downloads</Button>
                <Button onClick={()=>setActive("Addresses")} className={active==="Addresses" ? "!text-black" : "!text-gray-400"}>Addresses</Button>
                <Button onClick={()=>setActive("Details")} className={active==="Details" ? "!text-black" : "!text-gray-400"}>Account details</Button>
                <Button onClick={()=>setActive("Logout")} className={active==="Logout" ? "!text-black" : "!text-gray-400"}>Logout</Button>
            </div>
            <div className="w-full"><Account/></div>
        </div>
     );
}
 
export default AccountScreen;