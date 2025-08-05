import { AppBar } from "@mui/material"
import { Container, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <AppBar color='transparent' position='static' >
     <Container>
      <Toolbar>
        <Typography>Crypto Hunter</Typography>
      </Toolbar>

     </Container>
    </AppBar>
  ) 
  
};

export default Header;

