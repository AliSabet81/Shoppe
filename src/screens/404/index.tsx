import { Button } from "@mui/material";
import { ROUTES } from "../../routes";

const ErrorScreen = () => {
    return ( 
        <div className="max-w-sm mx-auto mt-36 mb-36 sm:mt-60 sm:mb-10 text-center">
            <h1 className="text-xl sm:text-4xl font-medium">404 Error</h1>
            <h2 className="text-xs sm:text-xl mb mt-6 text-gray-400">This page not found;</h2>
            <h2 className="text-xs sm:text-xl text-gray-400">back to home and start again</h2>
            <Button href={ROUTES.Home} className="!mt-16 sm:!py-4 !px-12 !text-xs sm:!text-base !border-2" variant="outlined" sx={{color:"black",":hover":{bgcolor:"white",borderColor:"gray"},borderColor:"black"}}>HOMEPAGE</Button>
        </div>
     );
}
 
export default ErrorScreen;