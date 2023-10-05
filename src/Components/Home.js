import React from "react";
import Map from "./Map";

function Home() {
  const savedUsername = localStorage.getItem("username");

  if (savedUsername === "PunjabUser") return <Map />;
  if (savedUsername === "MaharashtraUser") return div;
}

export default Home;
