import { Button } from "@mui/material";

const Dashboard = () => {
    return ( 
        <div>
            <h1>Hello <span> Vitatheme</span> ( not <span> Vitatheme</span> ? <Button sx={{color:"goldenrod"}}>Log Out</Button>)</h1>
            <h1>From your account dashboard you can view your <Button sx={{color:"goldenrod"}}>recent orders</Button> ,
             manage your <Button sx={{color:"goldenrod"}}>shipping and billing addresses</Button> , and edit your <Button sx={{color:"goldenrod"}}>password and account details</Button> .</h1>
        </div>
     );
}
 
export default Dashboard;