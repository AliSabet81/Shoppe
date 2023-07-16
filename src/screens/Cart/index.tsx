import { useContext } from "react";
import { Store } from "../../context";
import CartPageProductCard from "../../components/card/cartPageProduct";
import FormatCurrancy from "../../utilities/formatCurrency";
import { Product } from "../../routes/product";
import { Button } from "@mui/material";

const CartPage = () => {
  const { cartItems } = useContext(Store);
  const ShopppingTotal = FormatCurrancy(
    cartItems.reduce((total, cartItem) => {
      const product = Product.find((e) => e.index === cartItem.id);
      return total + (product?.price || 0) * cartItem.quantity;
    }, 0)
  );
  return (
    <div className="mt-6 sm:mt-24 mb-24 sm:mb-48">
      <h1 className="text-xl sm:text-3xl mb-5 sm:mb-16 sm:text-center">
        shopping Cart
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="flex flex-col gap-6 sm:gap-10">
          {cartItems.map((i) => (
            <CartPageProductCard index={i.id} quantity={i.quantity} />
          ))}
        </div>
        <div className="flex bg-gray-200 rounded sm:bg-white flex-col p-4 sm:px-14 sm:py-10 gap-10">
          <h2 className="text-2xl">Cart totals</h2>
          <div className="flex flex-col border-b border-gray-300 gap-6 pb-10">
            <div className="flex gap-12 sm:gap-32">
              <span>SUBTOTAL</span>
              <span>{ShopppingTotal}</span>
            </div>
            <div className="flex gap-12 sm:gap-32">
              <span>SHIPPING</span>
              <p className="text-gray-500 max-w-xs">
                Shipping costs will be calculated once you have provided
                address.
              </p>
            </div>
          </div>
          <div className="font-bold flex justify-between">
            <span>TOTALS</span>
            <span>{ShopppingTotal}</span>
          </div>
          <Button
            className="sm:!mt-10 sm:!py-4"
            variant="contained"
            fullWidth
            sx={{
              color: "white",
              bgcolor: "black",
              ":hover": { bgcolor: "black" },
            }}
          >
            PROCEED TO CHECKOUT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
