import { IProductCard } from "../../../routes/product";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = (i:IProductCard) => {
    return ( 
        <div className="relative flex flex-col gap-6">
            <img src={i.img} alt="" />
            <div className="absolute top-0 w-full h-80 flex justify-center items-center bg-white bg-opacity-60 opacity-0 transition-all hover:opacity-100">
            <div className='flex opacity-100 gap-4'>
                <IconButton><ShoppingCartOutlinedIcon/></IconButton>
                <IconButton href={i.path}><RemoveRedEyeOutlinedIcon/></IconButton>
                <IconButton><FavoriteBorderIcon/></IconButton>
            </div>
            </div>
            <div className="flex flex-col gap-4">
                <Link to={i.path} className="font-normal text-xl">{i.name}</Link>
                <h5 className="font-medium text-amber-700 text-xl">{i.price}</h5>
            </div>
        </div>
     );
}
 
export default ProductCard;