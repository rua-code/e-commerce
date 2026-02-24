import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
export default function Navbar() {
  
 
  return (
   
    <Box >
      <AppBar position="static"
      sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr:2 ,display:{xs:'flex',sm:'none'} } }
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,color:"black"}}>
           SWOO 
           <br/>
           TECH MART
          </Typography>
          <Box sx={{ display:{xs:'none',sm:'flex'}, gap:2}}>
          <Link component={RouterLink} to="/" underline='none' color='inheart'> Home</Link>
          <Link component={RouterLink} to="/cart" underline='none' color='inheart'> Cart </Link>
          <Link component={RouterLink} to="/login" underline='none' color='inheart'>Login</Link>
          <Link component={RouterLink} to="/register" underline='none' color='inheart'> register</Link>
            
          
          </Box>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}

