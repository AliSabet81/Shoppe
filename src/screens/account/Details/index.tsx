import { Box, Button, Input } from "@mui/material";

const Details = () => {
    return ( 
        <Box component={"form"} className="flex flex-col gap-9 max-w-lg m-auto">
            <h1 className="hidden sm:block text-4xl font-medium text-center">Account Details</h1>
            <Input className="pb-3" fullWidth id="standard-adornment-weight" 
                aria-describedby="standard-weight-helper-text" placeholder="First name*"/>
            <Input className="pb-3" fullWidth id="standard-adornment-weight" 
                aria-describedby="standard-weight-helper-text" placeholder="Last name*"/>
            <div>
                <Input className="pb-3" fullWidth id="standard-adornment-weight" 
                aria-describedby="standard-weight-helper-text" placeholder="Display name*"/>
                <h4 className="text-gray-400 mt-2 text-xs">This will be how your name will be displayed in the account section and in reviews.</h4>
            </div>
            <Input className="pb-3" fullWidth id="standard-adornment-weight" 
                aria-describedby="standard-weight-helper-text" placeholder="Email Address *"/>
            <h4 className="text-base font-bold">Password change</h4>
            <Input className="pb-3" fullWidth id="standard-adornment-weight" 
                aria-describedby="standard-weight-helper-text" placeholder="Current password (leave blank to leave unchanged)"/>
            <Input className="pb-3" fullWidth id="standard-adornment-weight" 
                aria-describedby="standard-weight-helper-text" placeholder="New password (leave blank to leave unchanged)"/>
            <Input className="pb-3" fullWidth id="standard-adornment-weight" 
                aria-describedby="standard-weight-helper-text" placeholder="Confirm New Password"/>
            <Button className="sm:!py-4" type="submit" fullWidth variant="contained" sx={{color:"white",bgcolor:"black",":hover":{bgcolor:"black"}}}>SAVE CHANGES</Button>
        </Box>
     );
}
 
export default Details;