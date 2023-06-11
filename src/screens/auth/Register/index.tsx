import { Box, Input, Button } from "@mui/material";

const Register = () => {
    return ( 
        <Box className="w-full flex flex-col gap-4" component={'form'}>
            <Input className="p-3" fullWidth id="standard-adornment-weight" 
                aria-describedby="standard-weight-helper-text" placeholder="Email"/>
            <Input className="mt-10 p-3 !border-slate-200" fullWidth id="standard-adornment-weight" 
                aria-describedby="standard-weight-helper-text" placeholder="Password"/>
            <Button className="!mt-10 !py-4" type="submit" variant="contained" fullWidth sx={{color:"white",bgcolor:"black",":hover":{bgcolor:"black"}}}>Sign Up</Button>
        </Box>
     );
}
 
export default Register;