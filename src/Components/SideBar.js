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
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "#5e35b1",
      backgroundColor: "#ede7f6",
      borderRadius: 8,
      fontSize: "0.875rem",
    },
    "&:hover": {
      color: "#5e35b1",
      backgroundColor: "#ede7f6",
      borderRadius: 8,
    },
  },
});

function SideBar() {
  const classes = useStyles(); // Initialize the makeStyles classes

  const [selectedOption, setSelectedOption] = useState(null);

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
          classes={{ root: classes.menuItem }} // Apply the styles here
        >
          <ListItemIcon>
            <Keyboard fontSize="small" />
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
          classes={{ root: classes.menuItem }} // Apply the styles here
        >
          <ListItemIcon>
            <BatchPrediction fontSize="small" />
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
