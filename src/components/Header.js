import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{backgroundColor: "#D6E4E5"}} >
          <Toolbar>
            <Typography style={{ fontWeight: "700", marginLeft: "40px"}} sx={{flexGrow: 1}}> 
              <Link to="/" style={{ fontSize: "28px", fontFamily: "montserrat"}}>Movie WatchList</Link>
            </Typography>
            <Link to="/">
              <Button color="inherit" style={{fontWeight: "600", fontSize: "16px", fontFamily: "montserrat"}}>WatchList</Button>
            </Link>

            <Link to="/watched">
              <Button color="inherit" style={{fontWeight: "600", fontSize: "16px", fontFamily: "montserrat"}}>Watched</Button>
            </Link>

            <Link to="/add">
              <Button color="inherit" style={{fontWeight: "600", fontSize: "16px", fontFamily: "montserrat"}}>Add</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
