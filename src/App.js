import React from "react";

import {Container} from "react-bootstrap"
import "./styles/App.scss";

import Login from "./components/login/Login";
import Feed from "./components/feed/Feed";
import UserProfile from "./components/profile/UserProfile";

function App() {
  return (
    <div className="App">
      <Container fluid>
        {/* <Login /> */}
        {/* <Feed /> */}
        <UserProfile />
      </Container>
    </div>
  );
}

export default App;
