import { AppBar, Button, Toolbar, Typography, makeStyles } from "@mui/material";
import React from "react";
// import { makeStyles } from '@material-ui/core/styles';

export const styles = () => ({
  root: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    color: "#6e6e80",
  },
  appBar: {
    background: "#e8ebee",
    borderBottom: "1px solid #ececf1",
  },
  container: {
    display: "flex",
    flex: 1,
  },
  drawer: {
    background: "#D8fffDCD6",
    width: "200px",
    position: "fixed",
    zIndex: 10,
    height: "100%",
    paddingTop: "70px",
  },
  main: {
    flex: 1,
    background: "#fff",
    color: "black",
  },
  toolBar: {
    display: "grid",
    position: "relative",
    justifyContent: "space-between",
    gridAutoFlow: "column",
    gridAutoColumns: "1fr auto",
    alignContent: "center",
  },
  toolBarSpan: {
    display: "grid",
    position: "relative",
    placeContent: "start",
    gridAutoFlow: "column",
    rowGap: "10px",
  },
  menuList: {
    display: "grid",
    rowGap: "20px",
    marginTop: "20px !important",
    fontSize: "14px",
  },
  mainContainer: {
    display: "grid",
    placeContent: "center",
    width: "100%",
    gridAutoFlow: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100vh",
    padding: 20,
    background: "linear-gradient(to bottom right, #d3dae2, #fff)",
    "@media (max-width: 780px)": {
      padding: 0,
      flexDirection: "column-reverse",
      display: "flex",
      placeContent: "space-evenly",
    },
  },
  image: {
    height: "50vh",
  },
  superChargeText: {
    fontSize: "32px",
    "@media (max-width: 780px)": {
      fontSize: "18px",
    },
    color: "#003d67",
  },
  leftContainer: {
    display: "grid",
    rowGap: 20,
    justifyItems: "center",
    "@media (max-width: 780px)": {
      justifyItems: "start",
    },
  },
});
// const useStyles = makeStyles(styles);

function NavBar() {
//   const classes = useStyles();
  return (
    <div>
      <AppBar >
          {/* className={classes.appBar} */}
        <Toolbar >
        {/* className={classes.toolBar} */}
          <span >
          {/* className={classes.toolBarSpan} */}
            {/* <Logo style={{ width: "24px", marginRight: "10px" }} />{" "} */}
            <span>
              <Typography style={{ color: "#6e6e80" }}>
                Consumable AI
              </Typography>
              <Typography
                style={{
                  color: "#6e6e80",
                  fontSize: 8,
                  textAlign: "left",
                  marginTop: -5,
                }}
              >
                Powered by OpenAI
              </Typography>
            </span>
            <Typography
              style={{
                color: "#6e6e80",
                fontSize: 8,
                textAlign: "left",
                marginTop: -5,
              }}
            >
              BETA{" "}
            </Typography>
          </span>
          <div
            style={{ display: "grid", gridAutoFlow: "column", columnGap: 10 }}
          >
            <Button variant="contained" color="primary" type="submit">
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
