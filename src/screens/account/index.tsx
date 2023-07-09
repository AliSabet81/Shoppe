import { Box,Tab, Tabs, tabsClasses } from "@mui/material";
import { useState } from "react";
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import Downloads from "./Downloads";
import Addresses from "./Addresses";
import Details from "./Details";
const AccountScreen = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
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

            <Box alignSelf={"flex-start"} width={"100%"} borderBottom={0.5} sx={{ bgcolor: 'background.paper',borderColor:"GrayText" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable" 
                    // scrollButtons
                    allowScrollButtonsMobile
                    sx={{
                        [`& .${tabsClasses.scrollButtons}`]: {
                          '&.Mui-disabled': { opacity: 0.3 },
                        },
                      }}
                    aria-label="scrollable force tabs example"
                    >
                    <Tab onClick={()=>setActive("Dashboard")} label="Dashboard" />
                    <Tab onClick={()=>setActive("Orders")} label="Orders" />
                    <Tab onClick={()=>setActive("Downloads")} label="Downloads" />
                    <Tab onClick={()=>setActive("Addresses")} label="Addresses" />
                    <Tab onClick={()=>setActive("Details")} label="Account details" />
                    <Tab onClick={()=>setActive("Logout")} label="Logout" />
                </Tabs>
            </Box>
            <div className="w-full"><Account/></div>
        </div>
     );
}
 
export default AccountScreen;