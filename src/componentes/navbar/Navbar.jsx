import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

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
          <Box sx={{ display:{xs:'none',sm:'flex'}}}>
 <Button  sx={{ color:"black"}}>Home</Button>
           <Button sx={{ color:"black"}}>Pages</Button>
            <Button sx={{ color:"black"}}>products</Button>
             <Button sx={{ color:"black"}}>contact</Button>
          </Box>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}

