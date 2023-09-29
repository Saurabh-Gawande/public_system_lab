import React, { useContext } from "react";
import userContext from "../Context/userContext";

function Home() {
  const { users } = useContext(userContext);
  return (
    <div>
      {users.map((ele) => (
        <div>
          <div>{ele.name}</div>
          <img
            style={{ width: 250, height: 250 }}
            src={ele.url}
            alt={ele.name}
          />
        </div>
      ))}
    </div>
  );
}

export default Home;
