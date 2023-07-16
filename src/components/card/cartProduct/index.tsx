import { useContext } from "react";
import { Store } from "../../../context";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { IconButton, Typography } from "@mui/material";
import { Product } from "../../../routes/product";
import FormatCurrancy from "../../../utilities/formatCurrency";
import { ICartProduct } from "../../../types";

const CartProductCard = (i: ICartProduct) => {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useContext(Store);
  const product = Product.find((e) => e.index === i.index);
  if (product == null) return null;
  return (
    <div className="flex max-h-36 items-start w-full">
      <div className="grid grid-cols-2 gap-10">
        <img className="max-h-36" src={product.img} alt="" />
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-base">{product.name}</h3>
            <h4 className="text-sm text-amber-700">
              {FormatCurrancy(product.price)}
            </h4>
            <h3 className="text-base">
              {FormatCurrancy(product.price * i.quantity)}
            </h3>
          </div>
          <div className="flex items-center">
            <Typography>quantity</Typography>
            <div className="flex items-center gap-2">
              <IconButton onClick={() => decreaseCartQuantity(product.index)}>
                -
              </IconButton>
              <Typography>{i.quantity}</Typography>
              <IconButton onClick={() => increaseCartQuantity(product.index)}>
                +
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <IconButton onClick={() => removeFromCart(product.index)}>
        <CloseRoundedIcon />
      </IconButton>
    </div>
  );
};

export default CartProductCard;
