import { useContext } from "react";
import { Store } from "../../../context";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Button, IconButton, Typography } from "@mui/material";
import { Product } from "../../../routes/product";
import FormatCurrancy from "../../../utilities/formatCurrency";
interface ICartProductCard{
    index:number
    quantity:number
}
const CartPageProductCard = (i:ICartProductCard) => {
    const {removeFromCart,increaseCartQuantity,decreaseCartQuantity} = useContext(Store)
    const product = Product.find(e => e.index === i.index)
    if (product == null) return null
    return ( 
        <div className="sm:pb-10 sm:border-b sm:border-gray-300 ">
            <div className="flex h-36 items-start justify-between w-full">
            <div className="grid w-full grid-cols-2 sm:grid-cols-3 items-start justify-between gap-2">
                <img className="h-36 w-36" src={product.img} alt="" />
                <div className="grid sm:col-span-2 gap-11 sm:grid-cols-2 grid-cols-1">
                    <div>
                        <h3 className="text-base">{product.name}</h3>
                        <h4 className="text-sm text-amber-700">{FormatCurrancy(product.price)}</h4>
                        <h3 className="text-base">{FormatCurrancy(product.price * i.quantity)}</h3>
                    </div>
                    <div className="flex sm:justify-self-center">
                        <div className="flex sm:gap-3 gap-1 sm:px-3 h-7 sm:h-14 items-center bg-slate-200 rounded-md">
                        <IconButton onClick={()=>decreaseCartQuantity(product.index)} sx={{color:"gray"}}>-</IconButton>
                        <Typography>{i.quantity}</Typography>
                        <IconButton onClick={()=>increaseCartQuantity(product.index)} sx={{color:"gray"}}>+</IconButton>
                        </div> 
                    </div>
                </div>
            </div>
            <IconButton onClick={()=> removeFromCart(product.index)}>
                <CloseRoundedIcon/>
            </IconButton>
        </div>
        </div>
    );
}
 
export default CartPageProductCard;