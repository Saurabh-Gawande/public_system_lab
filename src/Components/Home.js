import React from "react";

function Home() {
  const savedUsername = localStorage.getItem("username");

  if (savedUsername === "MaharashtraUser") return <div>Maharashtra</div>;
  else if (savedUsername === "BiharUser") return <div>Bihar</div>;
  else if (savedUsername === "DelhiUser") return <div>Delhi</div>;
  else if (savedUsername === "ChandigradhUser") return <div>Chandigradh</div>;
}

export default Home;
