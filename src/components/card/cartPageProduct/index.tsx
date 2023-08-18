import { Store } from "../../../context";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { IconButton, Typography } from "@mui/material";
import FormatCurrancy from "../../../utilities/formatCurrency";
import { ICartProduct } from "../../../types";
import { GetSingleProductService } from "../../../api/services/product";
import { useContext, useEffect, useMemo, useState } from "react";

const CartPageProductCard = (i: ICartProduct) => {
  const [productInfo, setProductInfo] = useState<any>();
  useMemo(async () => {
    const res = await GetSingleProductService(i.id);
    setProductInfo(res);
  }, []);
  useEffect(() => {
    console.log(productInfo);
  }, [productInfo]);
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useContext(Store);
  if (productInfo == null) return null;
  return (
    <div className="sm:pb-10 sm:border-b sm:border-gray-300 ">
      <div className="flex h-36 items-start justify-between w-full">
        <div className="grid w-full grid-cols-2 sm:grid-cols-3 items-start justify-between gap-2">
          <img className="h-36 w-36" src={`http://localhost:3000${productInfo.data.img}`} alt="" />
          <div className="grid sm:col-span-2 gap-11 sm:grid-cols-2 grid-cols-1">
            <div>
              <h3 className="text-base">{productInfo ? productInfo.data.name : "Lira Earrings"}</h3>
              <h4 className="text-sm text-amber-700">
              {FormatCurrancy(productInfo.data.price)}
              </h4>
              <h3 className="text-base">
              {FormatCurrancy(productInfo.data.price * i.quantity)}
              </h3>
            </div>
            <div className="flex sm:justify-self-center">
              <div className="flex sm:gap-3 gap-1 sm:px-3 h-7 sm:h-14 items-center bg-slate-200 rounded-md">
                <IconButton
                  onClick={() => decreaseCartQuantity(productInfo.data._id)}
                  sx={{ color: "gray" }}>
                  -
                </IconButton>
                <Typography>{i.quantity}</Typography>
                <IconButton
                  onClick={() => increaseCartQuantity(productInfo.data._id)}
                  sx={{ color: "gray" }}>
                  +
                </IconButton>
              </div>
            </div>
          </div>
        </div>
        <IconButton onClick={() => removeFromCart(productInfo.data._id)}>
          <CloseRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default CartPageProductCard;
