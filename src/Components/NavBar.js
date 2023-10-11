import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "../Css/navbar.module.css";
import { Menu } from "@mui/icons-material";

function NavBar() {
  const logout = () => {
    localStorage.setItem("username", "");
    window.location.href = "/";
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1, height: "6.8vh" }}>
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="blue"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "black" }}
            >
              News
            </Typography>
            <Button color="primary" variant="contained" onClick={logout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default NavBar;
