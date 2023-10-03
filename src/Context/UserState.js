import React, { useEffect, useState } from "react";
import UserContext from "./userContext";

function UserState(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Define the URL of your Flask API endpoint
    const apiUrl = "http://127.0.0.1:5000/get_users"; // Replace with your Flask API URL

    // Make a GET request to the Flask API endpoint
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserState;
