import * as React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';
import LOGO from "../../../public/LOGO.png"
const navItems = ['Home', 'About', 'Contact'];

const Header =()=> {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (
    <div className='container flex items-center pb-4 border-b justify-between'>
        <Link to={ROUTES.Home}><img src={LOGO} alt="" /></Link>
        <div className='flex items-center gap-12'>
            <div className='flex gap-11'>
                <Button href={ROUTES.Shop} sx={{color:"black"}}>Shop</Button>
                <Button href={`${ROUTES.Blog}/fasion`} sx={{color:"black"}}>Blog</Button>
                <Button href={ROUTES.OurStory} sx={{color:"black"}}>Our Story</Button>
            </div>
            <Divider orientation="vertical" flexItem />
            <div className='flex gap-6'>
                <IconButton><SearchIcon/></IconButton>
                <IconButton><ShoppingCartOutlinedIcon/></IconButton>
                <IconButton href={ROUTES.Login}><PersonOutlineOutlinedIcon/></IconButton>
            </div>
        </div>
    </div>
  );
}

export default Header;

{/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton> */}

        //   <Drawer
        //   container={container}
        //   variant="temporary"
        //   anchor="right"
        //   open={mobileOpen}
        //   onClose={handleDrawerToggle}
        //   ModalProps={{
        //     keepMounted: true, // Better open performance on mobile.
        //   }}
        //   sx={{
        //     display: { xs: 'block', sm: 'none' },
        //     '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        //   }}
        // >
        //   {drawer}
        // </Drawer>