import { BatchPrediction, Dashboard, Keyboard } from "@mui/icons-material";
import {
  Box,
  ListItemIcon,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function SideBar() {
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
          style={{
            backgroundColor:
              selectedOption === "Translate"
                ? "rgb(237 228 246)"
                : "transparent",
          }}
        >
          <ListItemIcon style={{ marginRight: -20 }}>
            <Keyboard style={{ color: "rgb(25, 118, 210)" }} fontSize="small" />
          </ListItemIcon>
          <Typography
            style={{ fontSize: 14, marginLeft: 20 }}
            variant="inherit"
          >
            Translate
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={() => handleOptionClick("Hypothesis")}
          selected={selectedOption === "Hypothesis"}
          style={{
            backgroundColor:
              selectedOption === "Hypothesis"
                ? "rgb(237 228 246)"
                : "transparent",
          }}
        >
          <ListItemIcon style={{ marginRight: -20 }}>
            <BatchPrediction
              style={{ color: "rgb(25, 118, 210)" }}
              fontSize="small"
            />
          </ListItemIcon>
          <Typography
            style={{ fontSize: 14, marginLeft: 20 }}
            variant="inherit"
          >
            Hypothesis
          </Typography>
        </MenuItem>
      </MenuList>
    </div>
  );
}

export default SideBar;
