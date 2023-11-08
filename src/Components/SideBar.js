import React, { useState } from "react";
import {
  ListItemIcon,
  ListItemText,
  MenuList,
  MenuItem,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Keyboard, BatchPrediction } from "@mui/icons-material";

const useStyles = makeStyles({
  menuItem: {
    "&.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root.Mui-selected": {
      backgroundColor: "#ede7f6",
      borderRadius: 8,
      fontWeight: "bold",
      color: "#5e35b1",
    },
    "&.css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root:not(.Mui-selected)": {
      "&:hover": {
        backgroundColor: "#ede7f6",
        color: "#5e35b1",
        borderRadius: 8,
        "& $icon": {
          color: "#5e35b1",
          fontSize: "initial",
        },
      },
      "& $icon": {
        color: "initial",
        fontSize: "initial",
      },
    },
  },
  icon: {
    color: "#5e35b1",
    fontSize: "1.875rem",
  },
});

function SideBar() {
  const classes = useStyles();

  const [selectedOption, setSelectedOption] = useState("Translate");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div style={{ position: "fixed", height: "100vh", padding: 20 }}>
      <div style={{ fontWeight: "bold" }}>Dashboard</div>
      <MenuList>
        <MenuItem
          onClick={() => handleOptionClick("Translate")}
          selected={selectedOption === "Translate"}
          classes={{ root: classes.menuItem }}
        >
          <ListItemIcon>
            <Keyboard fontSize="small" className={classes.icon} />
          </ListItemIcon>
          <ListItemText>
            <Typography
              style={{ fontSize: 14, marginLeft: 20 }}
              variant="inherit"
            >
              Translate
            </Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleOptionClick("Hypothesis")}
          selected={selectedOption === "Hypothesis"}
          classes={{ root: classes.menuItem }}
        >
          <ListItemIcon>
            <BatchPrediction fontSize="small" className={classes.icon} />
          </ListItemIcon>
          <ListItemText>
            <Typography
              style={{ fontSize: 14, marginLeft: 20 }}
              variant="inherit"
            >
              Hypothesis
            </Typography>
          </ListItemText>
        </MenuItem>
      </MenuList>
    </div>
  );
}

export default SideBar;
