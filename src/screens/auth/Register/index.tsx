import { Box, TextField, Button } from "@mui/material";
import UseRegister from "./useRegister";

const Register = () => {
    const {register,
        handleRegister,
        handleSubmit,
        errors,
        passwordType,
        setPasswordType} = UseRegister()
    return ( 
        <Box className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit(handleRegister)} component={'form'}>
            <TextField className="p-3" fullWidth id="standard-adornment-weight" 
                {...register('firstname')} error={Boolean(errors.firstname?.message)} helperText={errors.firstname?.message}
                aria-describedby="standard-weight-helper-text" placeholder="First Name"/>
            <TextField className="p-3" fullWidth id="standard-adornment-weight" 
                {...register('lastname')} error={Boolean(errors.lastname?.message)} helperText={errors.lastname?.message}
                aria-describedby="standard-weight-helper-text" placeholder="Last Name"/>
            <TextField className="p-3" fullWidth id="standard-adornment-weight" 
                {...register('email')} error={Boolean(errors.email?.message)} helperText={errors.email?.message}
                aria-describedby="standard-weight-helper-text" placeholder="Email"/>
            <TextField className="p-3 !border-slate-200" fullWidth id="standard-adornment-weight" 
                {...register('password')} error={Boolean(errors.password?.message)} helperText={errors.password?.message}
                aria-describedby="standard-weight-helper-text" placeholder="Password"/>
            <Button className="!mt-10 !py-4" type="submit" variant="contained" fullWidth sx={{color:"white",bgcolor:"black",":hover":{bgcolor:"black"}}}>Sign Up</Button>
        </Box>
     );
}
 
export default Register;