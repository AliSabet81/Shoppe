import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Store } from "../../../context";
import FormatCurrancy from "../../../utilities/formatCurrency";
import { IProductCard } from '../../../types';

const ProductCard = (i:IProductCard) => {
    const {getItemQuantity , increaseCartQuantity} = useContext(Store)
    const quantity = getItemQuantity(i.index)
    return ( 
        <div className="relative flex flex-col gap-6">
            <img src={i.img} alt="" />
            <div className="absolute top-0 w-full h-96 hidden sm:flex justify-center items-center bg-white bg-opacity-60 opacity-0 transition-all hover:opacity-100">
            <div className='flex opacity-100 gap-4'>
                <IconButton onClick={()=> increaseCartQuantity(i.index)}><ShoppingCartOutlinedIcon/></IconButton>
                <IconButton href={i.path}><RemoveRedEyeOutlinedIcon/></IconButton>
                <IconButton><FavoriteBorderIcon/></IconButton>
            </div>
            </div>
            <div className="flex flex-col gap-4">
                <Link to={i.path} className="font-normal text-sm sm:text-xl">{i.name}</Link>
                <h5 className="font-medium text-amber-700 text-xs sm:text-xl">{FormatCurrancy(i.price)}</h5>
            </div>
        </div>
     );
}
 
export default ProductCard;