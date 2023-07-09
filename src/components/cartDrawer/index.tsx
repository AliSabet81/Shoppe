import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ROUTES } from '../../routes';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
 const ShoppingCartDrawer =()=> {
  const [state, setState] = React.useState(
    false
  );

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
        <div className='w-80 sm:w-96 px-4 sm:px-9 pt-3 sm:pt-16 pb-7 flex flex-col justify-between h-full'>
            <div className='flex items-center gap-14 sm:gap-20'>
              <IconButton className='sm:hidden' onClick={toggleDrawer(false)}>
                <ArrowBackIosNewRoundedIcon />
              </IconButton>
              <h1>Shopping bag</h1>
            </div>
            <div className='border-t border-gray-500'>
                <div className='py-5 flex justify-between'>
                <span>Subtotal (5 items)</span><span>$ 100,00</span>
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
              <ShoppingCartOutlinedIcon />
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