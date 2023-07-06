import { Box, Button, IconButton, Input, InputAdornment, TextField } from "@mui/material";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes";
import UseLogin from "./useLogin";
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';


const Login = () => {
  const {register,
    handleLogin,
    handleSubmit,
    errors,
    passwordType,
    setPasswordType} = UseLogin()
  
    return ( 
        <Box className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit(handleLogin)}
        component={'form'}>
            <TextField className="p-3" fullWidth id="standard-adornment-weight" 
            {...register('email')} error={Boolean(errors.email?.message)} helperText={errors.email?.message}
                aria-describedby="standard-weight-helper-text" placeholder="Email"/>
            <TextField className="mt-10 p-3 !border-slate-200" fullWidth id="standard-adornment-weight" 
            {...register('password')} error={Boolean(errors.password?.message)} helperText={errors.password?.message}

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
                aria-describedby="standard-weight-helper-text" placeholder="Password"/>
            <Button className="!mt-10 !py-4" type="submit" variant="contained" fullWidth sx={{color:"white",bgcolor:"black",":hover":{bgcolor:"black"}}}>Sign In</Button>
            <Link to={ROUTES.ForgetPassword}>Have you forgotten your password?</Link>
        </Box>
     );
}
 
export default Login;
