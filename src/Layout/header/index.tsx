import * as React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Button, IconButton, Drawer, ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';
import LOGO from "../../../public/LOGO.png"
import ShoppingCartDrawer from '../../components/cartDrawer';
const navItems = ['Home', 'About', 'Contact'];
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Header =()=> {
  const [open, setOpen] = React.useState(false);
  const drawerWidth = 320;
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawer = (
    <Box>
        
        <Divider />
        <List>
            <ListItemButton>
                <Button href={ROUTES.Home} sx={{color:"black"}}>Home</Button>
            </ListItemButton>
            <ListItemButton>
                <Button href={ROUTES.Shop} sx={{color:"black"}}>Shop</Button>
            </ListItemButton>
            <ListItemButton>
                <Button href={ROUTES.OurStory} sx={{color:"black"}}>Our Story</Button>
            </ListItemButton>
            <ListItemButton>
                <Button href={`${ROUTES.Blog}/fasion`} sx={{color:"black"}}>Blog</Button>
            </ListItemButton>
            <ListItemButton>
                <Button href={ROUTES.Contact} sx={{color:"black"}}>Contact</Button>
            </ListItemButton>
            <ListItemButton>
                <Button href={ROUTES.Shop} sx={{color:"black"}}>Shop</Button>
            </ListItemButton>
        </List>
        <Divider />
        <List>
            <ListItemButton>
                <Button href={ROUTES.Login} startIcon={<PersonOutlineOutlinedIcon />} sx={{color:"black"}}>My Account</Button>
            </ListItemButton>
        </List>
    </Box>
  );


  return (
    <div className='container flex items-center sm:pb-4 border-b justify-between'>
        <Link to={ROUTES.Home}><img src={LOGO} alt="" /></Link>
        <div className='hidden sm:flex items-center gap-12'>
            <div className='flex gap-11'>
                <Button href={ROUTES.Shop} sx={{color:"black"}}>Shop</Button>
                <Button href={`${ROUTES.Blog}/fasion`} sx={{color:"black"}}>Blog</Button>
                <Button href={ROUTES.OurStory} sx={{color:"black"}}>Our Story</Button>
            </div>
            <Divider orientation="vertical" flexItem />
            <div className='flex gap-6'>
                <IconButton><SearchIcon/></IconButton>
                <ShoppingCartDrawer/>
                <IconButton href={ROUTES.Login}><PersonOutlineOutlinedIcon/></IconButton>
            </div>
        </div>
        <div className='sm:hidden w-full'>
          <div className='flex items-center justify-between'>
          <Link className='w-24' to={ROUTES.Home}><img src={LOGO} alt="" /></Link>
          <div className='flex'>

          <ShoppingCartDrawer/>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className='!mr-0'
            sx={{ ...(open && { display: 'none' }) }}
            >
            <MenuRoundedIcon />
          </IconButton>
          <IconButton sx={{ ...(!open && { display: 'none' }) }} onClick={handleDrawerClose}>
            <CloseRoundedIcon/>
          </IconButton>
              </div>
          </div>
          <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            marginTop:"56px"
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
          {drawer}
      </Drawer>
        </div>
    </div>
  );
}

export default Header;

