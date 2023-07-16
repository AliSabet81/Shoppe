import { Box, TextField, Button, IconButton, InputAdornment } from "@mui/material";
import UseRegister from "./useRegister";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const Register = () => {
    const {register,
        handleRegister,
        handleSubmit,
        errors,
        passwordType,
        setPasswordType} = UseRegister()
    return ( 
        <Box className="w-full flex flex-col gap-10"
        onSubmit={handleSubmit(handleRegister)} component={'form'}>
            <TextField variant="standard" className="p-3" fullWidth id="standard-adornment-weight" 
                {...register('firstname')} error={Boolean(errors.firstname?.message)} helperText={errors.firstname?.message}
                aria-describedby="standard-weight-helper-text" placeholder="First Name"/>
            <TextField variant="standard" className="p-3" fullWidth id="standard-adornment-weight" 
                {...register('lastname')} error={Boolean(errors.lastname?.message)} helperText={errors.lastname?.message}
                aria-describedby="standard-weight-helper-text" placeholder="Last Name"/>
            <TextField variant="standard" className="p-3" fullWidth id="standard-adornment-weight" 
                {...register('email')} error={Boolean(errors.email?.message)} helperText={errors.email?.message}
                aria-describedby="standard-weight-helper-text" placeholder="Email"/>
            <TextField variant="standard" className="p-3 !border-slate-200" fullWidth id="standard-adornment-weight" 
                {...register('password')} error={Boolean(errors.password?.message)} helperText={errors.password?.message}
                aria-describedby="standard-weight-helper-text" placeholder="Password" type={passwordType}
                InputProps={{
                    endAdornment:( 
                        <InputAdornment position="start">
                            <IconButton onClick={()=>{
                                setPasswordType((prev)=>{
                                    if (prev === 'password') return 'text'
                                    return 'password'
                                })
                                }}>
                                {passwordType === "text" ?<RemoveRedEyeOutlinedIcon/> : <VisibilityOffOutlinedIcon/>}
                            </IconButton>
                        </InputAdornment>),
                }}
                />
            <Button className="sm:!mt-10 sm:!py-4" type="submit" variant="contained" fullWidth sx={{color:"white",bgcolor:"black",":hover":{bgcolor:"black"}}}>Sign Up</Button>
        </Box>
     );
}
 
export default Register;