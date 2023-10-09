import React from "react";
import Map from "./Map";
import NavBar from "./NavBar";

function Home() {
  const savedUsername = localStorage.getItem("username");
  if (savedUsername === "PunjabUser")
    return (
      <>
        <NavBar />
        <Map />
      </>
    );
  if (savedUsername === "MaharashtraUser") return <div>Maharashtra</div>;
  if (savedUsername === "DelhiUser") return <div>Delhi</div>;
  if (savedUsername === "MPUser") return <div>MP</div>;
  if (savedUsername === "BiharUser") return <div>Bihar</div>;
}

export default Home;
