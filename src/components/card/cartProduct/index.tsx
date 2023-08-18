import { useContext, useEffect, useMemo, useState } from "react";
import { Store } from "../../../context";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { IconButton, Typography } from "@mui/material";
import FormatCurrancy from "../../../utilities/formatCurrency";
import { ICartProduct } from "../../../types";
import { GetSingleProductService } from "../../../api/services/product";
// http://localhost:3000
const CartProductCard = (i: ICartProduct) => {
  console.log(i.id);

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
    <div className="flex max-h-36 items-start w-full">
      <div className="grid grid-cols-2 gap-10">
        <img
          className="max-h-36"
          src={`http://localhost:3000${productInfo.data.img}`}
          alt=""
        />
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-base">
              {productInfo ? productInfo.data.name : "Lira Earrings"}
            </h3>
            <h4 className="text-sm text-amber-700">
              {FormatCurrancy(productInfo.data.price)}
            </h4>
            <h3 className="text-base">
              {FormatCurrancy(productInfo.data.price * i.quantity)}
            </h3>
          </div>
          <div className="flex items-center">
            <Typography>quantity</Typography>
            <div className="flex items-center gap-2">
              <IconButton onClick={() => decreaseCartQuantity(productInfo.data._id)}>
                -
              </IconButton>
              <Typography>{i.quantity}</Typography>
              <IconButton onClick={() => increaseCartQuantity(productInfo.data._id)}>
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
  );
};

export default CartProductCard;
