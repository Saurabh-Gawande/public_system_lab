import React from "react";
import Graph from "./Graph";
import Map from "./Map";
import WarehouseCard from "./WarehouseCard";
import FpsCard from "./FpsCard";
import QrmChat from "./QrmChat";

function Main() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: " 60vw",
          justifyContent: "space-between",
          margin: 20,
        }}
      >
        <WarehouseCard />
        <FpsCard />
      </div>
      <Graph />
      <Map />
      <QrmChat />
    </div>
  );
}
export default Main;
