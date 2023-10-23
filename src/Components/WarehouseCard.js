import { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { Avatar, Box, Grid, Menu, MenuItem, Typography } from "@mui/material";

import EarningIcon from "../Img/warehouse-svgrepo-com.svg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import GetAppTwoToneIcon from "@mui/icons-material/GetAppOutlined";
import FileCopyTwoToneIcon from "@mui/icons-material/FileCopyOutlined";
import PictureAsPdfTwoToneIcon from "@mui/icons-material/PictureAsPdfOutlined";
import ArchiveTwoToneIcon from "@mui/icons-material/ArchiveOutlined";

const WarehouseCard = ({ isLoading }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [warehouse, setWarehouse] = useState(0);
  const [capacity, setCapacity] = useState(0);

  useEffect(() => {
    const excel = async () => {
      const response = await fetch("/data/Template6.xlsx");
      const arrayBuffer = await response.arrayBuffer();
      const data = new Uint8Array(arrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[1];
      const sheet = workbook.Sheets[sheetName];
      let count = 0;
      for (let cell in sheet) {
        if (cell[0] === "A" && !isNaN(cell.slice(1))) {
          count++;
        }
      }
      setWarehouse(count);
    };
    excel();
  }, []);

  useEffect(() => {
    const excel = async () => {
      const response = await fetch("/data/Template6.xlsx");
      const arrayBuffer = await response.arrayBuffer();
      const data = new Uint8Array(arrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[1];
      const sheet = workbook.Sheets[sheetName];
      let sum = 0;
      let isHeaderRow = true;
      for (let cell in sheet) {
        if (!isHeaderRow) {
          if (cell[0] === "F") {
            const cellValue = sheet[cell].v;

            if (!isNaN(cellValue)) {
              const numericValue = parseFloat(cellValue);
              sum += numericValue;
            } else {
              console.error(
                `Non-numeric value in cell of ${cell} Warehouse : "${cellValue}"`
              );
            }
          }
        }
        isHeaderRow = false;
      }
      const capacityInMq = (sum / 1000).toFixed(2); // Two decimal places
      setCapacity(capacityInMq);
    };
    excel();
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div
        style={{
          width: "29vw",
          backgroundColor: "white",
          borderRadius: 8,
          backgroundColor: "#5e35b1",
          color: "white",
          // boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.6)",
        }}
      >
        <Box sx={{ p: 2.25 }}>
          <Grid container direction="column">
            <Grid item>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Avatar
                    variant="rounded"
                    sx={{
                      backgroundColor: "#4527a0",
                    }}
                  >
                    <img src={EarningIcon} alt="Notification" />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar
                    variant="rounded"
                    sx={{
                      backgroundColor: "#4527a0",
                    }}
                    aria-controls="menu-earning-card"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreHorizIcon fontSize="inherit" />
                  </Avatar>
                  <Menu
                    id="menu-earning-card"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    variant="selectedMenu"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <GetAppTwoToneIcon sx={{ mr: 1.75 }} /> Import Card
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <FileCopyTwoToneIcon sx={{ mr: 1.75 }} /> Copy Data
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <PictureAsPdfTwoToneIcon sx={{ mr: 1.75 }} /> Export
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ArchiveTwoToneIcon sx={{ mr: 1.75 }} /> Archive File
                    </MenuItem>
                  </Menu>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ mb: 0.75 }} alignItems="center">
              <Grid container alignItems="center">
                <Grid item xs={6}>
                  <Grid container alignItems="center">
                    <Grid item>
                      <Typography
                        sx={{
                          fontSize: "2.125rem",
                          fontWeight: 500,
                          mr: 1,
                          mt: 1.75,
                          mb: 0.75,
                          width: 150,
                        }}
                      >
                        WH {warehouse}
                      </Typography>
                    </Grid>
                    <Grid item sx={{ mb: 1.25, margin: 0 }}>
                      <Typography
                        sx={{
                          fontSize: "1rem",
                          fontWeight: 500,
                          color: "#b39ddb",
                        }}
                      >
                        Total Warehouse
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container alignItems="center">
                    <Grid item>
                      <Typography
                        sx={{
                          fontSize: "2.125rem",
                          fontWeight: 500,
                          mr: 1,
                          mt: 1.75,
                          mb: 0.75,
                        }}
                      >
                        {capacity} Mq
                      </Typography>
                    </Grid>
                    <Grid item sx={{ mb: 1.25, margin: 0 }}>
                      <Typography
                        sx={{
                          fontSize: "1rem",
                          fontWeight: 500,
                          color: "#b39ddb",
                        }}
                      >
                        Total Capacity
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default WarehouseCard;
