import { Button } from "@mui/material";

const Dashboard = () => {
    return ( 
        <div className="text-xs sm:text-base">
            <h1 className="mb-3">Hello <span> Ali Sabet</span> ( not <span> Ali Sabet</span> ? <Button className="!text-xs sm:!text-base" sx={{color:"goldenrod"}}>Log Out</Button>)</h1>
            <h1>From your account dashboard you can view your <Button className="!text-xs sm:!text-base" sx={{color:"goldenrod"}}>recent orders</Button> ,
             manage your <Button className="!text-xs sm:!text-base" sx={{color:"goldenrod"}}>shipping and billing addresses</Button> , and edit your <Button className="!text-xs sm:!text-base" sx={{color:"goldenrod"}}>password and account details</Button> .</h1>
        </div>
     );
}
 
export default Dashboard;