import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import UserState from "./Context/UserState";

function App() {
  return (
    <div className="App">
      <UserState>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </UserState>
    </div>
  );
}

export default App;
