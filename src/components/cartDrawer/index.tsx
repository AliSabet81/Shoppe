import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { Badge, IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ROUTES } from '../../routes';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { Store } from '../../context';
import { useContext } from 'react';
import CartProductCard from '../card/cartProduct';
import FormatCurrancy from '../../utilities/formatCurrency';
import { Product } from '../../routes/product';
 const ShoppingCartDrawer =()=> {
  const [state, setState] = React.useState(
    false
  );
  const {cartQuantity ,cartItems} = useContext(Store)
  const ShopppingTotal = FormatCurrancy(cartItems.reduce((total,cartItem)=>{
    const product = Product.find(e => e.index === cartItem.id)
    return total + (product?.price || 0) * cartItem.quantity
},0))
  const toggleDrawer =
    ( open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState(open);
    };

  const list = () => (
    <Box
      role="presentation"
      // onClick={toggleDrawer( false)}
      onKeyDown={toggleDrawer( false)}
      sx={{height:"100%"}}
    >
        <div className='w-80 sm:w-96 px-4 sm:px-9 pt-3 sm:pt-16 pb-7 h-screen flex flex-col justify-between'>
            <div className='flex items-center gap-14 sm:gap-20'>
              <IconButton className='sm:hidden' onClick={toggleDrawer(false)}>
                <ArrowBackIosNewRoundedIcon />
              </IconButton>
              <h1>Shopping bag</h1>
            </div>
            <div className='flex flex-col overflow-y-scroll gap-6'>
              {cartItems.map(i => (
                <CartProductCard index={i.id} quantity={i.quantity} />
              ))}
            </div>
            <div className='border-t border-gray-500'>
                <div className='py-5 flex justify-between'>
                <span>Subtotal ({cartQuantity} items)</span>
                <span>{ShopppingTotal}</span>
                </div>
                <Button href={ROUTES.Cart} className="sm:!py-4 !px-12 !border-2" fullWidth variant="outlined" sx={{color:"black",":hover":{bgcolor:"white",borderColor:"gray"},borderColor:"black"}}>VIEW CART</Button>
            </div>
        </div>
    </Box>
  );

  return (
    <div>
        <React.Fragment>
            <IconButton onClick={toggleDrawer(true)}>
            <Badge badgeContent={cartQuantity} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
            </IconButton>
          
          <SwipeableDrawer
            anchor={"right"}
            open={state}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list()}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}

export default ShoppingCartDrawer