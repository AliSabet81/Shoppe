import { Button, IconButton, Input, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Blog from "./blogs";
import { Outlet } from "react-router-dom";
import { ROUTES } from "../../routes";


const BlogsScreen = () => {
    return ( 
        <div className="flex flex-col gap-10 my-24 container">
            <h1 className="text-3xl font-medium">Blog</h1>
            <div className="flex gap-9">
                <div className="w-80">
                    <Input className=" py-2 !border-slate-200" fullWidth id="standard-adornment-weight" 
                    endAdornment={<InputAdornment position="end"><IconButton><SearchIcon/></IconButton></InputAdornment>}
                    aria-describedby="standard-weight-helper-text" placeholder="ُsearch..."/>
                    <div className="flex flex-col gap-3 mt-16">
                        <h2 className="text-xl font-medium">Categories</h2>
                        <Button href={`${ROUTES.Blog}/fasion`} className="!w-fit" sx={{color:"gray"}}>Fasion</Button>
                        <Button href={`${ROUTES.Blog}/style`} className="!w-fit" sx={{color:"gray"}}>Style</Button>
                        <Button href={`${ROUTES.Blog}/accessories`} className="!w-fit" sx={{color:"gray"}}>Accessories</Button>
                        <Button href={`${ROUTES.Blog}/season`} className="!w-fit" sx={{color:"gray"}}>Season</Button>
                    </div>
                </div>
                <Outlet/>
            </div>
        </div>
     );
}
 
export default BlogsScreen;