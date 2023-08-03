import { Button } from "@mui/material";
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
interface IDashboardInfo{
    firstName:string | undefined,
    lasttName:string | undefined,
}

const Dashboard = (i:IDashboardInfo) => {
    const navigate = useNavigate()
    const handleLogOut = async () => {
        await Cookies.remove("token")
        navigate("/")
    }
    return ( 
        <div className="text-xs sm:text-base">
            <h1 className="mb-3">Hello <span>{i.firstName}{i.lasttName}</span> ( not <span>{i.firstName}{i.lasttName}</span> ? <Button onClick={handleLogOut} className="!text-xs sm:!text-base" sx={{color:"goldenrod"}}>Log Out</Button>)</h1>
            <h1>From your account dashboard you can view your <Button className="!text-xs sm:!text-base" sx={{color:"goldenrod"}}>recent orders</Button> ,
             manage your <Button className="!text-xs sm:!text-base" sx={{color:"goldenrod"}}>shipping and billing addresses</Button> , and edit your <Button className="!text-xs sm:!text-base" sx={{color:"goldenrod"}}>password and account details</Button> .</h1>
        </div>
     );
}
export default Dashboard;