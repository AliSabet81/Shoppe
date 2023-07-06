import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ROUTES } from '../../routes';

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
        <div className='w-96 px-9 pt-16 pb-7 flex flex-col justify-between h-full'>
            <h1>Shopping bag</h1>
            <div className='border-t border-gray-500'>
                <div className='py-5 flex justify-between'>
                <span>Subtotal (5 items)</span><span>$ 100,00</span>
                </div>
                <Button href={ROUTES.Home} className="!py-4 !px-12 !border-2" fullWidth variant="outlined" sx={{color:"black",":hover":{bgcolor:"white",borderColor:"gray"},borderColor:"black"}}>VIEW CART</Button>
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