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
        <AppBar
          elevation={0}
          position="fixed"
          sx={{ backgroundColor: "white" }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ mr: 3, color: "black" }}
            >
              News
            </Typography>
            <div style={{ flexGrow: 1 }}>
              <IconButton
                size="large"
                edge="start"
                color="blue"
                aria-label="menu"
              >
                <Menu />
              </IconButton>
            </div>
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
