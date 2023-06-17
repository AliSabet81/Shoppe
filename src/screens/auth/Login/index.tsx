import { Box, Button, IconButton, Input, InputAdornment } from "@mui/material";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes";

const Login = () => {
    return ( 
        <Box className="w-full flex flex-col gap-4" component={'form'}>
            <Input className="p-3" fullWidth id="standard-adornment-weight" 
                aria-describedby="standard-weight-helper-text" placeholder="Email"/>
            <Input className="mt-10 p-3 !border-slate-200" fullWidth id="standard-adornment-weight" 
                endAdornment={<InputAdornment position="end"><IconButton><RemoveRedEyeOutlinedIcon/></IconButton></InputAdornment>}
                aria-describedby="standard-weight-helper-text" placeholder="Password"/>
            <Button className="!mt-10 !py-4" type="submit" variant="contained" fullWidth sx={{color:"white",bgcolor:"black",":hover":{bgcolor:"black"}}}>Sign In</Button>
            <Link to={ROUTES.ForgetPassword}>Have you forgotten your password?</Link>
        </Box>
     );
}
 
export default Login;


{/* <form
      className="w-full flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="w-full outline-none border-b p-3 border-slate-200"
        placeholder="Email"
        type="text"
        {...register("email")}
      />
      <p className="text-red-700">{errors.email?.message as ReactNode}</p>
      <input
        className="w-full mt-10 outline-none border-b p-3 border-slate-200"
        placeholder="Password"
        type="text"
        {...register("password")}
      />
      <p className="text-red-700">{errors.password?.message as ReactNode}</p>
      <button type="submit" className="w-full mt-10 bg-black text-white p-4">
        Sign In
      </button>
      <Link className="text-center" to={"/auth/forget"}>
        Have you forgotten your password?
      </Link>
    </form> */}