import { IconButton, Input, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ProductCard from "../../components/card/product";
import { Product } from "../../routes/product";

const ShopScreen = () => {
    return ( 
        <div className="flex flex-col gap-10 my-6 sm:my-24 container">
            <h1 className="text-xl sm:text-3xl font-medium">Shop The Latest</h1>
            <div className="flex gap-9">
                <div className="w-80 hidden sm:block">
                    <Input className=" py-2 !border-slate-200" fullWidth id="standard-adornment-weight" 
                    endAdornment={<InputAdornment position="end"><IconButton><SearchIcon/></IconButton></InputAdornment>}
                    aria-describedby="standard-weight-helper-text" placeholder="ُsearch..."/>
                    
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 justify-items-center">
                    {Product.map((i)=> <ProductCard img={i.img} name={i.name} price={i.price} index={i.index} path={i.path}/>)}
                </div>
            </div>
        </div>
     );
}
 
export default ShopScreen;