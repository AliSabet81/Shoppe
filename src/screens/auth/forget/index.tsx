import { Box, Button, Input } from "@mui/material";

const ForgetPasswordScreen = () => {
    return ( 
        <Box component={"form"} className="max-w-2xl items-center mx-auto flex flex-col gap-7 sm:gap-16 mt-6 sm:mt-32 mb-24 sm:mb-60">
            <h1 className="hidden sm:block text-4xl font-medium">Have you Forgotten Your Password ?</h1>
            <h2 className="sm:hidden text-2xl font-medium text-center">Forget password</h2>
            <div className="flex flex-col gap-10">
                <h3 className="max-w-lg text-sm sm:text-xl font-normal text-center">If you've forgotten your password, enter your e-mail address and we'll send you an e-mail </h3>
                <Input className="p-3 !border-slate-200" fullWidth id="standard-adornment-weight" 
                aria-describedby="standard-weight-helper-text" placeholder="Email"/>
                <Button className="sm:!mt-10 sm:!py-4" type="submit" variant="contained" fullWidth sx={{color:"white",bgcolor:"black",":hover":{bgcolor:"black"}}}>RESET PASSWORD</Button>
            </div>
        </Box>
     );
}
 
export default ForgetPasswordScreen;