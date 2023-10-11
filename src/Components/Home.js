import React from "react";
import Map from "./Map";
import NavBar from "./NavBar";
import Graph from "./Graph";
import { Box, Grid, Paper, styled } from "@mui/material";
import SideBar from "./SideBar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Home() {
  const savedUsername = localStorage.getItem("username");
  if (savedUsername === "PunjabUser")
    return (
      <Box
        style={{
          backgroundColor: "rgb(238 242 246)",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <NavBar />
          </Grid>
          <Grid item xs={2}>
            <Item>
              <SideBar />
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Graph />
            <Map />
          </Grid>
        </Grid>
      </Box>
    );
  if (savedUsername === "MaharashtraUser") return <div>Maharashtra</div>;
  if (savedUsername === "DelhiUser") return <div>Delhi</div>;
  if (savedUsername === "MPUser") return <div>MP</div>;
  if (savedUsername === "BiharUser") return <div>Bihar</div>;
}

export default Home;
